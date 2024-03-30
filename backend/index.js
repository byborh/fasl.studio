const express = require('express')
const session = require('express-session')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const bodyParser = require('body-parser')


const mongoose = require('./db')
const User = require('./db/user')
const Panier = require('./db/panier')

// ----------------------------------------------------------------------------

const app = express()


HOST = "localhost"
PORT = 8080

module.exports = app

// Erreurs de CORS (Cross Origin Resource Sharing) - ça bloque les appels HTTP entre des serveurs différents. frontend <--- ---> backend
const header = (_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, HEAD, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, x-client-key,x-client-token, x-client-secret, Authorization");    
  next();
};

app.use(header) // EXPRESS CONFIG

// app.use(corsHeaders); // Utilisation du middleware dans ton application

app.set('view engine', 'ejs') //Connecter un moteur de template

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded

app.use(bodyParser.json()) // parse application/json

app.use(session({ // session de communication pour un serveur
  secret: "secret",
  resave: false ,
  saveUninitialized: true ,
}))

// ----------------------------------------------------------------------------

app.post((req, res, next) => {
  console.log(req.body)
  res.status(201).json({
    message: "Objet crée !"
  })
})

// Vérifier si l'utilisateur existe dans la base de donnée
app.post('/user', async (req, res) => {
  try {
    // Vérifier si l'email existe déjà dans la base de données
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      res.json({ userExists: true });
      // L'email existe déjà, retourne une réponse d'erreur
    } else {
      res.json({ userExists: false });
    }

  } catch (err) {
    console.log(err)
    res.json({ userExists: false });
  }
})

// Inscription
app.post('/user/register', async (req, res) => {
  try {
    // Créer un nouvel utilisateur avec les données du corps de la requête
    const newUser = new User(req.body);

    // Sauvegarder l'utilisateur dans la base de données
    const savedUser = await newUser.save();

    // Envoie une réponse avec l'ID de l'utilisateur nouvellement créé
    res.json({ id: savedUser._id });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement de l'utilisateur :", error);
    res.status(500).json({ error: "Erreur lors de l'enregistrement de l'utilisateur" });
  }
});

app.get('/user/login', async (req, res) => {
  res.send('<h1>user/login</h1>')
})

app.get('/api/items', (req, res, next) => {
    const items = [
      {
        id : 0,
        title : "Tee-shit Oversize Verte",
        price : 25,
        imageUrl : "/public/t-shirt_rouge_devant.webp"
      },{
        id : 1,
        title : "Tee-shit Oversize Rose",
        price : 25,
        imageUrl : "/public/t-shirt_rose_devant.webp"
      }
    ]
    res.status(200).json(items);
});


  // panier = [
  //   {
  //     id: 1,
  //     parentId: 1
  //   },{
  //     id: 2,
  //     parentId: 2
  //   }
  // ]


app.get('/api/panier', async (req, res, next) => {
  try {
    // Récupérer les paniers depuis la base de données MongoDB
    const paniers = await Panier.find();
    
    res.status(200).json(paniers);
  } catch (error) {
    console.error("Erreur lors de la récupération des paniers :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des paniers" });
  }
})

app.post('/api/panier/ajouter', async (req, res) => {
  try {
    // Créer un nouvel objet Panier avec les données du corps de la requête
    const newPanier = new Panier(req.body);

    // Sauvegarder le panier dans la base de données
    const savedPanier = await newPanier.save();

    res.json({ id: savedPanier._id });
  } catch (error) {
    console.error("Erreur lors de l'ajout au panier :", error);
    res.status(500).json({ error: "Erreur lors de l'ajout au panier" });
  }
})


app.delete('/api/panier/retirer/:cartId', async (req, res) => {
  try {
    const cartIdToRemove = req.params.cartId

    const removedItem = await Panier.findOneAndDelete({ id: cartIdToRemove })

    res.json({ message: "Article retiré du panier", removedItem });
  } catch (err) {
    console.error("Erreur lors du retirement de la pièce du panier :", err);
    res.status(500).json({ err: "Erreur lors du retirement de la pièce du panier" });
  }
})

passport.use(new GoogleStrategy({
  clientID: "137321509489-6eu63q9jr6d2j78h1o1u0ana1h6l9ihr.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:0/auth/google/callback",
  scope: ['profile', 'email']
},
(accessToken, refreshToken, profile, done) => {

  // Logique pour gérer l'authentification avec le profil Google

  console.log(profile)

  return done(null, profile);
}))

// ... autres configurations Passport

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/google/failure',
    successRedirect: '/dashboard',
    session: false //true
  })
  // (req, res) => {
  //   // Redirection après une connexion réussie
  //   res.redirect('/dashboard');
  // }
);

app.get('/dashboard', (req, res) => {
  // Assure-toi que l'utilisateur est connecté
  if (req.isAuthenticated()) {
    // Accède aux informations du profil
    const userProfile = req.user;
    
    // Fais ce que tu veux avec les données du profil
    res.send(`Bienvenue sur le tableau de bord, ${userProfile.displayName}!`);
  } else {
    // Redirige l'utilisateur vers la page de connexion s'il n'est pas authentifié
    res.redirect('/login');
  }
});

// ----------------------------------------------------------------------------

app.listen(PORT, () => { // Créer un serveur pour le site Fasl Studio
    console.log(`Fasl.Studio est lancé dans ${PORT}. Le lien est ici : http://${HOST}:${PORT}`)
})