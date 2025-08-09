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
import Image from "next/image";
import LogoMenu from "@/components/logo-menu";

export default function Lecon4Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeAnalogy, setActiveAnalogy] = useState("cuisine");
  const [quizStates, setQuizStates] = useState<{ [key: string]: any }>({});
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);

  const handleQuizAnswer = (quizId: string, selectedAnswer: number) => {
    const quiz = quizData[quizId as keyof typeof quizData];
    const isCorrect = selectedAnswer === quiz.correctAnswer;

    setQuizStates((prev) => ({
      ...prev,
      [quizId]: true,
      [`${quizId}_selected`]: selectedAnswer,
    }));

    if (isCorrect) {
      setPoints((prev) => prev + 10);
      if (points >= 30 && !badges.includes("Collections Master")) {
        setBadges((prev) => [...prev, "Collections Master"]);
      }
    }
  };

  const QuizComponent = ({ quizId, quiz }: { quizId: string; quiz: any }) => {
    const isAnswered = Boolean(quizStates[quizId]);
    const selectedAnswer = quizStates[`${quizId}_selected`] as number;

    return (
      <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-lg p-6 border-2 border-purple-300/50">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            Quiz : {quiz.question}
          </h3>
        </div>

        <div className="space-y-3 mb-6">
          {quiz.options.map((option: string, index: number) => (
            <button
              key={index}
              onClick={() => {
                setQuizStates((prev) => ({
                  ...prev,
                  [quizId]: true,
                  [`${quizId}_selected`]: index,
                }));
                handleQuizAnswer(quizId, index);
              }}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                isAnswered
                  ? index === quiz.correctAnswer
                    ? "border-green-500 bg-green-50 text-green-800"
                    : index === selectedAnswer
                    ? "border-red-500 bg-red-50 text-red-800"
                    : "border-gray-200 bg-gray-50 text-gray-600"
                  : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {isAnswered && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 font-semibold">
              {selectedAnswer === quiz.correctAnswer
                ? "✅ Correct !"
                : "❌ Incorrect"}
            </p>
            <p className="text-blue-700 mt-2">{quiz.explication}</p>
          </div>
        )}
      </div>
    );
  };

  // Données des quiz
  const quizData = {
    quiz1: {
      question: "Qu'est-ce qu'une liste en programmation ?",
      options: [
        "Une collection ordonnée et modifiable",
        "Une collection immuable",
        "Une collection d'éléments uniques",
      ],
      correctAnswer: 0,
      explication:
        "Une liste est une collection ordonnée et modifiable qui permet de stocker des éléments dans un ordre spécifique.",
    },
    quiz2: {
      question: "Quel est l'avantage principal d'un dictionnaire ?",
      options: [
        "Il est toujours ordonné",
        "Accès rapide par clé",
        "Il ne permet pas les doublons",
      ],
      correctAnswer: 1,
      explication:
        "Un dictionnaire permet un accès rapide aux données grâce à un système de clé-valeur.",
    },
    quiz3: {
      question: "Quand utiliser un ensemble (Set) ?",
      options: [
        "Quand on veut garder l'ordre",
        "Quand on veut des clés et valeurs",
        "Quand on veut éviter les doublons",
      ],
      correctAnswer: 2,
      explication:
        "Un ensemble est parfait pour éliminer les doublons et vérifier l'appartenance d'un élément.",
    },
    quiz4: {
      question: "Quelle est la différence entre une liste et un tuple ?",
      options: [
        "La liste est modifiable, le tuple est immuable",
        "La liste est immuable, le tuple est modifiable",
        "Il n'y a aucune différence",
      ],
      correctAnswer: 0,
      explication:
        "Une liste peut être modifiée après création, tandis qu'un tuple reste immuable.",
    },
    quiz5: {
      question: "Quel est le meilleur choix pour stocker des coordonnées GPS ?",
      options: ["Une liste", "Un tuple", "Un dictionnaire"],
      correctAnswer: 1,
      explication:
        "Un tuple est parfait pour les coordonnées car elles ne changent jamais et l'ordre est important.",
    },
  };

  const copyToClipboard = (code: string, language: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const analogies = {
    cuisine: {
      title: "🍳 Cuisine",
      description: "Les collections comme des étagères organisées",
      examples: [
        "etagere = [ingredient1, ingredient2]",
        "placard = {'sel': 1, 'poivre': 2}",
        "frigo = set([lait, beurre])",
      ],
      explanation:
        "En cuisine, vous organisez vos ingrédients : étagères pour les listes, placards pour les dictionnaires, frigo pour les ensembles. Les collections sont comme ces espaces de rangement.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les collections comme des inventaires de jeu",
      examples: [
        "inventaire = [epee, bouclier, potion]",
        "stats = {'force': 15, 'agilite': 12}",
        "competences = set([tir, magie, combat])",
      ],
      explanation:
        "Dans un jeu, votre personnage a un inventaire : sac pour les listes, stats pour les dictionnaires, compétences pour les ensembles. Les collections sont comme ces systèmes d'inventaire.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les collections comme des zones de plantation",
      examples: [
        "parcelle = [tomate, carotte, salade]",
        "planning = {'mars': 'semis', 'avril': 'recolte'}",
        "especes = set([legumes, fruits, herbes])",
      ],
      explanation:
        "Au jardin, vous organisez vos plantations : parcelles pour les listes, planning pour les dictionnaires, espèces pour les ensembles. Les collections sont comme ces zones organisées.",
    },
  };

  const pythonCode = `# Collections avancées en Python

# 1. LISTE - Collection ordonnée et modifiable
fruits = ["🍎", "🍌", "🍊"]
fruits.append("🍇")  # Ajouter
fruits.remove("🍌")  # Supprimer
print("Liste :", fruits)

# 2. TUPLE - Collection ordonnée et immuable
coordonnees = (48.8566, 2.3522)
print("Tuple :", coordonnees)

# 3. DICTIONNAIRE - Collection clé-valeur
personne = {
    "nom": "Marie",
    "age": 25,
    "ville": "Paris"
}
personne["metier"] = "Développeuse"  # Ajouter
print("Dictionnaire :", personne)

# 4. SET - Collection d'éléments uniques
couleurs = {"rouge", "vert", "bleu"}
couleurs.add("jaune")  # Ajouter
couleurs.discard("vert")  # Supprimer
print("Set :", couleurs)

# 5. COMPREHENSION - Création rapide
nombres = [1, 2, 3, 4, 5]
carres = [x**2 for x in nombres]
print("Carrés :", carres)`;

  const javascriptCode = `// Collections avancées en JavaScript

// 1. ARRAY - Collection ordonnée et modifiable
const fruits = ["🍎", "🍌", "🍊"];
fruits.push("🍇");  // Ajouter
fruits.splice(1, 1);  // Supprimer
console.log("Array :", fruits);

// 2. OBJECT - Collection clé-valeur
const personne = {
    nom: "Marie",
    age: 25,
    ville: "Paris"
};
personne.metier = "Développeuse";  // Ajouter
console.log("Object :", personne);

// 3. SET - Collection d'éléments uniques
const couleurs = new Set(["rouge", "vert", "bleu"]);
couleurs.add("jaune");  // Ajouter
couleurs.delete("vert");  // Supprimer
console.log("Set :", couleurs);

// 4. MAP - Collection clé-valeur ordonnée
const scores = new Map();
scores.set("Alice", 100);
scores.set("Bob", 85);
console.log("Map :", scores);

// 5. COMPREHENSION - Méthodes fonctionnelles
const nombres = [1, 2, 3, 4, 5];
const carres = nombres.map(x => x**2);
console.log("Carrés :", carres);`;

  const typescriptCode = `// Collections avancées en TypeScript

// 1. ARRAY typé - Collection ordonnée et modifiable
const fruits: string[] = ["🍎", "🍌", "🍊"];
fruits.push("🍇");  // Ajouter
fruits.splice(1, 1);  // Supprimer
console.log("Array :", fruits);

// 2. INTERFACE - Structure typée
interface Personne {
    nom: string;
    age: number;
    ville: string;
    metier?: string;  // Optionnel
}

const personne: Personne = {
    nom: "Marie",
    age: 25,
    ville: "Paris"
};
personne.metier = "Développeuse";
console.log("Personne :", personne);

// 3. SET typé - Collection d'éléments uniques
const couleurs: Set<string> = new Set(["rouge", "vert", "bleu"]);
couleurs.add("jaune");
couleurs.delete("vert");
console.log("Set :", couleurs);

// 4. MAP typé - Collection clé-valeur ordonnée
const scores: Map<string, number> = new Map();
scores.set("Alice", 100);
scores.set("Bob", 85);
console.log("Map :", scores);

// 5. GENERICS - Collections génériques
function premierElement<T>(array: T[]): T | undefined {
    return array[0];
}

const nombres: number[] = [1, 2, 3];
const premier = premierElement(nombres);
console.log("Premier :", premier);`;

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
                  src="/Logo_AIGEKIA.png"
                  alt="Logo AIGEKIA"
                  width={56}
                  height={56}
                  className="object-cover rounded-full w-14 h-14"
                />
              </div>
            </Link>
          </div>

          <div className="text-center relative">
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md relative overflow-hidden">
              COURS 4 : COLLECTIONS AVANCÉES
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ COMPARAISON MULTI-LANGAGES ⚡
            </p>
          </div>
        </div>
      </header>

      {/* Menu hamburger */}
      <LogoMenu currentPage="cours-4" />

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
              Cours 4 : Collections avancées
            </span>
          </div>
        </nav>

        {/* Objectifs du Cours */}
        <section className="mb-12">
          <Card className="rounded-lg bg-card text-card-foreground bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
            <div className="flex flex-col space-y-1.5 p-6 text-center">
              <h3 className="tracking-tight text-3xl font-bold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2 text-center flex items-center justify-center gap-4">
                🎯 Objectifs du Cours 🎯
              </h3>
              <p className="text-lg text-gray-600">
                Maîtriser les collections avancées dans 3 langages populaires
              </p>
            </div>
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Comprendre les collections
                    </h4>
                    <p className="text-sm text-gray-600">
                      Listes, dictionnaires, ensembles et plus
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
            </div>
          </Card>
        </section>

        {/* Analogies Simples */}
        <section className="mb-12">
          <Card className="mb-8 bg-gradient-to-r from-blue-100 to-blue-100 border-2 border-blue-300 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                🌟 Analogies Simples
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Trois façons de comprendre les collections selon votre univers
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Analogies côte à côte */}
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(analogies).map(([key, analogy]) => (
                  <div
                    key={key}
                    className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-6 border-2 border-blue-300 shadow-lg hover:scale-105 transition-transform duration-300"
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

        {/* Définition Simple */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    DÉFINITION SIMPLE
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Une collection, c'est quoi exactement ?
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🎯 Qu'est-ce qu'une Collection ?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Une <strong>collection</strong> est un conteneur qui
                    regroupe plusieurs éléments de données. C'est comme une
                    boîte organisée qui peut contenir différents types d'objets
                    selon des règles spécifiques.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">📦</div>
                      <div className="font-semibold text-blue-800">
                        Conteneur de Données
                      </div>
                      <div className="text-sm text-blue-600">
                        Regroupe plusieurs éléments
                      </div>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">🏷️</div>
                      <div className="font-semibold text-purple-800">
                        Règles Spécifiques
                      </div>
                      <div className="text-sm text-purple-600">
                        Chaque type a ses propriétés
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🔤 Types de Collections
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">📋</div>
                      <div className="font-semibold text-orange-800">
                        Listes
                      </div>
                      <div className="text-sm text-orange-600">
                        Ordonnées, modifiables
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🗂️</div>
                      <div className="font-semibold text-orange-800">
                        Dictionnaires
                      </div>
                      <div className="text-sm text-orange-600">Clé-valeur</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🔢</div>
                      <div className="font-semibold text-orange-800">
                        Ensembles
                      </div>
                      <div className="text-sm text-orange-600">
                        Éléments uniques
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">📦</div>
                      <div className="font-semibold text-orange-800">
                        Tuples
                      </div>
                      <div className="text-sm text-orange-600">Immuables</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    💻 Bout de Code Structurel Obligatoire
                  </h4>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 font-mono text-sm">
                      <code>{`# Structure de base des collections

# 1. LISTE - Collection ordonnée et modifiable
ma_liste = [element1, element2, element3]
ma_liste.append(nouvel_element)  # Ajouter
ma_liste.remove(element)         # Supprimer

# 2. DICTIONNAIRE - Collection clé-valeur
mon_dict = {"cle1": valeur1, "cle2": valeur2}
mon_dict["nouvelle_cle"] = nouvelle_valeur  # Ajouter
del mon_dict["cle"]              # Supprimer

# 3. ENSEMBLE - Collection d'éléments uniques
mon_set = {element1, element2, element3}
mon_set.add(nouvel_element)      # Ajouter
mon_set.discard(element)         # Supprimer

# 4. TUPLE - Collection ordonnée et immuable
mon_tuple = (element1, element2, element3)
# Pas de modification possible après création`}</code>
                    </pre>
                  </div>
                </div>
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
                Comparez les collections dans les trois langages principaux
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
                <div className="text-center">
                  <Play className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Mini-Application : Gestionnaire de Contacts
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Créez un gestionnaire de contacts avec des collections
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
                      🐍 Gestionnaire Python
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `# Gestionnaire de Contacts - Mini-Application

contacts = {}
emails = set()

print("📞 GESTIONNAIRE DE CONTACTS")
print("=" * 40)

# Ajouter des contacts
contacts["Marie"] = {"tel": "0123456789", "email": "marie@email.com"}
contacts["Pierre"] = {"tel": "0987654321", "email": "pierre@email.com"}
emails.add("marie@email.com")
emails.add("pierre@email.com")

# Afficher tous les contacts
print("📋 CONTACTS :")
for nom, info in contacts.items():
    print(f"👤 {nom}")
    print(f"   📞 {info['tel']}")
    print(f"   📧 {info['email']}")
    print()

# Rechercher un contact
recherche = "Marie"
if recherche in contacts:
    print(f"✅ Contact trouvé : {recherche}")
    print(f"📞 {contacts[recherche]['tel']}")
else:
    print(f"❌ Contact non trouvé : {recherche}")

print("=" * 40)
print(f"📧 Emails uniques : {len(emails)}")
print("=" * 40)`,
                          "gestionnaire"
                        )
                      }
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier le gestionnaire
                    </button>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`# Gestionnaire de Contacts - Mini-Application

contacts = {}
emails = set()

print("📞 GESTIONNAIRE DE CONTACTS")
print("=" * 40)

# Ajouter des contacts
contacts["Marie"] = {"tel": "0123456789", "email": "marie@email.com"}
contacts["Pierre"] = {"tel": "0987654321", "email": "pierre@email.com"}
emails.add("marie@email.com")
emails.add("pierre@email.com")

# Afficher tous les contacts
print("📋 CONTACTS :")
for nom, info in contacts.items():
    print(f"👤 {nom}")
    print(f"   📞 {info['tel']}")
    print(f"   📧 {info['email']}")
    print()

# Rechercher un contact
recherche = "Marie"
if recherche in contacts:
    print(f"✅ Contact trouvé : {recherche}")
    print(f"📞 {contacts[recherche]['tel']}")
else:
    print(f"❌ Contact non trouvé : {recherche}")

print("=" * 40)
print(f"📧 Emails uniques : {len(emails)}")
print("=" * 40)`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quiz Interactifs */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-2 border-purple-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Quiz Interactifs
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Testez vos connaissances sur les collections
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {Object.entries(quizData).map(([quizId, quiz]) => (
                  <QuizComponent key={quizId} quizId={quizId} quiz={quiz} />
                ))}
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
                Maintenant que vous maîtrisez les collections, passez aux
                fonctions de haut niveau !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 5 : Fonctions de haut niveau
                  </h3>
                  <p className="text-gray-600">
                    map, filter, reduce et programmation fonctionnelle
                  </p>
                </div>
                <Link
                  href="/fondamentaux/cours-5"
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
