# Formation IA - Page Interactive

Une belle page de formation interactive et professionnelle pour présenter votre formation en développement avec IA.

## 🚀 Fonctionnalités

- **Design moderne** avec interface responsive et animations fluides
- **Graphiques de progression** interactifs avec Recharts
- **Structure claire** basée sur votre formation (4 concepts, 37 cours, 3 langages)
- **Analogies pédagogiques** présentées de manière attractive
- **Suivi de progression** visuel pour les concepts et langages

## 🛠️ Technologies

- **Next.js 14** - Framework React moderne
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Recharts** - Graphiques interactifs
- **Lucide React** - Icônes modernes

## 📦 Installation

1. **Installer les dépendances :**
```bash
npm install
```

2. **Lancer le serveur de développement :**
```bash
npm run dev
```

3. **Ouvrir dans le navigateur :**
```
http://localhost:3000
```

## 🎨 Structure

- **Page d'accueil** avec présentation de la formation
- **Section statistiques** (37 cours, 4 concepts, 3 langages, 2 analogies)
- **Analogies pédagogiques** (Cuisine et Architecture)
- **4 concepts fondamentaux** avec descriptions
- **Graphiques de progression** pour le suivi
- **Call-to-action** pour commencer la formation

## 📊 Graphiques

Les graphiques de progression utilisent des graphiques radiaux (RadialBar) de Recharts pour afficher :
- Progression des 4 concepts fondamentaux
- Progression des 3 langages en parallèle
- Tendances et statistiques en temps réel

## 🎯 Personnalisation

Vous pouvez facilement modifier :
- Les couleurs dans `tailwind.config.js`
- Les données de progression dans `app/page.tsx`
- Les textes et descriptions
- Les icônes et images

## 📱 Responsive

L'interface s'adapte parfaitement à tous les écrans :
- Mobile (1 colonne)
- Tablette (2 colonnes)
- Desktop (4 colonnes)

## 🚀 Déploiement

Pour déployer sur Vercel :
```bash
npm run build
```

Ou utilisez directement Vercel avec votre repository GitHub. 