# 🤝 Guide de Contribution

## ⚠️ Disclaimer Important

**ATTENTION :** Le code généré par IA dans ce projet, notamment pour les applications pratiques et les exemples, est fourni à titre de **démonstration uniquement**. Je ne garantis pas la sécurité, la performance ou la fiabilité de ce code. Il doit être testé et adapté avant toute utilisation en production.

Merci de votre intérêt pour contribuer à la Formation Dev Codeur IA ! Ce document vous guidera à travers le processus de contribution.

## 📋 Table des Matières

- [Code de Conduite](#code-de-conduite)
- [Comment Contribuer](#comment-contribuer)
- [Standards de Code](#standards-de-code)
- [Structure du Projet](#structure-du-projet)
- [Tests](#tests)
- [Pull Request](#pull-request)

## 📜 Code de Conduite

### Notre Engagement

Dans l'intérêt de favoriser un environnement ouvert et accueillant, nous nous engageons à faire de la participation à notre projet et à notre communauté une expérience sans harcèlement pour tous, peu importe l'âge, la taille, le handicap, l'ethnicité, l'identité et l'expression de genre, le niveau d'expérience, la nationalité, l'apparence personnelle, la race, la religion ou l'identité et l'orientation sexuelles.

### Nos Standards

Exemples de comportements qui contribuent à créer un environnement positif :

- Utiliser un langage accueillant et inclusif
- Respecter les différents points de vue et expériences
- Accepter gracieusement les critiques constructives
- Se concentrer sur ce qui est le mieux pour la communauté
- Faire preuve d'empathie envers les autres membres de la communauté

## 🚀 Comment Contribuer

### Signaler un Bug

1. Vérifiez que le bug n'a pas déjà été signalé dans les [issues](https://github.com/votre-username/Fondamentaux-V3/issues)
2. Créez une nouvelle issue avec le template "Bug Report"
3. Incluez des étapes détaillées pour reproduire le bug
4. Ajoutez des captures d'écran si possible

### Proposer une Amélioration

1. Créez une issue avec le template "Feature Request"
2. Décrivez clairement l'amélioration souhaitée
3. Expliquez pourquoi cette amélioration serait utile
4. Proposez une solution si possible

### Contribuer au Code

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Suivez les standards de code ci-dessous
4. Testez vos modifications
5. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
6. Push vers la branche (`git push origin feature/AmazingFeature`)
7. Ouvrez une Pull Request

## 📝 Standards de Code

### TypeScript

- Utilisez TypeScript strictement
- Définissez des types pour toutes les fonctions
- Évitez `any` autant que possible
- Utilisez des interfaces pour les objets complexes

```typescript
// ✅ Bon
interface User {
  id: string;
  name: string;
  email: string;
}

const getUser = (id: string): Promise<User> => {
  // ...
};

// ❌ Éviter
const getUser = (id: any): any => {
  // ...
};
```

### React/Next.js

- Utilisez des composants fonctionnels avec hooks
- Suivez les conventions de nommage
- Utilisez les composants Shadcn/ui quand possible

```typescript
// ✅ Bon
export default function CoursePage() {
  const [isLoading, setIsLoading] = useState(false);

  return <div className="container mx-auto">{/* Contenu */}</div>;
}

// ❌ Éviter
export default function coursePage() {
  return <div>Contenu</div>;
}
```

### CSS/Tailwind

- Utilisez Tailwind CSS pour le styling
- Suivez la palette de couleurs définie
- Utilisez les classes utilitaires de manière cohérente

```typescript
// ✅ Bon
<div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">

// ❌ Éviter
<div style={{ background: 'linear-gradient(...)', border: '2px solid blue' }}>
```

### Structure des Cours

Chaque cours doit suivre cette structure :

```typescript
export default function CoursXPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-100">
      {/* 1. Header avec navigation */}
      <header>...</header>

      {/* 2. Menu hamburger */}
      <HamburgerMenu currentPage="cours-X" />

      {/* 3. Breadcrumb */}
      <nav>...</nav>

      {/* 4. Objectifs du cours */}
      <section>...</section>

      {/* 5. Analogies simples */}
      <section>...</section>

      {/* 6. Définition simple (OBLIGATOIRE) */}
      <section>...</section>

      {/* 7. Exemples de code */}
      <section>...</section>

      {/* 8. Mini-application */}
      <section>...</section>

      {/* 9. Quiz interactifs */}
      <section>...</section>

      {/* 10. Navigation */}
      <section>...</section>
    </div>
  );
}
```

## 📁 Structure du Projet

```
Fondamentaux-V3/
├── app/                          # Pages Next.js
│   ├── page.tsx                  # Page d'accueil
│   ├── analogie-cuisine/         # Page analogie cuisine
│   ├── analogie-architecture/    # Page analogie architecture
│   ├── fondamentaux/             # Pages des cours
│   └── langages/                 # Pages des langages
├── components/                   # Composants réutilisables
│   ├── ui/                      # Composants Shadcn/ui
│   ├── hamburger-menu.tsx       # Menu de navigation
│   └── progress-chart.tsx       # Graphiques de progression
├── lib/                         # Utilitaires et configurations
├── public/                      # Assets statiques
└── styles/                      # Styles globaux
```

## 🧪 Tests

### Tests Unitaires

- Testez tous les composants réutilisables
- Utilisez Jest et React Testing Library
- Maintenez une couverture de code > 80%

```typescript
// Exemple de test
import { render, screen } from "@testing-library/react";
import QuizComponent from "@/components/quiz-component";

describe("QuizComponent", () => {
  it("should render quiz question", () => {
    render(<QuizComponent quiz={mockQuiz} />);
    expect(screen.getByText(mockQuiz.question)).toBeInTheDocument();
  });
});
```

### Tests d'Intégration

- Testez les flux de navigation
- Vérifiez le bon fonctionnement des quiz
- Testez la copie de code

### Tests de Performance

- Vérifiez les Core Web Vitals
- Testez le temps de chargement
- Optimisez les images et assets

## 🔄 Pull Request

### Avant de Soumettre

- [ ] Le code suit les standards définis
- [ ] Les tests passent
- [ ] La documentation est mise à jour
- [ ] Le code est testé localement
- [ ] Les changements sont documentés dans le CHANGELOG

### Template de Pull Request

```markdown
## Description

Brève description des changements apportés.

## Type de Changement

- [ ] Bug fix
- [ ] Nouvelle fonctionnalité
- [ ] Amélioration
- [ ] Documentation
- [ ] Refactoring

## Tests

- [ ] Tests unitaires ajoutés/mis à jour
- [ ] Tests d'intégration passent
- [ ] Tests manuels effectués

## Checklist

- [ ] Le code suit les standards du projet
- [ ] La documentation est mise à jour
- [ ] Les changements sont documentés dans le CHANGELOG
- [ ] Le code est testé localement
```

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Shadcn/ui](https://ui.shadcn.com/)
- [Guide TypeScript](https://www.typescriptlang.org/docs/)

## 🆘 Besoin d'Aide ?

- Ouvrez une issue pour les questions générales
- Utilisez les discussions GitHub pour les débats
- Contactez l'équipe de maintenance

---

**Merci de contribuer à la Formation Dev Codeur IA ! 🚀**
