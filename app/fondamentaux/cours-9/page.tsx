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

export default function Lecon9Page() {
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
      description: "Les chaînes de scope comme des étages de cuisine",
      examples: [
        "étage 1 = cuisine principale",
        "étage 2 = zone de préparation",
        "étage 3 = zone de cuisson",
      ],
      explanation:
        "En cuisine, vous avez des étages : la cuisine principale (global), la zone de préparation (fonction), la zone de cuisson (bloc). Les chaînes de scope sont comme ces étages empilés.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les chaînes de scope comme des niveaux de jeu",
      examples: [
        "niveau 1 = monde principal",
        "niveau 2 = zone de mission",
        "niveau 3 = zone de combat",
      ],
      explanation:
        "Dans un jeu, vous avez des niveaux : le monde principal (global), la zone de mission (fonction), la zone de combat (bloc). Les chaînes de scope sont comme ces niveaux empilés.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les chaînes de scope comme des couches de terre",
      examples: [
        "couche 1 = jardin entier",
        "couche 2 = parcelle",
        "couche 3 = zone de semis",
      ],
      explanation:
        "Au jardin, vous avez des couches : le jardin entier (global), la parcelle (fonction), la zone de semis (bloc). Les chaînes de scope sont comme ces couches empilées.",
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
        "Comment fonctionne la résolution de variables dans les chaînes de scope ?",
      options: [
        "De l'extérieur vers l'intérieur",
        "De l'intérieur vers l'extérieur",
        "Aléatoirement",
        "Par ordre alphabétique",
      ],
      correctAnswer: 1,
      explication:
        "La résolution se fait de l'intérieur vers l'extérieur : le moteur cherche d'abord dans le scope actuel, puis remonte vers les scopes parents.",
    },
    quiz2: {
      question: "Qu'est-ce que le lexical scoping ?",
      options: [
        "La résolution basée sur le moment d'exécution",
        "La résolution basée sur la structure du code",
        "La résolution basée sur l'ordre alphabétique",
        "La résolution basée sur la mémoire disponible",
      ],
      correctAnswer: 1,
      explication:
        "Le lexical scoping (ou static scoping) signifie que la résolution des variables est déterminée par la structure du code au moment de l'écriture.",
    },
    quiz3: {
      question:
        "Quelle est la différence entre 'global' et 'nonlocal' en Python ?",
      options: [
        "Aucune différence",
        "global accède au scope global, nonlocal au scope parent",
        "nonlocal accède au scope global, global au scope parent",
        "Les deux accèdent au scope global",
      ],
      correctAnswer: 1,
      explication:
        "global permet d'accéder aux variables du scope global, tandis que nonlocal permet d'accéder aux variables du scope parent (fonction englobante).",
    },
  };

  const pythonCode = `# Chaînes de scope en Python

# 1. SCOPE GLOBAL
variable_globale = "Je suis globale"

def fonction_externe():
    # 2. SCOPE DE FONCTION
    variable_fonction = "Je suis dans la fonction"
    print("Dans fonction_externe:", variable_globale)  # Accès à la globale
    print("Dans fonction_externe:", variable_fonction)  # Accès à la locale
    
    def fonction_interne():
        # 3. SCOPE IMBRIQUÉ
        variable_interne = "Je suis dans la fonction interne"
        print("Dans fonction_interne:", variable_globale)  # Accès à la globale
        print("Dans fonction_interne:", variable_fonction)  # Accès à la fonction parent
        print("Dans fonction_interne:", variable_interne)  # Accès à la locale
    
    fonction_interne()

# Test de la chaîne de scope
print("🌍 Variable globale:", variable_globale)
fonction_externe()

# 4. RÉSOLUTION DE VARIABLES
def test_resolution():
    x = "locale"
    print("X dans test_resolution:", x)
    
    def sous_fonction():
        x = "sous-locale"  # Nouvelle variable locale
        print("X dans sous_fonction:", x)
    
    sous_fonction()
    print("X après sous_fonction:", x)

print("\\n🔍 TEST RÉSOLUTION:")
test_resolution()

# 5. NONLOCAL - Modifier la variable du parent
def createur_compteur():
    compteur = 0
    
    def incrementer():
        nonlocal compteur  # Référence à la variable du parent
        compteur += 1
        return compteur
    
    return incrementer

mon_compteur = createur_compteur()
print("\\n🔢 Compteur:", mon_compteur())  # 1
print("🔢 Compteur:", mon_compteur())  # 2

# 6. GLOBAL - Modifier la variable globale
def modifier_globale():
    global variable_globale
    variable_globale = "Modifiée par la fonction"
    print("🌍 Variable globale modifiée:", variable_globale)

modifier_globale()
print("🌍 Variable globale finale:", variable_globale)`;

  const javascriptCode = `// Chaînes de scope en JavaScript

// 1. SCOPE GLOBAL
let variableGlobale = "Je suis globale";

function fonctionExterne() {
    // 2. SCOPE DE FONCTION
    let variableFonction = "Je suis dans la fonction";
    console.log("Dans fonctionExterne:", variableGlobale);  // Accès à la globale
    console.log("Dans fonctionExterne:", variableFonction);  // Accès à la locale
    
    function fonctionInterne() {
        // 3. SCOPE IMBRIQUÉ
        let variableInterne = "Je suis dans la fonction interne";
        console.log("Dans fonctionInterne:", variableGlobale);  // Accès à la globale
        console.log("Dans fonctionInterne:", variableFonction);  // Accès à la fonction parent
        console.log("Dans fonctionInterne:", variableInterne);  // Accès à la locale
    }
    
    fonctionInterne();
}

// Test de la chaîne de scope
console.log("🌍 Variable globale:", variableGlobale);
fonctionExterne();

// 4. RÉSOLUTION DE VARIABLES
function testResolution() {
    let x = "locale";
    console.log("X dans testResolution:", x);
    
    function sousFonction() {
        let x = "sous-locale";  // Nouvelle variable locale
        console.log("X dans sousFonction:", x);
    }
    
    sousFonction();
    console.log("X après sousFonction:", x);
}

console.log("\\n🔍 TEST RÉSOLUTION:");
testResolution();

// 5. CLOSURE - Capturer la variable du parent
function createurCompteur() {
    let compteur = 0;
    
    return function incrementer() {
        compteur += 1;  // Accès à la variable du parent
        return compteur;
    };
}

const monCompteur = createurCompteur();
console.log("\\n🔢 Compteur:", monCompteur());  // 1
console.log("🔢 Compteur:", monCompteur());  // 2

// 6. BLOCK SCOPE
if (true) {
    let variableBloc = "Je suis dans le bloc";
    console.log("📦 Variable bloc:", variableBloc);
}
// console.log("📦 Variable bloc après:", variableBloc);  // Erreur !

// 7. LEXICAL SCOPING
function createurMultiplicateur(facteur) {
    return function(nombre) {
        return nombre * facteur;  // Capture 'facteur' du scope parent
    };
}

const doubler = createurMultiplicateur(2);
const tripler = createurMultiplicateur(3);

console.log("\\n🔢 Multiplicateurs:");
console.log("Double de 5:", doubler(5));  // 10
console.log("Triple de 5:", tripler(5));  // 15`;

  const typescriptCode = `// Chaînes de scope en TypeScript

// 1. SCOPE GLOBAL
let variableGlobale: string = "Je suis globale";

function fonctionExterne(): void {
    // 2. SCOPE DE FONCTION
    let variableFonction: string = "Je suis dans la fonction";
    console.log("Dans fonctionExterne:", variableGlobale);  // Accès à la globale
    console.log("Dans fonctionExterne:", variableFonction);  // Accès à la locale
    
    function fonctionInterne(): void {
        // 3. SCOPE IMBRIQUÉ
        let variableInterne: string = "Je suis dans la fonction interne";
        console.log("Dans fonctionInterne:", variableGlobale);  // Accès à la globale
        console.log("Dans fonctionInterne:", variableFonction);  // Accès à la fonction parent
        console.log("Dans fonctionInterne:", variableInterne);  // Accès à la locale
    }
    
    fonctionInterne();
}

// Test de la chaîne de scope
console.log("🌍 Variable globale:", variableGlobale);
fonctionExterne();

// 4. RÉSOLUTION DE VARIABLES AVEC TYPES
function testResolution(): void {
    let x: string = "locale";
    console.log("X dans testResolution:", x);
    
    function sousFonction(): void {
        let x: string = "sous-locale";  // Nouvelle variable locale
        console.log("X dans sousFonction:", x);
    }
    
    sousFonction();
    console.log("X après sousFonction:", x);
}

console.log("\\n🔍 TEST RÉSOLUTION:");
testResolution();

// 5. CLOSURE AVEC TYPES
function createurCompteur(): () => number {
    let compteur: number = 0;
    
    return function incrementer(): number {
        compteur += 1;  // Accès à la variable du parent
        return compteur;
    };
}

const monCompteur: () => number = createurCompteur();
console.log("\\n🔢 Compteur:", monCompteur());  // 1
console.log("🔢 Compteur:", monCompteur());  // 2

// 6. INTERFACE AVEC CLOSURE
interface Compteur {
    incrementer(): number;
    obtenir(): number;
}

function createurCompteurTypé(): Compteur {
    let compteur: number = 0;
    
    return {
        incrementer: (): number => ++compteur,
        obtenir: (): number => compteur
    };
}

const monCompteurTypé: Compteur = createurCompteurTypé();
console.log("\\n🔢 Compteur typé:", monCompteurTypé.obtenir());  // 0
monCompteurTypé.incrementer();
console.log("🔢 Compteur typé:", monCompteurTypé.obtenir());  // 1

// 7. GENERICS AVEC SCOPE
function createurMemoise<T, R>(fn: (arg: T) => R): (arg: T) => R {
    const cache: Map<T, R> = new Map();  // Variable dans le scope de la fonction
    
    return function(arg: T): R {
        if (cache.has(arg)) {
            return cache.get(arg)!;
        }
        const resultat: R = fn(arg);
        cache.set(arg, resultat);
        return resultat;
    };
}

const fibonacciMemoise: (n: number) => number = createurMemoise((n: number): number => {
    if (n <= 1) return n;
    return fibonacciMemoise(n - 1) + fibonacciMemoise(n - 2);
});

console.log("\\n🔢 Fibonacci(10):", fibonacciMemoise(10));

// 8. CLASSES AVEC SCOPE
class ExempleClasse {
    private variablePrivee: string = "privée";
    
    public methode(): void {
        let variableLocale: string = "locale";
        console.log("Privée:", this.variablePrivee);
        console.log("Locale:", variableLocale);
    }
}

const instance = new ExempleClasse();
instance.methode();`;

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
              COURS 9 : CHAÎNES DE SCOPE
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ RÉSOLUTION DE VARIABLES ET LEXICAL SCOPING ⚡
            </p>
          </div>
        </div>
      </header>
      <LogoMenu currentPage="cours-9" />

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
              Cours 9 : Chaînes de scope
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
                Comprendre la résolution de variables et le lexical scoping
              </p>
            </div>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Chaînes de scope
                    </h4>
                    <p className="text-sm text-gray-600">
                      Comment les variables sont résolues
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Lexical scoping
                    </h4>
                    <p className="text-sm text-gray-600">
                      Résolution basée sur la structure du code
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
                Trois façons de comprendre les chaînes de scope selon votre
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
                    Les chaînes de scope et le lexical scoping, c'est quoi
                    exactement ?
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🎯 Qu'est-ce que les Chaînes de Scope ?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Les <strong>chaînes de scope</strong> (scope chains) sont le
                    mécanisme par lequel JavaScript et d'autres langages
                    résolvent les variables. Quand vous accédez à une variable,
                    le moteur JavaScript cherche d'abord dans le scope actuel,
                    puis remonte la chaîne vers les scopes parents jusqu'à
                    trouver la variable.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Le <strong>lexical scoping</strong> (ou static scoping)
                    signifie que la résolution des variables est déterminée par
                    la structure du code au moment de l'écriture, pas au moment
                    de l'exécution. C'est comme une hiérarchie de boîtes
                    imbriquées où chaque boîte peut accéder aux variables des
                    boîtes qui la contiennent.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">🔗</div>
                      <div className="font-semibold text-blue-800">
                        Chaîne de Scope
                      </div>
                      <div className="text-sm text-blue-600">
                        Ordre de recherche des variables
                      </div>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="font-semibold text-purple-800">
                        Lexical Scoping
                      </div>
                      <div className="text-sm text-purple-600">
                        Résolution basée sur la structure du code
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🔤 Les Trois Niveaux de Scope
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🌍</div>
                      <div className="font-semibold text-orange-800">
                        Scope Global
                      </div>
                      <div className="text-sm text-orange-600">
                        Variables accessibles partout
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🔧</div>
                      <div className="font-semibold text-orange-800">
                        Scope de Fonction
                      </div>
                      <div className="text-sm text-orange-600">
                        Variables locales à la fonction
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">📦</div>
                      <div className="font-semibold text-orange-800">
                        Scope de Bloc
                      </div>
                      <div className="text-sm text-orange-600">
                        Variables dans les blocs (if, for, etc.)
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
                          Comprendre les bugs
                        </strong>
                        <p className="text-sm text-gray-600">
                          Savoir pourquoi une variable n'est pas trouvée ou
                          prend une mauvaise valeur
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <div>
                        <strong className="text-gray-800">
                          Code plus prévisible
                        </strong>
                        <p className="text-sm text-gray-600">
                          Éviter les conflits de noms et les effets de bord
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
                          Tracer facilement l'origine des variables
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
                Comparez les chaînes de scope dans les trois langages principaux
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
                    Mini-Application : Explorateur de Scope
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Explorez les chaînes de scope et la résolution de variables
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
                      🐍 Explorateur de Scope Python
                    </span>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`# Explorateur de Scope - Mini-Application

print("🔗 EXPLORATEUR DE CHAÎNES DE SCOPE")
print("=" * 60)

# 1. SCOPE GLOBAL
variable_globale = "🌍 Je suis globale"
print("1️⃣ Variable globale:", variable_globale)

def niveau_1():
    # 2. SCOPE NIVEAU 1
    variable_niveau_1 = "🔧 Je suis au niveau 1"
    print("2️⃣ Dans niveau_1 - globale:", variable_globale)
    print("2️⃣ Dans niveau_1 - locale:", variable_niveau_1)
    
    def niveau_2():
        # 3. SCOPE NIVEAU 2
        variable_niveau_2 = "🔧 Je suis au niveau 2"
        print("3️⃣ Dans niveau_2 - globale:", variable_globale)
        print("3️⃣ Dans niveau_2 - niveau_1:", variable_niveau_1)
        print("3️⃣ Dans niveau_2 - locale:", variable_niveau_2)
        
        def niveau_3():
            # 4. SCOPE NIVEAU 3
            variable_niveau_3 = "🔧 Je suis au niveau 3"
            print("4️⃣ Dans niveau_3 - globale:", variable_globale)
            print("4️⃣ Dans niveau_3 - niveau_1:", variable_niveau_1)
            print("4️⃣ Dans niveau_3 - niveau_2:", variable_niveau_2)
            print("4️⃣ Dans niveau_3 - locale:", variable_niveau_3)
        
        niveau_3()
    
    niveau_2()

# Test de la chaîne de scope
print("\\n🔗 TEST CHAÎNE DE SCOPE:")
niveau_1()

# 5. RÉSOLUTION DE VARIABLES
print("\\n🔍 TEST RÉSOLUTION:")
x = "globale"

def test_resolution():
    x = "locale"
    print("X dans test_resolution:", x)
    
    def sous_fonction():
        x = "sous-locale"
        print("X dans sous_fonction:", x)
    
    sous_fonction()
    print("X après sous_fonction:", x)

test_resolution()
print("X après test_resolution:", x)

# 6. NONLOCAL ET GLOBAL
print("\\n🌍 TEST NONLOCAL ET GLOBAL:")
compteur_global = 0

def createur_compteur():
    compteur_local = 0
    
    def incrementer():
        nonlocal compteur_local
        global compteur_global
        compteur_local += 1
        compteur_global += 10
        print(f"🔢 Local: {compteur_local}, Global: {compteur_global}")
    
    return incrementer

mon_compteur = createur_compteur()
mon_compteur()  # Local: 1, Global: 10
mon_compteur()  # Local: 2, Global: 20

print("=" * 60)`}</code>
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
                Testez votre compréhension des chaînes de scope et du lexical
                scoping
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
                Maintenant que vous maîtrisez les chaînes de scope, passez aux
                fonctions imbriquées !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 10 : Fonctions imbriquées et closures
                  </h3>
                  <p className="text-gray-600">
                    Fonctions dans des fonctions et closures avancées
                  </p>
                </div>
                <Link
                  href="/fondamentaux/cours-10"
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
