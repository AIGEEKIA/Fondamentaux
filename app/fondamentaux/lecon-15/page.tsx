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
  Bug,
  TestTube,
  Search,
  Zap,
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

export default function Lecon15Page() {
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
      description: "Les tests comme des contrôles qualité",
      examples: [
        "goût = test unitaire",
        "présentation = test d'intégration",
        "service = test end-to-end",
      ],
      explanation:
        "En cuisine, on teste à chaque étape : le goût des ingrédients, la présentation du plat, et le service complet.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les tests comme des niveaux de vérification",
      examples: [
        "tutorial = test unitaire",
        "niveau = test d'intégration",
        "boss = test end-to-end",
      ],
      explanation:
        "Dans un jeu, on teste chaque mécanique individuellement, puis les niveaux, et enfin le boss final.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les tests comme des vérifications de croissance",
      examples: [
        "germe = test unitaire",
        "plante = test d'intégration",
        "jardin = test end-to-end",
      ],
      explanation:
        "Au jardin, on vérifie chaque germe, puis chaque plante, et enfin l'ensemble du jardin.",
    },
  };

  const pythonCode = `# Tests et débogage en Python

# 1. TESTS UNITAIRES AVEC UNITTEST
import unittest

class Calculatrice:
    def addition(self, a, b):
        return a + b
    
    def division(self, a, b):
        if b == 0:
            raise ValueError("Division par zéro")
        return a / b

class TestCalculatrice(unittest.TestCase):
    def setUp(self):
        self.calc = Calculatrice()
    
    def test_addition(self):
        resultat = self.calc.addition(5, 3)
        self.assertEqual(resultat, 8)
    
    def test_division(self):
        resultat = self.calc.division(10, 2)
        self.assertEqual(resultat, 5)
    
    def test_division_par_zero(self):
        with self.assertRaises(ValueError):
            self.calc.division(10, 0)

# Exécution des tests
if __name__ == '__main__':
    unittest.main()

# 2. TESTS AVEC PYTEST
import pytest

def test_addition_simple():
    assert 2 + 2 == 4

def test_liste():
    liste = [1, 2, 3]
    assert len(liste) == 3
    assert 2 in liste

@pytest.mark.parametrize("a,b,attendu", [
    (1, 1, 2),
    (2, 3, 5),
    (0, 0, 0),
])
def test_addition_parametree(a, b, attendu):
    assert a + b == attendu

# 3. DÉBOGAGE AVEC PRINT ET LOGGING
import logging

# Configuration du logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

def fonction_complexe(nombre):
    logger.debug(f"Début de fonction_complexe avec {nombre}")
    
    if nombre < 0:
        logger.warning("Nombre négatif détecté")
        return None
    
    resultat = nombre * 2
    logger.info(f"Résultat calculé: {resultat}")
    
    return resultat

# Test de la fonction
print("🐛 Test débogage:")
print(fonction_complexe(5))
print(fonction_complexe(-3))

# 4. DÉBOGAGE AVEC PDB
import pdb

def fonction_avec_breakpoint():
    x = 10
    y = 20
    
    # Point d'arrêt pour débogage
    # pdb.set_trace()  # Décommentez pour activer
    
    resultat = x + y
    return resultat

# 5. GESTION D'ERREURS AVEC TRY/EXCEPT
def fonction_robuste():
    try:
        # Code qui peut échouer
        nombre = int("abc")
        resultat = 10 / nombre
        return resultat
    except ValueError as e:
        print(f"Erreur de valeur: {e}")
        return None
    except ZeroDivisionError as e:
        print(f"Division par zéro: {e}")
        return None
    except Exception as e:
        print(f"Erreur inattendue: {e}")
        return None
    finally:
        print("Nettoyage effectué")

print("\\n🛡️ Test gestion d'erreurs:")
fonction_robuste()

# 6. ASSERTIONS POUR VÉRIFICATIONS
def calculer_moyenne(nombres):
    assert len(nombres) > 0, "La liste ne peut pas être vide"
    assert all(isinstance(x, (int, float)) for x in nombres), "Tous les éléments doivent être numériques"
    
    return sum(nombres) / len(nombres)

# Test des assertions
try:
    print("\\n✅ Test assertions:")
    print(calculer_moyenne([1, 2, 3, 4, 5]))
    # print(calculer_moyenne([]))  # Lèvera une AssertionError
except AssertionError as e:
    print(f"Assertion échouée: {e}")

# 7. PROFILAGE DE PERFORMANCE
import time
import cProfile

def fonction_lente():
    time.sleep(0.1)
    return sum(range(1000))

def fonction_rapide():
    return sum(range(1000))

# Profilage
print("\\n⏱️ Test profilage:")
profiler = cProfile.Profile()
profiler.enable()

# Code à profiler
for _ in range(10):
    fonction_lente()
    fonction_rapide()

profiler.disable()
profiler.print_stats(sort='cumulative')

# 8. TESTS DE PROPRIÉTÉS AVEC HYPOTHESIS
# pip install hypothesis
try:
    from hypothesis import given, strategies as st
    
    @given(st.integers(), st.integers())
    def test_addition_proprietes(a, b):
        resultat = a + b
        assert resultat == b + a  # Commutativité
        assert resultat - a == b  # Inverse
    
    print("\\n🔬 Tests de propriétés activés")
except ImportError:
    print("\\n❌ Hypothesis non installé pour les tests de propriétés")`;

  const javascriptCode = `// Tests et débogage en JavaScript

// 1. TESTS AVEC JEST
// fichier: calculatrice.test.js
function addition(a, b) {
    return a + b;
}

function division(a, b) {
    if (b === 0) {
        throw new Error("Division par zéro");
    }
    return a / b;
}

// Tests Jest (à exécuter avec npm test)
/*
describe('Calculatrice', () => {
    test('addition de 2 + 2 = 4', () => {
        expect(addition(2, 2)).toBe(4);
    });
    
    test('division de 10 / 2 = 5', () => {
        expect(division(10, 2)).toBe(5);
    });
    
    test('division par zéro lève une erreur', () => {
        expect(() => division(10, 0)).toThrow('Division par zéro');
    });
});
*/

// 2. TESTS MANUELS
console.log("🐛 Test débogage:");
console.log("Test addition:", addition(5, 3) === 8);
console.log("Test division:", division(10, 2) === 5);

// 3. DÉBOGAGE AVEC CONSOLE
function fonctionComplexe(nombre) {
    console.log("Début de fonctionComplexe avec", nombre);
    
    if (nombre < 0) {
        console.warn("Nombre négatif détecté");
        return null;
    }
    
    const resultat = nombre * 2;
    console.log("Résultat calculé:", resultat);
    
    return resultat;
}

console.log("\\n🔍 Test console:");
console.log(fonctionComplexe(5));
console.log(fonctionComplexe(-3));

// 4. DÉBOGAGE AVEC DEBUGGER
function fonctionAvecBreakpoint() {
    const x = 10;
    const y = 20;
    
    // Point d'arrêt pour débogage
    // debugger;  // Décommentez pour activer
    
    const resultat = x + y;
    return resultat;
}

// 5. GESTION D'ERREURS AVEC TRY/CATCH
function fonctionRobuste() {
    try {
        // Code qui peut échouer
        const nombre = parseInt("abc");
        const resultat = 10 / nombre;
        return resultat;
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("Erreur de type:", error.message);
        } else if (error instanceof RangeError) {
            console.error("Erreur de range:", error.message);
        } else {
            console.error("Erreur inattendue:", error.message);
        }
        return null;
    } finally {
        console.log("Nettoyage effectué");
    }
}

console.log("\\n🛡️ Test gestion d'erreurs:");
console.log(fonctionRobuste());

// 6. ASSERTIONS POUR VÉRIFICATIONS
function calculerMoyenne(nombres) {
    if (nombres.length === 0) {
        throw new Error("La liste ne peut pas être vide");
    }
    
    if (!nombres.every(x => typeof x === 'number')) {
        throw new Error("Tous les éléments doivent être numériques");
    }
    
    return nombres.reduce((a, b) => a + b, 0) / nombres.length;
}

// Test des assertions
try {
    console.log("\\n✅ Test assertions:");
    console.log(calculerMoyenne([1, 2, 3, 4, 5]));
    // console.log(calculerMoyenne([]));  // Lèvera une erreur
} catch (error) {
    console.error("Assertion échouée:", error.message);
}

// 7. PROFILAGE DE PERFORMANCE
function fonctionLente() {
    const debut = Date.now();
    while (Date.now() - debut < 100) {
        // Simulation d'un travail
    }
    return Array.from({length: 1000}, (_, i) => i).reduce((a, b) => a + b, 0);
}

function fonctionRapide() {
    return Array.from({length: 1000}, (_, i) => i).reduce((a, b) => a + b, 0);
}

console.log("\\n⏱️ Test profilage:");
const debutLente = Date.now();
fonctionLente();
const finLente = Date.now();
console.log("Fonction lente:", finLente - debutLente, "ms");

const debutRapide = Date.now();
fonctionRapide();
const finRapide = Date.now();
console.log("Fonction rapide:", finRapide - debutRapide, "ms");

// 8. TESTS DE PROPRIÉTÉS AVEC FAST-CHECK
// npm install fast-check
/*
const fc = require('fast-check');

fc.assert(
    fc.property(fc.integer(), fc.integer(), (a, b) => {
        const resultat = addition(a, b);
        return resultat === addition(b, a); // Commutativité
    })
);
*/

// 9. LOGGING AVANCÉ
class Logger {
    constructor(niveau = 'info') {
        this.niveau = niveau;
    }
    
    log(message, niveau = 'info') {
        const niveaux = {debug: 0, info: 1, warn: 2, error: 3};
        if (niveaux[niveau] >= niveaux[this.niveau]) {
            console.log(\`[\${niveau.toUpperCase()}] \${message}\`);
        }
    }
    
    debug(message) { this.log(message, 'debug'); }
    info(message) { this.log(message, 'info'); }
    warn(message) { this.log(message, 'warn'); }
    error(message) { this.log(message, 'error'); }
}

const logger = new Logger('debug');
logger.info("Application démarrée");
logger.debug("Variable x = 42");
logger.warn("Attention: valeur critique");
logger.error("Erreur fatale détectée");`;

  const typescriptCode = `// Tests et débogage en TypeScript

// 1. INTERFACES POUR LES TESTS
interface ITestResult {
    success: boolean;
    message: string;
    expected?: any;
    actual?: any;
}

interface ITestSuite {
    name: string;
    tests: ITestResult[];
    run(): void;
}

// 2. TESTS AVEC JEST ET TYPES
function addition(a: number, b: number): number {
    return a + b;
}

function division(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division par zéro");
    }
    return a / b;
}

// Tests Jest typés
/*
describe('Calculatrice', () => {
    test('addition de 2 + 2 = 4', () => {
        expect(addition(2, 2)).toBe(4);
    });
    
    test('division de 10 / 2 = 5', () => {
        expect(division(10, 2)).toBe(5);
    });
    
    test('division par zéro lève une erreur', () => {
        expect(() => division(10, 0)).toThrow('Division par zéro');
    });
});
*/

// 3. DÉBOGAGE AVEC TYPES
function fonctionComplexe(nombre: number): number | null {
    console.log("Début de fonctionComplexe avec", nombre);
    
    if (nombre < 0) {
        console.warn("Nombre négatif détecté");
        return null;
    }
    
    const resultat: number = nombre * 2;
    console.log("Résultat calculé:", resultat);
    
    return resultat;
}

console.log("🐛 Test débogage:");
console.log(fonctionComplexe(5));
console.log(fonctionComplexe(-3));

// 4. GESTION D'ERREURS TYPÉES
class CustomError extends Error {
    constructor(message: string, public code: string) {
        super(message);
        this.name = 'CustomError';
    }
}

function fonctionRobuste(): number | null {
    try {
        const nombre: number = parseInt("abc");
        const resultat: number = 10 / nombre;
        return resultat;
    } catch (error) {
        if (error instanceof CustomError) {
            console.error("Erreur personnalisée:", error.message, error.code);
        } else if (error instanceof TypeError) {
            console.error("Erreur de type:", error.message);
        } else {
            console.error("Erreur inattendue:", error);
        }
        return null;
    } finally {
        console.log("Nettoyage effectué");
    }
}

console.log("\\n🛡️ Test gestion d'erreurs:");
console.log(fonctionRobuste());

// 5. ASSERTIONS TYPÉES
function calculerMoyenne(nombres: number[]): number {
    if (nombres.length === 0) {
        throw new Error("La liste ne peut pas être vide");
    }
    
    if (!nombres.every(x => typeof x === 'number')) {
        throw new Error("Tous les éléments doivent être numériques");
    }
    
    return nombres.reduce((a, b) => a + b, 0) / nombres.length;
}

// Test des assertions
try {
    console.log("\\n✅ Test assertions:");
    console.log(calculerMoyenne([1, 2, 3, 4, 5]));
} catch (error) {
    console.error("Assertion échouée:", error);
}

// 6. PROFILAGE AVEC TYPES
interface IPerformanceMetrics {
    functionName: string;
    duration: number;
    memoryUsage?: number;
}

function profiler<T extends (...args: any[]) => any>(
    fn: T,
    name: string
): (...args: Parameters<T>) => ReturnType<T> {
    return (...args: Parameters<T>): ReturnType<T> => {
        const start = performance.now();
        const result = fn(...args);
        const end = performance.now();
        
        console.log(\`⏱️ \${name}: \${(end - start).toFixed(2)}ms\`);
        
        return result;
    };
}

const fonctionLenteProfilée = profiler(
    () => {
        const debut = Date.now();
        while (Date.now() - debut < 100) {
            // Simulation d'un travail
        }
        return Array.from({length: 1000}, (_, i) => i).reduce((a, b) => a + b, 0);
    },
    "Fonction lente"
);

console.log("\\n⏱️ Test profilage:");
fonctionLenteProfilée();

// 7. LOGGING TYPÉ
enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}

class TypedLogger {
    private niveau: LogLevel;
    
    constructor(niveau: LogLevel = LogLevel.INFO) {
        this.niveau = niveau;
    }
    
    private log(message: string, niveau: LogLevel): void {
        if (niveau >= this.niveau) {
            console.log(\`[\${LogLevel[niveau]}] \${message}\`);
        }
    }
    
    debug(message: string): void { this.log(message, LogLevel.DEBUG); }
    info(message: string): void { this.log(message, LogLevel.INFO); }
    warn(message: string): void { this.log(message, LogLevel.WARN); }
    error(message: string): void { this.log(message, LogLevel.ERROR); }
}

const typedLogger = new TypedLogger(LogLevel.DEBUG);
typedLogger.info("Application démarrée");
typedLogger.debug("Variable x = 42");
typedLogger.warn("Attention: valeur critique");
typedLogger.error("Erreur fatale détectée");

// 8. TESTS DE PROPRIÉTÉS AVEC TYPES
interface ITestProperty<T> {
    name: string;
    property: (value: T) => boolean;
    generator: () => T;
}

function testProperty<T>(test: ITestProperty<T>, iterations: number = 100): boolean {
    for (let i = 0; i < iterations; i++) {
        const value = test.generator();
        if (!test.property(value)) {
            console.error(\`Test "\${test.name}" échoué avec valeur: \${value}\`);
            return false;
        }
    }
    console.log(\`✅ Test "\${test.name}" réussi (\${iterations} itérations)\`);
    return true;
}

// Exemple de test de propriété
const testAdditionCommutative: ITestProperty<[number, number]> = {
    name: "Addition commutative",
    property: ([a, b]) => addition(a, b) === addition(b, a),
    generator: () => [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
};

console.log("\\n🔬 Test de propriété:");
testProperty(testAdditionCommutative, 50);`;

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
              🐛 COURS 15 : TESTS
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ VÉRIFIER ET CORRIGER LE CODE ⚡
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
              Cours 15 : Tests
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
                Vérifier et corriger le code efficacement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Tests unitaires
                    </h4>
                    <p className="text-sm text-gray-600">
                      Vérifier chaque fonction individuellement
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Débogage avancé
                    </h4>
                    <p className="text-sm text-gray-600">
                      Identifier et corriger les erreurs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Profilage
                    </h4>
                    <p className="text-sm text-gray-600">
                      Optimiser les performances
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
                Trois façons de comprendre les tests selon votre univers
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
                Comparez les tests dans les trois langages
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
                🎉 Formation Fondamentaux Terminée !
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Vous avez maîtrisé les 5 cours de gestion d'état
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Retour aux fondamentaux
                  </h3>
                  <p className="text-gray-600">
                    Explorez les autres sections
                  </p>
                </div>
                <Link
                  href="/fondamentaux"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Retour</span>
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