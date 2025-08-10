# 🚀 Guide de Déploiement

## ⚠️ Disclaimer Important

**ATTENTION :** Le code généré par IA dans ce projet, notamment pour les applications pratiques et les exemples, est fourni à titre de **démonstration uniquement**. Je ne garantis pas la sécurité, la performance ou la fiabilité de ce code. Il doit être testé et adapté avant toute utilisation en production.

Ce guide vous accompagne dans le déploiement de la Formation Dev Codeur IA sur différentes plateformes.

## 📋 Prérequis

- Node.js 18+ installé
- Compte sur la plateforme de déploiement choisie
- Variables d'environnement configurées

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env.local` pour le développement :

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Formation Dev Codeur IA
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### Build de Production

```bash
# Installer les dépendances
npm install

# Build pour production
npm run build

# Tester le build localement
npm run start
```

## 🌐 Plateformes de Déploiement

### Vercel (Recommandé)

Vercel est la plateforme officielle de Next.js et offre une intégration parfaite.

#### Déploiement Automatique

1. **Connectez votre repository GitHub**

   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec votre compte GitHub
   - Importez votre repository

2. **Configuration automatique**

   - Vercel détecte automatiquement Next.js
   - Les paramètres par défaut sont optimaux

3. **Variables d'environnement**
   ```env
   NEXT_PUBLIC_APP_URL=https://votre-app.vercel.app
   ```

#### Déploiement Manuel

```bash
# Installer Vercel CLI
npm i -g vercel

# Login
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Netlify

#### Configuration

1. **Créer un fichier `netlify.toml`**

   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Variables d'environnement**
   ```env
   NEXT_PUBLIC_APP_URL=https://votre-app.netlify.app
   ```

#### Déploiement

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Déployer
netlify deploy --prod --dir=.next
```

### Railway

#### Configuration

1. **Créer un fichier `railway.json`**

   ```json
   {
     "build": {
       "builder": "NIXPACKS"
     },
     "deploy": {
       "startCommand": "npm start",
       "healthcheckPath": "/",
       "healthcheckTimeout": 100,
       "restartPolicyType": "ON_FAILURE"
     }
   }
   ```

2. **Variables d'environnement**
   ```env
   NEXT_PUBLIC_APP_URL=https://votre-app.railway.app
   PORT=3000
   ```

## 🔍 Optimisations de Performance

### Next.js

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["votre-domaine.com"],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

module.exports = nextConfig;
```

### Compression

```bash
# Installer compression
npm install compression

# Configuration dans server.js
const compression = require('compression')
app.use(compression())
```

### Cache

```javascript
// Cache headers
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  next();
});
```

## 🔒 Sécurité

### Headers de Sécurité

```javascript
// next.config.js
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
```

### Variables d'Environnement Sensibles

```env
# Ne jamais exposer en production
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
API_KEY=your_api_key
```

## 🚨 Troubleshooting

### Erreurs Communes

1. **Build Failed**

   ```bash
   # Vérifier les erreurs TypeScript
   npm run type-check

   # Vérifier le linting
   npm run lint
   ```

2. **Performance Issues**

   ```bash
   # Analyser le bundle
   npm run build
   npx @next/bundle-analyzer
   ```

3. **Memory Issues**
   ```bash
   # Augmenter la mémoire Node.js
   NODE_OPTIONS="--max-old-space-size=4096" npm run build
   ```

### Logs

```bash
# Vercel
vercel logs

# Netlify
netlify logs

# Railway
railway logs
```

## 📞 Support

- **Documentation Next.js** : [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Support** : [vercel.com/support](https://vercel.com/support)
- **Netlify Support** : [netlify.com/support](https://netlify.com/support)

---

**🚀 Votre Formation Dev Codeur IA est maintenant prête pour la production !**
