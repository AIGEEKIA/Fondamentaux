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

export default function Lecon7Page() {
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
      description: "Les scopes comme des zones de préparation",
      examples: [
        "fonction = zone de préparation",
        "bloc = sous-zone spécifique",
        "if/for = zone temporaire",
      ],
      explanation:
        "En cuisine, vous avez des zones : la zone de préparation (fonction), des sous-zones spécifiques (blocs), et des zones temporaires (if/for). Les scopes sont comme ces zones d'activité.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les scopes comme des zones de jeu",
      examples: [
        "fonction = zone de mission",
        "bloc = zone de combat",
        "if/for = zone temporaire",
      ],
      explanation:
        "Dans un jeu, vous avez des zones : la zone de mission (fonction), des zones de combat (blocs), et des zones temporaires (if/for). Les scopes sont comme ces zones de jeu.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les scopes comme des zones de culture",
      examples: [
        "fonction = parcelle principale",
        "bloc = zone de semis",
        "if/for = zone temporaire",
      ],
      explanation:
        "Au jardin, vous avez des zones : la parcelle principale (fonction), des zones de semis (blocs), et des zones temporaires (if/for). Les scopes sont comme ces zones de culture.",
    },
  };

  const pythonCode = `# Scope de fonction et de bloc en Python

# 1. SCOPE DE FONCTION
def fonction_exemple():
    variable_fonction = "Je suis dans la fonction"
    print("Dans la fonction:", variable_fonction)
    # Cette variable n'existe que dans la fonction

fonction_exemple()
# print(variable_fonction)  # Erreur ! Variable non définie

# 2. SCOPE DE BLOC - Python n'a PAS de scope de bloc !
x = 10
if x > 5:
    variable_bloc = "Je suis dans le bloc"
    print("Dans le bloc:", variable_bloc)

# En Python, la variable est accessible après le bloc !
print("Après le bloc:", variable_bloc)  # Fonctionne !

# 3. SCOPE IMBRIQUÉ
def fonction_externe():
    x = "externe"
    
    def fonction_interne():
        x = "interne"  # Nouvelle variable locale
        print("Interne:", x)
    
    fonction_interne()
    print("Externe:", x)

fonction_externe()

# 4. GLOBAL DANS FONCTION
compteur = 0

def incrementer():
    global compteur  # Déclarer qu'on modifie la globale
    compteur += 1
    print("Compteur:", compteur)

incrementer()  # 1
incrementer()  # 2

# 5. NONLOCAL - Variables des fonctions parentes
def fonction_parent():
    x = "parent"
    
    def fonction_enfant():
        nonlocal x  # Référence à la variable du parent
        x = "enfant"
        print("Enfant:", x)
    
    fonction_enfant()
    print("Parent:", x)

fonction_parent()`;

  const javascriptCode = `// Scope de fonction et de bloc en JavaScript

// 1. SCOPE DE FONCTION
function fonctionExemple() {
    let variableFonction = "Je suis dans la fonction";
    console.log("Dans la fonction:", variableFonction);
    // Cette variable n'existe que dans la fonction
}

fonctionExemple();
// console.log(variableFonction);  // Erreur ! Variable non définie

// 2. SCOPE DE BLOC - JavaScript A un scope de bloc !
let x = 10;
if (x > 5) {
    let variableBloc = "Je suis dans le bloc";
    console.log("Dans le bloc:", variableBloc);
}
// console.log(variableBloc);  // Erreur ! Variable non définie

// 3. VAR vs LET - Différence importante
if (true) {
    var variableVar = "Je suis accessible partout";
    let variableLet = "Je suis dans le bloc seulement";
}
console.log("Var accessible:", variableVar);  // OK
// console.log("Let accessible:", variableLet);  // Erreur !

// 4. SCOPE IMBRIQUÉ
function fonctionExterne() {
    let x = "externe";
    
    function fonctionInterne() {
        let x = "interne";  // Nouvelle variable locale
        console.log("Interne:", x);
    }
    
    fonctionInterne();
    console.log("Externe:", x);
}

fonctionExterne();

// 5. CLOSURE AVEC SCOPE
function createurCompteur() {
    let compteur = 0;  // Variable dans le scope de la fonction
    
    return {
        incrementer: () => ++compteur,
        obtenir: () => compteur
    };
}

const monCompteur = createurCompteur();
console.log("Compteur:", monCompteur.obtenir());  // 0
monCompteur.incrementer();
console.log("Compteur:", monCompteur.obtenir());  // 1`;

  const typescriptCode = `// Scope de fonction et de bloc en TypeScript

// 1. SCOPE DE FONCTION
function fonctionExemple(): void {
    let variableFonction: string = "Je suis dans la fonction";
    console.log("Dans la fonction:", variableFonction);
    // Cette variable n'existe que dans la fonction
}

fonctionExemple();
// console.log(variableFonction);  // Erreur ! Variable non définie

// 2. SCOPE DE BLOC - TypeScript A un scope de bloc !
let x: number = 10;
if (x > 5) {
    let variableBloc: string = "Je suis dans le bloc";
    console.log("Dans le bloc:", variableBloc);
}
// console.log(variableBloc);  // Erreur ! Variable non définie

// 3. TYPES AVEC SCOPE
interface Compteur {
    incrementer(): number;
    obtenir(): number;
}

function createurCompteur(): Compteur {
    let compteur: number = 0;  // Variable dans le scope de la fonction
    
    return {
        incrementer: (): number => ++compteur,
        obtenir: (): number => compteur
    };
}

const monCompteur: Compteur = createurCompteur();
console.log("Compteur:", monCompteur.obtenir());  // 0
monCompteur.incrementer();
console.log("Compteur:", monCompteur.obtenir());  // 1

// 4. GENERICS AVEC SCOPE
function createurMemoise<T, R>(fn: (arg: T) => R): (arg: T) => R {
    const cache = new Map<T, R>();  // Variable dans le scope de la fonction
    
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

console.log("Fibonacci(10):", fibonacciMemoise(10));

// 5. SCOPE AVEC CLASSES
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
              🔧 COURS 7 : SCOPE DE FONCTION ET DE BLOC
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ DIFFÉRENCES ENTRE SCOPE DE FONCTION ET SCOPE DE BLOC ⚡
            </p>
          </div>
        </div>
      </header>
      <HamburgerMenu currentPage="cours-7" />

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
              Cours 7 : Scope de fonction et de bloc
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
                Comprendre les différences entre scope de fonction et scope de
                bloc
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Scope de fonction
                    </h4>
                    <p className="text-sm text-gray-600">
                      Variables accessibles seulement dans la fonction
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Scope de bloc
                    </h4>
                    <p className="text-sm text-gray-600">
                      Variables accessibles seulement dans le bloc
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

        {/* Exemples de Code */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-100/50 to-blue-100/50 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                💻 Exemples de Code
              </CardTitle>
              <CardDescription>
                Comparez les scopes dans les trois langages principaux
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    🎯 Mini-Application : Testeur de Scope
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Testez les différents types de scope
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
                      🐍 Testeur de Scope Python
                    </span>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`# Testeur de Scope - Mini-Application

