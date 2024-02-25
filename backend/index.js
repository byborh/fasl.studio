const express = require('express')
const session = require('express-session')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const bodyParser = require('body-parser')

const mongoose = require('./db')
const User = require('./db/user')


// const mysql = require('mysql')
// const redis = require('redis')
// import { createCluster } from 'redis'

// ----------------------------------------------------------------------------

const app = express()
// const client = redis.createClient()
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'P@55aran',
//   // database: 'kentfc',
//   // socket: ''
// })

HOST = "localhost"
PORT = 8080

module.exports = app

// Erreurs de CORS (Cross Origin Resource Sharing) - ça bloque les appels HTTP entre des serveurs différents. frontend <--- ---> backend
const header = (_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization, Accept"
  );
  next();
};

app.use(header) // EXPRESS CONFIG

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

// connection.connect((err) => {
//   if(err) {
//     console.log('Erreur de connexion : ' + err.stack)
//     return;
//   }
//   console.log('Connexion réussie à la bdd')
// })

// connection.query("SELECT * FROM players", (err, rows, fields) => {
//   if(err) throw err
//   console.log('Les données sont : ' + rows)
// })

app.get('/api/items', (req, res, next) => {
    const items = [
      {
        id : 1,
        title : "Jordan 4",
        price : 400,
        imageUrl : "/public/sneakers/sneakers-1.jpg"
      },{
        id : 2,
        title : "Salomon xt Rush",
        price : 240,
        imageUrl : "/public/sneakers/sneakers-2.jpg"
      },{
        id : 3,
        title : "Tordan 11",
        price : 160,
        imageUrl : "/public/sneakers/sneakers-11.jpg"
      }, {
        id : 4,
        title : "Newbalance 2002r",
        price : 170,
        imageUrl : "/public/sneakers/sneakers-4.jpg"
      },{
        id : 5,
        title : "Newbalance 610v5",
        price : 110,
        imageUrl : "/public/sneakers/sneakers-5.jpg"
      },{
        id : 6,
        title : "Deseign Pull",
        price : 40,
        imageUrl : "/public/pull/pull-1.jpg"
      },{
        id : 7,
        title : "Deseign Pull",
        price : 35,
        imageUrl : "/public/pull/pull-5.jpg"
      }
    ]
    res.status(200).json(items);
});

app.get('/api/favorites', (req, res, next) => {
  favorites = [
    {
      id: 1,
      parentId: 3
    },{
      id: 2,
      parentId: 6
    }
  ]
  res.status(200).json(favorites)
})

passport.use(new GoogleStrategy({
  clientID: "137321509489-6eu63q9jr6d2j78h1o1u0ana1h6l9ihr.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:8080/auth/google/callback",
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