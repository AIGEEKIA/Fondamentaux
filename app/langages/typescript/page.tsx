"use client";

import { useState } from "react";
import {
  BookOpen,
  Code,
  Database,
  Cloud,
  Package,
  GraduationCap,
  Home,
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  Target,
  Lightbulb,
  Globe,
  Zap,
  Shield,
  Users,
  Brain,
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

export default function TypeScriptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
              🔷 TYPESCRIPT
            </h1>
            <h2 className="text-3xl font-semibold text-purple-100 mb-2">
              JAVASCRIPT AVEC TYPAGE STATIQUE
            </h2>
            <p className="text-xl font-medium text-purple-200 max-w-4xl mx-auto">
              🛡️ SÉCURITÉ, MAINTENABILITÉ ET ÉVOLUTIVITÉ 🛡️
            </p>
          </div>
        </div>
      </header>

      {/* Menu hamburger */}
      <HamburgerMenu currentPage="typescript" />

      <main className="container mx-auto px-4 py-8 mt-32">
        {/* Navigation breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Accueil
            </Link>
            <ArrowRight className="h-4 w-4" />
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Accueil
            </Link>
            <ArrowRight className="h-4 w-4" />
            <Link
              href="/fondamentaux/lecon-1"
              className="hover:text-blue-600 transition-colors"
            >
              Cours 1
            </Link>
            <ArrowRight className="h-4 w-4" />
            <span className="text-blue-600 font-semibold">TypeScript</span>
          </div>
        </nav>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
                <Shield className="h-8 w-8 text-blue-600" />
                Qu'est-ce que TypeScript ?
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                TypeScript est un sur-ensemble de JavaScript qui ajoute le
                typage statique optionnel, les classes, les modules et d'autres
                fonctionnalités modernes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  TypeScript a été développé par Microsoft en 2012 pour résoudre
                  les problèmes de maintenabilité et d'évolutivité des grands
                  projets JavaScript. Il compile en JavaScript pur et offre une
                  expérience de développement plus robuste avec :
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Typage statique</strong> - Détection d'erreurs à
                      la compilation
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>IntelliSense avancé</strong> - Autocomplétion et
                      refactoring
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Interfaces et types</strong> - Documentation
                      vivante du code
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span>
                      <strong>Compatibilité JavaScript</strong> - Tout code JS
                      valide est valide en TS
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Histoire et Philosophie */}
        <section className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
                <BookOpen className="h-8 w-8 text-blue-600" />
                Histoire et Philosophie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    📅 Histoire
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>2012</strong> - Développement initial par Anders
                      Hejlsberg chez Microsoft
                    </p>
                    <p>
                      <strong>2014</strong> - Version 1.0 et adoption par la
                      communauté
                    </p>
                    <p>
                      <strong>2016</strong> - Intégration dans Angular 2+
                    </p>
                    <p>
                      <strong>2018</strong> - Support officiel dans React avec
                      Create React App
                    </p>
                    <p>
                      <strong>2020+</strong> - Standard de facto pour les
                      projets JavaScript modernes
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    🎯 Philosophie
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Progressive</strong> - Adoption graduelle possible
                    </p>
                    <p>
                      <strong>Structural</strong> - Types basés sur la
                      structure, pas les noms
                    </p>
                    <p>
                      <strong>Compatible</strong> - 100% compatible avec
                      JavaScript
                    </p>
                    <p>
                      <strong>Productif</strong> - Améliore l'expérience
                      développeur
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comparaison avec JavaScript */}
        <section className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
                <Target className="h-8 w-8 text-blue-600" />
                TypeScript vs JavaScript
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-xl font-semibold text-red-700 mb-4">
                    JavaScript
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Typage dynamique</li>
                    <li>• Erreurs à l'exécution</li>
                    <li>• Moins de refactoring</li>
                    <li>• Documentation externe</li>
                    <li>• Plus simple à apprendre</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-700 mb-4">
                    TypeScript
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Typage statique</li>
                    <li>• Erreurs à la compilation</li>
                    <li>• Refactoring avancé</li>
                    <li>• Documentation intégrée</li>
                    <li>• Courbe d'apprentissage</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cas d'usage */}
        <section className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
                <Lightbulb className="h-8 w-8 text-blue-600" />
                Cas d'usage recommandés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    Grands projets
                  </h3>
                  <p className="text-gray-700">
                    Applications complexes avec plusieurs développeurs
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">
                    APIs et services
                  </h3>
                  <p className="text-gray-700">
                    Backend Node.js avec typage strict
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Frameworks modernes
                  </h3>
                  <p className="text-gray-700">
                    React, Vue, Angular avec TypeScript
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
                <Package className="h-8 w-8 text-blue-600" />
                Installation et Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    📦 Installation globale
                  </h3>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    npm install -g typescript
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    🔧 Configuration (tsconfig.json)
                  </h3>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    {`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">
                    ⚡ Compilation
                  </h3>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    tsc mon-fichier.ts
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Prérequis */}
        <section className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                Prérequis recommandés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">
                    📚 Connaissances de base
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• JavaScript ES6+ (variables, fonctions, objets)</li>
                    <li>• Programmation orientée objet</li>
                    <li>• Concepts de base des types</li>
                    <li>• Outils de développement (VS Code)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">
                    🛠️ Outils recommandés
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• VS Code avec extension TypeScript</li>
                    <li>• Node.js et npm</li>
                    <li>• ESLint avec règles TypeScript</li>
                    <li>• Prettier pour le formatage</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Liens externes */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-100/50 to-purple-100/50 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    🚀 Ressources TypeScript
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Liens utiles pour apprendre TypeScript
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <a
                  href="https://www.typescriptlang.org/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      📖 Documentation Officielle
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Guide complet et référence officielle de TypeScript
                  </p>
                </a>

                <a
                  href="https://www.typescriptlang.org/play"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      🎮 Playground TypeScript
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Testez TypeScript en ligne avec compilation en temps réel
                  </p>
                </a>

                <a
                  href="https://www.youtube.com/c/Fireship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <div className="text-white text-xs">▶</div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      🎥 Fireship YouTube
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Tutoriels rapides et modernes sur TypeScript
                  </p>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <div className="flex justify-between items-center">
            <Link
              href="/langages/javascript"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              JavaScript
            </Link>
            <Link
              href="/fondamentaux/lecon-1"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Retour au Cours 1
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
