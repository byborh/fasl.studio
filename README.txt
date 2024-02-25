gérer une bdd en créant des fichiers :
sql lite

docker : démarrer l'application que ça soit mysql, maria db(linux), redis(== mongo (NoSQL) mongo etc ... il l'ouvre tt seul
avec un mdp configuré au début

1) créer un containeur 

2) connecter avec node js sur la bdd

redis : inscription / connexion manuel

docker descktop = window

token local_storage === cookies
----------------------------------------
JWT = token

=== badge ===

tant que token est OK
l'user peut se balader dans le site
----------------------------------------

app
.get( '/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure',
    session: true
}))

.get('/auth/google/success', (req, res) => {
  if(!req.session.passport.user['exist']) {
    res.redirect(`https://${front}/#/stepglobal?token=${crypt(req.session.passport.user)}`)
  } else res.redirect(`https://${front}/#/access?token=${crypt(req.session.passport.user)}`)
})

.get('/auth/google/failure', (req, res) => {
  res.send(`https://${front}/#/access?error=400&repsonse=false`)
})


----------------------------------
DockerFile:
génére des fichiers


  docker-compose:
créer/lancer l'image crée dans un containeur
comporte (infrastructure de microstructure) plusieurs images

ex de microservices avec des adresse IP disctincts:
-mongo (adresse PRV (localhost))
-mogo-express (adresse PRV (localhost))
-fasl.studio/frontend (adresse PUBLIC)
-fasl.studio/backend (adresse PRV (localhost))








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
    },{
      id : 4,
      title : "Newbalance 2002r",
      price : 170,
      imageUrl : "../../public/sneakers/sneakers-4.jpg"
    },{
      id : 5,
      title : "Newbalance 610v5",
      price : 110,
      imageUrl : "../../public/sneakers/sneakers-5.jpg"
    }
  ]


Voici nous vous proposons chez Fasl.studio®

Jogging 25€ (S,M,L,XL)
- Gris clair 
- Gris foncé 
- Beige 
- Noir 
- Bleu nuit 
- Rose

Pull 25€ (S,M,L,XL,XXL)
- Gris clair 
- Gris foncé 
- Beige 
- Noir 
- Bleu nuit 
- RoseVoici nous vous proposons chez Fasl.studio®

Pull capuche 25€ (S,M,L,XL,XXL)
- Gris clair 
- Gris foncé 
- Beige 
- Noir 
- Bleu nuit 
- Rose

weat capuche 25€ (S,M,L,XL,XXL)
- Gris clair 
- Gris foncé 
- Beige 
- Noir 
- Bleu nuit 
- Rose

Teeshirt 15€ (S,M,L,XL,XXL)
- Noir 
- Gris
- Blanc
- Vert 
- Bleu nuit

Fasl.studio®
