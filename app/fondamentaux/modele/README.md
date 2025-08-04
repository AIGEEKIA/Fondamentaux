# 📚 Modèle de Cours - Guide d'Utilisation

Ce dossier contient un modèle de page de cours complet et standardisé pour créer de nouveaux cours.

## 🎯 Structure du Modèle

Le modèle suit la structure pédagogique standardisée en **7 étapes** :

1. **📚 En-tête du Cours** - Titre et description
2. **🎯 Objectifs** - Ce que l'apprenant va apprendre
3. **🌟 Analogies Simples** - 3 analogies (cuisine, gamer, jardinage)
4. **📖 Définition Simple** - Explication riche et structurée
5. **💻 Exemples de Code** - Python, JavaScript, TypeScript
6. **🎮 Mini-Application** - Application interactive
7. **🧠 Quiz Interactifs** - 3 quiz avec feedback
8. **🚀 Navigation** - Lien vers le cours suivant

## 🔧 Comment Utiliser le Modèle

### 1. Copier le Modèle

```bash
# Copier le modèle vers un nouveau cours
cp app/fondamentaux/modele/page.tsx app/fondamentaux/cours-X/page.tsx
```

### 2. Personnaliser les Sections

#### **A. En-tête du Cours**

```typescript
// Modifier le titre et la description
CardTitle className="text-3xl font-bold text-gray-800">
  📚 VOTRE TITRE ICI
</CardTitle>
CardDescription className="text-lg text-gray-600">
  Votre description ici
</CardDescription>
```

#### **B. Objectifs**

```typescript
// Modifier les 3 objectifs
<strong className="text-gray-800">Votre Objectif 1</strong>
<p className="text-sm text-gray-600">Description de l'objectif 1</p>
```

#### **C. Analogies**

```typescript
const analogies = {
  cuisine: {
    title: "🍳 Cuisine",
    description: "Votre description cuisine",
    examples: ["votre exemple 1", "votre exemple 2", "votre exemple 3"],
    explanation: "Votre explication cuisine",
  },
  // ... personnaliser gamer et jardinage
};
```

#### **D. Définition Simple**

- Modifier la description du concept
- Personnaliser les cartes visuelles
- Adapter les points clés
- Modifier la section "Pourquoi c'est important"

#### **E. Exemples de Code**

```typescript
const pythonCode = `# Votre code Python ici`;
const javascriptCode = `// Votre code JavaScript ici`;
const typescriptCode = `// Votre code TypeScript ici`;
```

#### **F. Quiz**

```typescript
const quizData = {
  quiz1: {
    question: "Votre question 1",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: 0, // Index de la bonne réponse
    explication: "Votre explication",
  },
  // ... ajouter quiz2 et quiz3
};
```

#### **G. Navigation**

```typescript
// Modifier le lien et la description
href="/fondamentaux/cours-suivant"
<h3 className="text-xl font-semibold text-gray-800 mb-2">
  Titre du cours suivant
</h3>
```

## 📋 Checklist de Personnalisation

- [ ] **Titre du cours** modifié
- [ ] **Description** personnalisée
- [ ] **3 objectifs** définis
- [ ] **3 analogies** créées (cuisine, gamer, jardinage)
- [ ] **Définition Simple** enrichie avec cartes visuelles
- [ ] **Points clés** (4 cartes) personnalisés
- [ ] **Avantages** (3 points) définis
- [ ] **Code Python** ajouté
- [ ] **Code JavaScript** ajouté
- [ ] **Code TypeScript** ajouté
- [ ] **Mini-application** créée
- [ ] **3 quiz** avec questions et explications
- [ ] **Navigation** vers le cours suivant

## 🎨 Design System

Le modèle respecte automatiquement :

- ✅ Gradients cohérents
- ✅ Couleurs standardisées
- ✅ Espacement uniforme
- ✅ Typographie hiérarchisée
- ✅ Composants UI cohérents
- ✅ Responsive design

## 🚀 Bonnes Pratiques

1. **Garder la structure** - Ne pas supprimer de sections
2. **Enrichir le contenu** - Ajouter des explications détaillées
3. **Tester la compilation** - Vérifier avec `npm run build`
4. **Respecter les standards** - Suivre le design system
5. **Documenter les changements** - Mettre à jour l'état du projet

## 📁 Structure des Fichiers

```
app/fondamentaux/modele/
├── page.tsx          # Modèle de cours complet
└── README.md         # Ce guide d'utilisation
```

## 🔄 Réutilisation

Ce modèle peut être réutilisé pour :

- ✅ Créer de nouveaux cours
- ✅ Standardiser les cours existants
- ✅ Maintenir la cohérence pédagogique
- ✅ Accélérer le développement

---

**💡 Conseil** : Utilisez ce modèle comme base pour tous les nouveaux cours afin de maintenir la cohérence et la qualité de la formation !
