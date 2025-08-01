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

export default function Lecon3Page() {
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
      description:
        "Les structures de contrôle comme des recettes avec des étapes",
      examples: [
        "if (ingredients_disponibles) {",
        "  preparer_plat();",
        "} else {",
        "  aller_au_magasin();",
        "}",
      ],
      explanation:
        "En cuisine, vous suivez des recettes avec des conditions : 'Si j'ai les ingrédients, je cuisine. Sinon, je vais au magasin.' Les structures de contrôle sont comme ces décisions culinaires.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les structures de contrôle comme des choix dans un jeu",
      examples: [
        "if (player_health > 0) {",
        "  continuer_combat();",
        "} else {",
        "  game_over();",
        "}",
      ],
      explanation:
        "Dans un jeu, votre personnage prend des décisions : 'Si j'ai de la vie, je continue. Sinon, c'est game over.' Les structures de contrôle sont comme ces choix de gameplay.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les structures de contrôle comme des soins aux plantes",
      examples: [
        "if (sol_seche) {",
        "  arroser_plante();",
        "} else {",
        "  attendre();",
        "}",
      ],
      explanation:
        "Au jardin, vous prenez soin des plantes selon les conditions : 'Si le sol est sec, j'arrose. Sinon, j'attends.' Les structures de contrôle sont comme ces décisions de jardinage.",
    },
  };

  const pythonCode = `# Structures de contrôle en Python

# 1. IF simple
age = 18
if age >= 18:
    print("✅ Majeur")
else:
    print("❌ Mineur")

# 2. IF avec elif
note = 15
if note >= 16:
    print("🏆 Excellent")
elif note >= 14:
    print("🌟 Très bien")
elif note >= 12:
    print("👍 Bien")
else:
    print("📚 À améliorer")

# 3. FOR avec condition
fruits = ["🍎", "🍌", "🍊"]
for fruit in fruits:
    if fruit == "🍌":
        print(f"🍌 Mon préféré : {fruit}")
    else:
        print(f"Fruit : {fruit}")

# 4. WHILE avec condition
compteur = 0
while compteur < 5:
    if compteur % 2 == 0:
        print(f"✅ Pair : {compteur}")
    else:
        print(f"🔢 Impair : {compteur}")
    compteur += 1

# 5. Conditions complexes
temperature = 25
humidite = 60
if temperature > 20 and humidite < 70:
    print("🌞 Temps idéal")
elif temperature < 10 or humidite > 90:
    print("🌧️ Temps difficile")
else:
    print("🌤️ Temps correct")`;

  const javascriptCode = `// Structures de contrôle en JavaScript

// 1. IF simple
const age = 18;
if (age >= 18) {
    console.log("✅ Majeur");
} else {
    console.log("❌ Mineur");
}

// 2. IF avec else if
const note = 15;
if (note >= 16) {
    console.log("🏆 Excellent");
} else if (note >= 14) {
    console.log("🌟 Très bien");
} else if (note >= 12) {
    console.log("👍 Bien");
} else {
    console.log("📚 À améliorer");
}

// 3. FOR avec condition
const fruits = ["🍎", "🍌", "🍊"];
for (let fruit of fruits) {
    if (fruit === "🍌") {
        console.log(\`🍌 Mon préféré : \${fruit}\`);
    } else {
        console.log(\`Fruit : \${fruit}\`);
    }
}

// 4. WHILE avec condition
let compteur = 0;
while (compteur < 5) {
    if (compteur % 2 === 0) {
        console.log(\`✅ Pair : \${compteur}\`);
    } else {
        console.log(\`🔢 Impair : \${compteur}\`);
    }
    compteur++;
}

// 5. Switch statement
const jour = "Lundi";
switch (jour) {
    case "Lundi":
        console.log("📅 Début de semaine");
        break;
    case "Vendredi":
        console.log("🎉 Weekend !");
        break;
    default:
        console.log("📆 Jour normal");
}`;

  const typescriptCode = `// Structures de contrôle en TypeScript

// 1. IF simple typé
const age: number = 18;
if (age >= 18) {
    console.log("✅ Majeur");
} else {
    console.log("❌ Mineur");
}

// 2. IF avec else if typé
const note: number = 15;
if (note >= 16) {
    console.log("🏆 Excellent");
} else if (note >= 14) {
    console.log("🌟 Très bien");
} else if (note >= 12) {
    console.log("👍 Bien");
} else {
    console.log("📚 À améliorer");
}

// 3. FOR avec condition typée
const fruits: string[] = ["🍎", "🍌", "🍊"];
for (let fruit of fruits) {
    if (fruit === "🍌") {
        console.log(\`🍌 Mon préféré : \${fruit}\`);
    } else {
        console.log(\`Fruit : \${fruit}\`);
    }
}

// 4. WHILE avec condition typée
let compteur: number = 0;
while (compteur < 5) {
    if (compteur % 2 === 0) {
        console.log(\`✅ Pair : \${compteur}\`);
    } else {
        console.log(\`🔢 Impair : \${compteur}\`);
    }
    compteur++;
}

// 5. Switch statement typé
const jour: string = "Lundi";
switch (jour) {
    case "Lundi":
        console.log("📅 Début de semaine");
        break;
    case "Vendredi":
        console.log("🎉 Weekend !");
        break;
    default:
        console.log("📆 Jour normal");
}`;

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
              🎛️ COURS 3 : STRUCTURES DE CONTRÔLE
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
                href="/"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-700"
              >
                <Home className="h-5 w-5" />
                <span>Accueil</span>
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
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-blue-600 font-semibold">
              Cours 3 : Structures de contrôle
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
                Maîtriser les conditions et boucles dans 3 langages populaires
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Comprendre les conditions
                    </h4>
                    <p className="text-sm text-gray-600">
                      IF, ELSE, SWITCH et leurs usages
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Comprendre les boucles
                    </h4>
                    <p className="text-sm text-gray-600">
                      FOR, WHILE et leurs différences
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
                Trois façons de comprendre les structures de contrôle selon
                votre univers
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
                Comparez les boucles dans les trois langages principaux
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
                    🎯 Mini-Application : Système de Notation
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Créez un système de notation avec des conditions et boucles
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
                      🐍 Système Python
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `# Système de Notation - Mini-Application

def evaluer_note(note):
    """Évalue une note et retourne un commentaire"""
    if note >= 18:
        return "🏆 Excellent - Félicitations !"
    elif note >= 16:
        return "🌟 Très bien - Bon travail !"
    elif note >= 14:
        return "👍 Bien - Continue comme ça !"
    elif note >= 12:
        return "📚 Passable - Peut mieux faire"
    elif note >= 10:
        return "⚠️ Juste - Travail à améliorer"
    else:
        return "❌ Insuffisant - Travail nécessaire"

def analyser_notes(notes):
    """Analyse une liste de notes"""
    if not notes:
        print("📝 Aucune note à analyser")
        return
    
    print("📊 ANALYSE DES NOTES")
    print("=" * 40)
    
    # Calculer les statistiques
    moyenne = sum(notes) / len(notes)
    meilleure = max(notes)
    pire = min(notes)
    
    print(f"📝 Notes : {notes}")
    print(f"📊 Moyenne : {moyenne:.2f}")
    print(f"🏆 Meilleure : {meilleure}")
    print(f"📉 Pire : {pire}")
    print("=" * 40)
    
    # Analyser chaque note
    for i, note in enumerate(notes, 1):
        commentaire = evaluer_note(note)
        print(f"Note {i} ({note}/20) : {commentaire}")

# Test avec des notes
notes_eleve = [15, 18, 12, 16, 14, 8, 19]
analyser_notes(notes_eleve)`,
                          "systeme"
                        )
                      }
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier le système
                    </button>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`# Système de Notation - Mini-Application

def evaluer_note(note):
    """Évalue une note et retourne un commentaire"""
    if note >= 18:
        return "🏆 Excellent - Félicitations !"
    elif note >= 16:
        return "🌟 Très bien - Bon travail !"
    elif note >= 14:
        return "👍 Bien - Continue comme ça !"
    elif note >= 12:
        return "📚 Passable - Peut mieux faire"
    elif note >= 10:
        return "⚠️ Juste - Travail à améliorer"
    else:
        return "❌ Insuffisant - Travail nécessaire"

def analyser_notes(notes):
    """Analyse une liste de notes"""
    if not notes:
        print("📝 Aucune note à analyser")
        return
    
    print("📊 ANALYSE DES NOTES")
    print("=" * 40)
    
    # Calculer les statistiques
    moyenne = sum(notes) / len(notes)
    meilleure = max(notes)
    pire = min(notes)
    
    print(f"📝 Notes : {notes}")
    print(f"📊 Moyenne : {moyenne:.2f}")
    print(f"🏆 Meilleure : {meilleure}")
    print(f"📉 Pire : {pire}")
    print("=" * 40)
    
    # Analyser chaque note
    for i, note in enumerate(notes, 1):
        commentaire = evaluer_note(note)
        print(f"Note {i} ({note}/20) : {commentaire}")

# Test avec des notes
notes_eleve = [15, 18, 12, 16, 14, 8, 19]
analyser_notes(notes_eleve)`}</code>
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
                        IF = Prise de décision
                      </h4>
                      <p className="text-sm text-gray-600">
                        Pour exécuter du code selon une condition
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        ELSE = Alternative
                      </h4>
                      <p className="text-sm text-gray-600">
                        Code exécuté si la condition est fausse
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        SWITCH = Multiples conditions
                      </h4>
                      <p className="text-sm text-gray-600">
                        Pour tester plusieurs valeurs possibles
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Conditions complexes
                      </h4>
                      <p className="text-sm text-gray-600">
                        AND, OR, NOT pour combiner les conditions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Boucles combinées
                      </h4>
                      <p className="text-sm text-gray-600">
                        FOR et WHILE avec conditions imbriquées
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
                        Base de la logique programmatique
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
                Maintenant que vous maîtrisez les structures de contrôle, passez
                aux collections !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 4 : Collections avancées
                  </h3>
                  <p className="text-gray-600">
                    Listes, dictionnaires et ensembles dans les 3 langages
                  </p>
                </div>
                <Link
                  href="/fondamentaux/lecon-4"
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
