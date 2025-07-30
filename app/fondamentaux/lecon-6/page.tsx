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

export default function Lecon6Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
              🧠 COURS 6 : SCOPE & CLOSURES
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

      {/* Menu hamburger */}
      <div className="fixed top-28 right-16 z-50 flex flex-col items-center gap-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center w-12 h-12 bg-blue-600/90 backdrop-blur-sm rounded-full hover:bg-blue-700/90 transition-all duration-300 hover:scale-110 shadow-xl border border-blue-500/50"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>

        {isMenuOpen && (
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-200 p-4 min-w-[200px]">
            <div className="space-y-2">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-700"
              >
                <Home className="h-5 w-5" />
                <span>Accueil</span>
              </Link>
              <Link
                href="/analogie-cuisine"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-700"
              >
                <ChefHat className="h-5 w-5" />
                <span>La Cuisine</span>
              </Link>
              <Link
                href="/analogie-architecture"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-700"
              >
                <BookOpen className="h-5 w-5" />
                <span>L'Architecte</span>
              </Link>
              <Link
                href="/fondamentaux"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-700"
              >
                <Brain className="h-5 w-5" />
                <span>Les Fondamentaux</span>
              </Link>
              <Link
                href="/fondamentaux/installation-python"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-700"
              >
                <Code className="h-5 w-5" />
                <span>Installation Python</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <main className="container mx-auto px-4 py-8 mt-48">
        {/* Navigation breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/fondamentaux"
              className="hover:text-blue-600 transition-colors"
            >
              Fondamentaux
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
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                🎯 Objectifs du Cours
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Maîtriser la portée des variables et les closures
              </CardDescription>
            </CardHeader>
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
                    🎯 Mini-Application : Gestionnaire de Cache
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
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `# Gestionnaire de Cache - Mini-Application

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

print("=" * 50)`,
                          "cache"
                        )
                      }
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier le gestionnaire
                    </button>
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
                        Scope global
                      </h4>
                      <p className="text-sm text-gray-600">
                        Variables accessibles partout
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Scope local
                      </h4>
                      <p className="text-sm text-gray-600">
                        Variables accessibles seulement dans la fonction
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Closures</h4>
                      <p className="text-sm text-gray-600">
                        Fonctions qui capturent des variables
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Isolation</h4>
                      <p className="text-sm text-gray-600">
                        Chaque closure a son propre état
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Mémoire</h4>
                      <p className="text-sm text-gray-600">
                        Les closures gardent les variables en mémoire
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
                  href="/fondamentaux/lecon-7"
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
