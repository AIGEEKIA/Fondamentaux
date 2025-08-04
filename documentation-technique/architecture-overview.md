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

### **Règle "Définition Simple" Obligatoire**

**POUR TOUTE SECTION "DÉFINITION SIMPLE" :**

- ✅ **Explication claire** du concept en langage simple
- ✅ **Bout de code structurel obligatoire** dans la section
- ✅ **Design standardisé** : Gradient vert avec icône BookOpen
- ✅ **Structure obligatoire** : Explication + Code structurel

#### **Format Standard :**

```tsx
{/* Section Définition Simple */}
<section className="mb-12">
  <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-300/50 shadow-xl">
    <CardHeader>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            📖 DÉFINITION SIMPLE
          </CardTitle>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      {/* Explication claire + Bout de code structurel obligatoire */}
    </CardContent>
  </Card>
</section>
```

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

### **🏗️ Architecture UI Moderne**

#### **Stack UI Complète**

```
┌─────────────────┐
│   shadcn/ui     │  ← Système de composants
├─────────────────┤
│   Radix UI      │  ← Composants primitifs accessibles
├─────────────────┤
│   Tailwind CSS  │  ← Framework CSS
└─────────────────┘
```

#### **Composants shadcn/ui Utilisés**

- **Card Components** : Utilisés dans toutes les pages de leçons
- **Chart Components** : Pour les graphiques de progression
- **Utils** : Fonction `cn()` pour la fusion des classes

#### **Structure des Composants UI**

```
components/
├── ui/
│   ├── card.tsx      # Composant Card shadcn/ui
│   └── chart.tsx     # Composant Chart pour Recharts
├── hamburger-menu.tsx # Menu hamburger personnalisé
└── progress-chart.tsx # Graphique de progression
```

#### **Lib Utils**

```
lib/
└── utils.ts          # Fonction cn() pour fusion des classes
```

#### **🎯 Avantages de l'Architecture UI**

**Accessibilité**

- ♿ **WCAG 2.1 AA** : Accessibilité native avec Radix UI
- 🎯 **Navigation clavier** : Support complet
- 📱 **Responsive** : Adaptation mobile/desktop

**Performance**

- ⚡ **Composants optimisés** : shadcn/ui léger et rapide
- 🎨 **Design system cohérent** : Réutilisabilité maximale
- 🔧 **Personnalisation facile** : Avec Tailwind CSS

**Développement**

- 🛠️ **DX excellente** : Composants prêts à l'emploi
- 📚 **Documentation intégrée** : shadcn/ui bien documenté
- 🔄 **Maintenance simplifiée** : Architecture modulaire

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
