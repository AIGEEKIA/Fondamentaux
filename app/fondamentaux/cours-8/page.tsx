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
import LogoMenu from "@/components/logo-menu";
import Image from "next/image";

export default function Lecon8Page() {
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
      description: "Le hoisting comme la préparation en avance",
      examples: [
        "hoisting = préparer les ingrédients",
        "TDZ = zone de cuisson",
        "déclaration = mise en place",
      ],
      explanation:
        "En cuisine, vous préparez les ingrédients avant de cuisiner (hoisting), mais vous ne pouvez pas les utiliser avant qu'ils soient prêts (TDZ). Le hoisting est comme cette préparation en avance.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Le hoisting comme le chargement du jeu",
      examples: [
        "hoisting = charger les assets",
        "TDZ = zone de spawn",
        "déclaration = initialisation",
      ],
      explanation:
        "Dans un jeu, vous chargez les assets avant de jouer (hoisting), mais vous ne pouvez pas les utiliser avant qu'ils soient chargés (TDZ). Le hoisting est comme ce chargement en avance.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Le hoisting comme la préparation du terrain",
      examples: [
        "hoisting = préparer le sol",
        "TDZ = zone de plantation",
        "déclaration = semis",
      ],
      explanation:
        "Au jardin, vous préparez le terrain avant de planter (hoisting), mais vous ne pouvez pas planter avant que le sol soit prêt (TDZ). Le hoisting est comme cette préparation en avance.",
    },
  };

  const [quizStates, setQuizStates] = useState<{
    [key: string]: boolean | number;
  }>({});

  const handleQuizAnswer = (quizId: string, selectedAnswer: number) => {
    setQuizStates((prev) => ({
      ...prev,
      [quizId]: true,
      [`${quizId}_selected`]: selectedAnswer,
    }));
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

  const quizData = {
    quiz1: {
      question:
        "Que se passe-t-il quand on utilise une variable avec 'var' avant sa déclaration ?",
      options: [
        "Une erreur ReferenceError",
        "La variable est undefined",
        "La variable est null",
        "Une erreur TypeError",
      ],
      correctAnswer: 1,
      explication:
        "Avec 'var', la variable est hoistée et initialisée à undefined, donc pas d'erreur mais la valeur est undefined.",
    },
    quiz2: {
      question: "Qu'est-ce que la Temporal Dead Zone (TDZ) ?",
      options: [
        "Une zone où les variables sont toujours accessibles",
        "Une zone où let/const ne sont pas accessibles avant leur déclaration",
        "Une zone où les fonctions ne peuvent pas être appelées",
        "Une zone de mémoire réservée",
      ],
      correctAnswer: 1,
      explication:
        "La TDZ est la zone entre le début du scope et la déclaration de let/const où ces variables ne sont pas accessibles.",
    },
    quiz3: {
      question:
        "Quelle est la différence entre 'var' et 'let' en termes de hoisting ?",
      options: [
        "Aucune différence, ils sont identiques",
        "var est hoisté et initialisé à undefined, let est hoisté mais pas initialisé",
        "let est hoisté et initialisé à undefined, var n'est pas hoisté",
        "Aucun des deux n'est hoisté",
      ],
      correctAnswer: 1,
      explication:
        "var est hoisté et initialisé à undefined, tandis que let est hoisté mais reste dans la TDZ jusqu'à sa déclaration.",
    },
  };

  const pythonCode = `# Hoisting et temporal dead zone en Python

# Python N'A PAS de hoisting !
# Les variables doivent être déclarées avant utilisation

# 1. ERREUR - Variable non déclarée
# print(nom)  # NameError: name 'nom' is not defined

# 2. DÉCLARATION NORMALE
nom = "Alice"
print("Nom:", nom)  # OK

# 3. FONCTIONS - Doivent être déclarées avant
def ma_fonction():
    return "Hello"

resultat = ma_fonction()  # OK
print("Résultat:", resultat)

# 4. CLASSES - Doivent être déclarées avant
class MaClasse:
    def __init__(self):
        self.valeur = 42

instance = MaClasse()  # OK
print("Valeur:", instance.valeur)

# 5. IMPORT - Doivent être en haut
import math
print("Pi:", math.pi)

# 6. SCOPE LOCAL
def test_scope():
    # print(x)  # Erreur ! x n'existe pas encore
    x = 10
    print("X dans fonction:", x)

test_scope()
# print(x)  # Erreur ! x n'existe plus

# 7. GLOBAL - Doit être déclaré
compteur = 0

def incrementer():
    global compteur  # Doit être déclaré
    compteur += 1
    print("Compteur:", compteur)

incrementer()  # 1
incrementer()  # 2`;

  const javascriptCode = `// Hoisting et temporal dead zone en JavaScript

// 1. HOISTING - Les déclarations sont "remontées"
console.log("Avant déclaration:", nom);  // undefined (pas d'erreur !)
var nom = "Alice";
console.log("Après déclaration:", nom);  // "Alice"

// 2. TEMPORAL DEAD ZONE (TDZ) avec LET/CONST
// console.log("Avant LET:", age);  // ReferenceError !
let age = 25;
console.log("Après LET:", age);  // 25

// 3. FONCTIONS - Hoisting complet
maFonction();  // "Hello" - Fonctionne !

function maFonction() {
    console.log("Hello");
}

// 4. FONCTIONS EXPRESSION - Pas de hoisting
// maFonctionExpr();  // TypeError !

const maFonctionExpr = function() {
    console.log("Hello expr");
};

maFonctionExpr();  // OK

// 5. ARROW FUNCTIONS - Pas de hoisting
// maFonctionArrow();  // ReferenceError !

const maFonctionArrow = () => {
    console.log("Hello arrow");
};

maFonctionArrow();  // OK

// 6. CLASSES - Pas de hoisting
// const instance = new MaClasse();  // ReferenceError !

class MaClasse {
    constructor() {
        this.valeur = 42;
    }
}

const instance = new MaClasse();  // OK
console.log("Valeur:", instance.valeur);

// 7. VAR vs LET vs CONST
console.log("VAR avant:", variableVar);  // undefined
var variableVar = "var";

// console.log("LET avant:", variableLet);  // ReferenceError !
let variableLet = "let";

// console.log("CONST avant:", variableConst);  // ReferenceError !
const variableConst = "const";

// 8. SCOPE ET TDZ
function testTDZ() {
    // console.log("Dans TDZ:", x);  // ReferenceError !
    let x = 10;
    console.log("Après déclaration:", x);  // 10
}

testTDZ();`;

  const typescriptCode = `// Hoisting et temporal dead zone en TypeScript

// 1. HOISTING - Même comportement que JavaScript
console.log("Avant déclaration:", nom);  // undefined
var nom: string = "Alice";
console.log("Après déclaration:", nom);  // "Alice"

// 2. TEMPORAL DEAD ZONE (TDZ) avec LET/CONST
// console.log("Avant LET:", age);  // ReferenceError !
let age: number = 25;
console.log("Après LET:", age);  // 25

// 3. TYPES - Doivent être déclarés avant
interface Personne {
    nom: string;
    age: number;
}

const personne: Personne = {
    nom: "Bob",
    age: 30
};

console.log("Personne:", personne);

// 4. FONCTIONS TYPÉES - Hoisting complet
maFonctionTypee();  // "Hello typé" - Fonctionne !

function maFonctionTypee(): string {
    return "Hello typé";
}

// 5. ARROW FUNCTIONS TYPÉES - Pas de hoisting
// maFonctionArrowTypee();  // ReferenceError !

const maFonctionArrowTypee = (): string => {
    return "Hello arrow typé";
};

console.log(maFonctionArrowTypee());  // OK

// 6. CLASSES TYPÉES - Pas de hoisting
// const instance = new MaClasseTypee();  // ReferenceError !

class MaClasseTypee {
    private valeur: number;
    
    constructor() {
        this.valeur = 42;
    }
    
    getValeur(): number {
        return this.valeur;
    }
}

const instance = new MaClasseTypee();  // OK
console.log("Valeur:", instance.getValeur());

// 7. GENERICS - Pas de hoisting
// const resultat = premierElement([1, 2, 3]);  // ReferenceError !

function premierElement<T>(array: T[]): T | undefined {
    return array[0];
}

const resultat = premierElement([1, 2, 3]);  // OK
console.log("Premier:", resultat);

// 8. ENUM - Pas de hoisting
// console.log(Status.ACTIVE);  // ReferenceError !

enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive"
}

console.log(Status.ACTIVE);  // OK

// 9. SCOPE ET TDZ AVEC TYPES
function testTDZTypee(): void {
    // console.log("Dans TDZ:", x);  // ReferenceError !
    let x: number = 10;
    console.log("Après déclaration:", x);  // 10
}

testTDZTypee();`;

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
              COURS 8 : HOISTING ET TEMPORAL DEAD ZONE
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ COMPRENDRE LE HOISTING ET LA TDZ ⚡
            </p>
          </div>
        </div>
      </header>
      <LogoMenu currentPage="cours-8" />

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
              Cours 8 : Hoisting et temporal dead zone
            </span>
          </div>
        </nav>

        {/* Objectifs du cours */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
            <div className="flex flex-col space-y-1.5 p-6 text-center">
              <h3 className="tracking-tight text-3xl font-bold text-blue-700 mb-4 border-b-2 border-blue-300 pb-2 text-center flex items-center justify-center gap-4">
                🎯 Objectifs du Cours 🎯
              </h3>
              <p className="text-lg text-gray-600">
                Comprendre le hoisting en JavaScript et la temporal dead zone
              </p>
            </div>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hoisting</h4>
                    <p className="text-sm text-gray-600">
                      Comprendre comment JavaScript "remonte" les déclarations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Temporal Dead Zone
                    </h4>
                    <p className="text-sm text-gray-600">
                      Zone où les variables LET/CONST ne sont pas accessibles
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
                Trois façons de comprendre le hoisting selon votre univers
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
                    Le hoisting et la temporal dead zone, c'est quoi exactement
                    ?
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🎯 Qu'est-ce que le Hoisting ?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Le <strong>hoisting</strong> est un comportement de
                    JavaScript où les déclarations de variables et de fonctions
                    sont "remontées" au début de leur scope lors de l'exécution.
                    Cela signifie que vous pouvez utiliser une variable ou une
                    fonction avant de l'avoir déclarée dans le code.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Cependant, il y a une différence importante :{" "}
                    <strong>
                      les déclarations sont hoistées, pas les initialisations
                    </strong>
                    . Une variable déclarée avec{" "}
                    <code className="text-blue-600">var</code> sera hoistée et
                    initialisée avec{" "}
                    <code className="text-blue-600">undefined</code>, tandis que{" "}
                    <code className="text-blue-600">let</code> et{" "}
                    <code className="text-blue-600">const</code> ont une
                    "temporal dead zone".
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">📈</div>
                      <div className="font-semibold text-blue-800">
                        Hoisting
                      </div>
                      <div className="text-sm text-blue-600">
                        Remonte les déclarations
                      </div>
                    </div>
                    <div className="bg-red-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">⏰</div>
                      <div className="font-semibold text-red-800">
                        Temporal Dead Zone
                      </div>
                      <div className="text-sm text-red-600">
                        Zone d'inaccessibilité pour let/const
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🔤 Les Trois Types de Hoisting
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">📦</div>
                      <div className="font-semibold text-orange-800">VAR</div>
                      <div className="text-sm text-orange-600">
                        Hoisté et initialisé à undefined
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🔒</div>
                      <div className="font-semibold text-orange-800">
                        LET/CONST
                      </div>
                      <div className="text-sm text-orange-600">
                        Hoisté mais avec TDZ
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="font-semibold text-orange-800">
                        FONCTIONS
                      </div>
                      <div className="text-sm text-orange-600">
                        Complètement hoistées
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    💡 Pourquoi c'est important ?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <div>
                        <strong className="text-gray-800">
                          Éviter les bugs
                        </strong>
                        <p className="text-sm text-gray-600">
                          Comprendre le hoisting aide à éviter les erreurs
                          "undefined"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <div>
                        <strong className="text-gray-800">
                          Code plus propre
                        </strong>
                        <p className="text-sm text-gray-600">
                          Utiliser let/const au lieu de var pour un code plus
                          prévisible
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <div>
                        <strong className="text-gray-800">
                          Debugging efficace
                        </strong>
                        <p className="text-sm text-gray-600">
                          Comprendre pourquoi certaines erreurs se produisent
                        </p>
                      </div>
                    </div>
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
                Comparez le hoisting dans les trois langages principaux
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
          <Card className="bg-gradient-to-br from-green-500/20 to-blue-600/20 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <Play className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Mini-Application : Testeur de Hoisting
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Testez le hoisting et la temporal dead zone
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
                      🐍 Testeur de Hoisting Python
                    </span>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`# Testeur de Hoisting - Mini-Application

print("⬆️ TESTEUR DE HOISTING")
print("=" * 50)

# 1. PYTHON N'A PAS DE HOISTING
print("🐍 Python n'a pas de hoisting !")
print("Les variables doivent être déclarées avant utilisation")

# 2. TEST D'ERREUR
try:
    print("Tentative d'accès à variable non déclarée:")
    print(variable_inexistante)
except NameError as e:
    print("❌ Erreur:", e)

# 3. DÉCLARATION NORMALE
print("\\n✅ Déclaration normale:")
nom = "Alice"
print("Nom:", nom)

# 4. FONCTIONS - Doivent être déclarées avant
print("\\n🔧 Test de fonction:")
def ma_fonction():
    return "Hello depuis la fonction"

resultat = ma_fonction()
print("Résultat:", resultat)

# 5. CLASSES - Doivent être déclarées avant
print("\\n🏗️ Test de classe:")
class MaClasse:
    def __init__(self):
        self.valeur = 42
    
    def get_valeur(self):
        return self.valeur

instance = MaClasse()
print("Valeur de l'instance:", instance.get_valeur())

# 6. SCOPE LOCAL
print("\\n🔍 Test de scope local:")
def test_scope():
    try:
        print("Tentative d'accès à x avant déclaration:")
        print(x)
    except NameError as e:
        print("❌ Erreur:", e)
    
    x = 10
    print("✅ Après déclaration:", x)

test_scope()

# 7. GLOBAL - Doit être déclaré
print("\\n🌍 Test de variable globale:")
compteur = 0

def incrementer():
    global compteur
    compteur += 1
    print("Compteur dans fonction:", compteur)

incrementer()  # 1
incrementer()  # 2
print("Compteur global:", compteur)

print("=" * 50)
print("🐍 Python : Pas de hoisting, déclaration stricte !")`}</code>
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
              <CardTitle className="text-2xl font-bold text-gray-800">
                Quiz Interactifs
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Testez votre compréhension du hoisting et de la temporal dead
                zone
              </CardDescription>
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
                Maintenant que vous maîtrisez le hoisting, passez aux chaînes de
                scope !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 9 : Chaînes de scope
                  </h3>
                  <p className="text-gray-600">
                    Résolution de variables et lexical scoping
                  </p>
                </div>
                <Link
                  href="/fondamentaux/cours-9"
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
