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

export default function Lecon11Page() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, language: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const analogies = {
    cuisine: {
      title: "🍳 Cuisine",
      description: "La gestion d'état comme un livre de recettes",
      examples: [
        "recette = état global",
        "ingrédients = variables locales",
        "cuisson = opérations asynchrones",
      ],
      explanation:
        "En cuisine, vous avez un livre de recettes (état global) et des ingrédients locaux. La cuisson est asynchrone - vous attendez que ça cuit !",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "La gestion d'état comme un inventaire de jeu",
      examples: [
        "inventaire = état global",
        "équipement = variables locales",
        "chargement = opérations asynchrones",
      ],
      explanation:
        "Dans un jeu, votre inventaire est global, votre équipement local. Le chargement des niveaux est asynchrone !",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "La gestion d'état comme un plan de jardin",
      examples: [
        "plan = état global",
        "plantes = variables locales",
        "croissance = opérations asynchrones",
      ],
      explanation:
        "Au jardin, le plan global guide tout, chaque plante a son état local. La croissance est asynchrone !",
    },
  };

  const pythonCode = `# Gestion d'état et programmation asynchrone en Python

# 1. ÉTAT GLOBAL ET LOCAL
etat_global = {"utilisateurs": [], "compteur": 0}

def ajouter_utilisateur(nom):
    global etat_global
    etat_global["utilisateurs"].append(nom)
    etat_global["compteur"] += 1
    return etat_global["compteur"]

def fonction_locale():
    # État local - pas accessible de l'extérieur
    compteur_local = 0
    def incrementer():
        nonlocal compteur_local
        compteur_local += 1
        return compteur_local
    return incrementer

print("🐍 Test gestion d'état:")
print("Ajout utilisateur:", ajouter_utilisateur("Alice"))
print("Ajout utilisateur:", ajouter_utilisateur("Bob"))
print("État global:", etat_global)

# 2. PROGRAMMATION ASYNCHRONE
import asyncio
import time

async def recuperer_utilisateur(id):
    print(f"🔄 Récupération utilisateur {id}...")
    await asyncio.sleep(1)  # Simulation délai réseau
    return {"id": id, "nom": f"Utilisateur {id}"}

async def recuperer_utilisateurs():
    print("📡 Récupération de plusieurs utilisateurs...")
    utilisateurs = []
    for i in range(3):
        utilisateur = await recuperer_utilisateur(i)
        utilisateurs.append(utilisateur)
    return utilisateurs

# 3. CALLBACKS
def traiter_utilisateur(utilisateur, callback):
    print(f"🔧 Traitement de {utilisateur['nom']}")
    callback(f"Traîté: {utilisateur['nom']}")

def afficher_resultat(resultat):
    print(f"✅ {resultat}")

print("\\n🔄 Test asynchrone:")
async def main():
    utilisateurs = await recuperer_utilisateurs()
    print("Utilisateurs récupérés:", utilisateurs)
    
    # Test callbacks
    for utilisateur in utilisateurs:
        traiter_utilisateur(utilisateur, afficher_resultat)

# asyncio.run(main())`;

  const javascriptCode = `// Gestion d'état et programmation asynchrone en JavaScript

// 1. ÉTAT GLOBAL ET LOCAL
let etatGlobal = { utilisateurs: [], compteur: 0 };

function ajouterUtilisateur(nom) {
    etatGlobal.utilisateurs.push(nom);
    etatGlobal.compteur += 1;
    return etatGlobal.compteur;
}

function fonctionLocale() {
    // État local - pas accessible de l'extérieur
    let compteurLocal = 0;
    return function incrementer() {
        compteurLocal += 1;
        return compteurLocal;
    };
}

console.log("🐍 Test gestion d'état:");
console.log("Ajout utilisateur:", ajouterUtilisateur("Alice"));
console.log("Ajout utilisateur:", ajouterUtilisateur("Bob"));
console.log("État global:", etatGlobal);

// 2. PROGRAMMATION ASYNCHRONE
async function recupererUtilisateur(id) {
    console.log(\`🔄 Récupération utilisateur \${id}...\`);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulation délai réseau
    return { id, nom: \`Utilisateur \${id}\` };
}

async function recupererUtilisateurs() {
    console.log("📡 Récupération de plusieurs utilisateurs...");
    const utilisateurs = [];
    for (let i = 0; i < 3; i++) {
        const utilisateur = await recupererUtilisateur(i);
        utilisateurs.push(utilisateur);
    }
    return utilisateurs;
}

// 3. CALLBACKS
function traiterUtilisateur(utilisateur, callback) {
    console.log(\`🔧 Traitement de \${utilisateur.nom}\`);
    callback(\`Traîté: \${utilisateur.nom}\`);
}

function afficherResultat(resultat) {
    console.log(\`✅ \${resultat}\`);
}

console.log("\\n🔄 Test asynchrone:");
recupererUtilisateurs().then(utilisateurs => {
    console.log("Utilisateurs récupérés:", utilisateurs);
    
    // Test callbacks
    utilisateurs.forEach(utilisateur => {
        traiterUtilisateur(utilisateur, afficherResultat);
    });
});

// 4. PROMISES
function recupererUtilisateurPromise(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, nom: \`Utilisateur \${id}\` });
        }, 1000);
    });
}

Promise.all([
    recupererUtilisateurPromise(1),
    recupererUtilisateurPromise(2),
    recupererUtilisateurPromise(3)
]).then(utilisateurs => {
    console.log("\\n📦 Utilisateurs récupérés en parallèle:", utilisateurs);
});`;

  const typescriptCode = `// Gestion d'état et programmation asynchrone en TypeScript

// 1. INTERFACES POUR L'ÉTAT
interface Utilisateur {
    id: number;
    nom: string;
}

interface EtatGlobal {
    utilisateurs: Utilisateur[];
    compteur: number;
}

// 2. ÉTAT GLOBAL ET LOCAL
let etatGlobal: EtatGlobal = { utilisateurs: [], compteur: 0 };

function ajouterUtilisateur(nom: string): number {
    etatGlobal.utilisateurs.push({ id: etatGlobal.compteur, nom });
    etatGlobal.compteur += 1;
    return etatGlobal.compteur;
}

function fonctionLocale(): () => number {
    // État local - pas accessible de l'extérieur
    let compteurLocal: number = 0;
    return function incrementer(): number {
        compteurLocal += 1;
        return compteurLocal;
    };
}

console.log("🐍 Test gestion d'état:");
console.log("Ajout utilisateur:", ajouterUtilisateur("Alice"));
console.log("Ajout utilisateur:", ajouterUtilisateur("Bob"));
console.log("État global:", etatGlobal);

// 3. PROGRAMMATION ASYNCHRONE
async function recupererUtilisateur(id: number): Promise<Utilisateur> {
    console.log(\`🔄 Récupération utilisateur \${id}...\`);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulation délai réseau
    return { id, nom: \`Utilisateur \${id}\` };
}

async function recupererUtilisateurs(): Promise<Utilisateur[]> {
    console.log("📡 Récupération de plusieurs utilisateurs...");
    const utilisateurs: Utilisateur[] = [];
    for (let i = 0; i < 3; i++) {
        const utilisateur = await recupererUtilisateur(i);
        utilisateurs.push(utilisateur);
    }
    return utilisateurs;
}

// 4. CALLBACKS AVEC TYPES
function traiterUtilisateur(utilisateur: Utilisateur, callback: (resultat: string) => void): void {
    console.log(\`🔧 Traitement de \${utilisateur.nom}\`);
    callback(\`Traîté: \${utilisateur.nom}\`);
}

function afficherResultat(resultat: string): void {
    console.log(\`✅ \${resultat}\`);
}

console.log("\\n🔄 Test asynchrone:");
recupererUtilisateurs().then((utilisateurs: Utilisateur[]) => {
    console.log("Utilisateurs récupérés:", utilisateurs);
    
    // Test callbacks
    utilisateurs.forEach(utilisateur => {
        traiterUtilisateur(utilisateur, afficherResultat);
    });
});

// 5. PROMISES AVEC TYPES
function recupererUtilisateurPromise(id: number): Promise<Utilisateur> {
    return new Promise<Utilisateur>((resolve) => {
        setTimeout(() => {
            resolve({ id, nom: \`Utilisateur \${id}\` });
        }, 1000);
    });
}

Promise.all([
    recupererUtilisateurPromise(1),
    recupererUtilisateurPromise(2),
    recupererUtilisateurPromise(3)
]).then((utilisateurs: Utilisateur[]) => {
    console.log("\\n📦 Utilisateurs récupérés en parallèle:", utilisateurs);
});

// 6. HOOKS STYLE (Simulation React)
function useState<T>(initialValue: T): [T, (value: T) => void] {
    let state = initialValue;
    const setState = (value: T) => {
        state = value;
    };
    return [state, setState];
}

const [compteur, setCompteur] = useState<number>(0);
console.log("\\n🎣 Hook style - Compteur:", compteur);
setCompteur(5);
console.log("🎣 Hook style - Nouveau compteur:", compteur);`;

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
              🔄 COURS 11 : GESTION D'ÉTAT
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ PROGRAMMATION ASYNCHRONE ET GESTION D'ÉTAT ⚡
            </p>
          </div>
        </div>
      </header>
      <HamburgerMenu currentPage="lecon-11" />

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
              Cours 11 : Gestion d'état
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
                Comprendre la gestion d'état et la programmation asynchrone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Gestion d'état
                    </h4>
                    <p className="text-sm text-gray-600">
                      Global vs local, mutable vs immutable
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Programmation asynchrone
                    </h4>
                    <p className="text-sm text-gray-600">
                      Callbacks, promises, async/await
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Applications réactives
                    </h4>
                    <p className="text-sm text-gray-600">
                      Performance et réactivité
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
                Trois façons de comprendre la gestion d'état selon votre univers
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
          <Card className="bg-gradient-to-br from-emerald-500/10 to-green-600/10 border-2 border-emerald-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    📖 DÉFINITION SIMPLE
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Gestion d'État et Programmation Asynchrone
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-emerald-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    🔄 Qu'est-ce que la Gestion d'État ?
                  </h4>
                  <p className="text-gray-700 mb-4">
                    La <strong>gestion d'état</strong> c'est comme gérer les
                    informations dans votre application. C'est la façon dont
                    votre programme se souvient des choses et les partage entre
                    différentes parties.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <h5 className="font-semibold text-emerald-800 mb-2">
                        🌍 État Global
                      </h5>
                      <p className="text-sm text-gray-600">
                        Accessible partout dans l'application. Comme un tableau
                        d'affichage dans une entreprise.
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">
                        🏠 État Local
                      </h5>
                      <p className="text-sm text-gray-600">
                        Accessible seulement dans une fonction ou composant.
                        Comme les notes personnelles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-emerald-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    ⚡ Qu'est-ce que la Programmation Asynchrone ?
                  </h4>
                  <p className="text-gray-700 mb-4">
                    La <strong>programmation asynchrone</strong> permet à votre
                    code de faire plusieurs choses en même temps sans bloquer
                    l'interface utilisateur. C'est comme cuisiner plusieurs
                    plats simultanément.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h5 className="font-semibold text-orange-800 mb-2">
                        📞 Callbacks
                      </h5>
                      <p className="text-sm text-gray-600">
                        "Appelle-moi quand tu as fini" - fonction qui s'exécute
                        après une autre.
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-800 mb-2">
                        🤝 Promises
                      </h5>
                      <p className="text-sm text-gray-600">
                        "Je te promets un résultat" - objet qui représente une
                        opération future.
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 mb-2">
                        ⏳ Async/Await
                      </h5>
                      <p className="text-sm text-gray-600">
                        "Attends que je finisse" - syntaxe moderne pour gérer
                        l'asynchrone.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-emerald-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    🎯 Pourquoi c'est Important ?
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        🚀 Performance
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Applications plus rapides</li>
                        <li>• Interface utilisateur fluide</li>
                        <li>• Gestion efficace des ressources</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        🔧 Maintenabilité
                      </h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Code plus organisé</li>
                        <li>• Debugging plus facile</li>
                        <li>• Évolution simplifiée</li>
                      </ul>
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
                Comparez la gestion d'état et l'asynchrone dans les trois
                langages
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
                    🎯 Mini-Application : Liste d'utilisateurs asynchrone
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Créez une app qui récupère des utilisateurs de manière
                    asynchrone
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
                      🐍 Liste d'utilisateurs asynchrone
                    </span>
                  </div>
                  <pre className="text-gray-100 font-mono text-sm">
                    <code>{`# Liste d'utilisateurs asynchrone - Mini-Application

import asyncio
import time
from datetime import datetime

print("🔄 LISTE D'UTILISATEURS ASYNCHRONE")
print("=" * 60)

# 1. ÉTAT GLOBAL
utilisateurs_globaux = []

# 2. FONCTION ASYNCHRONE POUR RÉCUPÉRER UN UTILISATEUR
async def recuperer_utilisateur(id):
    print(f"📡 Récupération utilisateur {id}...")
    await asyncio.sleep(1)  # Simulation délai réseau
    utilisateur = {"id": id, "nom": f"Utilisateur {id}", "email": f"user{id}@example.com"}
    print(f"✅ Utilisateur {id} récupéré")
    return utilisateur

# 3. FONCTION POUR RÉCUPÉRER TOUS LES UTILISATEURS
async def recuperer_tous_utilisateurs():
    print("\\n🔄 Récupération de tous les utilisateurs...");
    global utilisateurs_globaux
    
    # Récupération en parallèle
    taches = [recuperer_utilisateur(i) for i in range(5)]
    utilisateurs = await asyncio.gather(*taches)
    
    utilisateurs_globaux = utilisateurs
    return utilisateurs

# 4. FONCTION POUR AJOUTER UN UTILISATEUR
async def ajouter_utilisateur(nom, email):
    print(f"\\n➕ Ajout de l'utilisateur {nom}...");
    await asyncio.sleep(0.5)  # Simulation traitement
    
    global utilisateurs_globaux
    nouvel_utilisateur = {
        "id": len(utilisateurs_globaux),
        "nom": nom,
        "email": email
    }
    utilisateurs_globaux.append(nouvel_utilisateur)
    print(f"✅ Utilisateur {nom} ajouté")
    return nouvel_utilisateur

# 5. FONCTION POUR AFFICHER L'ÉTAT
def afficher_etat():
    print("\\n📊 ÉTAT ACTUEL:")
    print(f"Nombre d'utilisateurs: {len(utilisateurs_globaux)}")
    for user in utilisateurs_globaux:
        print(f"  - {user['nom']} ({user['email']})")

# 6. FONCTION PRINCIPALE
async def main():
    print("🚀 Démarrage de l'application...");
    
    # Récupération initiale
    await recuperer_tous_utilisateurs()
    afficher_etat()
    
    # Ajout d'un nouvel utilisateur
    await ajouter_utilisateur("Alice", "alice@example.com")
    afficher_etat()
    
    # Ajout d'un autre utilisateur
    await ajouter_utilisateur("Bob", "bob@example.com")
    afficher_etat()
    
    print("\\n🎉 Application terminée !")

# 7. EXÉCUTION
if __name__ == "__main__":
    asyncio.run(main())

print("=" * 60)`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Points clés */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-indigo-500/20 to-blue-600/20 border-2 border-indigo-300/50 shadow-xl">
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
                        État global vs local
                      </h4>
                      <p className="text-sm text-gray-600">
                        Bien séparer pour éviter les bugs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Programmation asynchrone
                      </h4>
                      <p className="text-sm text-gray-600">
                        Vital pour la performance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        async/await
                      </h4>
                      <p className="text-sm text-gray-600">
                        Rend l'asynchrone naturel
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Callbacks et promises
                      </h4>
                      <p className="text-sm text-gray-600">
                        Patterns asynchrones essentiels
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Applications réactives
                      </h4>
                      <p className="text-sm text-gray-600">
                        Performance et réactivité
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-indigo-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Gestion d'état moderne
                      </h4>
                      <p className="text-sm text-gray-600">
                        Base pour les frameworks
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
          <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border-2 border-indigo-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Gamepad2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    🎮 Quiz Interactifs
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Testez vos connaissances sur la gestion d'état et
                    l'asynchrone
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Question 1 */}
                <div className="bg-white rounded-lg p-6 border border-indigo-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    1️⃣ Qu'est-ce que l'état global ?
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q1"
                        id="q1a"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q1a"
                        className="text-gray-700 cursor-pointer"
                      >
                        A) Des données accessibles partout dans l'application
                      </label>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q1"
                        id="q1b"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q1b"
                        className="text-gray-700 cursor-pointer"
                      >
                        B) Des données accessibles seulement dans une fonction
                      </label>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q1"
                        id="q1c"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q1c"
                        className="text-gray-700 cursor-pointer"
                      >
                        C) Des données temporaires qui disparaissent
                      </label>
                    </div>
                  </div>
                </div>

                {/* Question 2 */}
                <div className="bg-white rounded-lg p-6 border border-indigo-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    2️⃣ Que fait async/await ?
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q2"
                        id="q2a"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q2a"
                        className="text-gray-700 cursor-pointer"
                      >
                        A) Ralentit l'application
                      </label>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q2"
                        id="q2b"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q2b"
                        className="text-gray-700 cursor-pointer"
                      >
                        B) Permet d'attendre une opération sans bloquer
                      </label>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q2"
                        id="q2c"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q2c"
                        className="text-gray-700 cursor-pointer"
                      >
                        C) Synchronise toutes les opérations
                      </label>
                    </div>
                  </div>
                </div>

                {/* Question 3 */}
                <div className="bg-white rounded-lg p-6 border border-indigo-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    3️⃣ Qu'est-ce qu'une Promise ?
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q3"
                        id="q3a"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q3a"
                        className="text-gray-700 cursor-pointer"
                      >
                        A) Un objet qui représente une opération future
                      </label>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q3"
                        id="q3b"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q3b"
                        className="text-gray-700 cursor-pointer"
                      >
                        B) Une fonction qui s'exécute immédiatement
                      </label>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q3"
                        id="q3c"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q3c"
                        className="text-gray-700 cursor-pointer"
                      >
                        C) Un type de variable
                      </label>
                    </div>
                  </div>
                </div>

                {/* Question 4 */}
                <div className="bg-white rounded-lg p-6 border border-indigo-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    4️⃣ Pourquoi utiliser la programmation asynchrone ?
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q4"
                        id="q4a"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q4a"
                        className="text-gray-700 cursor-pointer"
                      >
                        A) Pour ralentir l'application
                      </label>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q4"
                        id="q4b"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q4b"
                        className="text-gray-700 cursor-pointer"
                      >
                        B) Pour améliorer la performance et la réactivité
                      </label>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q4"
                        id="q4c"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q4c"
                        className="text-gray-700 cursor-pointer"
                      >
                        C) Pour simplifier le code
                      </label>
                    </div>
                  </div>
                </div>

                {/* Question 5 */}
                <div className="bg-white rounded-lg p-6 border border-indigo-200 shadow-sm">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    5️⃣ Qu'est-ce qu'un callback ?
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q5"
                        id="q5a"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q5a"
                        className="text-gray-700 cursor-pointer"
                      >
                        A) Une fonction qui s'exécute après une autre
                      </label>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q5"
                        id="q5b"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q5b"
                        className="text-gray-700 cursor-pointer"
                      >
                        B) Un type de variable
                      </label>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="q5"
                        id="q5c"
                        className="text-indigo-600"
                      />
                      <label
                        htmlFor="q5c"
                        className="text-gray-700 cursor-pointer"
                      >
                        C) Un objet de données
                      </label>
                    </div>
                  </div>
                </div>

                {/* Résultats */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    🎯 Réponses Correctes :
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <strong>1.</strong> A) Des données accessibles partout
                      dans l'application
                    </p>
                    <p>
                      <strong>2.</strong> B) Permet d'attendre une opération
                      sans bloquer
                    </p>
                    <p>
                      <strong>3.</strong> A) Un objet qui représente une
                      opération future
                    </p>
                    <p>
                      <strong>4.</strong> B) Pour améliorer la performance et la
                      réactivité
                    </p>
                    <p>
                      <strong>5.</strong> A) Une fonction qui s'exécute après
                      une autre
                    </p>
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
                Maintenant que vous maîtrisez la gestion d'état, passez aux
                exceptions !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Leçon 12 : Gestion d'erreurs et exceptions
                  </h3>
                  <p className="text-gray-600">
                    Gérer les erreurs et les exceptions proprement
                  </p>
                </div>
                <Link
                  href="/fondamentaux/lecon-12"
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
