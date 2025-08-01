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

export default function Lecon12Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, language: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const analogies = {
    cuisine: {
      title: "🍳 Cuisine",
      description: "Les exceptions comme des accidents de cuisine",
      examples: [
        "ingrédient manquant = exception",
        "plan de secours = try/catch",
        "nettoyage = finally",
      ],
      explanation:
        "En cuisine, si un ingrédient manque, vous avez un plan de secours. Les exceptions sont comme ça : vous prévoyez les problèmes !",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les exceptions comme des game over",
      examples: [
        "game over = exception",
        "checkpoint = try/catch",
        "sauvegarde = finally",
      ],
      explanation:
        "Dans un jeu, si vous perdez, vous retournez au checkpoint. Les exceptions sont comme ça : vous gérez les échecs !",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les exceptions comme des maladies de plantes",
      examples: [
        "maladie = exception",
        "traitement = try/catch",
        "prévention = finally",
      ],
      explanation:
        "Au jardin, si une plante est malade, vous la traitez. Les exceptions sont comme ça : vous soignez les problèmes !",
    },
  };

  const pythonCode = `# Gestion d'erreurs et exceptions en Python

# 1. TRY/EXCEPT SIMPLE
try:
    nombre = int(input("Entrez un nombre: "))
    resultat = 10 / nombre
    print(f"Résultat: {resultat}")
except ValueError:
    print("❌ Erreur: Veuillez entrer un nombre valide")
except ZeroDivisionError:
    print("❌ Erreur: Division par zéro impossible")
except Exception as e:
    print(f"❌ Erreur inattendue: {e}")

# 2. TRY/EXCEPT/FINALLY
try:
    fichier = open("test.txt", "r")
    contenu = fichier.read()
    print("Contenu:", contenu)
except FileNotFoundError:
    print("❌ Fichier non trouvé")
finally:
    print("🧹 Nettoyage terminé")

# 3. RAISE - LEVER UNE EXCEPTION
def valider_age(age):
    if age < 0:
        raise ValueError("L'âge ne peut pas être négatif")
    if age > 150:
        raise ValueError("L'âge semble invalide")
    return age

try:
    age = valider_age(-5)
except ValueError as e:
    print(f"❌ Erreur de validation: {e}")

# 4. EXCEPTIONS PERSONNALISÉES
class ErreurUtilisateur(Exception):
    def __init__(self, message, code_erreur):
        self.message = message
        self.code_erreur = code_erreur
        super().__init__(self.message)

def creer_utilisateur(nom, age):
    if not nom:
        raise ErreurUtilisateur("Le nom est requis", "NOM_MANQUANT")
    if age < 18:
        raise ErreurUtilisateur("L'utilisateur doit être majeur", "AGE_INSUFFISANT")
    return {"nom": nom, "age": age}

try:
    utilisateur = creer_utilisateur("", 16)
except ErreurUtilisateur as e:
    print(f"❌ Erreur {e.code_erreur}: {e.message}")

# 5. CONTEXT MANAGER (WITH)
try:
    with open("test.txt", "w") as fichier:
        fichier.write("Test d'écriture")
    print("✅ Fichier écrit avec succès")
except IOError as e:
    print(f"❌ Erreur d'écriture: {e}")`;

  const javascriptCode = `// Gestion d'erreurs et exceptions en JavaScript

// 1. TRY/CATCH SIMPLE
try {
    const nombre = parseInt(prompt("Entrez un nombre:"));
    const resultat = 10 / nombre;
    console.log(\`Résultat: \${resultat}\`);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("❌ Erreur: Veuillez entrer un nombre valide");
    } else if (error instanceof RangeError) {
        console.log("❌ Erreur: Division par zéro impossible");
    } else {
        console.log(\`❌ Erreur inattendue: \${error.message}\`);
    }
}

// 2. TRY/CATCH/FINALLY
try {
    // Simulation d'une opération qui peut échouer
    const donnees = JSON.parse('{"nom": "Alice"}');
    console.log("Données:", donnees);
} catch (error) {
    console.log("❌ Erreur de parsing JSON");
} finally {
    console.log("🧹 Nettoyage terminé");
}

// 3. THROW - LEVER UNE EXCEPTION
function validerAge(age) {
    if (age < 0) {
        throw new Error("L'âge ne peut pas être négatif");
    }
    if (age > 150) {
        throw new Error("L'âge semble invalide");
    }
    return age;
}

try {
    const age = validerAge(-5);
} catch (error) {
    console.log(\`❌ Erreur de validation: \${error.message}\`);
}

// 4. EXCEPTIONS PERSONNALISÉES
class ErreurUtilisateur extends Error {
    constructor(message, codeErreur) {
        super(message);
        this.name = "ErreurUtilisateur";
        this.codeErreur = codeErreur;
    }
}

function creerUtilisateur(nom, age) {
    if (!nom) {
        throw new ErreurUtilisateur("Le nom est requis", "NOM_MANQUANT");
    }
    if (age < 18) {
        throw new ErreurUtilisateur("L'utilisateur doit être majeur", "AGE_INSUFFISANT");
    }
    return { nom, age };
}

try {
    const utilisateur = creerUtilisateur("", 16);
} catch (error) {
    if (error instanceof ErreurUtilisateur) {
        console.log(\`❌ Erreur \${error.codeErreur}: \${error.message}\`);
    }
}

// 5. PROMISES ET GESTION D'ERREURS
function operationAsynchrone() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hasard = Math.random();
            if (hasard > 0.5) {
                resolve("✅ Opération réussie");
            } else {
                reject(new Error("❌ Opération échouée"));
            }
        }, 1000);
    });
}

operationAsynchrone()
    .then(resultat => console.log(resultat))
    .catch(erreur => console.log(\`Erreur: \${erreur.message}\`));`;

  const typescriptCode = `// Gestion d'erreurs et exceptions en TypeScript

// 1. INTERFACES POUR LES ERREURS
interface ErreurUtilisateur extends Error {
    codeErreur: string;
}

// 2. TRY/CATCH SIMPLE
try {
    const nombre: number = parseInt(prompt("Entrez un nombre:") || "0");
    const resultat: number = 10 / nombre;
    console.log(\`Résultat: \${resultat}\`);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("❌ Erreur: Veuillez entrer un nombre valide");
    } else if (error instanceof RangeError) {
        console.log("❌ Erreur: Division par zéro impossible");
    } else {
        console.log(\`❌ Erreur inattendue: \${(error as Error).message}\`);
    }
}

// 3. TRY/CATCH/FINALLY
try {
    const donnees: any = JSON.parse('{"nom": "Alice"}');
    console.log("Données:", donnees);
} catch (error) {
    console.log("❌ Erreur de parsing JSON");
} finally {
    console.log("🧹 Nettoyage terminé");
}

// 4. THROW AVEC TYPES
function validerAge(age: number): number {
    if (age < 0) {
        throw new Error("L'âge ne peut pas être négatif");
    }
    if (age > 150) {
        throw new Error("L'âge semble invalide");
    }
    return age;
}

try {
    const age: number = validerAge(-5);
} catch (error) {
    console.log(\`❌ Erreur de validation: \${(error as Error).message}\`);
}

// 5. EXCEPTIONS PERSONNALISÉES AVEC TYPES
class ErreurUtilisateurTypeScript extends Error implements ErreurUtilisateur {
    codeErreur: string;
    
    constructor(message: string, codeErreur: string) {
        super(message);
        this.name = "ErreurUtilisateur";
        this.codeErreur = codeErreur;
    }
}

interface Utilisateur {
    nom: string;
    age: number;
}

function creerUtilisateur(nom: string, age: number): Utilisateur {
    if (!nom) {
        throw new ErreurUtilisateurTypeScript("Le nom est requis", "NOM_MANQUANT");
    }
    if (age < 18) {
        throw new ErreurUtilisateurTypeScript("L'utilisateur doit être majeur", "AGE_INSUFFISANT");
    }
    return { nom, age };
}

try {
    const utilisateur: Utilisateur = creerUtilisateur("", 16);
} catch (error) {
    if (error instanceof ErreurUtilisateurTypeScript) {
        console.log(\`❌ Erreur \${error.codeErreur}: \${error.message}\`);
    }
}

// 6. ASYNC/AWAIT AVEC GESTION D'ERREURS
async function operationAsynchrone(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            const hasard: number = Math.random();
            if (hasard > 0.5) {
                resolve("✅ Opération réussie");
            } else {
                reject(new Error("❌ Opération échouée"));
            }
        }, 1000);
    });
}

async function executerOperation(): Promise<void> {
    try {
        const resultat: string = await operationAsynchrone();
        console.log(resultat);
    } catch (erreur) {
        console.log(\`Erreur: \${(erreur as Error).message}\`);
    }
}

executerOperation();`;

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
              ⚠️ COURS 12 : GESTION D'ERREURS
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ EXCEPTIONS ET GESTION D'ERREURS PROPREMENT ⚡
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
              Cours 12 : Gestion d'erreurs
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
                Comprendre la gestion d'erreurs et les exceptions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Try/Catch/Finally
                    </h4>
                    <p className="text-sm text-gray-600">
                      Gérer les erreurs proprement
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Exceptions personnalisées
                    </h4>
                    <p className="text-sm text-gray-600">
                      Créer ses propres types d'erreurs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Gestion robuste
                    </h4>
                    <p className="text-sm text-gray-600">
                      Applications qui ne plantent pas
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
                Trois façons de comprendre la gestion d'erreurs selon votre
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
                Comparez la gestion d'erreurs dans les trois langages
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

        {/* Navigation */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                🚀 Prêt pour la suite ?
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Maintenant que vous maîtrisez la gestion d'erreurs, passez à la
                POO !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 13 : Programmation orientée objet (POO)
                  </h3>
                  <p className="text-gray-600">Classes, objets et héritage</p>
                </div>
                <Link
                  href="/fondamentaux/lecon-13"
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
