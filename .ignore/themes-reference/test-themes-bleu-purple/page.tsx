"use client";

import { useState } from "react";
import {
  BookOpen,
  Brain,
  Code,
  ChefHat,
  Building2,
  ArrowRight,
  Menu,
  X,
  Home,
  GraduationCap,
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

export default function TestThemesBleuPurplePage() {
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
              🎨 THÈME BLEU-PURPLE
            </h1>
            <h2 className="text-3xl font-semibold text-purple-100 mb-2">
              VERSION ORIGINALE ÉLÉGANTE
            </h2>
            <p className="text-xl font-medium text-purple-200 max-w-4xl mx-auto">
              🌈 DÉGRADÉ BLEU-VIOLET PROFESSIONNEL 🌈
            </p>
          </div>
        </div>
      </header>

      {/* Menu hamburger en dehors du header - Aligné sur le même axe X */}
      <div className="fixed top-28 right-16 z-50 flex flex-col items-center gap-2">
        {/* Menu hamburger */}
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

        {/* Menu déroulant */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-purple-200/50 min-w-48 z-10">
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
                <Building2 className="h-4 w-4" />
                <span className="font-medium">L'Architecte</span>
              </Link>
              <Link
                href="/fondamentaux"
                className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Brain className="h-4 w-4" />
                <span className="font-medium">Les Fondamentaux</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-1"
                className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-4 w-4" />
                <span className="font-medium">Cours 1 : Variables</span>
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
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  🎨 THÈME BLEU-PURPLE ÉLÉGANT
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  🌈 DÉGRADÉ PROFESSIONNEL
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  ✨ VERSION ORIGINALE
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  🎯 DESIGN SOPHISTIQUÉ
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  🌟 ÉLÉGANCE ET PROFESSIONNALISME
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  💎 COULEURS HARMONIEUSES
                </span>
                {/* Duplicated messages for continuous scroll */}
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  🎨 THÈME BLEU-PURPLE ÉLÉGANT
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  🌈 DÉGRADÉ PROFESSIONNEL
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  ✨ VERSION ORIGINALE
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  🎯 DESIGN SOPHISTIQUÉ
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  🌟 ÉLÉGANCE ET PROFESSIONNALISME
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  💎 COULEURS HARMONIEUSES
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction du Thème */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-2 border-blue-300/50 shadow-xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                Thème Bleu-Purple Original
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Le thème élégant avec dégradé bleu-violet qui était utilisé à
                l'origine
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6">
                Ce thème utilise un dégradé sophistiqué du bleu au violet,
                créant une ambiance professionnelle et moderne. Les couleurs se
                mélangent harmonieusement pour créer un design élégant et
                sophistiqué.
              </p>
              <p className="mb-6">
                <strong>Caractéristiques du thème :</strong>
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>
                  • <strong>Background :</strong> Dégradé bleu-indigo-violet
                </li>
                <li>
                  • <strong>Header :</strong> Dégradé bleu-indigo-violet avec
                  transparence
                </li>
                <li>
                  • <strong>Accents :</strong> Couleurs purple pour les éléments
                  interactifs
                </li>
                <li>
                  • <strong>Ambiance :</strong> Élégante et professionnelle
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Cartes de Démonstration */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🎨 Cartes de Démonstration
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Exemples de cartes avec le thème bleu-purple
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Carte 1 */}
            <Card className="hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-purple-600/10 shadow-xl hover:border-purple-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/20 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                  Intelligence Artificielle
                </CardTitle>
                <CardDescription className="text-purple-600 font-semibold">
                  Technologies Avancées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Exploration des technologies d'IA et de machine learning pour
                  le développement moderne.
                </p>
              </CardContent>
            </Card>

            {/* Carte 2 */}
            <Card className="hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-purple-600/10 shadow-xl hover:border-purple-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/20 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                  Développement Web
                </CardTitle>
                <CardDescription className="text-purple-600 font-semibold">
                  Technologies Modernes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Maîtrise des frameworks modernes et des bonnes pratiques de
                  développement.
                </p>
              </CardContent>
            </Card>

            {/* Carte 3 */}
            <Card className="hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-purple-600/10 shadow-xl hover:border-purple-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/20 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <ChefHat className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                  Analogie Culinaire
                </CardTitle>
                <CardDescription className="text-purple-600 font-semibold">
                  Apprentissage Créatif
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Approche pédagogique innovante utilisant les analogies
                  culinaires.
                </p>
              </CardContent>
            </Card>

            {/* Carte 4 */}
            <Card className="hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-purple-600/10 shadow-xl hover:border-purple-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/20 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                  Architecture Logicielle
                </CardTitle>
                <CardDescription className="text-purple-600 font-semibold">
                  Design Patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Conception d'applications robustes et évolutives avec les
                  meilleures pratiques.
                </p>
              </CardContent>
            </Card>

            {/* Carte 5 */}
            <Card className="hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-purple-600/10 shadow-xl hover:border-purple-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/20 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                  Formation Complète
                </CardTitle>
                <CardDescription className="text-purple-600 font-semibold">
                  Parcours d'Apprentissage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Programme structuré pour maîtriser tous les aspects du
                  développement moderne.
                </p>
              </CardContent>
            </Card>

            {/* Carte 6 */}
            <Card className="hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-purple-600/10 shadow-xl hover:border-purple-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-600/20 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                  Progression Continue
                </CardTitle>
                <CardDescription className="text-purple-600 font-semibold">
                  Évolution Constante
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Suivi de progression et développement continu des compétences.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3">
            <h3 className="text-3xl font-bold mb-4">
              Thème Bleu-Purple Sauvegardé !
            </h3>
            <p className="text-xl mb-6">
              Ce thème élégant avec dégradé bleu-violet est maintenant
              sauvegardé pour référence future. Il offre une alternative
              sophistiquée au thème bleu uniforme.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/"
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Retour à l'Accueil
              </Link>
              <Link
                href="/test-themes"
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Voir Autres Thèmes
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
