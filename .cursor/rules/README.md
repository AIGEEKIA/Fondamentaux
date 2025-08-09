# 📚 Guide de Réutilisation des Règles Cursor

## 🎯 **OBJECTIF**

Ce dossier contient des règles Cursor **génériques et réutilisables** pour créer n'importe quelle formation interactive.

## 🚀 **COMMENT RÉUTILISER CES RÈGLES**

### **1. Copier la Structure**

```bash
# Copier le dossier .cursor/rules complet
cp -r .cursor/rules /path/to/new-formation/.cursor/
```

### **2. Adapter les Variables**

Remplacer les placeholders `[VARIABLE]` par vos valeurs :

#### **Dans `01-architecture.mdc` :**

- `[FORMATION-NAME]` → Nom de votre formation
- `[cours]` → Nom du dossier des cours (ex: `react`, `python`, `devops`)
- `[langages]` → Nom du dossier des langages/outils
- `[brand]` → Nom de votre marque

#### **Dans `02-pedagogie.mdc` :**

- `[Titre de la Leçon]` → Titre spécifique du cours
- `[Description engageante]` → Description du cours
- `[Catégorie]` → Catégorie du cours
- `[Objectif 1/2/3]` → Objectifs spécifiques
- `[Analogie 1/2/3]` → Analogies du cours
- `[Langage/Outils 1/2/3]` → Langages ou outils utilisés
- `[Nom du concept]` → Concept enseigné

#### **Dans `03-design.mdc` :**

- `[Titre de la Card]` → Titres des cartes
- `[Description de la card]` → Descriptions
- `[Titre de l'analogie]` → Titres des analogies
- `[Action]` → Textes des boutons
- `[Catégorie]` → Catégories
- `[Statut]` → Statuts

#### **Dans `04-evolution.mdc` :**

- `cours-[N]` → Nombre total de cours

### **3. Exemples d'Adaptation**

#### **Formation React :**

```
[FORMATION-NAME] → React-Mastery
[cours] → react
[langages] → tools
[brand] → react-academy
[Langage/Outils 1/2/3] → React, TypeScript, Next.js
```

#### **Formation Python :**

```
[FORMATION-NAME] → Python-Expert
[cours] → python
[langages] → frameworks
[brand] → python-school
[Langage/Outils 1/2/3] → Python, Django, FastAPI
```

#### **Formation DevOps :**

```
[FORMATION-NAME] → DevOps-Pro
[cours] → devops
[langages] → tools
[brand] → devops-institute
[Langage/Outils 1/2/3] → Docker, Kubernetes, Terraform
```

## 📋 **CHECKLIST DE RÉUTILISATION**

### **Phase 1 : Préparation**

- [ ] Copier le dossier `.cursor/rules`
- [ ] Identifier le nom de la formation
- [ ] Définir la structure des cours
- [ ] Choisir les langages/outils

### **Phase 2 : Adaptation**

- [ ] Remplacer tous les `[VARIABLE]` dans `01-architecture.mdc`
- [ ] Adapter les exemples dans `02-pedagogie.mdc`
- [ ] Personnaliser les composants dans `03-design.mdc`
- [ ] Ajuster les règles d'évolution dans `04-evolution.mdc`

### **Phase 3 : Validation**

- [ ] Vérifier la cohérence des noms
- [ ] Tester la génération de code
- [ ] Valider l'accessibilité
- [ ] Contrôler la performance

## 🎨 **PERSONNALISATION AVANCÉE**

### **Couleurs de Marque**

Modifier les couleurs dans `03-design.mdc` :

```css
/* Remplacer les couleurs par défaut */
--primary-blue: #VOTRE_COULEUR;
--primary-indigo: #VOTRE_COULEUR;
--primary-purple: #VOTRE_COULEUR;
```

### **Icônes Spécifiques**

Remplacer les icônes génériques par des icônes spécifiques à votre domaine :

```typescript
// Au lieu de [Icon], utiliser des icônes spécifiques
<React className="h-8 w-8 text-blue-600" />
<Python className="h-8 w-8 text-blue-600" />
<Docker className="h-8 w-8 text-blue-600" />
```

### **Structure des Cours**

Adapter le nombre et la structure des cours selon vos besoins :

```typescript
// Exemple pour une formation React
const coursStructure = {
  "cours-1": "Introduction à React",
  "cours-2": "Composants et Props",
  "cours-3": "State et Lifecycle",
  // ... jusqu'à cours-N
};
```

## 🔄 **MAINTENANCE**

### **Mise à Jour des Règles**

1. **Toujours commencer** par `cours-1` (template)
2. **Tester** sur un cours avant d'appliquer partout
3. **Documenter** les changements
4. **Vérifier** la régression sur les autres cours

### **Versioning**

- **Garder** une copie de sauvegarde des règles originales
- **Tagger** les versions importantes
- **Documenter** les changements majeurs

## 📚 **RESSOURCES UTILES**

### **Templates de Cours**

Utiliser la structure standardisée pour chaque cours :

1. **En-tête de Leçon**
2. **Objectifs du Cours** (3 objectifs)
3. **Analogies Simples** (3 analogies)
4. **Définition Simple** ⭐ OBLIGATOIRE
5. **Exemples de Code** (3 langages/outils)
6. **Mini-Application** (Instructions + Code)
7. **Quiz Interactifs** (5 quiz)

### **Standards de Qualité**

- **Accessibilité** : WCAG 2.1 AA
- **Performance** : Core Web Vitals > 90
- **SEO** : Métadonnées complètes
- **Tests** : Couverture > 80%

---

## 🎯 **CONCLUSION**

Ces règles sont conçues pour être **universelles et réutilisables**. Avec quelques adaptations, vous pouvez créer n'importe quelle formation interactive en suivant les mêmes standards de qualité.

**Bonne création de formation !** 🚀✨
