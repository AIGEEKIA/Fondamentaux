# 🏗️ Architecture du Projet - Vue d'Ensemble

## 🎯 PROJET OFFICIEL

**FORMATION DEV CODEUR IA - LES FONDAMENTAUX INDISPENSABLES**

---

## 📋 Vue d'Ensemble

**Projet** : FORMATION DEV CODEUR IA - LES FONDAMENTAUX INDISPENSABLES  
**Architecture** : JAMstack moderne avec Next.js App Router  
**Pattern** : Component-based architecture  
**Styling** : Utility-first CSS avec Tailwind

---

## 🎯 Architecture Générale

### **Stack Technique**

```
┌─────────────────┐
│   Next.js 15    │  ← Framework principal
├─────────────────┤
│   React 18      │  ← Bibliothèque UI
├─────────────────┤
│  TypeScript 5   │  ← Typage statique
├─────────────────┤
│ Tailwind CSS 3  │  ← Framework CSS
└─────────────────┘
```

### **Architecture des Couches**

```
┌─────────────────────────────────────┐
│           UI Layer                  │  ← Composants React
├─────────────────────────────────────┤
│        Business Logic               │  ← Logique métier
├─────────────────────────────────────┤
│         Data Layer                  │  ← Gestion des données
├─────────────────────────────────────┤
│      Infrastructure                 │  ← Next.js, Build tools
└─────────────────────────────────────┘
```

---

## 📁 Structure des Dossiers

```
fondamentauxV2/
├── 📁 app/                          # App Router Next.js 13+
│   ├── 📄 page.tsx                  # Page d'accueil
│   ├── 📁 fondamentaux/             # Pages des leçons
│   │   ├── 📄 lecon-1/page.tsx
│   │   ├── 📄 lecon-2/page.tsx
│   │   ├── 📄 lecon-3/page.tsx
│   │   └── ... (lecon-4 à lecon-15)
│   ├── 📁 analogie-cuisine/         # Pages d'analogies
│   ├── 📁 analogie-architecture/
│   ├── 📁 installation-python/
│   └── 📁 langages/                 # Pages des langages
│       ├── 📄 python/page.tsx
│       ├── 📄 javascript/page.tsx
│       └── 📄 typescript/page.tsx
├── 📁 components/                   # Composants réutilisables
│   └── 📄 hamburger-menu.tsx        # Menu hamburger global
├── 📁 public/                       # Assets statiques
├── 📁 styles/                       # Styles globaux
├── 📁 documentation-technique/      # Documentation technique
│   ├── 📄 README-frameworks.md
│   ├── 📄 package-analysis.md
│   └── 📄 architecture-overview.md
├── 📄 package.json                  # Dépendances et scripts
├── 📄 next.config.js               # Configuration Next.js
├── 📄 tailwind.config.js           # Configuration Tailwind
├── 📄 tsconfig.json                # Configuration TypeScript
└── 📄 README.md                    # Documentation principale
```

---

## 🧩 Architecture des Composants

### **Composant HamburgerMenu**

```typescript
interface HamburgerMenuProps {
  currentPage?: string; // Page actuelle pour le highlighting
}

export default function HamburgerMenu({ currentPage }: HamburgerMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ...
}
```

**Caractéristiques** :

- ✅ **Réutilisable** : Utilisé sur toutes les pages
- ✅ **Typé** : Interface TypeScript définie
- ✅ **Responsive** : Adapté mobile/desktop
- ✅ **Accessible** : Support navigation clavier

### **Pattern de Pages**

```typescript
export default function LeconXPage() {
  // État local pour les interactions
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100...">
      {/* Header fixe */}
      <header>...</header>

      {/* Menu hamburger réutilisable */}
      <HamburgerMenu currentPage="lecon-X" />

      {/* Contenu principal */}
      <main>...</main>
    </div>
  );
}
```
