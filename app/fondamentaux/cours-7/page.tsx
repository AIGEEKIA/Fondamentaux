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

export default function Lecon7Page() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeAnalogy, setActiveAnalogy] = useState("cuisine");
  const [quizStates, setQuizStates] = useState<{
    [key: string]: boolean | number;
  }>({});
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);

  const copyToClipboard = (code: string, language: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleQuizAnswer = (quizId: string, selectedAnswer: number) => {
    const quiz = quizData[quizId as keyof typeof quizData];
    if (!quiz) return;

    const isCorrect = selectedAnswer === quiz.correctAnswer;

    setQuizStates((prev) => ({
      ...prev,
      [quizId]: true,
      [`${quizId}_selected`]: selectedAnswer,
    }));

    if (isCorrect) {
      setPoints((prev) => prev + 10);
      if (!badges.includes("Programmation Orientée Objet")) {
        setBadges((prev) => [...prev, "Programmation Orientée Objet"]);
      }
    }
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

  // Données des quiz
  const quizData = {
    quiz1: {
      question: "Qu'est-ce qu'une classe en POO ?",
      options: [
        "Un modèle qui définit la structure et le comportement d'objets",
        "Une fonction qui retourne des valeurs",
        "Un type de boucle",
        "Une variable globale",
      ],
      correctAnswer: 0,
      explication:
        "Une classe est un modèle (template) qui définit la structure (propriétés) et le comportement (méthodes) que tous les objets de ce type auront.",
    },
    quiz2: {
      question: "Qu'est-ce que l'encapsulation ?",
      options: [
        "Cacher les détails internes et exposer seulement ce qui est nécessaire",
        "Créer plusieurs classes identiques",
        "Hériter d'une classe parent",
        "Créer des objets",
      ],
      correctAnswer: 0,
      explication:
        "L'encapsulation consiste à cacher les détails internes d'une classe et à exposer seulement les méthodes et propriétés nécessaires pour interagir avec l'objet.",
    },
    quiz3: {
      question: "Qu'est-ce que l'héritage ?",
      options: [
        "Une classe qui hérite des propriétés et méthodes d'une autre classe",
        "Créer un nouvel objet",
        "Modifier une classe existante",
        "Supprimer une classe",
      ],
      correctAnswer: 0,
      explication:
        "L'héritage permet à une classe (enfant) d'hériter des propriétés et méthodes d'une autre classe (parent), évitant la duplication de code.",
    },
  };

  const analogies = {
    cuisine: {
      title: "🍳 Cuisine",
      description: "Les classes comme des recettes",
      examples: [
        "classe = recette de base",
        "objet = plat préparé",
        "héritage = recette améliorée",
      ],
      explanation:
        "En cuisine, une recette (classe) définit comment préparer un plat. Chaque plat préparé (objet) suit la même recette mais peut avoir des ingrédients différents.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les classes comme des modèles de personnages",
      examples: [
        "classe = type de personnage",
        "objet = personnage créé",
        "héritage = classe spécialisée",
      ],
      explanation:
        "Dans un jeu, un type de personnage (classe) définit les capacités. Chaque personnage créé (objet) suit le même modèle mais peut avoir des stats différentes.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les classes comme des espèces de plantes",
      examples: [
        "classe = espèce de plante",
        "objet = plante individuelle",
        "héritage = variété spécialisée",
      ],
      explanation:
        "Au jardin, une espèce (classe) définit les caractéristiques. Chaque plante (objet) suit le même modèle mais peut avoir une taille ou couleur différente.",
    },
  };

  const pythonCode = `# Programmation Orientée Objet en Python

# 1. DÉFINITION DE CLASSE
class Voiture:
    def __init__(self, marque, modele, annee):
        self.marque = marque      # Propriété
        self.modele = modele      # Propriété
        self.annee = annee        # Propriété
    
    def demarrer(self):           # Méthode
        return f"{self.marque} {self.modele} démarre"
    
    def info(self):               # Méthode
        return f"{self.marque} {self.modele} ({self.annee})"

# 2. CRÉATION D'OBJETS
voiture1 = Voiture("Toyota", "Corolla", 2020)
voiture2 = Voiture("Honda", "Civic", 2021)

print(voiture1.demarrer())  # Toyota Corolla démarre
print(voiture2.info())      # Honda Civic (2021)

# 3. HÉRITAGE
class VoitureElectrique(Voiture):
    def __init__(self, marque, modele, annee, autonomie):
        super().__init__(marque, modele, annee)
        self.autonomie = autonomie
    
    def demarrer(self):
        return f"{self.marque} {self.modele} démarre silencieusement"
    
    def info_autonomie(self):
        return f"Autonomie: {self.autonomie}km"

# 4. ENCAPSULATION
class CompteBancaire:
    def __init__(self, titulaire, solde):
        self._titulaire = titulaire  # Propriété protégée
        self.__solde = solde         # Propriété privée
    
    def deposer(self, montant):
        if montant > 0:
            self.__solde += montant
            return f"Dépôt de {montant}€ effectué"
        return "Montant invalide"
    
    def consulter_solde(self):
        return f"Solde: {self.__solde}€"

# Test de la POO
voiture_electrique = VoitureElectrique("Tesla", "Model 3", 2023, 500)
print(voiture_electrique.demarrer())
print(voiture_electrique.info_autonomie())

# Test encapsulation
compte = CompteBancaire("Alice", 1000)
print(compte.deposer(500))
print(compte.consulter_solde())`;

  const javascriptCode = `// Programmation Orientée Objet en JavaScript

// 1. DÉFINITION DE CLASSE
class Voiture {
    constructor(marque, modele, annee) {
        this.marque = marque;      // Propriété
        this.modele = modele;      // Propriété
        this.annee = annee;        // Propriété
    }
    
    demarrer() {                   // Méthode
        return \`\${this.marque} \${this.modele} démarre\`;
    }
    
    info() {                       // Méthode
        return \`\${this.marque} \${this.modele} (\${this.annee})\`;
    }
}

// 2. CRÉATION D'OBJETS
const voiture1 = new Voiture("Toyota", "Corolla", 2020);
const voiture2 = new Voiture("Honda", "Civic", 2021);

console.log(voiture1.demarrer());  // Toyota Corolla démarre
console.log(voiture2.info());      // Honda Civic (2021)

// 3. HÉRITAGE
class VoitureElectrique extends Voiture {
    constructor(marque, modele, annee, autonomie) {
        super(marque, modele, annee);
        this.autonomie = autonomie;
    }
    
    demarrer() {
        return \`\${this.marque} \${this.modele} démarre silencieusement\`;
    }
    
    infoAutonomie() {
        return \`Autonomie: \${this.autonomie}km\`;
    }
}

// 4. ENCAPSULATION
class CompteBancaire {
    constructor(titulaire, solde) {
        this._titulaire = titulaire;  // Propriété protégée
        this.#solde = solde;          // Propriété privée
    }
    
    deposer(montant) {
        if (montant > 0) {
            this.#solde += montant;
            return \`Dépôt de \${montant}€ effectué\`;
        }
        return "Montant invalide";
    }
    
    consulterSolde() {
        return \`Solde: \${this.#solde}€\`;
    }
}

// Test de la POO
const voitureElectrique = new VoitureElectrique("Tesla", "Model 3", 2023, 500);
console.log(voitureElectrique.demarrer());
console.log(voitureElectrique.infoAutonomie());

// Test encapsulation
const compte = new CompteBancaire("Alice", 1000);
console.log(compte.deposer(500));
console.log(compte.consulterSolde());`;

  const typescriptCode = `// Programmation Orientée Objet en TypeScript

// 1. DÉFINITION DE CLASSE
class Voiture {
    private marque: string;
    private modele: string;
    private annee: number;
    
    constructor(marque: string, modele: string, annee: number) {
        this.marque = marque;      // Propriété
        this.modele = modele;      // Propriété
        this.annee = annee;        // Propriété
    }
    
    demarrer(): string {           // Méthode
        return \`\${this.marque} \${this.modele} démarre\`;
    }
    
    info(): string {               // Méthode
        return \`\${this.marque} \${this.modele} (\${this.annee})\`;
    }
}

// 2. CRÉATION D'OBJETS
const voiture1: Voiture = new Voiture("Toyota", "Corolla", 2020);
const voiture2: Voiture = new Voiture("Honda", "Civic", 2021);

console.log(voiture1.demarrer());  // Toyota Corolla démarre
console.log(voiture2.info());      // Honda Civic (2021)

// 3. HÉRITAGE
class VoitureElectrique extends Voiture {
    private autonomie: number;
    
    constructor(marque: string, modele: string, annee: number, autonomie: number) {
        super(marque, modele, annee);
        this.autonomie = autonomie;
    }
    
    demarrer(): string {
        return \`\${this.marque} \${this.modele} démarre silencieusement\`;
    }
    
    infoAutonomie(): string {
        return \`Autonomie: \${this.autonomie}km\`;
    }
}

// 4. ENCAPSULATION
class CompteBancaire {
    private _titulaire: string;    // Propriété protégée
    private #solde: number;        // Propriété privée
    
    constructor(titulaire: string, solde: number) {
        this._titulaire = titulaire;
        this.#solde = solde;
    }
    
    deposer(montant: number): string {
        if (montant > 0) {
            this.#solde += montant;
            return \`Dépôt de \${montant}€ effectué\`;
        }
        return "Montant invalide";
    }
    
    consulterSolde(): string {
        return \`Solde: \${this.#solde}€\`;
    }
}

// Test de la POO
const voitureElectrique: VoitureElectrique = new VoitureElectrique("Tesla", "Model 3", 2023, 500);
console.log(voitureElectrique.demarrer());
console.log(voitureElectrique.infoAutonomie());

// Test encapsulation
const compte: CompteBancaire = new CompteBancaire("Alice", 1000);
console.log(compte.deposer(500));
console.log(compte.consulterSolde());`;

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

          {/* Signature AIGEEKIA moderne */}
          <div className="absolute bottom-2 right-12 z-10">
            <span className="text-white/80 font-medium text-xs italic">
              By AIGEEKIA
            </span>
          </div>

          <div className="text-center relative">
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md relative overflow-hidden">
              COURS 7 : SCOPE FONCTION ET BLOC
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
      <LogoMenu currentPage="cours-7" />

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
              Cours 7 : Scope fonction et bloc
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
                Comprendre les différences entre scope de fonction et scope de
                bloc
              </p>
            </div>
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
                Trois façons de comprendre la Programmation Orientée Objet selon
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
                    La Programmation Orientée Objet, c'est quoi exactement ?
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🎯 Qu'est-ce que la Programmation Orientée Objet ?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    La <strong>Programmation Orientée Objet</strong> (POO) est
                    un paradigme de programmation qui organise le code autour
                    d'objets qui contiennent des données (propriétés) et du code
                    (méthodes). Une{" "}
                    <code className="text-blue-600">classe</code> est un modèle
                    qui définit la structure et le comportement des objets.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Les principes fondamentaux sont :{" "}
                    <strong>l'encapsulation</strong> (cacher les détails
                    internes), <strong>l'héritage</strong> (réutiliser le code),
                    et <strong>le polymorphisme</strong> (utiliser des objets de
                    manière uniforme).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">🏗️</div>
                      <div className="font-semibold text-blue-800">Classe</div>
                      <div className="text-sm text-blue-600">
                        Modèle pour créer des objets
                      </div>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">📦</div>
                      <div className="font-semibold text-purple-800">Objet</div>
                      <div className="text-sm text-purple-600">
                        Instance créée à partir d'une classe
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🔤 Les Trois Principes Fondamentaux
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🔒</div>
                      <div className="font-semibold text-orange-800">
                        Encapsulation
                      </div>
                      <div className="text-sm text-orange-600">
                        Cacher les détails internes
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🔄</div>
                      <div className="font-semibold text-orange-800">
                        Héritage
                      </div>
                      <div className="text-sm text-orange-600">
                        Réutiliser le code
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">🎭</div>
                      <div className="font-semibold text-orange-800">
                        Polymorphisme
                      </div>
                      <div className="text-sm text-orange-600">
                        Utiliser des objets uniformément
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    🏗️ Structure d'une Classe et d'un Objet
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 font-mono text-sm">
                      <code>{`// Exemple de classe et objet
class Voiture {
    constructor(marque, modele) {
        this.marque = marque;    // Propriété
        this.modele = modele;    // Propriété
    }
    
    demarrer() {                 // Méthode
        return \`\${this.marque} \${this.modele} démarre\`;
    }
    
    info() {                     // Méthode
        return \`\${this.marque} \${this.modele}\`;
    }
}

// Création d'objets
const voiture1 = new Voiture("Toyota", "Corolla");
const voiture2 = new Voiture("Honda", "Civic");

console.log(voiture1.demarrer()); // Toyota Corolla démarre
console.log(voiture2.info());     // Honda Civic

// Héritage
class VoitureElectrique extends Voiture {
    constructor(marque, modele, autonomie) {
        super(marque, modele);
        this.autonomie = autonomie;
    }
    
    demarrer() {
        return \`\${this.marque} \${this.modele} démarre silencieusement\`;
    }
}`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    💡 Pourquoi utiliser la POO ?
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Organisation du code
                          </h5>
                          <p className="text-sm text-gray-600">
                            Structure claire et logique
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Réutilisabilité
                          </h5>
                          <p className="text-sm text-gray-600">
                            Code réutilisable via l'héritage
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Maintenance
                          </h5>
                          <p className="text-sm text-gray-600">
                            Code plus facile à maintenir
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Modélisation du réel
                          </h5>
                          <p className="text-sm text-gray-600">
                            Représente le monde réel
                          </p>
                        </div>
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
                Comparez la Programmation Orientée Objet dans les trois langages
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
                    Mini-Application : Testeur de Scope
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

        {/* Quiz Interactifs */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-2 border-purple-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Quiz Interactifs
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Testez votre compréhension de la Programmation Orientée Objet
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
                Maintenant que vous maîtrisez la POO, passez au hoisting !
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
