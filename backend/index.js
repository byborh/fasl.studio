// Créer un serveur - EXPRESS JS
const express = require('express')
const app = express()

// Créer un port
HOST = "localhost"
PORT = 8080

//Connecter un moteur de template
app.set('view engine', 'ejs')
//Ecrire css ici
app.use(express.static(__dirname + '/public')) 

// ------------------------------------
// Connecter Les fichiers aux pages
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/nouveautes', (req, res) => {
    res.render('nouveautes')
})

app.get('/vetements', (req, res) => {
    res.render('vetements')
})

app.get('/accessoires', (req, res) => {
    res.render('accessoires')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/mon-compte', (req, res) => {
    res.render('mon-compte')
})

app.get('/panier', (req, res) => {
    res.render('panier')
})
// ------------------------------------

// Créer un serveur pour le site Fasl Studio
app.listen(PORT, () => {
    console.log(`Fasl.Studio est lancé dans le http://${HOST}:${PORT}`)
})