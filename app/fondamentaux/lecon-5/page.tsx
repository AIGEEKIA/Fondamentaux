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

export default function Lecon5Page() {
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
      description: "Les fonctions de haut niveau comme des recettes avancées",
      examples: [
        "map = transformer chaque ingrédient",
        "filter = garder seulement les frais",
        "reduce = combiner tous les ingrédients",
      ],
      explanation:
        "En cuisine, vous avez des techniques avancées : transformer chaque ingrédient (map), filtrer les frais (filter), combiner tout (reduce). Les fonctions de haut niveau sont comme ces techniques culinaires avancées.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les fonctions de haut niveau comme des power-ups",
      examples: [
        "map = transformer chaque item",
        "filter = garder les rares",
        "reduce = combiner tous les bonus",
      ],
      explanation:
        "Dans un jeu, vous avez des power-ups : transformer chaque item (map), filtrer les rares (filter), combiner les bonus (reduce). Les fonctions de haut niveau sont comme ces améliorations de jeu.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description:
        "Les fonctions de haut niveau comme des techniques de culture",
      examples: [
        "map = traiter chaque plante",
        "filter = garder les saines",
        "reduce = récolter tout le jardin",
      ],
      explanation:
        "Au jardin, vous avez des techniques avancées : traiter chaque plante (map), filtrer les saines (filter), récolter tout (reduce). Les fonctions de haut niveau sont comme ces techniques de jardinage avancées.",
    },
  };

  const pythonCode = `# Fonctions de haut niveau en Python

# 1. MAP - Transformer chaque élément
nombres = [1, 2, 3, 4, 5]
carres = list(map(lambda x: x**2, nombres))
print("Map - Carrés :", carres)

# 2. FILTER - Filtrer les éléments
nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
pairs = list(filter(lambda x: x % 2 == 0, nombres))
print("Filter - Pairs :", pairs)

# 3. REDUCE - Combiner tous les éléments
from functools import reduce
nombres = [1, 2, 3, 4, 5]
somme = reduce(lambda acc, x: acc + x, nombres, 0)
print("Reduce - Somme :", somme)

# 4. COMPREHENSION - Alternative Python
nombres = [1, 2, 3, 4, 5]
carres = [x**2 for x in nombres]  # Map
pairs = [x for x in nombres if x % 2 == 0]  # Filter
print("Compréhension - Carrés :", carres)
print("Compréhension - Pairs :", pairs)

# 5. FONCTIONS PURES
def multiplier_par_2(x):
    return x * 2  # Même entrée = même sortie

def est_pair(x):
    return x % 2 == 0  # Fonction de test

resultats = list(map(multiplier_par_2, filter(est_pair, nombres)))
print("Chaînage :", resultats)`;

  const javascriptCode = `// Fonctions de haut niveau en JavaScript

// 1. MAP - Transformer chaque élément
const nombres = [1, 2, 3, 4, 5];
const carres = nombres.map(x => x**2);
console.log("Map - Carrés :", carres);

// 2. FILTER - Filtrer les éléments
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pairs = nombres.filter(x => x % 2 === 0);
console.log("Filter - Pairs :", pairs);

// 3. REDUCE - Combiner tous les éléments
const nombres = [1, 2, 3, 4, 5];
const somme = nombres.reduce((acc, x) => acc + x, 0);
console.log("Reduce - Somme :", somme);

// 4. CHAINING - Enchaîner les méthodes
const resultats = nombres
    .filter(x => x % 2 === 0)  // Filtrer les pairs
    .map(x => x**2)            // Élever au carré
    .reduce((acc, x) => acc + x, 0);  // Sommer
console.log("Chaînage :", resultats);

// 5. FONCTIONS PURES
const multiplierPar2 = x => x * 2;  // Même entrée = même sortie
const estPair = x => x % 2 === 0;   // Fonction de test

const resultatsPurs = nombres
    .filter(estPair)
    .map(multiplierPar2);
console.log("Fonctions pures :", resultatsPurs);`;

  const typescriptCode = `// Fonctions de haut niveau en TypeScript

// 1. MAP - Transformer chaque élément
const nombres: number[] = [1, 2, 3, 4, 5];
const carres: number[] = nombres.map((x: number) => x**2);
console.log("Map - Carrés :", carres);

// 2. FILTER - Filtrer les éléments
const nombres: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pairs: number[] = nombres.filter((x: number) => x % 2 === 0);
console.log("Filter - Pairs :", pairs);

// 3. REDUCE - Combiner tous les éléments
const nombres: number[] = [1, 2, 3, 4, 5];
const somme: number = nombres.reduce((acc: number, x: number) => acc + x, 0);
console.log("Reduce - Somme :", somme);

// 4. GENERICS - Fonctions génériques
function map<T, U>(array: T[], fn: (item: T) => U): U[] {
    return array.map(fn);
}

function filter<T>(array: T[], fn: (item: T) => boolean): T[] {
    return array.filter(fn);
}

function reduce<T, U>(array: T[], fn: (acc: U, item: T) => U, initial: U): U {
    return array.reduce(fn, initial);
}

// 5. UTILISATION AVEC TYPES
interface Utilisateur {
    id: number;
    nom: string;
    age: number;
}

const utilisateurs: Utilisateur[] = [
    { id: 1, nom: "Alice", age: 25 },
    { id: 2, nom: "Bob", age: 30 },
    { id: 3, nom: "Charlie", age: 35 }
];

const noms: string[] = map(utilisateurs, u => u.nom);
const adultes: Utilisateur[] = filter(utilisateurs, u => u.age >= 18);
const totalAge: number = reduce(utilisateurs, (acc, u) => acc + u.age, 0);

console.log("Noms :", noms);
console.log("Adultes :", adultes);
console.log("Total âge :", totalAge);`;

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
              🚀 COURS 5 : FONCTIONS DE HAUT NIVEAU
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ PROGRAMMATION FONCTIONNELLE AVANCÉE ⚡
            </p>
          </div>
        </div>
      </header>

      {/* Menu hamburger */}
      <HamburgerMenu currentPage="lecon-5" />

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
              Cours 5 : Fonctions de haut niveau
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
                Maîtriser la programmation fonctionnelle avec map, filter et
                reduce
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Comprendre map, filter, reduce
                    </h4>
                    <p className="text-sm text-gray-600">
                      Les trois piliers de la programmation fonctionnelle
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Comparer les langages
                    </h4>
                    <p className="text-sm text-gray-600">
                      Python, JavaScript et TypeScript
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Pratiquer avec Cursor
                    </h4>
                    <p className="text-sm text-gray-600">
                      Mini-application interactive
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
                Trois façons de comprendre les fonctions de haut niveau selon
                votre univers
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
                Comparez les fonctions de haut niveau dans les trois langages
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
                    <button
                      onClick={() => copyToClipboard(pythonCode, "python")}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                      {copiedCode === "python" ? (
                        <CheckCircle size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                      <span className="text-sm">
                        {copiedCode === "python" ? "Copié !" : "Copier"}
                      </span>
                    </button>
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
                    <button
                      onClick={() =>
                        copyToClipboard(javascriptCode, "javascript")
                      }
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                      {copiedCode === "javascript" ? (
                        <CheckCircle size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                      <span className="text-sm">
                        {copiedCode === "javascript" ? "Copié !" : "Copier"}
                      </span>
                    </button>
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
                    <button
                      onClick={() =>
                        copyToClipboard(typescriptCode, "typescript")
                      }
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                      {copiedCode === "typescript" ? (
                        <CheckCircle size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                      <span className="text-sm">
                        {copiedCode === "typescript" ? "Copié !" : "Copier"}
                      </span>
                    </button>
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
          <Card className="bg-gradient-to-br from-green-500/20 to-blue-600/20 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    🎯 Mini-Application : Traitement de Données
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Créez un système de traitement avec map, filter et reduce
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
                      🐍 Traitement Python
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `# Traitement de Données - Mini-Application

from functools import reduce

# Données d'exemple
etudiants = [
    {"nom": "Alice", "notes": [15, 18, 12, 16]},
    {"nom": "Bob", "notes": [10, 14, 8, 12]},
    {"nom": "Charlie", "notes": [20, 19, 18, 17]},
    {"nom": "Diana", "notes": [12, 11, 13, 14]}
]

print("📊 TRAITEMENT DE DONNÉES AVANCÉ")
print("=" * 50)

# 1. MAP - Calculer les moyennes
def calculer_moyenne(notes):
    return sum(notes) / len(notes)

moyennes = list(map(lambda etudiant: {
    "nom": etudiant["nom"],
    "moyenne": calculer_moyenne(etudiant["notes"])
}, etudiants))

print("📈 MOYENNES :")
for etudiant in moyennes:
    print(f"👤 {etudiant['nom']}: {etudiant['moyenne']:.2f}")

# 2. FILTER - Étudiants avec moyenne >= 15
excellents = list(filter(lambda etudiant: etudiant["moyenne"] >= 15, moyennes))
print("\\n🏆 EXCELLENTS (moyenne >= 15):")
for etudiant in excellents:
    print(f"⭐ {etudiant['nom']}: {etudiant['moyenne']:.2f}")

# 3. REDUCE - Moyenne générale de la classe
moyenne_generale = reduce(lambda acc, etudiant: acc + etudiant["moyenne"], moyennes, 0) / len(moyennes)
print(f"\\n📊 MOYENNE GÉNÉRALE: {moyenne_generale:.2f}")

# 4. CHAINING - Tout en une fois
resultat_final = reduce(
    lambda acc, etudiant: acc + etudiant["moyenne"],
    filter(lambda etudiant: etudiant["moyenne"] >= 12, moyennes),
    0
)
print(f"📈 SOMME DES MOYENNES >= 12: {resultat_final:.2f}")

print("=" * 50)`,
                          "traitement"
                        )
                      }
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier le traitement
                    </button>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`# Traitement de Données - Mini-Application

from functools import reduce

# Données d'exemple
etudiants = [
    {"nom": "Alice", "notes": [15, 18, 12, 16]},
    {"nom": "Bob", "notes": [10, 14, 8, 12]},
    {"nom": "Charlie", "notes": [20, 19, 18, 17]},
    {"nom": "Diana", "notes": [12, 11, 13, 14]}
]

print("📊 TRAITEMENT DE DONNÉES AVANCÉ")
print("=" * 50)

# 1. MAP - Calculer les moyennes
def calculer_moyenne(notes):
    return sum(notes) / len(notes)

moyennes = list(map(lambda etudiant: {
    "nom": etudiant["nom"],
    "moyenne": calculer_moyenne(etudiant["notes"])
}, etudiants))

print("📈 MOYENNES :")
for etudiant in moyennes:
    print(f"👤 {etudiant['nom']}: {etudiant['moyenne']:.2f}")

# 2. FILTER - Étudiants avec moyenne >= 15
excellents = list(filter(lambda etudiant: etudiant["moyenne"] >= 15, moyennes))
print("\\n🏆 EXCELLENTS (moyenne >= 15):")
for etudiant in excellents:
    print(f"⭐ {etudiant['nom']}: {etudiant['moyenne']:.2f}")

# 3. REDUCE - Moyenne générale de la classe
moyenne_generale = reduce(lambda acc, etudiant: acc + etudiant["moyenne"], moyennes, 0) / len(moyennes)
print(f"\\n📊 MOYENNE GÉNÉRALE: {moyenne_generale:.2f}")

# 4. CHAINING - Tout en une fois
resultat_final = reduce(
    lambda acc, etudiant: acc + etudiant["moyenne"],
    filter(lambda etudiant: etudiant["moyenne"] >= 12, moyennes),
    0
)
print(f"📈 SOMME DES MOYENNES >= 12: {resultat_final:.2f}")

print("=" * 50)`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Points clés */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border-2 border-indigo-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                📚 Points clés à retenir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        MAP = Transformer
                      </h4>
                      <p className="text-sm text-gray-600">
                        Applique une fonction à chaque élément
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        FILTER = Sélectionner
                      </h4>
                      <p className="text-sm text-gray-600">
                        Garde seulement les éléments qui passent le test
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        REDUCE = Combiner
                      </h4>
                      <p className="text-sm text-gray-600">
                        Réduit tous les éléments en une seule valeur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Fonctions pures
                      </h4>
                      <p className="text-sm text-gray-600">
                        Même entrée = même sortie, pas d'effets de bord
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Chaînage</h4>
                      <p className="text-sm text-gray-600">
                        Enchaîner map, filter et reduce
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Pratique essentielle
                      </h4>
                      <p className="text-sm text-gray-600">
                        Base de la programmation fonctionnelle moderne
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
          <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-600/10 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                🚀 Prêt pour la suite ?
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Maintenant que vous maîtrisez les fonctions de haut niveau,
                passez aux concepts avancés !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 6 : Scope & Closures
                  </h3>
                  <p className="text-gray-600">
                    Variables globales vs locales et closures
                  </p>
                </div>
                <Link
                  href="/fondamentaux/lecon-6"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
