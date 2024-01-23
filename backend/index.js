// Créer un serveur - EXPRESS JS
const express = require('express')
const app = express()
const bodyParser = require("body-parser");

// Créer un port
HOST = "localhost"
PORT = 8080

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

app.get('/', (req, res) => {
    res.send('<h1>Yes</h1>')
})

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

// app.get('/nouveautes', (req, res) => {
//     res.render('nouveautes')
// })

// app.get('/vetements', (req, res) => {
//     res.render('vetements')
// })

// app.get('/accessoires', (req, res) => {
//     res.render('accessoires')
// })

// app.get('/about', (req, res) => {
//     res.render('about')
// })

// app.get('/contact', (req, res) => {
//     res.render('contact')
// })

// app.get('/mon-compte', (req, res) => {
//     res.render('mon-compte')
// })

// app.get('/panier', (req, res) => {
//     res.render('panier')
// })