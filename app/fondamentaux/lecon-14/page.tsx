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
  FolderOpen,
  Archive,
  Box,
  Layers,
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

export default function Lecon14Page() {
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
      description: "Les modules comme des étagères d'épices",
      examples: ["étagère = module", "épice = fonction", "cuisine = package"],
      explanation:
        "En cuisine, les étagères d'épices sont comme des modules : elles organisent les ingrédients par catégorie. Toute la cuisine est le package.",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Les modules comme des DLC",
      examples: [
        "DLC = module",
        "fonctionnalité = fonction",
        "jeu complet = package",
      ],
      explanation:
        "Dans un jeu, les DLC sont comme des modules : ils ajoutent de nouvelles fonctionnalités. Le jeu complet est le package.",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Les modules comme des zones de culture",
      examples: ["zone = module", "plante = fonction", "jardin = package"],
      explanation:
        "Au jardin, les zones de culture sont comme des modules : elles organisent les plantes par type. Tout le jardin est le package.",
    },
  };

  const pythonCode = `# Modules et packages en Python

# 1. CRÉATION D'UN MODULE SIMPLE
# fichier: math_utils.py
def addition(a, b):
    return a + b

def multiplication(a, b):
    return a * b

def puissance(base, exposant):
    return base ** exposant

# Constante du module
PI = 3.14159

# 2. IMPORTATION DE MODULES
import math_utils
from math_utils import addition, multiplication
from math_utils import PI as PI_UTILS

print("🐍 Test importation:")
print(f"Addition: {math_utils.addition(5, 3)}")
print(f"Multiplication: {multiplication(4, 6)}")
print(f"PI du module: {PI_UTILS}")

# 3. MODULE STANDARD
import math
import random
import datetime

print("\\n📚 Modules standards:")
print(f"Racine carrée: {math.sqrt(16)}")
print(f"Nombre aléatoire: {random.randint(1, 100)}")
print(f"Date actuelle: {datetime.datetime.now()}")

# 4. CRÉATION D'UN PACKAGE
# Structure:
# mon_package/
#   __init__.py
#   calculs.py
#   utils.py

# fichier: mon_package/__init__.py
"""
Package pour les calculs mathématiques
"""
__version__ = "1.0.0"

# fichier: mon_package/calculs.py
def moyenne(nombres):
    return sum(nombres) / len(nombres)

def mediane(nombres):
    nombres_tries = sorted(nombres)
    n = len(nombres_tries)
    if n % 2 == 0:
        return (nombres_tries[n//2 - 1] + nombres_tries[n//2]) / 2
    else:
        return nombres_tries[n//2]

# fichier: mon_package/utils.py
def formater_nombre(nombre, decimales=2):
    return f"{nombre:.{decimales}f}"

def valider_nombre(valeur):
    try:
        float(valeur)
        return True
    except ValueError:
        return False

# 5. UTILISATION DU PACKAGE
# Simulation de l'import
class MonPackage:
    @staticmethod
    def moyenne(nombres):
        return sum(nombres) / len(nombres)
    
    @staticmethod
    def mediane(nombres):
        nombres_tries = sorted(nombres)
        n = len(nombres_tries)
        if n % 2 == 0:
            return (nombres_tries[n//2 - 1] + nombres_tries[n//2]) / 2
        else:
            return nombres_tries[n//2]
    
    @staticmethod
    def formater_nombre(nombre, decimales=2):
        return f"{nombre:.{decimales}f}"
    
    @staticmethod
    def valider_nombre(valeur):
        try:
            float(valeur)
            return True
        except ValueError:
            return False

# Test du package
stats = MonPackage()
nombres = [1, 3, 5, 7, 9, 11]

print("\\n📦 Test package:")
print(f"Moyenne: {stats.moyenne(nombres)}")
print(f"Médiane: {stats.mediane(nombres)}")
print(f"Nombre formaté: {stats.formater_nombre(3.14159, 3)}")
print(f"Validation: {stats.valider_nombre('42')}")

# 6. IMPORTATION CONDITIONNELLE
try:
    import numpy as np
    print("\\n🔢 NumPy disponible")
    print(f"Array: {np.array([1, 2, 3])}")
except ImportError:
    print("\\n❌ NumPy non installé")

# 7. ALIAS ET IMPORTATION PARTIELLE
import math as m
from random import choice, randint

print("\\n🏷️ Test alias:")
print(f"Cosinus: {m.cos(0)}")
print(f"Choix: {choice(['A', 'B', 'C'])}")
print(f"Nombre: {randint(1, 10)}")

# 8. MODULE PERSONNALISÉ AVEC CLASSE
class Calculatrice:
    def __init__(self):
        self.historique = []
    
    def calculer(self, operation, a, b):
        if operation == '+':
            resultat = a + b
        elif operation == '-':
            resultat = a - b
        elif operation == '*':
            resultat = a * b
        elif operation == '/':
            resultat = a / b if b != 0 else "Erreur: division par zéro"
        else:
            resultat = "Opération non supportée"
        
        self.historique.append(f"{a} {operation} {b} = {resultat}")
        return resultat
    
    def voir_historique(self):
        return self.historique

# Test de la calculatrice
calc = Calculatrice()
print("\\n🧮 Test calculatrice:")
print(calc.calculer('+', 10, 5))
print(calc.calculer('*', 6, 7))
print(calc.calculer('/', 20, 4))
print("Historique:", calc.voir_historique())`;

  const javascriptCode = `// Modules et packages en JavaScript

// 1. MODULE SIMPLE (ES6)
// fichier: mathUtils.js
export function addition(a, b) {
    return a + b;
}

export function multiplication(a, b) {
    return a * b;
}

export function puissance(base, exposant) {
    return base ** exposant;
}

export const PI = 3.14159;

// 2. IMPORTATION DE MODULES
import { addition, multiplication, PI as PI_UTILS } from './mathUtils.js';

console.log("🐍 Test importation:");
console.log(\`Addition: \${addition(5, 3)}\`);
console.log(\`Multiplication: \${multiplication(4, 6)}\`);
console.log(\`PI du module: \${PI_UTILS}\`);

// 3. MODULES STANDARDS (Node.js)
const fs = require('fs');
const path = require('path');
const http = require('http');

console.log("\\n📚 Modules standards:");
console.log(\`Chemin actuel: \${__dirname}\`);
console.log(\`Séparateur: \${path.sep}\`);

// 4. CRÉATION D'UN PACKAGE
// Structure:
// mon-package/
//   package.json
//   index.js
//   calculs.js
//   utils.js

// fichier: mon-package/package.json
const packageJson = {
    "name": "mon-package",
    "version": "1.0.0",
    "main": "index.js",
    "exports": {
        ".": "./index.js",
        "./calculs": "./calculs.js",
        "./utils": "./utils.js"
    }
};

// fichier: mon-package/index.js
const { moyenne, mediane } = require('./calculs');
const { formaterNombre, validerNombre } = require('./utils');

module.exports = {
    moyenne,
    mediane,
    formaterNombre,
    validerNombre
};

// fichier: mon-package/calculs.js
function moyenne(nombres) {
    return nombres.reduce((a, b) => a + b, 0) / nombres.length;
}

function mediane(nombres) {
    const nombresTries = [...nombres].sort((a, b) => a - b);
    const n = nombresTries.length;
    if (n % 2 === 0) {
        return (nombresTries[n/2 - 1] + nombresTries[n/2]) / 2;
    } else {
        return nombresTries[Math.floor(n/2)];
    }
}

module.exports = { moyenne, mediane };

// fichier: mon-package/utils.js
function formaterNombre(nombre, decimales = 2) {
    return nombre.toFixed(decimales);
}

function validerNombre(valeur) {
    return !isNaN(parseFloat(valeur));
}

module.exports = { formaterNombre, validerNombre };

// 5. UTILISATION DU PACKAGE
// Simulation de l'import
class MonPackage {
    static moyenne(nombres) {
        return nombres.reduce((a, b) => a + b, 0) / nombres.length;
    }
    
    static mediane(nombres) {
        const nombresTries = [...nombres].sort((a, b) => a - b);
        const n = nombresTries.length;
        if (n % 2 === 0) {
            return (nombresTries[n/2 - 1] + nombresTries[n/2]) / 2;
        } else {
            return nombresTries[Math.floor(n/2)];
        }
    }
    
    static formaterNombre(nombre, decimales = 2) {
        return nombre.toFixed(decimales);
    }
    
    static validerNombre(valeur) {
        return !isNaN(parseFloat(valeur));
    }
}

// Test du package
const stats = MonPackage;
const nombres = [1, 3, 5, 7, 9, 11];

console.log("\\n📦 Test package:");
console.log(\`Moyenne: \${stats.moyenne(nombres)}\`);
console.log(\`Médiane: \${stats.mediane(nombres)}\`);
console.log(\`Nombre formaté: \${stats.formaterNombre(3.14159, 3)}\`);
console.log(\`Validation: \${stats.validerNombre('42')}\`);

// 6. IMPORTATION DYNAMIQUE
async function chargerModule(nomModule) {
    try {
        const module = await import(\`./\${nomModule}.js\`);
        return module;
    } catch (error) {
        console.error(\`Erreur: \${error.message}\`);
        return null;
    }
}

// 7. MODULE AVEC CLASSE
class Calculatrice {
    constructor() {
        this.historique = [];
    }
    
    calculer(operation, a, b) {
        let resultat;
        
        switch(operation) {
            case '+':
                resultat = a + b;
                break;
            case '-':
                resultat = a - b;
                break;
            case '*':
                resultat = a * b;
                break;
            case '/':
                resultat = b !== 0 ? a / b : "Erreur: division par zéro";
                break;
            default:
                resultat = "Opération non supportée";
        }
        
        this.historique.push(\`\${a} \${operation} \${b} = \${resultat}\`);
        return resultat;
    }
    
    voirHistorique() {
        return this.historique;
    }
}

// Test de la calculatrice
const calc = new Calculatrice();
console.log("\\n🧮 Test calculatrice:");
console.log(calc.calculer('+', 10, 5));
console.log(calc.calculer('*', 6, 7));
console.log(calc.calculer('/', 20, 4));
console.log("Historique:", calc.voirHistorique());

// 8. MODULE AVEC PATTERN SINGLETON
const ConfigManager = (function() {
    let instance;
    
    function createInstance() {
        const config = {
            apiUrl: 'https://api.example.com',
            timeout: 5000,
            retries: 3
        };
        
        return {
            get: (key) => config[key],
            set: (key, value) => {
                config[key] = value;
            },
            getAll: () => ({ ...config })
        };
    }
    
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

console.log("\\n⚙️ Test singleton:");
const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();
console.log(\`Même instance: \${config1 === config2}\`);
console.log(\`API URL: \${config1.get('apiUrl')}\`);`;

  const typescriptCode = `// Modules et packages en TypeScript

// 1. INTERFACES POUR LES MODULES
interface IMathUtils {
    addition(a: number, b: number): number;
    multiplication(a: number, b: number): number;
    puissance(base: number, exposant: number): number;
    PI: number;
}

interface IStats {
    moyenne(nombres: number[]): number;
    mediane(nombres: number[]): number;
}

interface IUtils {
    formaterNombre(nombre: number, decimales?: number): string;
    validerNombre(valeur: string): boolean;
}

// 2. MODULE SIMPLE AVEC TYPES
// fichier: mathUtils.ts
export class MathUtils implements IMathUtils {
    static readonly PI: number = 3.14159;
    
    static addition(a: number, b: number): number {
        return a + b;
    }
    
    static multiplication(a: number, b: number): number {
        return a * b;
    }
    
    static puissance(base: number, exposant: number): number {
        return base ** exposant;
    }
}

// 3. IMPORTATION AVEC TYPES
import { MathUtils } from './mathUtils';

console.log("🐍 Test importation:");
console.log(\`Addition: \${MathUtils.addition(5, 3)}\`);
console.log(\`Multiplication: \${MathUtils.multiplication(4, 6)}\`);
console.log(\`PI du module: \${MathUtils.PI}\`);

// 4. PACKAGE AVEC TYPES
// Structure:
// mon-package/
//   package.json
//   index.ts
//   calculs.ts
//   utils.ts
//   types.ts

// fichier: mon-package/types.ts
export interface ICalculatrice {
    calculer(operation: string, a: number, b: number): number | string;
    voirHistorique(): string[];
}

export type Operation = '+' | '-' | '*' | '/';

// fichier: mon-package/calculs.ts
export class Stats implements IStats {
    static moyenne(nombres: number[]): number {
        return nombres.reduce((a, b) => a + b, 0) / nombres.length;
    }
    
    static mediane(nombres: number[]): number {
        const nombresTries = [...nombres].sort((a, b) => a - b);
        const n = nombresTries.length;
        if (n % 2 === 0) {
            return (nombresTries[n/2 - 1] + nombresTries[n/2]) / 2;
        } else {
            return nombresTries[Math.floor(n/2)];
        }
    }
}

// fichier: mon-package/utils.ts
export class Utils implements IUtils {
    static formaterNombre(nombre: number, decimales: number = 2): string {
        return nombre.toFixed(decimales);
    }
    
    static validerNombre(valeur: string): boolean {
        return !isNaN(parseFloat(valeur));
    }
}

// fichier: mon-package/index.ts
export { Stats } from './calculs';
export { Utils } from './utils';
export type { ICalculatrice, Operation } from './types';

// 5. UTILISATION DU PACKAGE
import { Stats, Utils } from './mon-package';

const nombres: number[] = [1, 3, 5, 7, 9, 11];

console.log("\\n📦 Test package:");
console.log(\`Moyenne: \${Stats.moyenne(nombres)}\`);
console.log(\`Médiane: \${Stats.mediane(nombres)}\`);
console.log(\`Nombre formaté: \${Utils.formaterNombre(3.14159, 3)}\`);
console.log(\`Validation: \${Utils.validerNombre('42')}\`);

// 6. MODULE AVEC GÉNÉRIQUES
export class Boite<T> {
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

// 7. MODULE AVEC ENUM
export enum TypeOperation {
    ADDITION = '+',
    SOUSTRACTION = '-',
    MULTIPLICATION = '*',
    DIVISION = '/'
}

export class Calculatrice implements ICalculatrice {
    private historique: string[] = [];
    
    calculer(operation: Operation, a: number, b: number): number | string {
        let resultat: number | string;
        
        switch(operation) {
            case TypeOperation.ADDITION:
                resultat = a + b;
                break;
            case TypeOperation.SOUSTRACTION:
                resultat = a - b;
                break;
            case TypeOperation.MULTIPLICATION:
                resultat = a * b;
                break;
            case TypeOperation.DIVISION:
                resultat = b !== 0 ? a / b : "Erreur: division par zéro";
                break;
            default:
                resultat = "Opération non supportée";
        }
        
        this.historique.push(\`\${a} \${operation} \${b} = \${resultat}\`);
        return resultat;
    }
    
    voirHistorique(): string[] {
        return [...this.historique];
    }
}

// Test de la calculatrice
const calc = new Calculatrice();
console.log("\\n🧮 Test calculatrice:");
console.log(calc.calculer('+', 10, 5));
console.log(calc.calculer('*', 6, 7));
console.log(calc.calculer('/', 20, 4));
console.log("Historique:", calc.voirHistorique());

// 8. MODULE AVEC NAMESPACE
export namespace Config {
    export interface IConfig {
        apiUrl: string;
        timeout: number;
        retries: number;
    }
    
    export class ConfigManager {
        private static instance: ConfigManager;
        private config: IConfig;
        
        private constructor() {
            this.config = {
                apiUrl: 'https://api.example.com',
                timeout: 5000,
                retries: 3
            };
        }
        
        static getInstance(): ConfigManager {
            if (!ConfigManager.instance) {
                ConfigManager.instance = new ConfigManager();
            }
            return ConfigManager.instance;
        }
        
        get<K extends keyof IConfig>(key: K): IConfig[K] {
            return this.config[key];
        }
        
        set<K extends keyof IConfig>(key: K, value: IConfig[K]): void {
            this.config[key] = value;
        }
        
        getAll(): IConfig {
            return { ...this.config };
        }
    }
}

console.log("\\n⚙️ Test namespace:");
const config = Config.ConfigManager.getInstance();
console.log(\`API URL: \${config.get('apiUrl')}\`);
console.log(\`Timeout: \${config.get('timeout')}\`);

// 9. MODULE AVEC DECORATEURS
export function Logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
        console.log(\`Appel de \${propertyKey} avec les arguments: \${JSON.stringify(args)}\`);
        const result = originalMethod.apply(this, args);
        console.log(\`Résultat: \${result}\`);
        return result;
    };
    
    return descriptor;
}

export class CalculatriceAvancee {
    @Logger
    addition(a: number, b: number): number {
        return a + b;
    }
    
    @Logger
    multiplication(a: number, b: number): number {
        return a * b;
    }
}

const calcAvancee = new CalculatriceAvancee();
console.log("\\n🎯 Test décorateurs:");
calcAvancee.addition(5, 3);
calcAvancee.multiplication(4, 6);`;

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
              📦 COURS 14 : MODULES
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              PYTHON, JAVASCRIPT & TYPESCRIPT
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ ORGANISER ET RÉUTILISER LE CODE ⚡
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
              Cours 14 : Modules
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
                Organiser et réutiliser le code efficacement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Créer des modules
                    </h4>
                    <p className="text-sm text-gray-600">
                      Organiser le code en unités logiques
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Gérer les packages
                    </h4>
                    <p className="text-sm text-gray-600">
                      Structurer les projets complexes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Importer et exporter
                    </h4>
                    <p className="text-sm text-gray-600">
                      Partager du code entre modules
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
                Trois façons de comprendre les modules selon votre univers
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
                Comparez les modules dans les trois langages
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
                Maintenant que vous maîtrisez les modules, passez aux tests !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 15 : Tests et débogage
                  </h3>
                  <p className="text-gray-600">Vérifier et corriger le code</p>
                </div>
                <Link
                  href="/fondamentaux/lecon-15"
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
