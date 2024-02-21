const express = require('express')
const session = require('express-session')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const bodyParser = require('body-parser')
const mysql = require('mysql')
// const redis = require('redis')
// import { createCluster } from 'redis'

// ----------------------------------------------------------------------------

const app = express()
// const client = redis.createClient()
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P@55aran',
  // database: 'kentfc',
  // socket: ''
})

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

app.get('/', (req, res) => {
  res.send('<h1>Hello maan</h1>')
})

connection.connect((err) => {
  if(err) {
    console.log('Erreur de connexion : ' + err.stack)
    return;
  }
  console.log('Connexion réussie à la bdd')
})

connection.query("SELECT * FROM players", (err, rows, fields) => {
  if(err) throw err
  console.log('Les données sont : ' + rows)
})

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
    successRedirect: '/auth/google/succes',
    session: true
  })
  // (req, res) => {
  //   // Redirection après une connexion réussie
  //   res.redirect('/dashboard');
  // }
);

// ----------------------------------------------------------------------------

app.listen(PORT, () => { // Créer un serveur pour le site Fasl Studio
    console.log(`Fasl.Studio est lancé dans ${PORT}. Le lien est ici : http://${HOST}:${PORT}`)
})