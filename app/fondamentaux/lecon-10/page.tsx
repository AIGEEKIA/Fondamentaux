"use client";

import { useState } from "react";
import {
  Brain,
  Code,
  Database,
  Cloud,
  Home,
  Menu,
  X,
  BookOpen,
  ChefHat,
  ArrowRight,
  CheckCircle,
  Play,
  Target,
  Lightbulb,
  Users,
  GraduationCap,
  Package,
  Shield,
  Wrench,
  Hammer,
  Building2,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  AlertCircle,
  ArrowLeft,
  Gamepad2,
  Sprout,
  Leaf,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import HamburgerMenu from "@/components/hamburger-menu";
import Image from "next/image";

export default function Lecon10Page() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeAnalogy, setActiveAnalogy] = useState("cuisine");

  const copyToClipboard = (code: string, language: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const analogies = {
    cuisine: {
      title: "🍳 Cuisine",
      description:
        "Les fonctions imbriquées comme des recettes dans des recettes",
      examples: [
        "recette principale = fonction externe",
        "sous-recette = fonction interne",
        "ingrédients = variables capturées",
      ],
      explanation:
        "En cuisine, vous avez une recette principale qui contient des sous-recettes. Les fonctions imbriquées sont comme ça : une fonction dans une autre, avec accès aux ingrédients du parent.",
    },
    gamer: {
      title: "🎮 Gamer",
      description:
        "Les fonctions imbriquées comme des missions dans des missions",
      examples: [
        "mission principale = fonction externe",
        "sous-mission = fonction interne",
        "ressources = variables capturées",
      ],
      explanation:
        "Dans un jeu, vous avez une mission principale qui contient des sous-missions. Les fonctions imbriquées sont comme ça : une mission dans une autre, avec accès aux ressources du parent.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les fonctions imbriquées comme des zones dans des zones",
      examples: [
        "jardin principal = fonction externe",
        "parcelle = fonction interne",
        "nutriments = variables capturées",
      ],
      explanation:
        "Au jardin, vous avez un jardin principal qui contient des parcelles. Les fonctions imbriquées sont comme ça : une zone dans une autre, avec accès aux nutriments du parent.",
    },
  };

  const pythonCode = `# Fonctions imbriquées en Python

# 1. FONCTION IMBRIQUÉE SIMPLE
def fonction_externe():
    message = "Je suis dans la fonction externe"
    
    def fonction_interne():
        print("🔧 Fonction interne:", message)  # Accès à la variable du parent
    
    fonction_interne()

print("🐍 Test fonction imbriquée:")
fonction_externe()

# 2. CLOSURE - Fonction qui retourne une fonction
def createur_salutation(salutation):
    def saluer(nom):
        return f"{salutation}, {nom}!"
    return saluer

bonjour = createur_salutation("Bonjour")
salut = createur_salutation("Salut")

print("\\n👋 Closures:")
print(bonjour("Alice"))  # Bonjour, Alice!
print(salut("Bob"))      # Salut, Bob!

# 3. COMPTEUR AVEC CLOSURE
def createur_compteur():
    compteur = 0
    
    def incrementer():
        nonlocal compteur
        compteur += 1
        return compteur
    
    def obtenir():
        return compteur
    
    return incrementer, obtenir

inc, get = createur_compteur()
print("\\n🔢 Compteur:")
print("Valeur:", get())  # 0
inc()  # 1
inc()  # 2
print("Valeur finale:", get())  # 2

# 4. CALCULATRICE AVEC CLOSURES
def createur_calculatrice():
    historique = []
    
    def additionner(a, b):
        resultat = a + b
        historique.append(f"{a} + {b} = {resultat}")
        return resultat
    
    def soustraire(a, b):
        resultat = a - b
        historique.append(f"{a} - {b} = {resultat}")
        return resultat
    
    def voir_historique():
        return historique
    
    return additionner, soustraire, voir_historique

add, sub, hist = createur_calculatrice()
print("\\n🧮 Calculatrice:")
print("5 + 3 =", add(5, 3))
print("10 - 4 =", sub(10, 4))
print("Historique:", hist())

# 5. DÉCORATEUR SIMPLE
def decorateur_simple(fonction):
    def wrapper():
        print("🎀 Avant l'exécution")
        resultat = fonction()
        print("🎀 Après l'exécution")
        return resultat
    return wrapper

@decorateur_simple
def fonction_test():
    print("🔧 Fonction en cours d'exécution")

print("\\n🎀 Décorateur:")
fonction_test()`;

  const javascriptCode = `// Fonctions imbriquées en JavaScript

// 1. FONCTION IMBRIQUÉE SIMPLE
function fonctionExterne() {
    let message = "Je suis dans la fonction externe";
    
    function fonctionInterne() {
        console.log("🔧 Fonction interne:", message);  // Accès à la variable du parent
    }
    
    fonctionInterne();
}

console.log("🐍 Test fonction imbriquée:");
fonctionExterne();

// 2. CLOSURE - Fonction qui retourne une fonction
function createurSalutation(salutation) {
    return function saluer(nom) {
        return \`\${salutation}, \${nom}!\`;
    };
}

const bonjour = createurSalutation("Bonjour");
const salut = createurSalutation("Salut");

console.log("\\n👋 Closures:");
console.log(bonjour("Alice"));  // Bonjour, Alice!
console.log(salut("Bob"));      // Salut, Bob!

// 3. COMPTEUR AVEC CLOSURE
function createurCompteur() {
    let compteur = 0;
    
    function incrementer() {
        compteur += 1;
        return compteur;
    }
    
    function obtenir() {
        return compteur;
    }
    
    return { incrementer, obtenir };
}

const { incrementer, obtenir } = createurCompteur();
console.log("\\n🔢 Compteur:");
console.log("Valeur:", obtenir());  // 0
incrementer();  // 1
incrementer();  // 2
console.log("Valeur finale:", obtenir());  // 2

// 4. CALCULATRICE AVEC CLOSURES
function createurCalculatrice() {
    const historique = [];
    
    function additionner(a, b) {
        const resultat = a + b;
        historique.push(\`\${a} + \${b} = \${resultat}\`);
        return resultat;
    }
    
    function soustraire(a, b) {
        const resultat = a - b;
        historique.push(\`\${a} - \${b} = \${resultat}\`);
        return resultat;
    }
    
    function voirHistorique() {
        return historique;
    }
    
    return { additionner, soustraire, voirHistorique };
}

const { additionner, soustraire, voirHistorique } = createurCalculatrice();
console.log("\\n🧮 Calculatrice:");
console.log("5 + 3 =", additionner(5, 3));
console.log("10 - 4 =", soustraire(10, 4));
console.log("Historique:", voirHistorique());

// 5. DÉCORATEUR SIMPLE
function decorateurSimple(fonction) {
    return function wrapper() {
        console.log("🎀 Avant l'exécution");
        const resultat = fonction();
        console.log("🎀 Après l'exécution");
        return resultat;
    };
}

const fonctionTest = decorateurSimple(function() {
    console.log("🔧 Fonction en cours d'exécution");
});

console.log("\\n🎀 Décorateur:");
fonctionTest();`;

  const typescriptCode = `// Fonctions imbriquées en TypeScript

// 1. FONCTION IMBRIQUÉE SIMPLE
function fonctionExterne(): void {
    let message: string = "Je suis dans la fonction externe";
    
    function fonctionInterne(): void {
        console.log("🔧 Fonction interne:", message);  // Accès à la variable du parent
    }
    
    fonctionInterne();
}

console.log("🐍 Test fonction imbriquée:");
fonctionExterne();

// 2. CLOSURE - Fonction qui retourne une fonction
function createurSalutation(salutation: string): (nom: string) => string {
    return function saluer(nom: string): string {
        return \`\${salutation}, \${nom}!\`;
    };
}

const bonjour: (nom: string) => string = createurSalutation("Bonjour");
const salut: (nom: string) => string = createurSalutation("Salut");

console.log("\\n👋 Closures:");
console.log(bonjour("Alice"));  // Bonjour, Alice!
console.log(salut("Bob"));      // Salut, Bob!

// 3. COMPTEUR AVEC CLOSURE
function createurCompteur(): { incrementer: () => number; obtenir: () => number } {
    let compteur: number = 0;
    
    function incrementer(): number {
        compteur += 1;
        return compteur;
    }
    
    function obtenir(): number {
        return compteur;
    }
    
    return { incrementer, obtenir };
}

const { incrementer, obtenir } = createurCompteur();
console.log("\\n🔢 Compteur:");
console.log("Valeur:", obtenir());  // 0
incrementer();  // 1
incrementer();  // 2
console.log("Valeur finale:", obtenir());  // 2

// 4. INTERFACE POUR CALCULATRICE
interface Calculatrice {
    additionner: (a: number, b: number) => number;
    soustraire: (a: number, b: number) => number;
    voirHistorique: () => string[];
}

function createurCalculatrice(): Calculatrice {
    const historique: string[] = [];
    
    function additionner(a: number, b: number): number {
        const resultat: number = a + b;
        historique.push(\`\${a} + \${b} = \${resultat}\`);
        return resultat;
    }
    
    function soustraire(a: number, b: number): number {
        const resultat: number = a - b;
        historique.push(\`\${a} - \${b} = \${resultat}\`);
        return resultat;
    }
    
    function voirHistorique(): string[] {
        return historique;
    }
    
    return { additionner, soustraire, voirHistorique };
}

const { additionner, soustraire, voirHistorique } = createurCalculatrice();
console.log("\\n🧮 Calculatrice:");
console.log("5 + 3 =", additionner(5, 3));
console.log("10 - 4 =", soustraire(10, 4));
console.log("Historique:", voirHistorique());

// 5. DÉCORATEUR AVEC TYPES
type FonctionDecorateur<T extends (...args: any[]) => any> = (fn: T) => T;

function decorateurSimple<T extends () => any>(fonction: T): T {
    return function wrapper() {
        console.log("🎀 Avant l'exécution");
        const resultat = fonction();
        console.log("🎀 Après l'exécution");
        return resultat;
    } as T;
}

const fonctionTest = decorateurSimple(function(): void {
    console.log("🔧 Fonction en cours d'exécution");
});

console.log("\\n🎀 Décorateur:");
fonctionTest();`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500/40 via-blue-600/40 to-blue-700/40 text-white py-6 shadow-lg z-40 overflow-hidden rounded-2xl mx-4 mt-4 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          {/* Logo AIGEEKIA */}
          <div className="absolute top-6 right-12 z-10">
            <Link
              href="/"
              className="block hover:scale-110 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src="/Logo_AIGEEKIA.png"
                  alt="AIGEEKIA Logo"
                  width={56}
                  height={56}
                  className="object-cover rounded-full w-14 h-14"
                />
              </div>
            </Link>
          </div>

          {/* Signature By AIGEEKIA */}
          <div className="absolute bottom-2 right-12 z-10">
            <span className="text-white/80 font-medium text-xs italic">
              By AIGEEKIA
            </span>
          </div>

          <div className="text-center relative">
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md relative overflow-hidden">
              🔗 COURS 10 : FONCTIONS IMBRIQUÉES
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ CLOSURES ET FONCTIONS DANS DES FONCTIONS ⚡
            </p>
          </div>
        </div>
      </header>
      <HamburgerMenu currentPage="lecon-10" />

      {/* Menu hamburger */}

      <main className="container mx-auto px-4 py-8 mt-48">
        {/* Navigation breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-blue-600 font-semibold">
              Cours 10 : Fonctions imbriquées
            </span>
          </div>
        </nav>

        {/* Objectifs du cours */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                🎯 Objectifs du Cours
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Comprendre les fonctions imbriquées et les closures
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Fonctions imbriquées
                    </h4>
                    <p className="text-sm text-gray-600">
                      Fonctions dans des fonctions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Closures</h4>
                    <p className="text-sm text-gray-600">
                      Fonctions qui capturent des variables
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Applications pratiques
                    </h4>
                    <p className="text-sm text-gray-600">
                      Compteurs, calculatrices, décorateurs
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Analogies Universelles */}
        <section className="mb-12">
          <Card className="mb-8 bg-gradient-to-r from-blue-100 to-blue-100 border-2 border-blue-300 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                🌟 Analogies Simples
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Trois façons de comprendre les fonctions imbriquées selon votre
                univers
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Analogies côte à côte */}
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(analogies).map(([key, analogy]) => (
                  <div
                    key={key}
                    className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-6 border-2 border-blue-300 shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {analogy.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{analogy.description}</p>
                    <p className="text-gray-700 mb-4">{analogy.explanation}</p>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Exemples :
                      </h4>
                      <div className="space-y-2">
                        {analogy.examples.map((example, index) => (
                          <div
                            key={index}
                            className="bg-white rounded p-2 border border-blue-200 shadow-sm"
                          >
                            <code className="text-sm text-blue-600">
                              {example}
                            </code>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Exemples de Code */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-100/50 to-blue-100/50 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                💻 Exemples de Code
              </CardTitle>
              <CardDescription>
                Comparez les fonctions imbriquées dans les trois langages
                principaux
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Code examples côte à côte */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Python */}
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 font-mono text-sm">
                        Python
                      </span>
                      <Link
                        href="/langages/python"
                        className="text-blue-400 hover:text-blue-300 text-xs underline cursor-pointer"
                      >
                        En savoir plus sur Python
                      </Link>
                    </div>
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                    <code>{pythonCode}</code>
                  </pre>
                </div>

                {/* JavaScript */}
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 font-mono text-sm">
                        JavaScript
                      </span>
                      <Link
                        href="/langages/javascript"
                        className="text-blue-400 hover:text-blue-300 text-xs underline cursor-pointer"
                      >
                        En savoir plus sur JavaScript
                      </Link>
                    </div>
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                    <code>{javascriptCode}</code>
                  </pre>
                </div>

                {/* TypeScript */}
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 font-mono text-sm">
                        TypeScript
                      </span>
                      <Link
                        href="/langages/typescript"
                        className="text-blue-400 hover:text-blue-300 text-xs underline cursor-pointer"
                      >
                        En savoir plus sur TypeScript
                      </Link>
                    </div>
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                    <code>{typescriptCode}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mini-Application */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 border-2 border-emerald-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    🎯 Mini-Application : Gestionnaire de Tâches
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Créez un gestionnaire de tâches avec des closures
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4">
                  🐍 Instructions Python :
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                  <li>
                    <strong>Ouvrez le terminal/CLI :</strong>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
                      <li>
                        <strong>Windows :</strong> Appuyez sur{" "}
                        <code className="bg-gray-200 px-1 py-0.5 rounded">
                          Win + R
                        </code>
                        , tapez{" "}
                        <code className="bg-gray-200 px-1 py-0.5 rounded">
                          cmd
                        </code>{" "}
                        et appuyez sur Entrée
                      </li>
                      <li>
                        <strong>macOS :</strong> Appuyez sur{" "}
                        <code className="bg-gray-200 px-1 py-0.5 rounded">
                          Cmd + Espace
                        </code>
                        , tapez "Terminal" et appuyez sur Entrée
                      </li>
                      <li>
                        <strong>Linux :</strong> Appuyez sur{" "}
                        <code className="bg-gray-200 px-1 py-0.5 rounded">
                          Ctrl + Alt + T
                        </code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Vérifiez si Python est installé :{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded">
                      python --version
                    </code>
                  </li>
                  <li>
                    Si Python n'est pas installé, suivez le{" "}
                    <Link
                      href="/fondamentaux/installation-python"
                      className="text-purple-600 hover:text-purple-700 underline"
                    >
                      Cours Annexe : Installation Python
                    </Link>
                  </li>
                  <li>Créez un nouveau fichier Python (.py)</li>
                  <li>Copiez le code exemple ci-dessous</li>
                  <li>
                    Exécutez avec :{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded">
                      python nom-du-fichier.py
                    </code>
                  </li>
                </ol>

                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300 font-mono text-sm">
                      🐍 Gestionnaire de Tâches avec Closures
                    </span>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`# Gestionnaire de Tâches - Mini-Application

print("📋 GESTIONNAIRE DE TÂCHES AVEC CLOSURES")
print("=" * 60)

# 1. CRÉATEUR DE GESTIONNAIRE
def createur_gestionnaire():
    taches = []
    
    def ajouter_tache(tache):
        taches.append({"tache": tache, "terminee": False})
        print(f"✅ Tâche ajoutée: {tache}")
    
    def terminer_tache(index):
        if 0 <= index < len(taches):
            taches[index]["terminee"] = True
            print(f"🎯 Tâche terminée: {taches[index]['tache']}")
        else:
            print("❌ Index invalide")
    
    def voir_taches():
        if not taches:
            print("📝 Aucune tâche")
            return
        
        print("\\n📋 Liste des tâches:")
        for i, tache in enumerate(taches):
            statut = "✅" if tache["terminee"] else "⏳"
            print(f"{i}. {statut} {tache['tache']}")
    
    def supprimer_tache(index):
        if 0 <= index < len(taches):
            tache_supprimee = taches.pop(index)
            print(f"🗑️ Tâche supprimée: {tache_supprimee['tache']}")
        else:
            print("❌ Index invalide")
    
    return ajouter_tache, terminer_tache, voir_taches, supprimer_tache

# 2. UTILISATION DU GESTIONNAIRE
ajouter, terminer, voir, supprimer = createur_gestionnaire()

print("\\n🔧 Test du gestionnaire:")
ajouter("Apprendre les closures")
ajouter("Faire des exercices")
ajouter("Créer un projet")

voir()

terminer(0)
voir()

supprimer(1)
voir()

# 3. COMPTEUR DE TÂCHES
def createur_compteur_taches():
    total = 0
    terminees = 0
    
    def ajouter():
        nonlocal total
        total += 1
        print(f"📊 Total: {total}, Terminées: {terminees}")
    
    def terminer():
        nonlocal terminees
        if terminees < total:
            terminees += 1
            print(f"📊 Total: {total}, Terminées: {terminees}")
        else:
            print("❌ Toutes les tâches sont déjà terminées")
    
    def statistiques():
        return f"📊 {terminees}/{total} tâches terminées"
    
    return ajouter, terminer, statistiques

ajouter_compteur, terminer_compteur, stats = createur_compteur_taches()

print("\\n📊 Test du compteur:")
ajouter_compteur()
ajouter_compteur()
ajouter_compteur()
print(stats())
terminer_compteur()
terminer_compteur()
print(stats())

print("=" * 60)`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Points clés */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-emerald-500/20 to-green-600/20 border-2 border-emerald-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                📚 Points clés à retenir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Fonctions imbriquées
                      </h4>
                      <p className="text-sm text-gray-600">
                        Fonctions définies dans d'autres fonctions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Closures</h4>
                      <p className="text-sm text-gray-600">
                        Fonctions qui capturent des variables
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Accès aux variables
                      </h4>
                      <p className="text-sm text-gray-600">
                        Variables du parent accessibles
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Applications pratiques
                      </h4>
                      <p className="text-sm text-gray-600">
                        Compteurs, gestionnaires, décorateurs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Encapsulation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Données privées dans les closures
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Programmation avancée
                      </h4>
                      <p className="text-sm text-gray-600">
                        Base pour des patterns complexes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                🚀 Prêt pour la suite ?
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Maintenant que vous maîtrisez les fonctions imbriquées, passez
                aux décorateurs !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 11 : Décorateurs et métaprogrammation
                  </h3>
                  <p className="text-gray-600">
                    Modifier le comportement des fonctions
                  </p>
                </div>
                <Link
                  href="/fondamentaux/lecon-11"
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <span>Continuer</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
