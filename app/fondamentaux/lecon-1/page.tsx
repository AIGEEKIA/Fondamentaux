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

export default function Lecon1Page() {
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
      description: "Les variables comme des ingrédients dans des boîtes",
      examples: [
        "nom_plat = 'Ratatouille'",
        "quantite_tomates = 4",
        "prix_ingredients = 12.50",
        "plat_prete = True",
      ],
      explanation:
        "En cuisine, chaque ingrédient a sa place dans une boîte étiquetée. Les variables sont comme ces boîtes : elles stockent des informations avec un nom clair.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les variables comme l'inventaire du personnage",
      examples: [
        "player_name = 'ShadowKnight'",
        "health_points = 100",
        "gold_coins = 1250",
        "is_alive = True",
      ],
      explanation:
        "Dans un jeu, votre personnage a un inventaire avec des objets, des stats, de l'or. Les variables sont comme cet inventaire : elles gardent en mémoire toutes les informations importantes.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les variables comme des graines dans des pots",
      examples: [
        "nom_plante = 'Tomate'",
        "hauteur_cm = 45",
        "jours_arrosage = 3",
        "fleurie = False",
      ],
      explanation:
        "Au jardin, chaque plante a son pot avec une étiquette. Les variables sont comme ces pots : elles contiennent des informations précieuses qu'on peut consulter et modifier.",
    },
  };

  const pythonCode = `# Déclaration de variables en Python
nom = "Alice"
age = 25
taille = 1.75
est_etudiante = True

# Affichage des variables
print(f"Nom: {nom}")
print(f"Âge: {age} ans")
print(f"Taille: {taille}m")
print(f"Étudiante: {est_etudiante}")

# Modification d'une variable
age = 26
print(f"Nouvel âge: {age}")`;

  const javascriptCode = `// Déclaration de variables en JavaScript
let nom = "Alice";
const age = 25;
let taille = 1.75;
const estEtudiante = true;

// Affichage des variables
console.log("Nom: " + nom);
console.log("Âge: " + age + " ans");
console.log("Taille: " + taille + "m");
console.log("Étudiante: " + estEtudiante);

// Modification d'une variable
nom = "Alice Martin";
console.log("Nouveau nom: " + nom);`;

  const typescriptCode = `// Déclaration de variables en TypeScript
let nom: string = "Alice";
const age: number = 25;
let taille: number = 1.75;
const estEtudiante: boolean = true;

// Affichage des variables
console.log("Nom: " + nom);
console.log("Âge: " + age + " ans");
console.log("Taille: " + taille + "m");
console.log("Étudiante: " + estEtudiante);

// Modification d'une variable
nom = "Alice Martin";
console.log("Nouveau nom: " + nom);`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500/90 via-indigo-600/90 to-purple-700/90 text-white py-6 shadow-lg z-40 overflow-hidden rounded-2xl mx-4 mt-4 backdrop-blur-sm">
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
              💻 COURS 1 : VARIABLES
            </h1>
            <h2 className="text-3xl font-semibold text-purple-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-purple-200 max-w-4xl mx-auto">
              ⚡ COMPARAISON MULTI-LANGAGES ⚡
            </p>
          </div>
        </div>
      </header>

      {/* Menu hamburger */}
      <div className="fixed top-28 right-16 z-50 flex flex-col items-center gap-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center w-12 h-12 bg-purple-600/90 backdrop-blur-sm rounded-full hover:bg-purple-700/90 transition-all duration-300 hover:scale-110 shadow-xl border border-purple-500/50"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>

        {isMenuOpen && (
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-200 p-4 min-w-[200px]">
            <div className="space-y-2">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
              >
                <Home className="h-5 w-5" />
                <span>Accueil</span>
              </Link>
              <Link
                href="/analogie-cuisine"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
              >
                <ChefHat className="h-5 w-5" />
                <span>La Cuisine</span>
              </Link>
              <Link
                href="/analogie-architecture"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
              >
                <BookOpen className="h-5 w-5" />
                <span>L'Architecte</span>
              </Link>
              <Link
                href="/fondamentaux"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
              >
                <Brain className="h-5 w-5" />
                <span>Les Fondamentaux</span>
              </Link>
              <Link
                href="/fondamentaux/installation-python"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
              >
                <Code className="h-5 w-5" />
                <span>Installation Python</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <main className="container mx-auto px-4 py-8 mt-32">
        {/* Navigation breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-purple-600 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/fondamentaux"
              className="hover:text-purple-600 transition-colors"
            >
              Fondamentaux
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-purple-600 font-semibold">
              Cours 1 : Variables
            </span>
          </div>
        </nav>

        {/* Objectifs du cours */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 border-2 border-purple-300/50 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                🎯 Objectifs du Cours
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Comprendre les variables et leur déclaration dans 3 langages
                populaires
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Comprendre les variables
                    </h4>
                    <p className="text-sm text-gray-600">
                      Définition, déclaration et utilisation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-500 mt-1" />
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
                  <CheckCircle className="h-6 w-6 text-purple-500 mt-1" />
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
          <Card className="mb-8 bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 shadow-xl">
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
          <Card className="bg-gradient-to-br from-blue-100/50 to-purple-100/50 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                💻 Exemples de Code
              </CardTitle>
              <CardDescription>
                Comparez les variables dans les trois langages principaux
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
                    🎯 Mini-Application : Quiz Variables
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Créez un quiz interactif pour tester vos connaissances
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
                      🐍 Quiz Python
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `print("Quiz : Que va afficher ce code ?")

nom = "Marie"
age = 25
ville = "Paris"

print(f"Nom: {nom}")
print(f"Age: {age}")
print(f"Ville: {ville}")

# Question : Que va afficher ce code ?
# Réponse : 
# Nom: Marie
# Age: 25
# Ville: Paris`,
                          "quiz"
                        )
                      }
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier le quiz
                    </button>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`print("Quiz : Que va afficher ce code ?")

nom = "Marie"
age = 25
ville = "Paris"

print(f"Nom: {nom}")
print(f"Age: {age}")
print(f"Ville: {ville}")

# Question : Que va afficher ce code ?
# Réponse : 
# Nom: Marie
# Age: 25
# Ville: Paris`}</code>
                  </pre>
                </div>

                <h4 className="font-semibold text-gray-800 mb-4 mt-8">
                  🟨 Instructions JavaScript :
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                  <li>
                    <strong>Installez Node.js :</strong>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
                      <li>
                        <strong>Windows/macOS :</strong> Téléchargez depuis{" "}
                        <a
                          href="https://nodejs.org"
                          className="text-blue-600 hover:text-blue-700 underline"
                        >
                          nodejs.org
                        </a>
                      </li>
                      <li>
                        <strong>Linux :</strong>{" "}
                        <code className="bg-gray-200 px-1 py-0.5 rounded">
                          sudo apt install nodejs
                        </code>{" "}
                        (Ubuntu/Debian)
                      </li>
                    </ul>
                  </li>
                  <li>
                    Vérifiez l'installation :{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded">
                      node --version
                    </code>
                  </li>
                  <li>Créez un nouveau fichier JavaScript (.js)</li>
                  <li>Copiez le code exemple ci-dessous</li>
                  <li>
                    Exécutez avec :{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded">
                      node nom-du-fichier.js
                    </code>
                  </li>
                </ol>

                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300 font-mono text-sm">
                      🟨 Quiz JavaScript
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `console.log("Quiz : Que va afficher ce code ?");

let nom = "Marie";
let age = 25;
let ville = "Paris";

console.log("Nom: " + nom);
console.log("Age: " + age);
console.log("Ville: " + ville);

// Question : Que va afficher ce code ?
// Réponse : 
// Nom: Marie
// Age: 25
// Ville: Paris`,
                          "quiz-js"
                        )
                      }
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier le quiz
                    </button>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`console.log("Quiz : Que va afficher ce code ?");

let nom = "Marie";
let age = 25;
let ville = "Paris";

console.log("Nom: " + nom);
console.log("Age: " + age);
console.log("Ville: " + ville);

// Question : Que va afficher ce code ?
// Réponse : 
// Nom: Marie
// Age: 25
// Ville: Paris`}</code>
                  </pre>
                </div>

                <h4 className="font-semibold text-gray-800 mb-4 mt-8">
                  🔷 Instructions TypeScript :
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                  <li>
                    <strong>Prérequis :</strong> Node.js doit être installé
                    (voir instructions JavaScript ci-dessus)
                  </li>
                  <li>
                    <strong>Installez TypeScript :</strong>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
                      <li>
                        <strong>Installation globale :</strong>{" "}
                        <code className="bg-gray-200 px-1 py-0.5 rounded">
                          npm install -g typescript
                        </code>
                      </li>
                      <li>
                        <strong>Ou installation locale :</strong>{" "}
                        <code className="bg-gray-200 px-1 py-0.5 rounded">
                          npm install typescript
                        </code>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Vérifiez l'installation :{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded">
                      tsc --version
                    </code>
                  </li>
                  <li>Créez un nouveau fichier TypeScript (.ts)</li>
                  <li>Copiez le code exemple ci-dessous</li>
                  <li>
                    Compilez avec :{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded">
                      tsc nom-du-fichier.ts
                    </code>
                  </li>
                  <li>
                    Exécutez le JavaScript généré :{" "}
                    <code className="bg-gray-200 px-2 py-1 rounded">
                      node nom-du-fichier.js
                    </code>
                  </li>
                </ol>

                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300 font-mono text-sm">
                      🔷 Quiz TypeScript
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `console.log("Quiz : Que va afficher ce code ?");

let nom: string = "Marie";
let age: number = 25;
let ville: string = "Paris";

console.log("Nom: " + nom);
console.log("Age: " + age);
console.log("Ville: " + ville);

// Question : Que va afficher ce code ?
// Réponse : 
// Nom: Marie
// Age: 25
// Ville: Paris`,
                          "quiz-ts"
                        )
                      }
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier le quiz
                    </button>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`console.log("Quiz : Que va afficher ce code ?");

let nom: string = "Marie";
let age: number = 25;
let ville: string = "Paris";

console.log("Nom: " + nom);
console.log("Age: " + age);
console.log("Ville: " + ville);

// Question : Que va afficher ce code ?
// Réponse : 
// Nom: Marie
// Age: 25
// Ville: Paris`}</code>
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
                        Variables = Boîtes étiquetées
                      </h4>
                      <p className="text-sm text-gray-600">
                        Stockent des données avec un nom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Typage dynamique
                      </h4>
                      <p className="text-sm text-gray-600">
                        Python et JS changent le type automatiquement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Typage statique
                      </h4>
                      <p className="text-sm text-gray-600">
                        TypeScript vérifie les types à la compilation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Mots-clés différents
                      </h4>
                      <p className="text-sm text-gray-600">
                        let/const (JS/TS) vs direct (Python)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Convention de nommage
                      </h4>
                      <p className="text-sm text-gray-600">
                        snake_case (Python) vs camelCase (JS/TS)
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
                        Base de toute programmation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation vers le prochain cours */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-500/10 to-blue-600/10 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                🚀 Prochain cours
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Prêt pour le cours suivant ? Découvrez les fonctions !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 2 : Fonctions comparatives
                  </h3>
                  <p className="text-gray-600">
                    Définition et utilisation des fonctions dans les 3 langages
                  </p>
                </div>
                <Link
                  href="/fondamentaux/lecon-2"
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
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
