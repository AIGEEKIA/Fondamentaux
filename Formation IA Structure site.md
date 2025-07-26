

---
*Créé le : 2024-12-19*
*Source : Structure de la page d'accueil restructurée selon le fichier de formation*
# Structure de la Page d'Accueil - Formation IA

## Graphique Mermaid de la Navigation

```mermaid
graph TD
    %% Page d'accueil principale
    A[Page d'Accueil - Debuter efficacement dans le developpement] --> B[Section Analogies - Prerequis pedagogiques]
    A --> C[Section 4 Concepts Fondamentaux - Algorithmie, Scope, Closure, Gestion d'etat]
    A --> D[Statistiques - 37 cours, 4 concepts, 2 langages, 2 analogies]
    A --> E[Call-to-Action Final]

    %% Liens vers les analogies
    B --> F[Analogie Cuisine - Le Grand Livre de Cuisine du Developpeur Moderne]
    B --> G[Analogie Architecture - L'Architecte du Batiment dans le Developpement]
    
    %% Liens vers les concepts fondamentaux
    C --> H[Algorithmie - Variables, structures de controle, boucles, algorithmes]
    C --> I[Scope - Portee des variables, gestion des acces]
    C --> J[Closure - Fonctions imbriquees, captures de variables]
    C --> K[Gestion d'etat - Etat global/local, programmation asynchrone]

    %% Navigation vers les pages detaillees
    F --> L[analogies]
    G --> L
    H --> M[fondamentaux]
    I --> M
    J --> M
    K --> M

    %% Style des noeuds
    classDef pageAccueil fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef section fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    classDef concept fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px
    classDef analogie fill:#fff3e0,stroke:#e65100,stroke-width:2px
    classDef lien fill:#fce4ec,stroke:#880e4f,stroke-width:2px

    class A pageAccueil
    class B,C,D,E section
    class H,I,J,K concept
    class F,G analogie
    class L,M lien
```

## Structure de la Page d'Accueil

### **Flux de Navigation**

1. **Page d'Accueil** → Introduction principale avec le message du fichier de formation
2. **Section Analogies** → Prérequis pédagogiques (2 analogies)
3. **Section 4 Concepts** → Les fondamentaux techniques
4. **Statistiques** → Vue d'ensemble (37 cours, 4 concepts, etc.)
5. **Call-to-Action** → Navigation finale

### **Liens Principaux**

- **Analogies** → `/analogies` (Le Grand Livre de Cuisine + Architecture)
- **Concepts Fondamentaux** → `/fondamentaux` (37 cours organisés par concept)

### **Logique Pédagogique**

1. **Comprendre le contexte** (analogies) 
2. **Maîtriser les concepts** (4 fondamentaux)
3. **Pratiquer** (37 cours en parallèle Python/JS/TS)

Cette structure guide l'utilisateur de manière logique : contexte → concepts → pratique.

## Notes de Conception

### **Message Principal**
- Titre : "Débuter efficacement dans le développement : langage, fondamentaux, IA et parcours cohérent"
- Source : Fichier "Formation Les fondamentaux pour coder avec l'IA.md"

### **4 Concepts Fondamentaux**
1. **Algorithmie** - Variables, structures de contrôle, boucles, algorithmes
2. **Scope** - Portée des variables, gestion des accès
3. **Closure** - Fonctions imbriquées, captures de variables
4. **Gestion d'état** - État global/local, programmation asynchrone

### **Analogies Pédagogiques**
- **Le Grand Livre de Cuisine** : Recettes (algorithmes), ingrédients (variables), techniques (patterns)
- **L'Architecte du Bâtiment** : Plans (design), fondations (fondamentaux), étages (couches)

### **Statistiques**
- 37 cours fondamentaux
- 4 concepts fondamentaux
- 2 langages en parallèle (Python/JavaScript/TypeScript)
- 2 analogies pédagogiques

## Tags
#formation-ia #page-accueil #structure #mermaid #analogies #concepts-fondamentaux
