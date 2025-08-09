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
  Download,
  Terminal,
  Globe,
  Zap,
  Settings,
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

export default function InstallationPythonPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMethod, setActiveMethod] = useState("official");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
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
              🐍 COURS ANNEXE : INSTALLATION PYTHON
            </h1>
            <h2 className="text-3xl font-semibold text-purple-100 mb-2">
              CHOISISSEZ VOTRE MÉTHODE PRÉFÉRÉE
            </h2>
            <p className="text-xl font-medium text-purple-200 max-w-4xl mx-auto">
              ⚡ PLUSIEURS OPTIONS POUR DÉBUTER ⚡
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
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-200 p-4 min-w-[250px] max-h-[80vh] overflow-y-auto">
            <div className="space-y-2">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
              >
                <Home className="h-5 w-5" />
                <span>Accueil</span>
              </Link>

              <div className="border-t border-gray-200 pt-2 mt-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  Analogies
                </h3>
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
                  <Building2 className="h-5 w-5" />
                  <span>L'Architecte</span>
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-2 mt-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  Installation
                </h3>
                <Link
                  href="/fondamentaux/installation-python"
                  className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 text-purple-700 font-medium"
                >
                  <Code className="h-5 w-5" />
                  <span>Installation Python</span>
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-2 mt-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  Cours Fondamentaux
                </h3>
                <Link
                  href="/fondamentaux/cours-1"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 1 : Variables</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-2"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 2 : Types de données</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-3"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 3 : Opérateurs</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-4"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 4 : Structures conditionnelles</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-5"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 5 : Boucles</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-6"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 6 : Fonctions</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-7"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 7 : Listes et tableaux</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-8"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 8 : Dictionnaires</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-9"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 9 : Classes et objets</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-10"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 10 : Gestion d'erreurs</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-11"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 11 : Modules et packages</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-12"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 12 : Fichiers et I/O</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-13"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 13 : Programmation asynchrone</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-14"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 14 : Tests unitaires</span>
                </Link>
                <Link
                  href="/fondamentaux/cours-15"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Cours 15 : Projet final</span>
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-2 mt-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  Langages
                </h3>
                <Link
                  href="/langages/python"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <Code className="h-5 w-5" />
                  <span>Python</span>
                </Link>
                <Link
                  href="/langages/javascript"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <Code className="h-5 w-5" />
                  <span>JavaScript</span>
                </Link>
                <Link
                  href="/langages/typescript"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700"
                >
                  <Code className="h-5 w-5" />
                  <span>TypeScript</span>
                </Link>
              </div>
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
            <Link href="/" className="hover:text-purple-600 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href="/fondamentaux/cours-1"
              className="hover:text-purple-600 transition-colors"
            >
              Cours 1
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-purple-600 font-semibold">
              Installation Python
            </span>
          </div>
        </nav>

        {/* Vérification Python */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-500/10 to-blue-600/10 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    🔍 Vérification Python
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Vérifiez d'abord si Python est déjà installé sur votre
                    système
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-800 mb-3">
                  📋 Comment ouvrir le terminal :
                </h4>
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h5 className="font-semibold text-blue-800 mb-2">
                      🪟 Windows :
                    </h5>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700">
                      <li>
                        Appuyez sur{" "}
                        <code className="bg-blue-100 px-1 py-0.5 rounded">
                          Win + R
                        </code>
                      </li>
                      <li>
                        Tapez{" "}
                        <code className="bg-blue-100 px-1 py-0.5 rounded">
                          cmd
                        </code>
                      </li>
                      <li>
                        Appuyez sur <strong>Entrée</strong>
                      </li>
                    </ol>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h5 className="font-semibold text-green-800 mb-2">
                      🍎 macOS :
                    </h5>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-green-700">
                      <li>
                        Appuyez sur{" "}
                        <code className="bg-green-100 px-1 py-0.5 rounded">
                          Cmd + Espace
                        </code>
                      </li>
                      <li>
                        Tapez{" "}
                        <code className="bg-green-100 px-1 py-0.5 rounded">
                          Terminal
                        </code>
                      </li>
                      <li>
                        Appuyez sur <strong>Entrée</strong>
                      </li>
                    </ol>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h5 className="font-semibold text-purple-800 mb-2">
                      🐧 Linux :
                    </h5>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-purple-700">
                      <li>
                        Appuyez sur{" "}
                        <code className="bg-purple-100 px-1 py-0.5 rounded">
                          Ctrl + Alt + T
                        </code>
                      </li>
                      <li>Le terminal s'ouvre directement</li>
                    </ol>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">
                  📋 Commandes de vérification :
                </h4>
                <div className="space-y-3">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <p className="text-gray-300 font-mono text-sm">
                      # Windows (CMD ou PowerShell)
                    </p>
                    <p className="text-gray-100 font-mono text-sm">
                      python --version
                    </p>
                    <p className="text-gray-100 font-mono text-sm">
                      py --version
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <p className="text-gray-300 font-mono text-sm">
                      # macOS/Linux (Terminal)
                    </p>
                    <p className="text-gray-100 font-mono text-sm">
                      python3 --version
                    </p>
                    <p className="text-gray-100 font-mono text-sm">
                      python --version
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800 mb-2">
                    ✅ Si Python est installé :
                  </h5>
                  <p className="text-blue-700 text-sm">
                    Vous verrez quelque chose comme "Python 3.11.0" - vous
                    pouvez retourner au{" "}
                    <Link
                      href="/fondamentaux/cours-1"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      Cours 1
                    </Link>
                  </p>
                </div>
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-800 mb-2">
                    ❌ Si Python n'est pas installé :
                  </h5>
                  <p className="text-red-700 text-sm">
                    Vous verrez "command not found" - choisissez une méthode
                    d'installation ci-dessous
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Méthodes d'installation */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 border-2 border-purple-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                🚀 4 Méthodes d'Installation Python
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Sélectionnez votre méthode préférée : Site officiel,
                Gestionnaire de paquets, ou Outils modernes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveMethod("official")}
                  className={`flex-1 py-3 px-4 rounded-md font-medium transition-all duration-300 ${
                    activeMethod === "official"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  🌐 Site Officiel
                </button>
                <button
                  onClick={() => setActiveMethod("chocolatey")}
                  className={`flex-1 py-3 px-4 rounded-md font-medium transition-all duration-300 ${
                    activeMethod === "chocolatey"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  🍫 Chocolatey
                </button>
                <button
                  onClick={() => setActiveMethod("pyenv")}
                  className={`flex-1 py-3 px-4 rounded-md font-medium transition-all duration-300 ${
                    activeMethod === "pyenv"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  🔧 pyenv
                </button>
                <button
                  onClick={() => setActiveMethod("uv")}
                  className={`flex-1 py-3 px-4 rounded-md font-medium transition-all duration-300 ${
                    activeMethod === "uv"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  ⚡ uv
                </button>
              </div>

              {/* Méthode Site Officiel */}
              {activeMethod === "official" && (
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Installation via le Site Officiel
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Étape 1 : Téléchargement
                          </h5>
                          <p className="text-sm text-gray-600">
                            Allez sur{" "}
                            <a
                              href="https://python.org"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-700 underline"
                            >
                              python.org
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Étape 2 : Installation
                          </h5>
                          <p className="text-sm text-gray-600">
                            Téléchargez la dernière version (3.11+) et lancez
                            l'installateur
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Étape 3 : Configuration
                          </h5>
                          <p className="text-sm text-gray-600">
                            Cochez "Add Python to PATH" pendant l'installation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                      <p className="text-gray-300 font-mono text-sm">
                        # Vérification après installation
                      </p>
                      <p className="text-gray-100 font-mono text-sm">
                        python --version
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Méthode Chocolatey */}
              {activeMethod === "chocolatey" && (
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Installation via Chocolatey (Windows)
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Prérequis : Chocolatey
                          </h5>
                          <p className="text-sm text-gray-600">
                            Installez d'abord Chocolatey si ce n'est pas fait
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <p className="text-gray-300 font-mono text-sm">
                          # Installation de Python
                        </p>
                        <p className="text-gray-100 font-mono text-sm">
                          choco install python
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Avantages
                          </h5>
                          <p className="text-sm text-gray-600">
                            Installation automatique, gestion des versions
                            facile
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Méthode pyenv */}
              {activeMethod === "pyenv" && (
                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-4 flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Installation via pyenv (Gestionnaire de versions)
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-purple-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Installation de pyenv
                          </h5>
                          <p className="text-sm text-gray-600">
                            Suivez les instructions sur{" "}
                            <a
                              href="https://github.com/pyenv/pyenv"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-700 underline"
                            >
                              GitHub pyenv
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <p className="text-gray-300 font-mono text-sm">
                          # Installation de Python via pyenv
                        </p>
                        <p className="text-gray-100 font-mono text-sm">
                          pyenv install 3.11.0
                        </p>
                        <p className="text-gray-100 font-mono text-sm">
                          pyenv global 3.11.0
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-purple-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Avantages
                          </h5>
                          <p className="text-sm text-gray-600">
                            Gestion de plusieurs versions Python, isolation des
                            projets
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Méthode uv */}
              {activeMethod === "uv" && (
                <div className="space-y-6">
                  <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      Installation via uv (Moderne et rapide)
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Installation de uv
                          </h5>
                          <p className="text-sm text-gray-600">
                            uv est un gestionnaire de packages Python
                            ultra-rapide
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <p className="text-gray-300 font-mono text-sm">
                          # Installation de uv
                        </p>
                        <p className="text-gray-100 font-mono text-sm">
                          curl -LsSf https://astral.sh/uv/install.sh | sh
                        </p>
                        <p className="text-gray-300 font-mono text-sm">
                          # Création d'un environnement virtuel
                        </p>
                        <p className="text-gray-100 font-mono text-sm">
                          uv venv
                        </p>
                        <p className="text-gray-100 font-mono text-sm">
                          source .venv/bin/activate # Linux/macOS
                        </p>
                        <p className="text-gray-100 font-mono text-sm">
                          # ou .venv\\Scripts\\activate # Windows
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-orange-500 mt-1" />
                        <div>
                          <h5 className="font-semibold text-gray-800">
                            Avantages
                          </h5>
                          <p className="text-sm text-gray-600">
                            Ultra-rapide, gestion automatique des environnements
                            virtuels
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Environnements virtuels */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border-2 border-indigo-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                🔒 Environnements Virtuels
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Bonne pratique : isolez vos projets Python
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">
                    🐍 venv (Intégré)
                  </h4>
                  <div className="bg-gray-900 rounded-lg p-4 mb-3">
                    <p className="text-gray-300 font-mono text-sm">
                      # Création
                    </p>
                    <p className="text-gray-100 font-mono text-sm">
                      python -m venv mon_projet
                    </p>
                    <p className="text-gray-300 font-mono text-sm">
                      # Activation
                    </p>
                    <p className="text-gray-100 font-mono text-sm">
                      mon_projet\\Scripts\\activate # Windows
                    </p>
                    <p className="text-gray-100 font-mono text-sm">
                      source mon_projet/bin/activate # Unix
                    </p>
                  </div>
                  <p className="text-sm text-indigo-700">
                    Simple et intégré à Python
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    ⚡ uv (Recommandé)
                  </h4>
                  <div className="bg-gray-900 rounded-lg p-4 mb-3">
                    <p className="text-gray-300 font-mono text-sm">
                      # Création automatique
                    </p>
                    <p className="text-gray-100 font-mono text-sm">uv venv</p>
                    <p className="text-gray-300 font-mono text-sm">
                      # Activation
                    </p>
                    <p className="text-gray-100 font-mono text-sm">
                      source .venv/bin/activate
                    </p>
                  </div>
                  <p className="text-sm text-purple-700">
                    Ultra-rapide et moderne
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Test final */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-500/10 to-blue-600/10 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                ✅ Test Final
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Vérifiez que tout fonctionne correctement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4">
                  🧪 Test de votre installation :
                </h4>
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <p className="text-gray-300 font-mono text-sm">
                      # Test 1 : Version Python
                    </p>
                    <p className="text-gray-100 font-mono text-sm">
                      python --version
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <p className="text-gray-300 font-mono text-sm">
                      # Test 2 : Hello World
                    </p>
                    <p className="text-gray-100 font-mono text-sm">
                      python -c "print('Hello, Python!')"
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <p className="text-gray-300 font-mono text-sm">
                      # Test 3 : Interactive
                    </p>
                    <p className="text-gray-100 font-mono text-sm">python</p>
                    <p className="text-gray-300 font-mono text-sm">
                      &gt;&gt;&gt; print("Python fonctionne !")
                    </p>
                    <p className="text-gray-300 font-mono text-sm">
                      &gt;&gt;&gt; exit()
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2">
                    🎉 Félicitations !
                  </h5>
                  <p className="text-green-700 text-sm">
                    Si tous les tests passent, vous êtes prêt pour le{" "}
                    <Link
                      href="/fondamentaux/cours-1"
                      className="text-green-600 hover:text-green-700 underline font-semibold"
                    >
                      Cours 1 : Variables
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                🚀 Prêt pour la suite ?
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Maintenant que Python est installé, commencez votre
                apprentissage !
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours 1 : Variables
                  </h3>
                  <p className="text-gray-600">
                    Apprenez les variables dans Python, JavaScript et TypeScript
                  </p>
                </div>
                <Link
                  href="/fondamentaux/cours-1"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Commencer</span>
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
