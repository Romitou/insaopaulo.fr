# insaopaulo.fr

Site web de la semaine d'intégration 2024 de l'INSA Rouen Normandie (thème INSA'o Paulo). La plateforme centralise le programme des festivités, les annonces et le classement en direct des familles de parrainage.

## Contexte

Développé pour l'équipe d'intégration de l'INSA Rouen Normandie, ce site a permis d'accompagner l'arrivée des nouveaux étudiants en septembre 2024 en leur offrant un point d'accès unique aux informations pratiques de la semaine et aux scores des défis par équipe.

## Technologies

- **Frontend** : Nuxt 3 (Vue 3, TypeScript, Vite)
- **Styles** : Tailwind CSS, PostCSS, Sass
- **Serveur & API** : Nitro (moteur serveur de Nuxt), H3
- **Données** : Intégration Google Sheets API v4 via microservice d'authentification (`gauthapi`)
- **Déploiement** : Cloudflare Pages (runtime Edge / serverless)

## Structure du projet

```
├── assets/          # Styles SCSS, Tailwind, gestion du thème clair/sombre et images
├── components/      # Composants Vue du classement (podium, éléments de liste)
├── pages/           # Pages de l'application (accueil et classement des familles)
├── server/          # Routes API Nitro (événements, actualités, familles)
├── gauthapi/        # Microservice d'authentification pour Google Sheets API
└── nuxt.config.ts   # Configuration du framework Nuxt et du preset Nitro
```

## Démarrage local

### Prérequis

- Node.js 18 ou version ultérieure (Node.js 20+ recommandé)
- npm ou pnpm

### Installation

```bash
git clone git@github.com:Romitou/insaopaulo.fr.git
cd insaopaulo.fr
npm install
```

### Configuration des variables d'environnement

Copiez le fichier d'exemple et renseignez les variables nécessaires :

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `CF_ACCESS_CLIENT_ID` | Identifiant client Cloudflare Access (optionnel en local) |
| `CF_ACCESS_CLIENT_SECRET` | Secret client Cloudflare Access (optionnel en local) |
| `GOOGLE_SPREADSHEET_ID` | Identifiant du tableur Google Sheets contenant les scores |
| `TOKEN_PROVIDER_URL` | URL du service d'accès pour Google Sheets |

### Lancement en développement

```bash
npm run dev
```

L'application est accessible sur `http://localhost:3000`.

### Compilation pour la production

```bash
npm run build
```

Pour tester le rendu produit localement :

```bash
npm run preview
```

## Auteur

- Romain ([@Romitou](https://github.com/Romitou))

## Licence

Ce projet est distribué sous licence [MIT](LICENSE).
