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

export default function Lecon6Page() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeAnalogy, setActiveAnalogy] = useState("cuisine");
  const [quizStates, setQuizStates] = useState<{
    [key: string]: boolean | number;
  }>({});
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);

  const copyToClipboard = (code: string, language: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleQuizAnswer = (quizId: string, selectedAnswer: number) => {
    const quiz = quizData[quizId as keyof typeof quizData];
    if (!quiz) return;

    const isCorrect = selectedAnswer === quiz.correctAnswer;

    setQuizStates((prev) => ({
      ...prev,
      [quizId]: true,
      [`${quizId}_selected`]: selectedAnswer,
    }));

    if (isCorrect) {
      setPoints((prev) => prev + 10);
      if (!badges.includes("Scope & Closures")) {
        setBadges((prev) => [...prev, "Scope & Closures"]);
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
      question: "Qu'est-ce qu'un scope global ?",
      options: [
        "Une variable accessible partout dans le programme",
        "Une variable accessible seulement dans une fonction",
        "Une fonction qui capture des variables",
        "Un type de boucle",
      ],
      correctAnswer: 0,
      explication:
        "Un scope global contient des variables accessibles partout dans le programme. Elles sont déclarées au niveau le plus haut.",
    },
    quiz2: {
      question: "Qu'est-ce qu'une closure ?",
      options: [
        "Une fonction qui capture des variables de son scope parent",
        "Une variable globale",
        "Un type de boucle",
        "Une erreur de programmation",
      ],
      correctAnswer: 0,
      explication:
        "Une closure est une fonction qui capture et garde en mémoire les variables de son scope parent, même après que ce scope ait été détruit.",
    },
    quiz3: {
      question: "Pourquoi utiliser des closures ?",
      options: [
        "Pour créer des fonctions avec état et encapsulation",
        "Pour rendre le code plus lent",
        "Pour éviter les variables globales",
        "Pour compliquer le code",
      ],
      correctAnswer: 0,
      explication:
        "Les closures permettent de créer des fonctions avec état, d'encapsuler des données et d'éviter la pollution du scope global.",
    },
  };

  const analogies = {
    cuisine: {
      title: "🍳 Cuisine",
      description: "Les scopes comme des zones de cuisine",
      examples: [
        "global = cuisine entière",
        "local = zone de préparation",
        "closure = recette secrète",
      ],
      explanation:
        "En cuisine, vous avez des zones : la cuisine entière (global), votre zone de préparation (local), et vos recettes secrètes (closures). Les scopes sont comme ces zones d'activité.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les scopes comme des zones de jeu",
      examples: [
        "global = monde entier",
        "local = zone de combat",
        "closure = pouvoir spécial",
      ],
      explanation:
        "Dans un jeu, vous avez des zones : le monde entier (global), votre zone de combat (local), et vos pouvoirs spéciaux (closures). Les scopes sont comme ces zones de jeu.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les scopes comme des zones de jardin",
      examples: [
        "global = jardin entier",
        "local = parcelle",
        "closure = technique secrète",
      ],
      explanation:
        "Au jardin, vous avez des zones : le jardin entier (global), votre parcelle (local), et vos techniques secrètes (closures). Les scopes sont comme ces zones de culture.",
    },
  };

  const pythonCode = `# Scope & Closures en Python

# 1. VARIABLE GLOBALE
nom_global = "Je suis global"

def fonction_test():
    print("Dans la fonction:", nom_global)  # Accès à la globale

fonction_test()
print("En dehors:", nom_global)

# 2. VARIABLE LOCALE
def fonction_locale():
    nom_local = "Je suis local"
    print("Local:", nom_local)
    # nom_local n'existe que dans cette fonction

fonction_locale()
# print(nom_local)  # Erreur ! Variable non définie

# 3. MODIFIER UNE GLOBALE
compteur = 0

def incrementer():
    global compteur  # Déclarer qu'on modifie la globale
    compteur += 1
    print("Compteur:", compteur)

incrementer()  # 1
incrementer()  # 2

# 4. CLOSURE - Fonction qui capture des variables
def createur_multiplicateur(facteur):
    def multiplicateur(nombre):
        return nombre * facteur  # Capture 'facteur' de l'extérieur
    return multiplicateur

doubler = createur_multiplicateur(2)
tripler = createur_multiplicateur(3)

print("Double de 5:", doubler(5))  # 10
print("Triple de 5:", tripler(5))  # 15

# 5. SCOPE IMBRIQUÉ
def fonction_externe():
    x = "externe"
    
    def fonction_interne():
        x = "interne"  # Nouvelle variable locale
        print("Interne:", x)
    
    fonction_interne()
    print("Externe:", x)

fonction_externe()`;

  const javascriptCode = `// Scope & Closures en JavaScript

// 1. VARIABLE GLOBALE
let nomGlobal = "Je suis global";

function fonctionTest() {
    console.log("Dans la fonction:", nomGlobal);  // Accès à la globale
}

fonctionTest();
console.log("En dehors:", nomGlobal);

// 2. VARIABLE LOCALE
function fonctionLocale() {
    let nomLocal = "Je suis local";
    console.log("Local:", nomLocal);
    // nomLocal n'existe que dans cette fonction
}

fonctionLocale();
// console.log(nomLocal);  // Erreur ! Variable non définie

// 3. LET vs VAR - Block scope
if (true) {
    let variableLet = "Je suis dans le bloc";
    var variableVar = "Je suis accessible partout";
}
// console.log(variableLet);  // Erreur ! Block scope
console.log("Var accessible:", variableVar);  // OK

// 4. CLOSURE - Fonction qui capture des variables
function createurMultiplicateur(facteur) {
    return function(nombre) {
        return nombre * facteur;  // Capture 'facteur' de l'extérieur
    };
}

const doubler = createurMultiplicateur(2);
const tripler = createurMultiplicateur(3);

console.log("Double de 5:", doubler(5));  // 10
console.log("Triple de 5:", tripler(5));  // 15

// 5. CLOSURE AVEC ÉTAT
function createurCompteur() {
    let compteur = 0;
    return {
        incrementer: () => ++compteur,
        obtenir: () => compteur
    };
}

const monCompteur = createurCompteur();
console.log("Compteur:", monCompteur.obtenir());  // 0
monCompteur.incrementer();
console.log("Compteur:", monCompteur.obtenir());  // 1`;

  const typescriptCode = `// Scope & Closures en TypeScript

// 1. VARIABLE GLOBALE
let nomGlobal: string = "Je suis global";

function fonctionTest(): void {
    console.log("Dans la fonction:", nomGlobal);  // Accès à la globale
}

fonctionTest();
console.log("En dehors:", nomGlobal);

// 2. VARIABLE LOCALE
function fonctionLocale(): void {
    let nomLocal: string = "Je suis local";
    console.log("Local:", nomLocal);
    // nomLocal n'existe que dans cette fonction
}

fonctionLocale();
// console.log(nomLocal);  // Erreur ! Variable non définie

// 3. TYPES AVEC CLOSURES
type Multiplicateur = (nombre: number) => number;

function createurMultiplicateur(facteur: number): Multiplicateur {
    return function(nombre: number): number {
        return nombre * facteur;  // Capture 'facteur' de l'extérieur
    };
}

const doubler: Multiplicateur = createurMultiplicateur(2);
const tripler: Multiplicateur = createurMultiplicateur(3);

console.log("Double de 5:", doubler(5));  // 10
console.log("Triple de 5:", tripler(5));  // 15

// 4. INTERFACE AVEC CLOSURE
interface Compteur {
    incrementer(): number;
    obtenir(): number;
}

function createurCompteur(): Compteur {
    let compteur: number = 0;
    return {
        incrementer: (): number => ++compteur,
        obtenir: (): number => compteur
    };
}

const monCompteur: Compteur = createurCompteur();
console.log("Compteur:", monCompteur.obtenir());  // 0
monCompteur.incrementer();
console.log("Compteur:", monCompteur.obtenir());  // 1

// 5. GENERICS AVEC CLOSURES
function createurMemoise<T, R>(fn: (arg: T) => R): (arg: T) => R {
    const cache = new Map<T, R>();
    return function(arg: T): R {
        if (cache.has(arg)) {
            return cache.get(arg)!;
        }
        const resultat = fn(arg);
        cache.set(arg, resultat);
        return resultat;
    };
}

const fibonacciMemoise = createurMemoise((n: number): number => {
    if (n <= 1) return n;
    return fibonacciMemoise(n - 1) + fibonacciMemoise(n - 2);
});

console.log("Fibonacci(10):", fibonacciMemoise(10));`;

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

          {/* Signature AIGEEKIA moderne */}
          <div className="absolute bottom-2 right-12 z-10">
            <span className="text-white/80 font-medium text-xs italic">
              By AIGEEKIA
            </span>
          </div>

          <div className="text-center relative">
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md relative overflow-hidden">
              COURS 6 : SCOPE & CLOSURES
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ VARIABLES GLOBALES VS LOCALES ⚡
            </p>
          </div>
        </div>
      </header>
      <LogoMenu currentPage="cours-6" />

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
              Cours 6 : Scope & Closures
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
                Maîtriser la portée des variables et les closures
              </p>
            </div>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Comprendre les scopes
                    </h4>
                    <p className="text-sm text-gray-600">
                      Variables globales vs locales
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Maîtriser les closures
                    </h4>
                    <p className="text-sm text-gray-600">
                      Fonctions qui capturent des variables
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
                Trois façons de comprendre les scopes selon votre univers
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
                    Les scopes et closures, c'est quoi exactement ?
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🎯 Qu'est-ce qu'un Scope et une Closure ?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Un <strong>scope</strong> définit la zone où une variable
                    est accessible. Il existe deux types principaux : le{" "}
                    <code className="text-blue-600">scope global</code>{" "}
                    (accessible partout) et le{" "}
                    <code className="text-blue-600">scope local</code>{" "}
                    (accessible seulement dans une fonction).
                  </p>
                  <p className="text-gray-700 mb-4">
                    Une <strong>closure</strong> est une fonction qui capture et
                    garde en mémoire les variables de son scope parent, même
                    après que ce scope ait été détruit. C'est comme une
                    "mémoire" de la fonction.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">🌍</div>
                      <div className="font-semibold text-blue-800">
                        Scope Global
                      </div>
                      <div className="text-sm text-blue-600">
                        Variables accessibles partout
                      </div>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">🏠</div>
                      <div className="font-semibold text-purple-800">
                        Scope Local
                      </div>
                      <div className="text-sm text-purple-600">
                        Variables accessibles dans la fonction
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🔤 Types de Closures
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🧠</div>
                      <div className="font-semibold text-orange-800">
                        Capture de Variables
                      </div>
                      <div className="text-sm text-orange-600">
                        Garde les variables en mémoire
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🔒</div>
                      <div className="font-semibold text-orange-800">
                        Encapsulation
                      </div>
                      <div className="text-sm text-orange-600">
                        Cache les détails internes
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="font-semibold text-orange-800">
                        État Persistant
                      </div>
                      <div className="text-sm text-orange-600">
                        Maintient l'état entre appels
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    🏗️ Structure des Scopes et Closures
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 font-mono text-sm">
                      <code>{`// Exemple de scope et closure
const variableGlobale = "Je suis global";

function fonctionExterne() {
    const variableLocale = "Je suis local";
    
    function closure() {
        // Cette fonction capture variableLocale
        return variableLocale + " et " + variableGlobale;
    }
    
    return closure;
}

const maClosure = fonctionExterne();
console.log(maClosure()); // "Je suis local et Je suis global"

// Exemple avec état persistant
function createurCompteur() {
    let compteur = 0;
    
    return function() {
        compteur++;
        return compteur;
    };
}

const monCompteur = createurCompteur();
console.log(monCompteur()); // 1
console.log(monCompteur()); // 2`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    💡 Pourquoi utiliser les scopes et closures ?
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Isolation des données
                          </h5>
                          <p className="text-sm text-gray-600">
                            Évite la pollution du scope global
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Encapsulation
                          </h5>
                          <p className="text-sm text-gray-600">
                            Cache les détails d'implémentation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            État persistant
                          </h5>
                          <p className="text-sm text-gray-600">
                            Maintient les données entre appels
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Programmation fonctionnelle
                          </h5>
                          <p className="text-sm text-gray-600">
                            Style de programmation moderne
                          </p>
                        </div>
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
                Comparez les scopes et closures dans les trois langages
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
          <Card className="bg-gradient-to-br from-green-500/20 to-blue-600/20 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <Play className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Mini-Application : Gestionnaire de Cache
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Créez un système de cache avec closures
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
                      🐍 Gestionnaire de Cache Python
                    </span>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`# Gestionnaire de Cache - Mini-Application

# Variable globale
cache_global = {}

def createur_cache():
    """Crée un cache local avec closure"""
    cache_local = {}
    
    def ajouter(cle, valeur):
        cache_local[cle] = valeur
        print(f"✅ Ajouté au cache local: {cle} = {valeur}")
    
    def obtenir(cle):
        if cle in cache_local:
            print(f"🎯 Trouvé dans le cache local: {cle}")
            return cache_local[cle]
        else:
            print(f"❌ Non trouvé dans le cache local: {cle}")
            return None
    
    def afficher():
        print("📋 Cache local:", cache_local)
    
    return ajouter, obtenir, afficher

print("🧠 GESTIONNAIRE DE CACHE AVEC CLOSURES")
print("=" * 50)

# Créer deux caches différents
cache1_ajouter, cache1_obtenir, cache1_afficher = createur_cache()
cache2_ajouter, cache2_obtenir, cache2_afficher = createur_cache()

# Utiliser le premier cache
print("\\n🔧 CACHE 1:")
cache1_ajouter("utilisateur", "Alice")
cache1_ajouter("age", 25)
cache1_afficher()

# Utiliser le deuxième cache
print("\\n🔧 CACHE 2:")
cache2_ajouter("produit", "Laptop")
cache2_ajouter("prix", 999)
cache2_afficher()

# Tester l'isolation
print("\\n🔍 TEST D'ISOLATION:")
print("Cache 1 - utilisateur:", cache1_obtenir("utilisateur"))
print("Cache 2 - utilisateur:", cache2_obtenir("utilisateur"))

# Variable globale
cache_global["config"] = "globale"
print("\\n🌍 CACHE GLOBAL:", cache_global)

print("=" * 50)`}</code>
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
                Testez votre compréhension des scopes et closures
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
                Maintenant que vous maîtrisez les scopes et closures, passez aux
                concepts avancés !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 7 : Programmation Orientée Objet
                  </h3>
                  <p className="text-gray-600">
                    Classes, objets et héritage dans les 3 langages
                  </p>
                </div>
                <Link
                  href="/fondamentaux/cours-7"
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
