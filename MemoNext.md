
#  Memo Next.js 


## Cmd et shortuts

- Installer le dossier node_modules (première fois) `npm install`
- Lancer le projet sur  [http://localhost:3000](http://localhost:3000)  `npm run dev` 
- `rfc / rafc` : Créer rapidement la structure d'un composant.
- `Shift + Ctrl + F5 / Ctrl + Shift + R) :` Forcer le rafraîchissement (vide le cache).
- @/ :  L'alias de chemin. Il pointe vers `src/`. 
Ex  : `import Nav from '@/components/Nav'` fonctionne partout.


## Architecture
- 📁 src/app/ : gère le routing de l'app. Chaque dossier ici représente une Route.
- 📄 layout.js : *root layout* , il entoure et sert à créer chaque page de l'app
(C'est ici qu'on met la nav bar et le footer) - ne se recharge jamais lors de la navigation interne.
- 📄 page.js : Le contenu spécifique de la racine du site. Contient les sections + deux routes pour Paygap et SocialScript 
- 📁 src/app/composnents : les briques UI réutilisables (BacktoTop, ContactForm, NavBar, ProjectCard ...)


## Syntaxe

### Icones

Pour FontAwsome : 

Installation 
bash
`npm i --save @fortawesome/react-fontawesome@latest`

`npm i --save @fortawesome/fontawesome-svg-core`

Doc : [https://docs.fontawesome.com/web/use-with/react/#free-icon-packages]



### Liens
`<a>` classique : pour les liens externes

Pour les liens interne, mieux faut utiliser le composant <link> qui permet de ne pas réactualiser les pages (navigation plus fluide)
Syntaxe : 
`<Link className="" href="/acceuil">Acceuil</Link>`

###  Images 
Pour importer des images dans Next.js, utilisez le composant : 
`import monImage from '../public/image.png'`

puis `<Image 
src={monImage} 
alt="..."
width={20}
height={20} />`
⚠️ obligatoire de mettre une taille pour optimiser l'image

----------

## 🔄 Comment Next.js communique ?

Next.js = dialogue constant entre le **Serveur** (Node.js) et le **Navigateur** (Client).


### Le Rendu (De la requête à l'affichage)
1.  **Requête** : L'utilisateur demande une page (ex: `/contact`).
2.  **Server Render** : Le serveur génère le HTML brut (excellent pour le SEO).
3.  **RSC Payload** : Le serveur envoieun arbre représentant le contenu de la page et son rapport avec les composantes serveur et clients utilisés 
➡️ explique au client quelles zones sont statiques et lesquelles doivent devenir interactives.
4.  **Hydratation** : Le navigateur télécharge le JS nécessaire uniquement pour les **Client Components** pour les rendre interactifs (boutons, formulaires).


### Les composants

**Composant serveur** : 
(par défaut)
➡️ Quand on a besoin de donnée (lors de la construction de la page), pour les élements statiques 

**Composant client** : 
➡️ Quand on on a besoin d’interactivités (des web API, comme les écouteurs d’évènement, ou encore les fonctionnalités React comme useState, useEffect, etc.)
⚠️ un composant client transforme tous ses enfants en composants clients

💡 Tips d'imbrication : On essaie de garder la majorité de l'application en Server Components et de "pousser" les Client Components aux extrémités des branches (juste pour un bouton, une barre de recherche ou un formulaire). *
