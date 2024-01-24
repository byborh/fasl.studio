    // PUSH à partir de main
// - 1

git remote add origin [//your github url]

//pull those changes

git pull origin main 

// or optionally, 'git pull origin main --allow-unrelated-histories' if you have initialized repo in github and also committed locally

//now, push your work to your new repo

git push origin main



// - 2

L'erreur vient peut-être de la structure différente du code que vous validez et de celui présent sur GitHub. Cela crée des conflits qui peuvent être résolus par

git pull
Fusionner les conflits en résolvant :

git push
Si vous confirmez que votre nouveau code est correct, vous pouvez utiliser :

git push -f origin main
Où -fsignifie « force ».




    // Supprimer "master" qui apparu dans fasl.studio/fasl.studio
    // Utiliser que "main" au lieu de "devmaio" à chaque fois

// - 1
//// JE SUIS PAS SUR QUE C CA

Essayez dans le module parent a git rm --cached sub-directory(pas de barre oblique finale).
Vérifiez si vous avez un .gitmodulesfichier à la racine de votre dépôt principal, contenant ce même sous-répertoire.

Pour en savoir plus, consultez « Impossible de supprimer le sous-module du dépôt Git »

cd /path/to/parent/respository
git rm --cached submodule-name # no trailing slash: not submodule-name/
git commit -m "Remove submodule entry"
git push
Notez l' --cachedoption ici : nous ne voulons pas supprimer le sous-dossier, seulement l' entrée spéciale dans l'index qui le marque comme sous-module.

// - 2
https://gist.github.com/claraj/e5563befe6c2fb108ad0efb6de47f265



// -----------------------------------------------------------
1.	Les images avec zones cliquables. !!!!!! IMPORTANT


https://www.image-map.net/

// -----------------------------------------------------------






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
