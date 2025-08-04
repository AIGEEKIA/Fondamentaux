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

export default function Lecon2Page() {
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
      if (points >= 30 && !badges.includes("Fonctions Master")) {
        setBadges((prev) => [...prev, "Fonctions Master"]);
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
      question: "Qu'est-ce qu'un type de données ?",
      options: [
        "Le nom d'une variable",
        "La nature et les opérations possibles sur une valeur",
        "Le résultat d'un calcul",
        "Le nom d'une fonction",
      ],
      correctAnswer: 1,
      explication:
        "Un type de données définit la nature et les opérations possibles sur une valeur. Il détermine comment l'ordinateur interprète et manipule les données.",
    },
    quiz2: {
      question: "Quelle est la différence entre string et number ?",
      options: [
        "Il n'y a aucune différence",
        "string pour le texte, number pour les nombres",
        "string est plus rapide",
        "number ne fonctionne qu'avec des entiers",
      ],
      correctAnswer: 1,
      explication:
        "string est utilisé pour le texte (chaînes de caractères) tandis que number est utilisé pour les nombres (entiers et décimaux).",
    },
    quiz3: {
      question:
        "Comment déclare-t-on une variable de type string en JavaScript ?",
      options: [
        "const nom = 'Alice'",
        "string nom = 'Alice'",
        "var nom: string = 'Alice'",
        "let nom = string('Alice')",
      ],
      correctAnswer: 0,
      explication:
        "En JavaScript, on utilise simplement const, let ou var suivi du nom et de la valeur. Le type est inféré automatiquement.",
    },
    quiz4: {
      question: "Que signifie 'type primitif' ?",
      options: [
        "Un type qui ne peut pas être modifié",
        "Un type de base fourni par le langage",
        "Le premier type de la liste",
        "Un type optionnel",
      ],
      correctAnswer: 1,
      explication:
        "Un type primitif est un type de base fourni par le langage de programmation, comme string, number, boolean.",
    },
    quiz5: {
      question: "Qu'est-ce qu'un type union en TypeScript ?",
      options: [
        "Un type qui combine plusieurs types",
        "Une union de variables",
        "Un type qui ne peut avoir qu'une seule valeur",
        "Un type qui retourne toujours true",
      ],
      correctAnswer: 0,
      explication:
        "Un type union permet de combiner plusieurs types possibles, par exemple string | number signifie que la valeur peut être soit une chaîne soit un nombre.",
    },
  };

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
              💻 COURS 2 : TYPES DE DONNÉES
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              JAVASCRIPT, PYTHON & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ COMPRENDRE LES DIFFÉRENTS TYPES ⚡
            </p>
          </div>
        </div>
      </header>

      {/* Menu hamburger */}
      <HamburgerMenu currentPage="cours-2" />

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
              Cours 2 : Types de données
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
                Comprendre les différents types de données dans 3 langages
                populaires
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Comprendre les types
                    </h4>
                    <p className="text-sm text-gray-600">
                      String, number, boolean et autres
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
                      Manipulation des types
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
                🌟 Analogies Universelles
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Trois façons de comprendre les types de données selon votre
                univers
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Analogies côte à côte */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Cuisine */}
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-6 border-2 border-blue-300 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    🍳 Cuisine
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Les types de données sont comme des ingrédients de cuisine
                  </p>
                  <p className="text-gray-700 mb-4">
                    Chaque ingrédient a une nature spécifique : farine (string),
                    quantité (number), frais (boolean). Vous devez utiliser le
                    bon type d'ingrédient pour chaque recette.
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Exemples :
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-white rounded p-2 border border-blue-200 shadow-sm">
                        <code className="text-sm text-blue-600">
                          nom = "Farine" // string
                        </code>
                      </div>
                      <div className="bg-white rounded p-2 border border-blue-200 shadow-sm">
                        <code className="text-sm text-blue-600">
                          quantite = 500 // number
                        </code>
                      </div>
                      <div className="bg-white rounded p-2 border border-blue-200 shadow-sm">
                        <code className="text-sm text-blue-600">
                          frais = true // boolean
                        </code>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Usine */}
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-6 border-2 border-blue-300 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    🏭 Usine
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Les types de données sont comme des matières premières
                  </p>
                  <p className="text-gray-700 mb-4">
                    Chaque matière première a des propriétés spécifiques : métal
                    (number), étiquette (string), qualité (boolean). L'usine
                    doit traiter chaque type selon ses caractéristiques.
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Exemples :
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-white rounded p-2 border border-blue-200 shadow-sm">
                        <code className="text-sm text-blue-600">
                          poids = 1500 // number
                        </code>
                      </div>
                      <div className="bg-white rounded p-2 border border-blue-200 shadow-sm">
                        <code className="text-sm text-blue-600">
                          reference = "A-123" // string
                        </code>
                      </div>
                      <div className="bg-white rounded p-2 border border-blue-200 shadow-sm">
                        <code className="text-sm text-blue-600">
                          conforme = true // boolean
                        </code>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Magasin */}
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-6 border-2 border-blue-300 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    🏪 Magasin
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Les types de données sont comme des catégories de produits
                  </p>
                  <p className="text-gray-700 mb-4">
                    Chaque produit a des informations spécifiques : nom
                    (string), prix (number), disponible (boolean). Le système
                    doit gérer chaque type d'information correctement.
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Exemples :
                    </h4>
                    <div className="space-y-2">
                      <div className="bg-white rounded p-2 border border-blue-200 shadow-sm">
                        <code className="text-sm text-blue-600">
                          nomProduit = "Laptop" // string
                        </code>
                      </div>
                      <div className="bg-white rounded p-2 border border-blue-200 shadow-sm">
                        <code className="text-sm text-blue-600">
                          prix = 999.99 // number
                        </code>
                      </div>
                      <div className="bg-white rounded p-2 border border-blue-200 shadow-sm">
                        <code className="text-sm text-blue-600">
                          enStock = true // boolean
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Définition Simple */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-100/50 to-green-100/50 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                📚 Définition Simple
              </CardTitle>
              <CardDescription>
                Explication claire et accessible des types de données
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    🎯 Qu'est-ce qu'un type de données ?
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Un <strong>type de données</strong> définit la nature et les
                    opérations possibles sur une valeur. Il détermine comment
                    l'ordinateur interprète et manipule les données.
                  </p>
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      💡 Analogie Simple :
                    </h4>
                    <p className="text-gray-700">
                      Un type de données est comme une{" "}
                      <strong>étiquette sur un produit</strong> : elle vous dit
                      ce que c'est (string, number, boolean) et comment
                      l'utiliser correctement.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    🔧 Pourquoi les types sont importants ?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Sécurité
                          </h5>
                          <p className="text-sm text-gray-600">
                            Éviter les erreurs de manipulation
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Clarté
                          </h5>
                          <p className="text-sm text-gray-600">
                            Comprendre ce que contient une variable
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Performance
                          </h5>
                          <p className="text-sm text-gray-600">
                            Optimiser le stockage et les calculs
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Validation
                          </h5>
                          <p className="text-sm text-gray-600">
                            Vérifier la cohérence des données
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    🏗️ Types de données principaux
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 font-mono text-sm">
                      <code>{`// Types de données fondamentaux

// 1. String (Chaîne de caractères)
nom = "Alice"
message = "Bonjour le monde !"

// 2. Number (Nombre)
age = 25
prix = 19.99
temperature = -5

// 3. Boolean (Booléen)
actif = true
connecte = false

// 4. Array (Tableau)
fruits = ["pomme", "banane", "orange"]
nombres = [1, 2, 3, 4, 5]

// 5. Object (Objet)
utilisateur = {
  nom: "Alice",
  age: 25,
  actif: true
}`}</code>
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
                Comparez les fonctions dans les trois langages principaux
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
                      onClick={() =>
                        copyToClipboard(
                          `# Types de données en Python

# 1. String (Chaîne de caractères)
nom = "Alice"
message = "Bonjour le monde !"
adresse = "123 Rue de la Paix"
email = "alice@example.com"

# 2. Number (Nombres)
age = 25                    # int
prix = 19.99               # float
temperature = -5            # int négatif
taille = 1.75              # float
population = 1000000        # int

# 3. Boolean (Booléen)
actif = True
connecte = False
est_majeur = age >= 18
a_permis = True

# 4. List (Liste)
fruits = ["pomme", "banane", "orange"]
nombres = [1, 2, 3, 4, 5]
melange = ["texte", 42, True, 3.14]

# 5. Tuple (Tuple - immuable)
coordonnees = (48.8566, 2.3522)
couleur_rgb = (255, 128, 0)

# 6. Dictionary (Dictionnaire)
utilisateur = {
    "nom": "Alice",
    "age": 25,
    "ville": "Paris",
    "actif": True
}

# 7. Set (Ensemble)
couleurs = {"rouge", "vert", "bleu"}
nombres_uniques = {1, 2, 3, 4, 5}

# 8. None (Valeur nulle)
resultat = None
valeur_par_defaut = None

# 9. Vérification des types
print(type(nom))           # <class 'str'>
print(type(age))           # <class 'int'>
print(type(actif))         # <class 'bool'>
print(type(fruits))        # <class 'list'>
print(type(utilisateur))   # <class 'dict'>

# 10. Conversion de types
texte_nombre = "42"
nombre = int(texte_nombre)     # Conversion string vers int
nombre_texte = str(42)         # Conversion int vers string
booleen = bool(1)              # Conversion vers boolean`,
                          "python"
                        )
                      }
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
                    <code>{`# Types de données en Python

# 1. String (Chaîne de caractères)
nom = "Alice"
message = "Bonjour le monde !"
adresse = "123 Rue de la Paix"
email = "alice@example.com"

# 2. Number (Nombres)
age = 25                    # int
prix = 19.99               # float
temperature = -5            # int négatif
taille = 1.75              # float
population = 1000000        # int

# 3. Boolean (Booléen)
actif = True
connecte = False
est_majeur = age >= 18
a_permis = True

# 4. List (Liste)
fruits = ["pomme", "banane", "orange"]
nombres = [1, 2, 3, 4, 5]
melange = ["texte", 42, True, 3.14]

# 5. Tuple (Tuple - immuable)
coordonnees = (48.8566, 2.3522)
couleur_rgb = (255, 128, 0)

# 6. Dictionary (Dictionnaire)
utilisateur = {
    "nom": "Alice",
    "age": 25,
    "ville": "Paris",
    "actif": True
}

# 7. Set (Ensemble)
couleurs = {"rouge", "vert", "bleu"}
nombres_uniques = {1, 2, 3, 4, 5}

# 8. None (Valeur nulle)
resultat = None
valeur_par_defaut = None

# 9. Vérification des types
print(type(nom))           # <class 'str'>
print(type(age))           # <class 'int'>
print(type(actif))         # <class 'bool'>
print(type(fruits))        # <class 'list'>
print(type(utilisateur))   # <class 'dict'>

# 10. Conversion de types
texte_nombre = "42"
nombre = int(texte_nombre)     # Conversion string vers int
nombre_texte = str(42)         # Conversion int vers string
booleen = bool(1)              # Conversion vers boolean`}</code>
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
                        copyToClipboard(
                          `// Types de données en JavaScript

// 1. String (Chaîne de caractères)
const nom = "Alice";
const message = "Bonjour le monde !";
const adresse = "123 Rue de la Paix";
const email = "alice@example.com";

// 2. Number (Nombres)
const age = 25;                    // integer
const prix = 19.99;               // float
const temperature = -5;            // nombre négatif
const taille = 1.75;              // float
const population = 1000000;        // grand nombre

// 3. Boolean (Booléen)
const actif = true;
const connecte = false;
const estMajeur = age >= 18;
const aPermis = true;

// 4. Array (Tableau)
const fruits = ["pomme", "banane", "orange"];
const nombres = [1, 2, 3, 4, 5];
const melange = ["texte", 42, true, 3.14];

// 5. Object (Objet)
const utilisateur = {
    nom: "Alice",
    age: 25,
    ville: "Paris",
    actif: true
};

// 6. Undefined et Null
let variableNonDefinie;            // undefined
const valeurNulle = null;          // null

// 7. Symbol (ES6)
const symbole = Symbol("description");

// 8. BigInt (ES2020)
const grandNombre = 9007199254740991n;

// 9. Vérification des types
console.log(typeof nom);           // "string"
console.log(typeof age);           // "number"
console.log(typeof actif);         // "boolean"
console.log(typeof fruits);        // "object" (Array est un objet)
console.log(typeof utilisateur);   // "object"
console.log(typeof variableNonDefinie); // "undefined"
console.log(typeof valeurNulle);   // "object" (bug historique)

// 10. Conversion de types
const texteNombre = "42";
const nombre = parseInt(texteNombre);     // Conversion string vers int
const nombreFloat = parseFloat("3.14");   // Conversion string vers float
const nombreTexte = String(42);           // Conversion number vers string
const booleen = Boolean(1);               // Conversion vers boolean

// 11. Vérification plus précise
console.log(Array.isArray(fruits));       // true
console.log(fruits instanceof Array);     // true
console.log(utilisateur.constructor === Object); // true`,
                          "javascript"
                        )
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
                    <code>{`// Types de données en JavaScript

// 1. String (Chaîne de caractères)
const nom = "Alice";
const message = "Bonjour le monde !";
const adresse = "123 Rue de la Paix";
const email = "alice@example.com";

// 2. Number (Nombres)
const age = 25;                    // integer
const prix = 19.99;               // float
const temperature = -5;            // nombre négatif
const taille = 1.75;              // float
const population = 1000000;        // grand nombre

// 3. Boolean (Booléen)
const actif = true;
const connecte = false;
const estMajeur = age >= 18;
const aPermis = true;

// 4. Array (Tableau)
const fruits = ["pomme", "banane", "orange"];
const nombres = [1, 2, 3, 4, 5];
const melange = ["texte", 42, true, 3.14];

// 5. Object (Objet)
const utilisateur = {
    nom: "Alice",
    age: 25,
    ville: "Paris",
    actif: true
};

// 6. Undefined et Null
let variableNonDefinie;            // undefined
const valeurNulle = null;          // null

// 7. Symbol (ES6)
const symbole = Symbol("description");

// 8. BigInt (ES2020)
const grandNombre = 9007199254740991n;

// 9. Vérification des types
console.log(typeof nom);           // "string"
console.log(typeof age);           // "number"
console.log(typeof actif);         // "boolean"
console.log(typeof fruits);        // "object" (Array est un objet)
console.log(typeof utilisateur);   // "object"
console.log(typeof variableNonDefinie); // "undefined"
console.log(typeof valeurNulle);   // "object" (bug historique)

// 10. Conversion de types
const texteNombre = "42";
const nombre = parseInt(texteNombre);     // Conversion string vers int
const nombreFloat = parseFloat("3.14");   // Conversion string vers float
const nombreTexte = String(42);           // Conversion number vers string
const booleen = Boolean(1);               // Conversion vers boolean

// 11. Vérification plus précise
console.log(Array.isArray(fruits));       // true
console.log(fruits instanceof Array);     // true
console.log(utilisateur.constructor === Object); // true`}</code>
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
                        copyToClipboard(
                          `// Types de données en TypeScript

// 1. Types primitifs
const nom: string = "Alice";
const age: number = 25;
const actif: boolean = true;
const symbole: symbol = Symbol("description");

// 2. Types littéraux
const couleur: "rouge" | "vert" | "bleu" = "rouge";
const statut: "actif" | "inactif" | "en_attente" = "actif";

// 3. Types de tableaux
const fruits: string[] = ["pomme", "banane", "orange"];
const nombres: number[] = [1, 2, 3, 4, 5];
const melange: (string | number | boolean)[] = ["texte", 42, true];

// 4. Types d'objets
interface Utilisateur {
    nom: string;
    age: number;
    ville?: string; // propriété optionnelle
    actif: boolean;
}

const utilisateur: Utilisateur = {
    nom: "Alice",
    age: 25,
    ville: "Paris",
    actif: true
};

// 5. Types union
type ID = string | number;
const userId: ID = "user123";
const productId: ID = 456;

// 6. Types intersection
interface Nommable {
    nom: string;
}

interface Ageable {
    age: number;
}

type Personne = Nommable & Ageable;
const personne: Personne = {
    nom: "Bob",
    age: 30
};

// 7. Types génériques
interface Boite<T> {
    contenu: T;
}

const boiteString: Boite<string> = { contenu: "hello" };
const boiteNumber: Boite<number> = { contenu: 42 };

// 8. Types avec null et undefined
let valeurOptionnelle: string | undefined = undefined;
let valeurNullable: string | null = null;

// 9. Types de fonctions
type Operation = (a: number, b: number) => number;
const addition: Operation = (a, b) => a + b;

// 10. Types enum
enum Couleur {
    Rouge = "rouge",
    Vert = "vert",
    Bleu = "bleu"
}

const couleurPreferee: Couleur = Couleur.Bleu;

// 11. Types tuple
const coordonnees: [number, number] = [48.8566, 2.3522];
const personneInfo: [string, number, boolean] = ["Alice", 25, true];

// 12. Types avec assertions
const valeur: any = "hello";
const longueur: number = (valeur as string).length;

// 13. Types avec typeof
const message = "Bonjour";
type MessageType = typeof message; // string

// 14. Types avec keyof
type UtilisateurKeys = keyof Utilisateur; // "nom" | "age" | "ville" | "actif"

// 15. Types avec mapped types
type UtilisateurOptionnel = {
    [K in keyof Utilisateur]?: Utilisateur[K];
};

// 16. Types avec conditional types
type NonNullable<T> = T extends null | undefined ? never : T;
type StringOrNumber = string | number;
type NonNullableStringOrNumber = NonNullable<StringOrNumber>; // string | number

console.log("Types TypeScript configurés avec succès !");`,
                          "typescript"
                        )
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
                    <code>{`// Types de données en TypeScript

// 1. Types primitifs
const nom: string = "Alice";
const age: number = 25;
const actif: boolean = true;
const symbole: symbol = Symbol("description");

// 2. Types littéraux
const couleur: "rouge" | "vert" | "bleu" = "rouge";
const statut: "actif" | "inactif" | "en_attente" = "actif";

// 3. Types de tableaux
const fruits: string[] = ["pomme", "banane", "orange"];
const nombres: number[] = [1, 2, 3, 4, 5];
const melange: (string | number | boolean)[] = ["texte", 42, true];

// 4. Types d'objets
interface Utilisateur {
    nom: string;
    age: number;
    ville?: string; // propriété optionnelle
    actif: boolean;
}

const utilisateur: Utilisateur = {
    nom: "Alice",
    age: 25,
    ville: "Paris",
    actif: true
};

// 5. Types union
type ID = string | number;
const userId: ID = "user123";
const productId: ID = 456;

// 6. Types intersection
interface Nommable {
    nom: string;
}

interface Ageable {
    age: number;
}

type Personne = Nommable & Ageable;
const personne: Personne = {
    nom: "Bob",
    age: 30
};

// 7. Types génériques
interface Boite<T> {
    contenu: T;
}

const boiteString: Boite<string> = { contenu: "hello" };
const boiteNumber: Boite<number> = { contenu: 42 };

// 8. Types avec null et undefined
let valeurOptionnelle: string | undefined = undefined;
let valeurNullable: string | null = null;

// 9. Types de fonctions
type Operation = (a: number, b: number) => number;
const addition: Operation = (a, b) => a + b;

// 10. Types enum
enum Couleur {
    Rouge = "rouge",
    Vert = "vert",
    Bleu = "bleu"
}

const couleurPreferee: Couleur = Couleur.Bleu;

// 11. Types tuple
const coordonnees: [number, number] = [48.8566, 2.3522];
const personneInfo: [string, number, boolean] = ["Alice", 25, true];

// 12. Types avec assertions
const valeur: any = "hello";
const longueur: number = (valeur as string).length;

// 13. Types avec typeof
const message = "Bonjour";
type MessageType = typeof message; // string

// 14. Types avec keyof
type UtilisateurKeys = keyof Utilisateur; // "nom" | "age" | "ville" | "actif"

// 15. Types avec mapped types
type UtilisateurOptionnel = {
    [K in keyof Utilisateur]?: Utilisateur[K];
};

// 16. Types avec conditional types
type NonNullable<T> = T extends null | undefined ? never : T;
type StringOrNumber = string | number;
type NonNullableStringOrNumber = NonNullable<StringOrNumber>; // string | number

console.log("Types TypeScript configurés avec succès !");`}</code>
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
                    🔐 Mini-Application : Générateur de Mots de Passe
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Créez un générateur de mots de passe avec des fonctions
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
                      🐍 Générateur Python
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `# 🔐 Mini-Application : Générateur de Mots de Passe
# Démonstration des fonctions et paramètres

# Fonction pour générer un caractère aléatoire
def generer_caractere(type_caractere):
    import random
    lettres = 'abcdefghijklmnopqrstuvwxyz'
    majuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    chiffres = '0123456789'
    symboles = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    
    if type_caractere == 'lettre':
        return random.choice(lettres)
    elif type_caractere == 'majuscule':
        return random.choice(majuscules)
    elif type_caractere == 'chiffre':
        return random.choice(chiffres)
    elif type_caractere == 'symbole':
        return random.choice(symboles)
    else:
        return random.choice(lettres)

# Fonction principale pour générer le mot de passe
def generer_mot_de_passe(longueur=12, inclure_majuscules=True, inclure_chiffres=True, inclure_symboles=True):
    import random
    mot_de_passe = ''
    types_disponibles = ['lettre']
    
    # Ajouter les types selon les paramètres
    if inclure_majuscules:
        types_disponibles.append('majuscule')
    if inclure_chiffres:
        types_disponibles.append('chiffre')
    if inclure_symboles:
        types_disponibles.append('symbole')
    
    # Générer le mot de passe
    for i in range(longueur):
        type_aleatoire = random.choice(types_disponibles)
        mot_de_passe += generer_caractere(type_aleatoire)
    
    return mot_de_passe

# Fonction pour évaluer la force du mot de passe
def evaluer_force(mot_de_passe):
    import re
    score = 0
    
    if len(mot_de_passe) >= 8:
        score += 1
    if len(mot_de_passe) >= 12:
        score += 1
    if re.search(r'[a-z]', mot_de_passe):
        score += 1
    if re.search(r'[A-Z]', mot_de_passe):
        score += 1
    if re.search(r'[0-9]', mot_de_passe):
        score += 1
    if re.search(r'[^A-Za-z0-9]', mot_de_passe):
        score += 1
    
    if score <= 2:
        return "Faible"
    elif score <= 4:
        return "Moyen"
    else:
        return "Fort"

# Exemples d'utilisation
print("Mot de passe simple:")
print(generer_mot_de_passe(8))  # 8 caractères, lettres seulement

print("\\nMot de passe sécurisé:")
print(generer_mot_de_passe(16, True, True, True))  # 16 caractères, tous types

print("\\nMot de passe personnalisé:")
mdp = generer_mot_de_passe(12, True, True, False)  # Sans symboles
print(mdp)
print("Force:", evaluer_force(mdp))

# Fonction pour générer plusieurs mots de passe
def generer_plusieurs_mdp(nombre, longueur, options):
    mots_de_passe = []
    for i in range(nombre):
        mdp = generer_mot_de_passe(
            longueur, 
            options.get('majuscules', True), 
            options.get('chiffres', True), 
            options.get('symboles', True)
        )
        mots_de_passe.append(mdp)
    return mots_de_passe

print("\\nGénération de 3 mots de passe:")
options = {'majuscules': True, 'chiffres': True, 'symboles': True}
print(generer_plusieurs_mdp(3, 10, options))`,
                          "generateur"
                        )
                      }
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier le générateur
                    </button>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`# 🔐 Mini-Application : Générateur de Mots de Passe
# Démonstration des fonctions et paramètres

# Fonction pour générer un caractère aléatoire
def generer_caractere(type_caractere):
    import random
    lettres = 'abcdefghijklmnopqrstuvwxyz'
    majuscules = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    chiffres = '0123456789'
    symboles = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    
    if type_caractere == 'lettre':
        return random.choice(lettres)
    elif type_caractere == 'majuscule':
        return random.choice(majuscules)
    elif type_caractere == 'chiffre':
        return random.choice(chiffres)
    elif type_caractere == 'symbole':
        return random.choice(symboles)
    else:
        return random.choice(lettres)

# Fonction principale pour générer le mot de passe
def generer_mot_de_passe(longueur=12, inclure_majuscules=True, inclure_chiffres=True, inclure_symboles=True):
    import random
    mot_de_passe = ''
    types_disponibles = ['lettre']
    
    # Ajouter les types selon les paramètres
    if inclure_majuscules:
        types_disponibles.append('majuscule')
    if inclure_chiffres:
        types_disponibles.append('chiffre')
    if inclure_symboles:
        types_disponibles.append('symbole')
    
    # Générer le mot de passe
    for i in range(longueur):
        type_aleatoire = random.choice(types_disponibles)
        mot_de_passe += generer_caractere(type_aleatoire)
    
    return mot_de_passe

# Fonction pour évaluer la force du mot de passe
def evaluer_force(mot_de_passe):
    import re
    score = 0
    
    if len(mot_de_passe) >= 8:
        score += 1
    if len(mot_de_passe) >= 12:
        score += 1
    if re.search(r'[a-z]', mot_de_passe):
        score += 1
    if re.search(r'[A-Z]', mot_de_passe):
        score += 1
    if re.search(r'[0-9]', mot_de_passe):
        score += 1
    if re.search(r'[^A-Za-z0-9]', mot_de_passe):
        score += 1
    
    if score <= 2:
        return "Faible"
    elif score <= 4:
        return "Moyen"
    else:
        return "Fort"

# Exemples d'utilisation
print("Mot de passe simple:")
print(generer_mot_de_passe(8))  # 8 caractères, lettres seulement

print("\\nMot de passe sécurisé:")
print(generer_mot_de_passe(16, True, True, True))  # 16 caractères, tous types

print("\\nMot de passe personnalisé:")
mdp = generer_mot_de_passe(12, True, True, False)  # Sans symboles
print(mdp)
print("Force:", evaluer_force(mdp))

# Fonction pour générer plusieurs mots de passe
def generer_plusieurs_mdp(nombre, longueur, options):
    mots_de_passe = []
    for i in range(nombre):
        mdp = generer_mot_de_passe(
            longueur, 
            options.get('majuscules', True), 
            options.get('chiffres', True), 
            options.get('symboles', True)
        )
        mots_de_passe.append(mdp)
    return mots_de_passe

print("\\nGénération de 3 mots de passe:")
options = {'majuscules': True, 'chiffres': True, 'symboles': True}
print(generer_plusieurs_mdp(3, 10, options))`}</code>
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
                        Types = Sécurité
                      </h4>
                      <p className="text-sm text-gray-600">
                        Évite les erreurs de manipulation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Types = Clarté
                      </h4>
                      <p className="text-sm text-gray-600">
                        Comprend ce que contient une variable
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Types = Performance
                      </h4>
                      <p className="text-sm text-gray-600">
                        Optimise le stockage et les calculs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Types primitifs
                      </h4>
                      <p className="text-sm text-gray-600">
                        string, number, boolean, etc.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Types complexes
                      </h4>
                      <p className="text-sm text-gray-600">
                        array, object, union, intersection
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
                        Base de la programmation moderne
                      </p>
                    </div>
                  </div>
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
                    🧠 QUIZ INTERACTIFS
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Testez votre compréhension des types de données
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Score et Badges */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">🏆</div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          Votre Score
                        </div>
                        <div className="text-2xl font-bold text-purple-600">
                          {points} points
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {badges.map((badge, index) => (
                        <span
                          key={index}
                          className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Répondez correctement aux quiz pour gagner des points et des
                    badges !
                  </div>
                </div>

                {/* Quiz 1 */}
                <QuizComponent quizId="quiz1" quiz={quizData.quiz1} />

                {/* Quiz 2 */}
                <QuizComponent quizId="quiz2" quiz={quizData.quiz2} />

                {/* Quiz 3 */}
                <QuizComponent quizId="quiz3" quiz={quizData.quiz3} />

                {/* Quiz 4 */}
                <QuizComponent quizId="quiz4" quiz={quizData.quiz4} />

                {/* Quiz 5 */}
                <QuizComponent quizId="quiz5" quiz={quizData.quiz5} />
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
                Maintenant que vous maîtrisez les types de données, passez aux
                opérateurs !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 3 : Opérateurs
                  </h3>
                  <p className="text-gray-600">
                    Arithmétiques, comparaison et logiques dans les 3 langages
                  </p>
                </div>
                <Link
                  href="/fondamentaux/cours-3"
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
