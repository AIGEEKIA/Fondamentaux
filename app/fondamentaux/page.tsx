"use client"

import { useState } from "react"
import { Brain, Code, Database, Cloud, Home, Menu, X, BookOpen, ChefHat, ArrowRight, CheckCircle, Play, Target, Lightbulb, Users, GraduationCap, Package, Shield, Wrench, Hammer, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function FondamentauxPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Super Header Bandeau */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-800 text-white py-8 shadow-2xl z-40 overflow-hidden rounded-3xl mx-4 mt-4">
        <div className="container mx-auto px-4">
          {/* Logo AIGEEKIA dans le header - Haut droite */}
          <div className="absolute top-6 right-12 z-10">
            <Link href="/" className="block hover:scale-110 transition-all duration-300">
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
            <span className="text-white/80 font-medium text-xs italic">By AIGEEKIA</span>
          </div>
          
          <div className="text-center relative">
            <h1 className="text-6xl font-black text-white mb-2 tracking-tight drop-shadow-lg relative overflow-hidden">
              🚀 FORMATION DEV CODEUR IA
            </h1>
            <h2 className="text-4xl font-bold text-purple-100 mb-2">
              LES FONDAMENTAUX INDISPENSABLES
            </h2>
            <p className="text-2xl font-bold text-purple-200 max-w-4xl mx-auto">
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
          className="flex items-center justify-center w-12 h-12 bg-purple-600/90 backdrop-blur-sm rounded-full hover:bg-purple-700/90 transition-all duration-300 hover:scale-110 shadow-xl border border-purple-500/50"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
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
                <BookOpen className="h-4 w-4" />
                <span className="font-medium">L'Architecte</span>
              </Link>
            </div>
          </div>
        )}
      </div>
      
      <main className="container mx-auto px-4 py-8 mt-32">
        {/* Super Bandeau Motivant */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 border-2 border-purple-200/50 shadow-md rounded-3xl overflow-hidden">
            <div className="animate-scroll flex space-x-12 whitespace-nowrap">
              <div className="flex items-center space-x-12">
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">🧠 37 LEÇONS FONDAMENTALES</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">🎯 4 CONCEPTS MAJEURS</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">🚀 MAÎTRISE COMPLÈTE DE LA PROGRAMMATION</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">🌟 DEVENIR EXPERT QUI DIRIGE L'IA</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">💡 TRANSFORMER VOTRE CARRIÈRE</span>
                {/* Duplicated messages for continuous scroll */}
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">🧠 37 LEÇONS FONDAMENTALES</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">🎯 4 CONCEPTS MAJEURS</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">🚀 MAÎTRISE COMPLÈTE DE LA PROGRAMMATION</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">🌟 DEVENIR EXPERT QUI DIRIGE L'IA</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1">💡 TRANSFORMER VOTRE CARRIÈRE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 border-2 border-purple-300/50 shadow-xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">Les 4 Concepts Fondamentaux</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Découvrez les 37 leçons organisées autour de 4 concepts majeurs pour maîtriser la programmation et diriger l'IA.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6">
                Cette formation vous donne les clés pour maîtriser la programmation et mieux diriger l'IA dans la création de code. 
                Avec 37 leçons pratiques, vous deviendrez un expert qui contrôle l'IA plutôt que de la subir.
              </p>
              <p className="font-semibold text-purple-700 text-center">
                Chaque concept vous arme pour créer du code de qualité avec l'aide de l'IA.
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
            Chaque concept regroupe plusieurs leçons pour une progression optimale
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Concept 1 : Algorithmie */}
            <Card className="hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-purple-300/50 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">💻 Algorithmie</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Variables, structures de contrôle, boucles, algorithmes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Variables et types de données</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Structures conditionnelles</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Boucles et itérations</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Fonctions et méthodes</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Récursivité</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Complexité algorithmique</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Structures de données</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Algorithmes de tri et recherche</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Optimisation et performance</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-purple-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-semibold">9 leçons</span>
                    <Link 
                      href="/fondamentaux/algorithms" 
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                    >
                      <span>Explorer</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Concept 2 : Scope */}
            <Card className="hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-purple-300/50 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">🧠 Scope</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Portée des variables, gestion des accès
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Variables locales et globales</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Portée des fonctions</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Blocs et scope de bloc</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Hoisting et temporal dead zone</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Contextes d'exécution</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Chaînes de scope</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Gestion des namespaces</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Isolation des variables</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Patterns de scope</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-purple-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-semibold">9 leçons</span>
                    <Link 
                      href="/fondamentaux/ia" 
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                    >
                      <span>Explorer</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Concept 3 : Closure */}
            <Card className="hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-purple-300/50 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">📚 Closure</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Fonctions imbriquées, captures de variables
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Fonctions imbriquées</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Capture de variables</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Lexical scoping</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Factory functions</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Module pattern</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Currying et partial application</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Mémoisation avec closures</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Callbacks et callbacks</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Event handlers</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-purple-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-semibold">9 leçons</span>
                    <Link 
                      href="/fondamentaux/web" 
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                    >
                      <span>Explorer</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Concept 4 : Gestion d'état */}
            <Card className="hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-purple-300/50 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">👥 Gestion d'état</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  État global/local, programmation asynchrone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>État local vs global</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Programmation asynchrone</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Promises et async/await</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Gestion des erreurs</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>State management patterns</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Flux unidirectionnel</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Immutabilité</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Side effects</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Timeouts et intervals</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-purple-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-semibold">9 leçons</span>
                    <Link 
                      href="/fondamentaux/outils" 
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
          <Card className="bg-gradient-to-br from-purple-500/20 to-indigo-600/20 border-2 border-purple-300/50 shadow-xl">
            <CardContent className="text-center py-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                🚀 Prêt à maîtriser l'Intelligence Artificielle ?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Commencez votre parcours avec les 37 leçons fondamentales organisées en 4 concepts majeurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/fondamentaux/algorithms" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Play className="h-5 w-5" />
                  <span>Commencer la Formation</span>
                </Link>
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-3 bg-white text-purple-600 border-2 border-purple-300 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg"
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
  )
} 