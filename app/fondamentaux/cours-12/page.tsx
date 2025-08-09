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

export default function Lecon12Page() {
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
      question: "Qu'est-ce qu'une exception en programmation ?",
      options: [
        "Un type de variable",
        "Un objet qui représente une erreur ou condition exceptionnelle",
        "Une fonction spéciale",
        "Un commentaire dans le code",
      ],
      correctAnswer: 1,
      explication:
        "Une exception est un objet qui représente une erreur ou une condition exceptionnelle. Elle est levée quand quelque chose ne va pas et peut être attrapée par du code spécialisé.",
    },
    quiz2: {
      question: "Quel est le rôle du bloc 'finally' ?",
      options: [
        "Il s'exécute seulement si une erreur se produit",
        "Il s'exécute seulement si tout va bien",
        "Il s'exécute toujours, qu'il y ait une erreur ou non",
        "Il s'exécute seulement une fois",
      ],
      correctAnswer: 2,
      explication:
        "Le bloc 'finally' s'exécute toujours, qu'il y ait une erreur ou non. Il est parfait pour le nettoyage (fermer des fichiers, connexions, etc.).",
    },
    quiz3: {
      question: "Pourquoi la gestion d'erreurs est-elle importante ?",
      options: [
        "Pour ralentir le programme",
        "Pour créer des applications robustes qui ne plantent pas complètement",
        "Pour compliquer le code",
        "Pour utiliser plus de mémoire",
      ],
      correctAnswer: 1,
      explication:
        "La gestion d'erreurs permet de créer des applications robustes qui peuvent continuer à fonctionner même quand quelque chose ne va pas, au lieu de planter complètement.",
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
              COURS 12 : GESTION D'ERREURS
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
      <LogoMenu currentPage="cours-12" />

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
              Cours 12 : Gestion d'erreurs
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
                Comprendre la gestion d'erreurs et les exceptions
              </p>
            </div>
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
                    La gestion d'erreurs et les exceptions, c'est quoi
                    exactement ?
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🎯 Qu'est-ce que la Gestion d'Erreurs ?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    La <strong>gestion d'erreurs</strong> est un mécanisme qui
                    permet à un programme de continuer à fonctionner même quand
                    quelque chose ne va pas comme prévu. Au lieu de planter
                    complètement, le programme peut détecter, traiter et
                    récupérer des erreurs de manière élégante.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Les <strong>exceptions</strong> sont des objets qui
                    représentent des erreurs ou des conditions exceptionnelles.
                    Quand une erreur se produit, une exception est "levée"
                    (thrown) et peut être "attrapée" (caught) par du code
                    spécialisé.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">🛡️</div>
                      <div className="font-semibold text-blue-800">
                        Try/Catch
                      </div>
                      <div className="text-sm text-blue-600">
                        Essayer et attraper les erreurs
                      </div>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">🧹</div>
                      <div className="font-semibold text-purple-800">
                        Finally
                      </div>
                      <div className="text-sm text-purple-600">
                        Nettoyer quoi qu'il arrive
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🔤 Les Trois Blocs Principaux
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="font-semibold text-orange-800">TRY</div>
                      <div className="text-sm text-orange-600">
                        Code qui peut échouer
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🛡️</div>
                      <div className="font-semibold text-orange-800">CATCH</div>
                      <div className="text-sm text-orange-600">
                        Gérer l'erreur
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🧹</div>
                      <div className="font-semibold text-orange-800">
                        FINALLY
                      </div>
                      <div className="text-sm text-orange-600">
                        Nettoyer toujours
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
                          Applications robustes
                        </strong>
                        <p className="text-sm text-gray-600">
                          Les programmes ne plantent pas complètement
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <div>
                        <strong className="text-gray-800">
                          Expérience utilisateur
                        </strong>
                        <p className="text-sm text-gray-600">
                          Messages d'erreur clairs et informatifs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <div>
                        <strong className="text-gray-800">
                          Debugging facilité
                        </strong>
                        <p className="text-sm text-gray-600">
                          Identifier et corriger les problèmes rapidement
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

        {/* Quiz Interactifs */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-2 border-purple-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Quiz Interactifs
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Testez votre compréhension de la gestion d'erreurs et des
                exceptions
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
                  href="/fondamentaux/cours-13"
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
