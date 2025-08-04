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
              🔗 COURS 9 : CHAÎNES DE SCOPE
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
      <HamburgerMenu currentPage="cours-9" />

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
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                🎯 Objectifs du Cours
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Comprendre la résolution de variables et le lexical scoping
              </CardDescription>
            </CardHeader>
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
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    🎯 Mini-Application : Explorateur de Scope
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
                        Chaînes de scope
                      </h4>
                      <p className="text-sm text-gray-600">
                        Variables résolues de l'intérieur vers l'extérieur
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
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
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">NONLOCAL</h4>
                      <p className="text-sm text-gray-600">
                        Accéder aux variables des fonctions parentes
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">GLOBAL</h4>
                      <p className="text-sm text-gray-600">
                        Modifier les variables globales
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
