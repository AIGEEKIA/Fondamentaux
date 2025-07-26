"use client"

import { BookOpen, Code, Brain, Users, ArrowRight, ChefHat, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressChart } from "@/components/progress-chart"

export default function FormationPage() {
  // Données de progression pour les 4 concepts fondamentaux
  const conceptsData = [
    { name: "Algorithmie", value: 25, fill: "var(--chart-1)" },
    { name: "Scope", value: 20, fill: "var(--chart-2)" },
    { name: "Closure", value: 15, fill: "var(--chart-3)" },
    { name: "Gestion d'état", value: 10, fill: "var(--chart-4)" },
  ]

  // Données de progression pour les langages
  const langagesData = [
    { name: "Python", value: 30, fill: "var(--chart-1)" },
    { name: "JavaScript", value: 25, fill: "var(--chart-2)" },
    { name: "TypeScript", value: 20, fill: "var(--chart-3)" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      {/* Super Header Bandeau */}
              <header className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 text-white py-8 shadow-2xl relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center relative">

              
              <h1 className="text-6xl font-black text-white mb-2 tracking-tight drop-shadow-lg relative overflow-hidden">
                FORMATION DEV CODEUR IA
                <div className="lightning-effect animate-lightning"></div>
              </h1>
              <h2 className="text-4xl font-bold text-blue-100 mb-2">
                LES FONDAMENTAUX INDISPENSABLES
              </h2>
              <p className="text-2xl font-bold text-blue-200 max-w-4xl mx-auto">
                ⚡ ZERO À HÉROS EN 1 MOIS ⚡
              </p>
            </div>
          </div>
        </header>

      <main className="container mx-auto px-4 py-8">
        {/* Super Bandeau Motivant */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200/50 shadow-md rounded-3xl overflow-hidden">
            <div className="animate-scroll flex space-x-12 whitespace-nowrap">
              <div className="flex items-center space-x-12">
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">🚀 TRANSFORME TA CARRIÈRE EN 30 JOURS</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">⚡ DE ZÉRO À HÉROS - GARANTIE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">💎 LES FONDAMENTAUX QUI CHANGENT TOUT</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">🎯 1H/JOUR = COMPÉTENCES PRO</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">🔥 MAÎTRISE LE CODE COMME UN PRO</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">🌟 RÉVOLUTIONNE TON AVENIR TECH</span>
                {/* Duplicated messages for continuous scroll */}
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">🚀 TRANSFORME TA CARRIÈRE EN 30 JOURS</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">⚡ DE ZÉRO À HÉROS - GARANTIE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">💎 LES FONDAMENTAUX QUI CHANGENT TOUT</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">🎯 1H/JOUR = COMPÉTENCES PRO</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">🔥 MAÎTRISE LE CODE COMME UN PRO</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">🌟 RÉVOLUTIONNE TON AVENIR TECH</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Statistiques */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-lg hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                  <BookOpen className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">37</CardTitle>
                <CardDescription className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Cours Fondamentaux</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-lg hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                  <Brain className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">4</CardTitle>
                <CardDescription className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Concepts Fondamentaux</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-lg hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                  <Code className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">3</CardTitle>
                <CardDescription className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Langages en Parallèle</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-lg hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                  <Users className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">2</CardTitle>
                <CardDescription className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300">Analogies Pédagogiques</CardDescription>
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
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 cursor-pointer group border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                    <ChefHat className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Le Grand Livre de Cuisine du Développeur Moderne</CardTitle>
                    <CardDescription className="text-base font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                      Recettes (algorithmes), ingrédients (variables), techniques (patterns)
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Comprendre la programmation comme un art culinaire : des recettes (algorithmes), 
                  des ingrédients (variables), et des techniques (patterns) qui s'assemblent 
                  pour créer des applications délicieuses.
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-semibold group-hover:scale-105 transition-all duration-300">
                  <span>Explorer l'analogie</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 cursor-pointer group border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                    <Building2 className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">L'Architecte du Bâtiment dans le Développement</CardTitle>
                    <CardDescription className="text-base font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                      Plans (design), fondations (fondamentaux), étages (couches)
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Concevoir des applications comme des bâtiments : des plans (design), 
                  des fondations solides (fondamentaux), et des étages bien structurés (couches) 
                  pour des constructions durables.
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-semibold group-hover:scale-105 transition-all duration-300">
                  <span>Explorer l'analogie</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4 Concepts Fondamentaux */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Les 4 Concepts Fondamentaux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                  <Code className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Algorithmie</CardTitle>
                <CardDescription className="text-base font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                  Variables, structures de contrôle, boucles, algorithmes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                  <Brain className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Scope</CardTitle>
                <CardDescription className="text-base font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                  Portée des variables, gestion des accès
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                  <BookOpen className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Closure</CardTitle>
                <CardDescription className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                  Fonctions imbriquées, captures de variables
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                  <Users className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Gestion d'état</CardTitle>
                <CardDescription className="text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                  État global/local, programmation asynchrone
                </CardDescription>
              </CardHeader>
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
              description="Avancement sur les 4 concepts fondamentaux"
              data={conceptsData}
              total={37}
              percentage={70}
              trend="Progression de 70% ce mois"
              subtitle="Suivi des 4 concepts fondamentaux sur 37 cours"
            />

            <ProgressChart
              title="Progression des Langages"
              description="Maîtrise des 3 langages en parallèle"
              data={langagesData}
              total={37}
              percentage={75}
              trend="Progression de 75% ce mois"
              subtitle="Apprentissage simultané Python, JavaScript et TypeScript"
            />
          </div>
        </section>


      </main>
    </div>
  )
} 