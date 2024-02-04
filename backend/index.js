// Créer un serveur - EXPRESS JS
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

module.exports = app;

// Créer un port
HOST = "localhost"
PORT = 8080

// Erreurs de CORS (Cross Origin Resource Sharing) - ça bloque les appels HTTP entre des serveurs différents. frontend <-- --> backend
const header = (_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization, Accept"
  );
  next();
};

// EXPRESS CONFIG
app.use(header)

//Connecter un moteur de template
app.set('view engine', 'ejs')

//Ecrire css ici
app.use(express.static(__dirname + '/public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post((req, res, next) => {
    console.log(req.body)
    res.status(201).json({
        message: "Objet crée !"
    })
})

app.get('/api/items', (req, res, next) => {
    const items = [
        {
          id : 1,
          title : "Jordan 4",
          price : 400,
          imageUrl : "../../public/sneakers/sneakers-1.jpg"
        },{
          id : 2,
          price : 240,
          title : "Jordan 3",
          imageUrl : "../../public/sneakers/sneakers-2.jpg"
        },{
          id : 3,
          title : "Jordan 11",
          price : 160,
          imageUrl : "../../public/sneakers/sneakers-3.jpg"
        }
    ]
    res.status(200).json(items);
});

app.get('/', (req, res) => {
    res.send('<h1>Hello maan</h1>')
})

// ------------------------------------

app.post('/login', (req, res) => {
    try {
        console.log(req.body)
        if (!Object.prototype.hasOwnProperty.call(req.body, "username")) throw new Error('Username not exist')
        if (!Object.prototype.hasOwnProperty.call(req.body, "password")) throw new Error('Password not exist')
        res.status(200).json({ "message": "Vous avez bien été enregistré" })
    } catch (e) {
        console.log(JSON.stringify(e.message))
        res.status(400).json({ "message": e.message })
    }
})

// ------------------------------------

// Créer un serveur pour le site Fasl Studio
app.listen(PORT, () => {
    console.log(`Fasl.Studio est lancé dans le http://${HOST}:${PORT}`)
})


// ------------------------------------
// Connecter Les fichiers aux pages
// app.get('/', (req, res) => {
//     res.render('home')
// })