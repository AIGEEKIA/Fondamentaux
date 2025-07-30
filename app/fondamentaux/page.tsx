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

export default function FondamentauxPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      {/* Super Header Bandeau */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500/40 via-indigo-600/40 to-purple-700/40 text-white py-6 shadow-lg z-40 overflow-hidden rounded-2xl mx-4 mt-4 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          {/* Logo AIGEEKIA dans le header - Haut droite */}
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

          {/* Signature By AIGEEKIA - Bas droite */}
          <div className="absolute bottom-2 right-12 z-10">
            <span className="text-white/80 font-medium text-xs italic">
              By AIGEEKIA
            </span>
          </div>

          <div className="text-center relative">
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md relative overflow-hidden">
              🚀 FORMATION DEV CODEUR IA
            </h1>
            <h2 className="text-3xl font-semibold text-purple-100 mb-2">
              LES FONDAMENTAUX INDISPENSABLES
            </h2>
            <p className="text-xl font-medium text-purple-200 max-w-4xl mx-auto">
              ⚡ ZERO TO HERO EN 1 MOIS ⚡
            </p>
          </div>
        </div>
      </header>

      {/* Menu hamburger en dehors du header - Aligné sur le même axe X */}
      <div className="fixed top-28 right-16 z-50 flex flex-col items-center gap-2">
        {/* Menu hamburger */}
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

        {/* Menu déroulant */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-blue-200/50 min-w-48 z-10">
            <div className="p-2">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span className="font-medium">Accueil</span>
              </Link>
              <Link
                href="/analogie-cuisine"
                className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <ChefHat className="h-4 w-4" />
                <span className="font-medium">La Cuisine</span>
              </Link>
              <Link
                href="/analogie-architecture"
                className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                <span className="font-medium">L'Architecte</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-1"
                className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-4 w-4" />
                <span className="font-medium">Cours 1 : Variables</span>
              </Link>
              <Link
                href="/fondamentaux/installation-python"
                className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Code className="h-4 w-4" />
                <span className="font-medium">Installation Python</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <main className="container mx-auto px-4 py-8 mt-48">
        {/* Super Bandeau Motivant */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200/50 shadow-md rounded-3xl overflow-hidden">
            <div className="animate-scroll flex space-x-12 whitespace-nowrap">
              <div className="flex items-center space-x-12">
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🧠 37 COURS FONDAMENTAUX
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🎯 4 CONCEPTS MAJEURS
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🚀 MAÎTRISE COMPLÈTE DE LA PROGRAMMATION
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🌟 DEVENIR EXPERT QUI DIRIGE L'IA
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  💡 TRANSFORMER VOTRE CARRIÈRE
                </span>
                {/* Duplicated messages for continuous scroll */}
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🧠 37 COURS FONDAMENTAUX
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🎯 4 CONCEPTS MAJEURS
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🚀 MAÎTRISE COMPLÈTE DE LA PROGRAMMATION
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🌟 DEVENIR EXPERT QUI DIRIGE L'IA
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  💡 TRANSFORMER VOTRE CARRIÈRE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                Les 4 Concepts Fondamentaux
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Découvrez les 37 cours organisés autour de 4 concepts majeurs
                pour maîtriser la programmation et diriger l'IA.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6">
                Cette formation vous donne les clés pour maîtriser la
                programmation et mieux diriger l'IA dans la création de code.
                Avec 37 cours pratiques, vous deviendrez un expert qui contrôle
                l'IA plutôt que de la subir.
              </p>
              <p className="font-semibold text-blue-700 text-center">
                Chaque concept vous arme pour créer du code de qualité avec
                l'aide de l'IA.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Les 4 Concepts Fondamentaux */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🎯 Les 4 Concepts Fondamentaux
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Chaque concept regroupe plusieurs cours pour une progression
            optimale
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Concept 1 : Algorithmie */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  💻 Algorithmie
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Les bases de la programmation (Cours 1-5)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link
                    href="/fondamentaux/lecon-1"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 1 : Variables Python/JS/TS + mini-appli Cursor
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-2"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 2 : Fonctions comparatives
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-3"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 3 : Structures de contrôle
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-4"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 4 : Collections avancées
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-5"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 5 : Fonctions de haut niveau
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-semibold">
                      5 cours
                    </span>
                    <Link
                      href="/fondamentaux/algorithmie"
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                    >
                      <span>Explorer</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Concept 2 : Scope & Closures */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  🧠 Scope & Closures
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Concepts avancés (Cours 6)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link
                    href="/fondamentaux/lecon-6"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 6 : Variables globales vs locales
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-7"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 7 : Scope de fonction et de bloc
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-8"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 8 : Hoisting et temporal dead zone
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-9"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 9 : Chaînes de scope
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-10"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 10 : Fonctions imbriquées et closures
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-semibold">
                      1 cours
                    </span>
                    <Link
                      href="/fondamentaux/scope-closures"
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                    >
                      <span>Explorer</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Concept 3 : Gestion d'état */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  ⚡ Gestion d'état
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Programmation moderne (Cours 7-25)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link
                    href="/fondamentaux/lecon-7"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                        Cours 7 : Programmation asynchrone
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-blue-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-8"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 8-11 : Outils IA et MCP
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-12"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 12-18 : Architectures avancées
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-19"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 19-25 : Patterns modernes
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-26"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Tests, sécurité, déploiement
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-semibold">
                      19 cours
                    </span>
                    <Link
                      href="/fondamentaux/gestion-etat"
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                    >
                      <span>Explorer</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Concept 4 : DevOps & Sécurité */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  🛡️ DevOps & Sécurité
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Cours avancés (Cours 26-37)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link
                    href="/fondamentaux/lecon-26"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 26-28 : Observabilité et monitoring
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-29"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 29-31 : Automatisation et GitOps
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-32"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 32-34 : Sécurité cloud et Zero Trust
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-35"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 35-37 : IA et sécurité avancée
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/lecon-37"
                    className="flex items-center justify-between w-full bg-white border-2 border-blue-200 hover:border-blue-400 hover:bg-purple-50 p-3 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-purple-500 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Threat Hunting et DevSecOps
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </div>
                <div className="mt-6 pt-4 border-t border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-semibold">
                      12 cours
                    </span>
                    <Link
                      href="/fondamentaux/devops-securite"
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                    >
                      <span>Explorer</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-2 border-blue-300/50 shadow-xl">
            <CardContent className="text-center py-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                🚀 Prêt à maîtriser l'Intelligence Artificielle ?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Commencez votre parcours avec les 37 cours fondamentaux
                organisés en 4 concepts majeurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/fondamentaux/lecon-1"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Play className="h-5 w-5" />
                  <span>Commencer la Formation</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 border-2 border-blue-300 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Home className="h-5 w-5" />
                  <span>Retour à l'Accueil</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
