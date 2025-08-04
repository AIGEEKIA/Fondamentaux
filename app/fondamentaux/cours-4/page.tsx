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
import HamburgerMenu from "@/components/hamburger-menu";

export default function Lecon4Page() {
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
      description: "Les collections comme des étagères organisées",
      examples: [
        "etagere = [ingredient1, ingredient2]",
        "placard = {'sel': 1, 'poivre': 2}",
        "frigo = set([lait, beurre])",
      ],
      explanation:
        "En cuisine, vous organisez vos ingrédients : étagères pour les listes, placards pour les dictionnaires, frigo pour les ensembles. Les collections sont comme ces espaces de rangement.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les collections comme des inventaires de jeu",
      examples: [
        "inventaire = [epee, bouclier, potion]",
        "stats = {'force': 15, 'agilite': 12}",
        "competences = set([tir, magie, combat])",
      ],
      explanation:
        "Dans un jeu, votre personnage a un inventaire : sac pour les listes, stats pour les dictionnaires, compétences pour les ensembles. Les collections sont comme ces systèmes d'inventaire.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les collections comme des zones de plantation",
      examples: [
        "parcelle = [tomate, carotte, salade]",
        "planning = {'mars': 'semis', 'avril': 'recolte'}",
        "especes = set([legumes, fruits, herbes])",
      ],
      explanation:
        "Au jardin, vous organisez vos plantations : parcelles pour les listes, planning pour les dictionnaires, espèces pour les ensembles. Les collections sont comme ces zones organisées.",
    },
  };

  const pythonCode = `# Collections avancées en Python

# 1. LISTE - Collection ordonnée et modifiable
fruits = ["🍎", "🍌", "🍊"]
fruits.append("🍇")  # Ajouter
fruits.remove("🍌")  # Supprimer
print("Liste :", fruits)

# 2. TUPLE - Collection ordonnée et immuable
coordonnees = (48.8566, 2.3522)
print("Tuple :", coordonnees)

# 3. DICTIONNAIRE - Collection clé-valeur
personne = {
    "nom": "Marie",
    "age": 25,
    "ville": "Paris"
}
personne["metier"] = "Développeuse"  # Ajouter
print("Dictionnaire :", personne)

# 4. SET - Collection d'éléments uniques
couleurs = {"rouge", "vert", "bleu"}
couleurs.add("jaune")  # Ajouter
couleurs.discard("vert")  # Supprimer
print("Set :", couleurs)

# 5. COMPREHENSION - Création rapide
nombres = [1, 2, 3, 4, 5]
carres = [x**2 for x in nombres]
print("Carrés :", carres)`;

  const javascriptCode = `// Collections avancées en JavaScript

// 1. ARRAY - Collection ordonnée et modifiable
const fruits = ["🍎", "🍌", "🍊"];
fruits.push("🍇");  // Ajouter
fruits.splice(1, 1);  // Supprimer
console.log("Array :", fruits);

// 2. OBJECT - Collection clé-valeur
const personne = {
    nom: "Marie",
    age: 25,
    ville: "Paris"
};
personne.metier = "Développeuse";  // Ajouter
console.log("Object :", personne);

// 3. SET - Collection d'éléments uniques
const couleurs = new Set(["rouge", "vert", "bleu"]);
couleurs.add("jaune");  // Ajouter
couleurs.delete("vert");  // Supprimer
console.log("Set :", couleurs);

// 4. MAP - Collection clé-valeur ordonnée
const scores = new Map();
scores.set("Alice", 100);
scores.set("Bob", 85);
console.log("Map :", scores);

// 5. COMPREHENSION - Méthodes fonctionnelles
const nombres = [1, 2, 3, 4, 5];
const carres = nombres.map(x => x**2);
console.log("Carrés :", carres);`;

  const typescriptCode = `// Collections avancées en TypeScript

// 1. ARRAY typé - Collection ordonnée et modifiable
const fruits: string[] = ["🍎", "🍌", "🍊"];
fruits.push("🍇");  // Ajouter
fruits.splice(1, 1);  // Supprimer
console.log("Array :", fruits);

// 2. INTERFACE - Structure typée
interface Personne {
    nom: string;
    age: number;
    ville: string;
    metier?: string;  // Optionnel
}

const personne: Personne = {
    nom: "Marie",
    age: 25,
    ville: "Paris"
};
personne.metier = "Développeuse";
console.log("Personne :", personne);

// 3. SET typé - Collection d'éléments uniques
const couleurs: Set<string> = new Set(["rouge", "vert", "bleu"]);
couleurs.add("jaune");
couleurs.delete("vert");
console.log("Set :", couleurs);

// 4. MAP typé - Collection clé-valeur ordonnée
const scores: Map<string, number> = new Map();
scores.set("Alice", 100);
scores.set("Bob", 85);
console.log("Map :", scores);

// 5. GENERICS - Collections génériques
function premierElement<T>(array: T[]): T | undefined {
    return array[0];
}

const nombres: number[] = [1, 2, 3];
const premier = premierElement(nombres);
console.log("Premier :", premier);`;

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
              📦 COURS 4 : COLLECTIONS AVANCÉES
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
      <HamburgerMenu currentPage="cours-4" />

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
              Cours 4 : Collections avancées
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
                Maîtriser les collections avancées dans 3 langages populaires
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Comprendre les collections
                    </h4>
                    <p className="text-sm text-gray-600">
                      Listes, dictionnaires, ensembles et plus
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
                Trois façons de comprendre les collections selon votre univers
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
                Comparez les collections dans les trois langages principaux
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
                    🎯 Mini-Application : Gestionnaire de Contacts
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Créez un gestionnaire de contacts avec des collections
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
                      🐍 Gestionnaire Python
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `# Gestionnaire de Contacts - Mini-Application

contacts = {}
emails = set()

print("📞 GESTIONNAIRE DE CONTACTS")
print("=" * 40)

# Ajouter des contacts
contacts["Marie"] = {"tel": "0123456789", "email": "marie@email.com"}
contacts["Pierre"] = {"tel": "0987654321", "email": "pierre@email.com"}
emails.add("marie@email.com")
emails.add("pierre@email.com")

# Afficher tous les contacts
print("📋 CONTACTS :")
for nom, info in contacts.items():
    print(f"👤 {nom}")
    print(f"   📞 {info['tel']}")
    print(f"   📧 {info['email']}")
    print()

# Rechercher un contact
recherche = "Marie"
if recherche in contacts:
    print(f"✅ Contact trouvé : {recherche}")
    print(f"📞 {contacts[recherche]['tel']}")
else:
    print(f"❌ Contact non trouvé : {recherche}")

print("=" * 40)
print(f"📧 Emails uniques : {len(emails)}")
print("=" * 40)`,
                          "gestionnaire"
                        )
                      }
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                      Copier le gestionnaire
                    </button>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`# Gestionnaire de Contacts - Mini-Application

contacts = {}
emails = set()

print("📞 GESTIONNAIRE DE CONTACTS")
print("=" * 40)

# Ajouter des contacts
contacts["Marie"] = {"tel": "0123456789", "email": "marie@email.com"}
contacts["Pierre"] = {"tel": "0987654321", "email": "pierre@email.com"}
emails.add("marie@email.com")
emails.add("pierre@email.com")

# Afficher tous les contacts
print("📋 CONTACTS :")
for nom, info in contacts.items():
    print(f"👤 {nom}")
    print(f"   📞 {info['tel']}")
    print(f"   📧 {info['email']}")
    print()

# Rechercher un contact
recherche = "Marie"
if recherche in contacts:
    print(f"✅ Contact trouvé : {recherche}")
    print(f"📞 {contacts[recherche]['tel']}")
else:
    print(f"❌ Contact non trouvé : {recherche}")

print("=" * 40)
print(f"📧 Emails uniques : {len(emails)}")
print("=" * 40)`}</code>
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
                        Listes = Collections ordonnées
                      </h4>
                      <p className="text-sm text-gray-600">
                        Pour stocker des éléments dans un ordre
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Dictionnaires = Clé-valeur
                      </h4>
                      <p className="text-sm text-gray-600">
                        Pour associer des données
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Ensembles = Éléments uniques
                      </h4>
                      <p className="text-sm text-gray-600">
                        Pour éviter les doublons
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Performance différente
                      </h4>
                      <p className="text-sm text-gray-600">
                        Chaque collection a ses avantages
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Méthodes spécifiques
                      </h4>
                      <p className="text-sm text-gray-600">
                        Chaque langage a ses particularités
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
                        Base de la manipulation de données
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
                Maintenant que vous maîtrisez les collections, passez aux
                fonctions de haut niveau !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 5 : Fonctions de haut niveau
                  </h3>
                  <p className="text-gray-600">
                    map, filter, reduce et programmation fonctionnelle
                  </p>
                </div>
                <Link
                  href="/fondamentaux/cours-5"
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
