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

export default function Lecon13Page() {
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
      description: "Les classes comme des recettes de base",
      examples: [
        "recette = classe",
        "plat cuisiné = objet",
        "variations = héritage",
      ],
      explanation:
        "En cuisine, une recette est comme une classe : elle définit comment créer un plat. Chaque plat cuisiné est un objet unique basé sur cette recette.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les classes comme des templates de personnages",
      examples: [
        "template = classe",
        "personnage = objet",
        "spécialisations = héritage",
      ],
      explanation:
        "Dans un jeu, un template de personnage est comme une classe. Chaque personnage créé est un objet unique avec ses propres stats.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les classes comme des espèces de plantes",
      examples: ["espèce = classe", "plante = objet", "variétés = héritage"],
      explanation:
        "Au jardin, une espèce de plante est comme une classe. Chaque plante individuelle est un objet unique avec ses propres caractéristiques.",
    },
  };

  const pythonCode = `# Programmation orientée objet en Python

# 1. CLASSE SIMPLE
class Utilisateur:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age
        self.actif = True
    
    def se_presenter(self):
        return f"Je m'appelle {self.nom} et j'ai {self.age} ans"
    
    def anniversaire(self):
        self.age += 1
        return f"Joyeux anniversaire ! J'ai maintenant {self.age} ans"

# Création d'objets
alice = Utilisateur("Alice", 25)
bob = Utilisateur("Bob", 30)

print("🐍 Test classe simple:")
print(alice.se_presenter())
print(bob.se_presenter())
print(alice.anniversaire())

# 2. HÉRITAGE
class UtilisateurPremium(Utilisateur):
    def __init__(self, nom, age, niveau):
        super().__init__(nom, age)
        self.niveau = niveau
        self.points = 0
    
    def ajouter_points(self, points):
        self.points += points
        return f"{self.nom} a maintenant {self.points} points"
    
    def se_presenter(self):
        base = super().se_presenter()
        return f"{base} (Niveau {self.niveau})"

# Test héritage
premium = UtilisateurPremium("Charlie", 28, "Or")
print("\\n👑 Test héritage:")
print(premium.se_presenter())
print(premium.ajouter_points(100))

# 3. PROPRIÉTÉS ET ENCAPSULATION
class CompteBancaire:
    def __init__(self, titulaire, solde_initial=0):
        self._titulaire = titulaire
        self._solde = solde_initial
    
    @property
    def solde(self):
        return self._solde
    
    def deposer(self, montant):
        if montant > 0:
            self._solde += montant
            return f"Dépôt de {montant}€ effectué"
        return "Montant invalide"
    
    def retirer(self, montant):
        if 0 < montant <= self._solde:
            self._solde -= montant
            return f"Retrait de {montant}€ effectué"
        return "Montant invalide ou solde insuffisant"

# Test encapsulation
compte = CompteBancaire("Alice", 1000)
print("\\n💰 Test encapsulation:")
print(f"Solde: {compte.solde}€")
print(compte.deposer(500))
print(compte.retirer(200))
print(f"Nouveau solde: {compte.solde}€")

# 4. MÉTHODES STATIQUES ET DE CLASSE
class Mathematiques:
    PI = 3.14159
    
    @staticmethod
    def carre(x):
        return x * x
    
    @classmethod
    def cercle_aire(cls, rayon):
        return cls.PI * cls.carre(rayon)

print("\\n🔢 Test méthodes statiques:")
print(f"Carré de 5: {Mathematiques.carre(5)}")
print(f"Aire d'un cercle de rayon 3: {Mathematiques.cercle_aire(3)}")

# 5. POLYMORPHISME
class Animal:
    def parler(self):
        pass

class Chien(Animal):
    def parler(self):
        return "Wouf !"

class Chat(Animal):
    def parler(self):
        return "Miaou !"

def faire_parler(animal):
    return animal.parler()

print("\\n🐾 Test polymorphisme:")
animaux = [Chien(), Chat()]
for animal in animaux:
    print(f"L'animal dit: {faire_parler(animal)}")`;

  const javascriptCode = `// Programmation orientée objet en JavaScript

// 1. CLASSE SIMPLE
class Utilisateur {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
        this.actif = true;
    }
    
    sePresenter() {
        return \`Je m'appelle \${this.nom} et j'ai \${this.age} ans\`;
    }
    
    anniversaire() {
        this.age += 1;
        return \`Joyeux anniversaire ! J'ai maintenant \${this.age} ans\`;
    }
}

// Création d'objets
const alice = new Utilisateur("Alice", 25);
const bob = new Utilisateur("Bob", 30);

console.log("🐍 Test classe simple:");
console.log(alice.sePresenter());
console.log(bob.sePresenter());
console.log(alice.anniversaire());

// 2. HÉRITAGE
class UtilisateurPremium extends Utilisateur {
    constructor(nom, age, niveau) {
        super(nom, age);
        this.niveau = niveau;
        this.points = 0;
    }
    
    ajouterPoints(points) {
        this.points += points;
        return \`\${this.nom} a maintenant \${this.points} points\`;
    }
    
    sePresenter() {
        const base = super.sePresenter();
        return \`\${base} (Niveau \${this.niveau})\`;
    }
}

// Test héritage
const premium = new UtilisateurPremium("Charlie", 28, "Or");
console.log("\\n👑 Test héritage:");
console.log(premium.sePresenter());
console.log(premium.ajouterPoints(100));

// 3. ENCAPSULATION AVEC GETTERS/SETTERS
class CompteBancaire {
    constructor(titulaire, soldeInitial = 0) {
        this._titulaire = titulaire;
        this._solde = soldeInitial;
    }
    
    get solde() {
        return this._solde;
    }
    
    deposer(montant) {
        if (montant > 0) {
            this._solde += montant;
            return \`Dépôt de \${montant}€ effectué\`;
        }
        return "Montant invalide";
    }
    
    retirer(montant) {
        if (0 < montant <= this._solde) {
            this._solde -= montant;
            return \`Retrait de \${montant}€ effectué\`;
        }
        return "Montant invalide ou solde insuffisant";
    }
}

// Test encapsulation
const compte = new CompteBancaire("Alice", 1000);
console.log("\\n💰 Test encapsulation:");
console.log(\`Solde: \${compte.solde}€\`);
console.log(compte.deposer(500));
console.log(compte.retirer(200));
console.log(\`Nouveau solde: \${compte.solde}€\`);

// 4. MÉTHODES STATIQUES
class Mathematiques {
    static PI = 3.14159;
    
    static carre(x) {
        return x * x;
    }
    
    static cercleAire(rayon) {
        return Mathematiques.PI * Mathematiques.carre(rayon);
    }
}

console.log("\\n🔢 Test méthodes statiques:");
console.log(\`Carré de 5: \${Mathematiques.carre(5)}\`);
console.log(\`Aire d'un cercle de rayon 3: \${Mathematiques.cercleAire(3)}\`);

// 5. POLYMORPHISME
class Animal {
    parler() {
        return "";
    }
}

class Chien extends Animal {
    parler() {
        return "Wouf !";
    }
}

class Chat extends Animal {
    parler() {
        return "Miaou !";
    }
}

function faireParler(animal) {
    return animal.parler();
}

console.log("\\n🐾 Test polymorphisme:");
const animaux = [new Chien(), new Chat()];
animaux.forEach(animal => {
    console.log(\`L'animal dit: \${faireParler(animal)}\`);
});`;

  const typescriptCode = `// Programmation orientée objet en TypeScript

// 1. INTERFACES
interface IUtilisateur {
    nom: string;
    age: number;
    actif: boolean;
    sePresenter(): string;
}

// 2. CLASSE SIMPLE AVEC TYPES
class Utilisateur implements IUtilisateur {
    public nom: string;
    public age: number;
    public actif: boolean = true;
    
    constructor(nom: string, age: number) {
        this.nom = nom;
        this.age = age;
    }
    
    sePresenter(): string {
        return \`Je m'appelle \${this.nom} et j'ai \${this.age} ans\`;
    }
    
    anniversaire(): string {
        this.age += 1;
        return \`Joyeux anniversaire ! J'ai maintenant \${this.age} ans\`;
    }
}

// Création d'objets
const alice: Utilisateur = new Utilisateur("Alice", 25);
const bob: Utilisateur = new Utilisateur("Bob", 30);

console.log("🐍 Test classe simple:");
console.log(alice.sePresenter());
console.log(bob.sePresenter());
console.log(alice.anniversaire());

// 3. HÉRITAGE AVEC TYPES
interface IUtilisateurPremium extends IUtilisateur {
    niveau: string;
    points: number;
    ajouterPoints(points: number): string;
}

class UtilisateurPremium extends Utilisateur implements IUtilisateurPremium {
    public niveau: string;
    public points: number = 0;
    
    constructor(nom: string, age: number, niveau: string) {
        super(nom, age);
        this.niveau = niveau;
    }
    
    ajouterPoints(points: number): string {
        this.points += points;
        return \`\${this.nom} a maintenant \${this.points} points\`;
    }
    
    sePresenter(): string {
        const base: string = super.sePresenter();
        return \`\${base} (Niveau \${this.niveau})\`;
    }
}

// Test héritage
const premium: UtilisateurPremium = new UtilisateurPremium("Charlie", 28, "Or");
console.log("\\n👑 Test héritage:");
console.log(premium.sePresenter());
console.log(premium.ajouterPoints(100));

// 4. ENCAPSULATION AVEC ACCESS MODIFIERS
class CompteBancaire {
    private _titulaire: string;
    private _solde: number;
    
    constructor(titulaire: string, soldeInitial: number = 0) {
        this._titulaire = titulaire;
        this._solde = soldeInitial;
    }
    
    get solde(): number {
        return this._solde;
    }
    
    deposer(montant: number): string {
        if (montant > 0) {
            this._solde += montant;
            return \`Dépôt de \${montant}€ effectué\`;
        }
        return "Montant invalide";
    }
    
    retirer(montant: number): string {
        if (0 < montant && montant <= this._solde) {
            this._solde -= montant;
            return \`Retrait de \${montant}€ effectué\`;
        }
        return "Montant invalide ou solde insuffisant";
    }
}

// Test encapsulation
const compte: CompteBancaire = new CompteBancaire("Alice", 1000);
console.log("\\n💰 Test encapsulation:");
console.log(\`Solde: \${compte.solde}€\`);
console.log(compte.deposer(500));
console.log(compte.retirer(200));
console.log(\`Nouveau solde: \${compte.solde}€\`);

// 5. MÉTHODES STATIQUES AVEC TYPES
class Mathematiques {
    static readonly PI: number = 3.14159;
    
    static carre(x: number): number {
        return x * x;
    }
    
    static cercleAire(rayon: number): number {
        return Mathematiques.PI * Mathematiques.carre(rayon);
    }
}

console.log("\\n🔢 Test méthodes statiques:");
console.log(\`Carré de 5: \${Mathematiques.carre(5)}\`);
console.log(\`Aire d'un cercle de rayon 3: \${Mathematiques.cercleAire(3)}\`);

// 6. POLYMORPHISME AVEC TYPES
abstract class Animal {
    abstract parler(): string;
}

class Chien extends Animal {
    parler(): string {
        return "Wouf !";
    }
}

class Chat extends Animal {
    parler(): string {
        return "Miaou !";
    }
}

function faireParler(animal: Animal): string {
    return animal.parler();
}

console.log("\\n🐾 Test polymorphisme:");
const animaux: Animal[] = [new Chien(), new Chat()];
animaux.forEach((animal: Animal) => {
    console.log(\`L'animal dit: \${faireParler(animal)}\`);
});

// 7. GENERICS
class Boite<T> {
    private contenu: T;
    
    constructor(contenu: T) {
        this.contenu = contenu;
    }
    
    obtenir(): T {
        return this.contenu;
    }
    
    definir(nouveauContenu: T): void {
        this.contenu = nouveauContenu;
    }
}

const boiteString: Boite<string> = new Boite<string>("Hello");
const boiteNombre: Boite<number> = new Boite<number>(42);

console.log("\\n📦 Test génériques:");
console.log(\`Boîte string: \${boiteString.obtenir()}\`);
console.log(\`Boîte nombre: \${boiteNombre.obtenir()}\`);`;

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
              🏗️ COURS 13 : POO
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ CLASSES, OBJETS ET HÉRITAGE ⚡
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
            <span className="text-blue-600 font-semibold">Cours 13 : POO</span>
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
                Comprendre la programmation orientée objet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Classes et objets
                    </h4>
                    <p className="text-sm text-gray-600">
                      Créer des modèles réutilisables
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Héritage et polymorphisme
                    </h4>
                    <p className="text-sm text-gray-600">
                      Étendre et spécialiser des classes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Encapsulation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Protéger les données et méthodes
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
                Trois façons de comprendre la POO selon votre univers
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
                Comparez la POO dans les trois langages
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
                Maintenant que vous maîtrisez la POO, passez aux modules !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 14 : Modules et packages
                  </h3>
                  <p className="text-gray-600">
                    Organiser et réutiliser le code
                  </p>
                </div>
                <Link
                  href="/fondamentaux/lecon-14"
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
