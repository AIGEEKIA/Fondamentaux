"use client";

import {
  BookOpen,
  Code,
  Brain,
  Users,
  ArrowRight,
  ChefHat,
  Building2,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProgressChart } from "@/components/progress-chart";
import LogoMenu from "@/components/logo-menu";

import Link from "next/link";

export default function FormationPage() {
  // Données de progression pour les 3 concepts fondamentaux
  const conceptsData = [
    { name: "Algorithmie", value: 25, fill: "var(--chart-1)" },
    { name: "Scope & Closures", value: 20, fill: "var(--chart-2)" },
    { name: "Gestion d'État", value: 15, fill: "var(--chart-3)" },
  ];

  // Données de progression pour les langages
  const langagesData = [
    { name: "Python", value: 30, fill: "var(--chart-1)" },
    { name: "JavaScript", value: 25, fill: "var(--chart-2)" },
    { name: "TypeScript", value: 20, fill: "var(--chart-3)" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-100">
      {/* Super Header Bandeau */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500/40 via-blue-600/40 to-blue-700/40 text-white py-6 shadow-lg z-40 overflow-hidden rounded-2xl mx-4 mt-4 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center relative">
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md relative overflow-hidden">
              FORMATION DEV CODEUR IA
              <div className="lightning-effect animate-lightning"></div>
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              LES FONDAMENTAUX INDISPENSABLES
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              ⚡ ZERO TO HERO EN 1 MOIS ⚡
            </p>
          </div>
        </div>
      </header>
      <LogoMenu />

      <main className="container mx-auto px-4 py-8 mt-48">
        {/* Super Bandeau Motivant */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 border-2 border-blue-200/50 shadow-md rounded-3xl overflow-hidden">
            <div className="animate-scroll flex space-x-12 whitespace-nowrap">
              <div className="flex items-center space-x-12">
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🚀 TRANSFORME TA CARRIÈRE EN 30 JOURS
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  ⚡ ZERO TO HERO - GARANTIE
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  💎 LES FONDAMENTAUX QUI CHANGENT TOUT
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🎯 30 MIN/JOUR = COMPÉTENCES PRO
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🔥 MAÎTRISE LE CODE COMME UN PRO
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🌟 RÉVOLUTIONNE TON AVENIR TECH
                </span>
                {/* Duplicated messages for continuous scroll */}
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🚀 TRANSFORME TA CARRIÈRE EN 30 JOURS
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  ⚡ ZERO TO HERO - GARANTIE
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  💎 LES FONDAMENTAUX QUI CHANGENT TOUT
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🎯 30 MIN/JOUR = COMPÉTENCES PRO
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🔥 MAÎTRISE LE CODE COMME UN PRO
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🌟 RÉVOLUTIONNE TON AVENIR TECH
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Statistiques */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-lg hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader>
                <div className="text-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  15
                </CardTitle>
                <CardDescription className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">
                  Cours Fondamentaux
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-lg hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader>
                <div className="text-center mb-4">
                  <Brain className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  3
                </CardTitle>
                <CardDescription className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">
                  Concepts Fondamentaux
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-lg hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader>
                <div className="text-center mb-4">
                  <Code className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  3
                </CardTitle>
                <CardDescription className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">
                  Langages en Parallèle
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-lg hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader>
                <div className="text-center mb-4">
                  <Users className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  3
                </CardTitle>
                <CardDescription className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">
                  Analogies Pédagogiques
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Section Analogies */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Prérequis Pédagogiques - Analogies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/analogie-cuisine" className="block">
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 cursor-pointer group border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <ChefHat className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis">
                        Le Grand Livre de Cuisine du Dev Moderne
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">
                        Recettes (algorithmes), ingrédients (variables),
                        techniques (patterns)
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col h-full justify-center">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-center">
                    Comprendre la programmation comme un art culinaire : des
                    recettes (algorithmes), des ingrédients (variables), et des
                    techniques (patterns) qui s'assemblent pour créer des
                    applications délicieuses.
                  </p>
                  <div className="flex items-center justify-end text-blue-600 group-hover:text-blue-700 font-semibold group-hover:scale-105 transition-all duration-300 pt-4 border-t border-blue-200">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/analogie-architecture" className="block">
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 cursor-pointer group border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <Building2 className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                        L'Architecte du Bâtiment dans le Développement
                      </CardTitle>
                      <CardDescription className="text-base font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">
                        Plans (design), fondations (fondamentaux), étages
                        (couches)
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col h-full justify-center">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-center">
                    Concevoir des applications comme des bâtiments : des plans
                    (design), des fondations solides (fondamentaux), et des
                    étages bien structurés (couches) pour des constructions
                    durables.
                  </p>
                  <div className="flex items-center justify-end text-blue-600 group-hover:text-blue-700 font-semibold group-hover:scale-105 transition-all duration-300 pt-4 border-t border-blue-200">
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Section Concepts Fondamentaux */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🎯 Les Concepts Fondamentaux
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Les bases essentielles pour maîtriser la programmation
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Concept 1 : Algorithmie */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl h-full">
              <CardHeader className="text-center">
                <div className="text-center mb-6">
                  <Code className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  💻 Algorithmie
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Les bases de la programmation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link
                    href="/fondamentaux/cours-1"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 1 : Variables
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/cours-2"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 2 : Types de données
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/cours-3"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 3 : Structures de contrôle
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/cours-4"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 4 : Collections avancées
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/cours-5"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 5 : Fonctions de haut niveau
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </div>
                <div className="flex items-center justify-end text-blue-600 group-hover:text-blue-700 font-semibold group-hover:scale-105 transition-all duration-300 pt-4 border-t border-blue-200">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>

            {/* Concept 2 : Scope & Closures */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl h-full">
              <CardHeader className="text-center">
                <div className="text-center mb-6">
                  <Brain className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  🧠 Scope & Closures
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Concepts avancés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link
                    href="/fondamentaux/cours-6"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 6 : Scope & Closures
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/cours-7"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 7 : Scope fonction et bloc
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/cours-8"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 8 : Hoisting et TDZ
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/cours-9"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 9 : Chaînes de scope
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/cours-10"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 10 : Fonctions imbriquées
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </div>
                <div className="flex items-center justify-end text-blue-600 group-hover:text-blue-700 font-semibold group-hover:scale-105 transition-all duration-300 pt-4 border-t border-blue-200">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>

            {/* Concept 3 : Gestion d'état */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl h-full">
              <CardHeader className="text-center">
                <div className="text-center mb-6">
                  <Users className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  ⚡ Gestion d'État
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Programmation moderne
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link
                    href="/fondamentaux/cours-11"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 11 : Gestion d'état
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/cours-12"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 12 : Gestion d'erreurs
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/cours-13"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 13 : POO
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/cours-14"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 14 : Modules
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                  <Link
                    href="/fondamentaux/cours-15"
                    className="course-button group"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        Cours 15 : Tests
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </div>
                <div className="flex items-center justify-end text-blue-600 group-hover:text-blue-700 font-semibold group-hover:scale-105 transition-all duration-300 pt-4 border-t border-blue-200">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section Graphiques de Progression */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Suivi de Progression
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProgressChart
              title="Progression des Concepts"
              description="Avancement sur les 3 concepts fondamentaux"
              data={conceptsData}
              total={15}
              percentage={70}
              trend="Progression de 70% ce mois"
              subtitle="Suivi des 3 concepts fondamentaux sur 15 cours"
            />

            <ProgressChart
              title="Progression des Langages"
              description="Maîtrise des 3 langages en parallèle"
              data={langagesData}
              total={15}
              percentage={75}
              trend="Progression de 75% ce mois"
              subtitle="Apprentissage simultané Python, JavaScript et TypeScript"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