print("🔧 TESTEUR DE SCOPE")
print("=" * 50)

# 1. SCOPE GLOBAL
variable_globale = "Je suis globale"
print("🌍 Variable globale:", variable_globale)

# 2. SCOPE DE FONCTION
def test_scope_fonction():
    variable_fonction = "Je suis dans la fonction"
    print("🔧 Dans la fonction:", variable_fonction)
    print("🌍 Dans la fonction - globale:", variable_globale)

test_scope_fonction()
print("🔧 Après fonction - locale:", variable_fonction)  # Erreur !

# 3. SCOPE DE BLOC (Python n'a pas de scope de bloc)
if True:
    variable_bloc = "Je suis dans le bloc"
    print("📦 Dans le bloc:", variable_bloc)

print("📦 Après bloc:", variable_bloc)  # Fonctionne en Python !

# 4. SCOPE IMBRIQUÉ
def fonction_externe():
    x = "externe"
    print("🔧 Externe - début:", x)
    
    def fonction_interne():
        x = "interne"
        print("🔧 Interne:", x)
    
    fonction_interne()
    print("🔧 Externe - fin:", x)

print("\\n🔧 TEST SCOPE IMBRIQUÉ:")
fonction_externe()

# 5. GLOBAL DANS FONCTION
compteur = 0

def incrementer():
    global compteur
    compteur += 1
    print("🔢 Compteur:", compteur)

print("\\n🔢 TEST GLOBAL:")
incrementer()  # 1
incrementer()  # 2
print("🌍 Compteur global:", compteur)

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
                        Scope de fonction
                      </h4>
                      <p className="text-sm text-gray-600">
                        Variables accessibles seulement dans la fonction
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Scope de bloc
                      </h4>
                      <p className="text-sm text-gray-600">
                        Variables accessibles seulement dans le bloc (JS/TS)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Python vs JS/TS
                      </h4>
                      <p className="text-sm text-gray-600">
                        Python n'a pas de scope de bloc
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        VAR vs LET
                      </h4>
                      <p className="text-sm text-gray-600">
                        VAR ignore les blocs, LET respecte les blocs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Scope imbriqué
                      </h4>
                      <p className="text-sm text-gray-600">
                        Fonctions dans des fonctions
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
                        Base de la programmation avancée
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
                Maintenant que vous maîtrisez les scopes, passez au hoisting !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 8 : Hoisting et temporal dead zone
                  </h3>
                  <p className="text-gray-600">
                    Comprendre le hoisting en JavaScript et la TDZ
                  </p>
                </div>
                <Link
                  href="/fondamentaux/cours-8"
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
