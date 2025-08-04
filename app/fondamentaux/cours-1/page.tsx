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
  Calculator,
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

export default function Lecon1Page() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [quizStates, setQuizStates] = useState<{ [key: string]: any }>({});
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);

  const copyToClipboard = (code: string, language: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleQuizAnswer = (quizId: string, selectedAnswer: number) => {
    const quiz = quizData[quizId as keyof typeof quizData];
    const isCorrect = selectedAnswer === quiz.correctAnswer;

    setQuizStates((prev) => ({ ...prev, [quizId]: true }));

    if (isCorrect) {
      setPoints((prev) => prev + 10);
      if (points >= 30 && !badges.includes("Variables Master")) {
        setBadges((prev) => [...prev, "Variables Master"]);
      }
    }
  };

  const QuizComponent = ({ quizId, quiz }: { quizId: string; quiz: any }) => {
    const isAnswered = Boolean(quizStates[quizId]);
    const selectedAnswer = quizStates[`${quizId}_selected`] as number;

    return (
      <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-lg p-6 border-2 border-purple-300/50">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="h-6 w-6 text-purple-600" />
          <h3 className="text-xl font-bold text-gray-800">
            Quiz : {quiz.question}
          </h3>
        </div>

        <div className="space-y-3 mb-6">
          {quiz.options.map((option: string, index: number) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnswered) {
                  setQuizStates((prev) => ({
                    ...prev,
                    [quizId]: true,
                    [`${quizId}_selected`]: index,
                  }));
                  handleQuizAnswer(quizId, index);
                }
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
      question: "Quelle est la différence entre let et const en JavaScript ?",
      options: [
        "let est pour les nombres, const pour les textes",
        "let permet de modifier la variable, const non",
        "const est plus rapide que let",
        "Il n'y a aucune différence",
      ],
      correctAnswer: 1,
      explication:
        "let permet de modifier la valeur de la variable, tandis que const crée une variable constante qui ne peut pas être modifiée après sa déclaration.",
    },
    quiz2: {
      question: "Quel type de données stocke true ou false ?",
      options: ["String", "Number", "Boolean", "Array"],
      correctAnswer: 2,
      explication:
        "Boolean est le type qui stocke les valeurs true (vrai) ou false (faux). C'est essentiel pour la logique conditionnelle.",
    },
    quiz3: {
      question: "Comment déclarer une variable en Python ?",
      options: [
        "var nom = 'Alice'",
        "let nom = 'Alice'",
        "nom = 'Alice'",
        "const nom = 'Alice'",
      ],
      correctAnswer: 2,
      explication:
        "En Python, on déclare une variable simplement en lui assignant une valeur. Pas besoin de mot-clé comme let ou var.",
    },
    quiz4: {
      question: "Qu'est-ce qu'une variable en programmation ?",
      options: [
        "Un fichier de code",
        "Un espace de stockage nommé",
        "Un type de boucle",
        "Une fonction",
      ],
      correctAnswer: 1,
      explication:
        "Une variable est un espace de stockage nommé dans la mémoire qui peut contenir des données (nombres, textes, etc.).",
    },
    quiz5: {
      question:
        "Quel symbole utilise-t-on pour les template literals en JavaScript ?",
      options: [
        "Les guillemets simples ''",
        'Les guillemets doubles ""',
        "Les backticks ``",
        "Les crochets []",
      ],
      correctAnswer: 2,
      explication:
        "Les template literals utilisent les backticks (``) et permettent d'insérer des variables avec ${variable} pour créer des chaînes dynamiques.",
    },
  };

  // Analogies pour les variables
  const analogies = {
    cuisine: {
      title: "🍳 Cuisine",
      description: "Les variables sont comme des boîtes d'ingrédients",
      explanation:
        "Chaque boîte contient un ingrédient spécifique (nombre, texte, etc.) que vous pouvez utiliser dans vos recettes (programmes).",
      examples: [
        "let farine = 500; // 500g de farine",
        "const sel = 'fin'; // Type de sel",
        "var temperature = 180; // Température du four",
      ],
    },
    sport: {
      title: "⚽ Sport",
      description: "Les variables sont comme des scores et statistiques",
      explanation:
        "Vous gardez trace des points, du temps, des performances dans des variables pour analyser les résultats.",
      examples: [
        "let scoreEquipe = 3; // Buts marqués",
        "const tempsMatch = 90; // Minutes de jeu",
        "var joueur = 'Messi'; // Nom du joueur",
      ],
    },
    voyage: {
      title: "✈️ Voyage",
      description: "Les variables sont comme des informations de voyage",
      explanation:
        "Vous stockez la destination, le budget, les dates dans des variables pour organiser votre voyage.",
      examples: [
        "let destination = 'Paris'; // Ville de destination",
        "const budget = 1500; // Budget en euros",
        "var dateDepart = '2024-06-15'; // Date de départ",
      ],
    },
  };

  // Code examples pour les variables
  const pythonCode = `# Variables en Python
# 1. Déclaration simple (pas de mot-clé)
nom = "Alice"
age = 25
est_etudiant = True

# 2. Constantes (convention)
PI = 3.14159
VILLE = "Paris"

# 3. Types de données
nombre = 42              # int
decimal = 3.14          # float
texte = "Bonjour"       # str
booleen = True          # bool
liste = [1, 2, 3]      # list
dictionnaire = {"nom": "Bob"}  # dict
rien = None             # NoneType

# 4. Template literals (f-strings)
nom = "Alice"
age = 25
message = f"Je m'appelle {nom} et j'ai {age} ans"
print(message)  # Je m'appelle Alice et j'ai 25 ans`;

  const javascriptCode = `// Variables en JavaScript
// 1. Déclaration avec let (modifiable)
let nom = "Alice";
let age = 25;
let estEtudiant = true;

// 2. Déclaration avec const (non modifiable)
const PI = 3.14159;
const VILLE = "Paris";

// 3. Déclaration avec var (ancienne méthode)
var ancienneVariable = "déconseillé";

// 4. Types de données
let nombre = 42;           // Number
let texte = "Bonjour";     // String
let booleen = true;        // Boolean
let tableau = [1, 2, 3];  // Array
let objet = {nom: "Bob"}; // Object
let rien = null;          // Null

// 5. Template literals
let nom = "Alice";
let age = 25;
let message = \`Je m'appelle \${nom} et j'ai \${age} ans\`;
console.log(message); // Je m'appelle Alice et j'ai 25 ans`;

  const typescriptCode = `// Variables en TypeScript
// 1. Déclaration avec types explicites
let nom: string = "Alice";
let age: number = 25;
let estEtudiant: boolean = true;

// 2. Inférence de type
let nombre = 42;           // TypeScript devine number
let texte = "Bonjour";     // TypeScript devine string

// 3. Types complexes
let tableau: number[] = [1, 2, 3];
let objet: {nom: string, age: number} = {nom: "Bob", age: 30};

// 4. Union types
let valeur: string | number = "texte";
valeur = 42; // Valide aussi

// 5. Constantes avec types
const PI: number = 3.14159;
const VILLE: string = "Paris";

// 6. Template literals
let nom: string = "Alice";
let age: number = 25;
let message: string = \`Je m'appelle \${nom} et j'ai \${age} ans\`;
console.log(message); // Je m'appelle Alice et j'ai 25 ans`;

  // Mini-application : Calculateur simple
  const miniAppCode = `# Calculateur simple avec variables - Mini-Application

print("🧮 CALCULATEUR SIMPLE AVEC VARIABLES")
print("=" * 50)

# 1. Déclaration des variables
nombre1 = 10
nombre2 = 5
operation = "+"

print(f"Nombre 1: {nombre1}")
print(f"Nombre 2: {nombre2}")
print(f"Opération: {operation}")

# 2. Calcul selon l'opération
if operation == "+":
    resultat = nombre1 + nombre2
    print(f"Addition: {nombre1} + {nombre2} = {resultat}")
elif operation == "-":
    resultat = nombre1 - nombre2
    print(f"Soustraction: {nombre1} - {nombre2} = {resultat}")
elif operation == "*":
    resultat = nombre1 * nombre2
    print(f"Multiplication: {nombre1} * {nombre2} = {resultat}")
elif operation == "/":
    if nombre2 != 0:
        resultat = nombre1 / nombre2
        print(f"Division: {nombre1} / {nombre2} = {resultat}")
    else:
        print("Erreur: Division par zéro!")
else:
    print("Opération non reconnue")

# 3. Affichage du résultat
print("=" * 50)
print("✅ Calcul terminé avec succès!")`;

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
              📦 COURS 1 : VARIABLES
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              JAVASCRIPT, PYTHON & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ STOCKAGE ET ORGANISATION DE DONNÉES ⚡
            </p>
          </div>
        </div>
      </header>

      {/* Hamburger Menu */}
      <HamburgerMenu />

      <main className="container mx-auto px-4 py-8 mt-48">
        {/* Navigation breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-blue-600 font-semibold">
              Cours 1 : Variables et Types de Données
            </span>
          </div>
        </nav>

        {/* En-tête de Leçon */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            📦 Variables et Types de Données
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Maîtrisez les fondamentaux du stockage de données dans vos
            programmes
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              <BookOpen className="h-4 w-4" />
              Fondamentaux
            </div>
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              <Code className="h-4 w-4" />
              Variables
            </div>
            <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              <Calculator className="h-4 w-4" />
              Types
            </div>
          </div>
        </div>

        {/* Objectifs du Cours */}
        <section className="mb-12">
          <Card className="rounded-lg bg-card text-card-foreground bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
            <div className="flex flex-col space-y-1.5 p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="tracking-tight text-3xl font-bold text-gray-800 mb-4">
                🎯 Objectifs du Cours
              </h3>
              <p className="text-lg text-gray-600">
                Comprendre les variables et types de données dans 3 langages
                populaires
              </p>
            </div>
            <div className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Comprendre les variables
                    </h4>
                    <p className="text-sm text-gray-600">
                      Déclaration, types et utilisation
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
                    <p className="text-sm text-gray-600">Calculateur simple</p>
                  </div>
                </div>
              </div>
            </div>
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
                Trois façons de comprendre les variables selon votre univers
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
                  <CardDescription className="text-lg text-gray-600">
                    Une variable, c'est quoi exactement ?
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🎯 Qu'est-ce qu'une Variable ?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Une <strong>variable</strong> c'est un espace de stockage
                    nommé dans la mémoire de votre ordinateur. C'est comme une
                    boîte avec une étiquette où vous rangez vos données !
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">📦</div>
                      <div className="font-semibold text-blue-800">
                        Espace de Stockage
                      </div>
                      <div className="text-sm text-blue-600">
                        Mémoire réservée pour vos données
                      </div>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">🏷️</div>
                      <div className="font-semibold text-purple-800">
                        Nom Unique
                      </div>
                      <div className="text-sm text-purple-600">
                        Identifiant pour retrouver vos données
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🔤 Types de Données
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🔢</div>
                      <div className="font-semibold text-orange-800">
                        Nombres
                      </div>
                      <div className="text-sm text-orange-600">
                        Entiers, décimaux
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="font-semibold text-orange-800">Texte</div>
                      <div className="text-sm text-orange-600">
                        Chaînes de caractères
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">✅</div>
                      <div className="font-semibold text-orange-800">
                        Booléen
                      </div>
                      <div className="text-sm text-orange-600">
                        Vrai ou faux
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    🏗️ Structure d'une Variable
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 font-mono text-sm">
                      <code>{`// Structure générale d'une variable
let nomDeLaVariable = valeur;

// Exemples concrets
let nom = "Alice";
let age = 25;
let estEtudiant = true;

// Déclaration et initialisation
let prix = 19.99;
let message = "Bienvenue !";`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Exemples de Code */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                💻 Exemples de Code
              </CardTitle>
              <CardDescription>
                Comparez les variables dans les trois langages
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
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded text-sm transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier
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
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded text-sm transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier
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
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded text-sm transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier
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
          <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    🎯 Mini-Application : Calculateur simple avec variables
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Créez un calculateur qui utilise des variables pour stocker
                    les nombres et l'opération
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
                      🐍 Calculateur simple avec variables
                    </span>
                    <button
                      onClick={() => copyToClipboard(miniAppCode, "python-app")}
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded text-sm transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier
                    </button>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{miniAppCode}</code>
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    🧠 Quiz Interactifs
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Testez vos connaissances sur les variables
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
          <Card className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 border-2 border-gray-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                🚀 Prochaines Étapes
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Continuez votre apprentissage avec les leçons suivantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    ⬅️ Leçon Précédente
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Vous êtes sur la première leçon ! Bienvenue dans votre
                    formation.
                  </p>
                  <button
                    className="border border-gray-300 text-gray-400 px-4 py-2 rounded-lg cursor-not-allowed"
                    disabled
                  >
                    Aucune leçon précédente
                  </button>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    ➡️ Leçon Suivante
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Apprenez à créer des fonctions et utiliser des paramètres.
                  </p>
                  <Link href="/fondamentaux/cours-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                      Leçon 2 : Fonctions et Paramètres
                    </button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
