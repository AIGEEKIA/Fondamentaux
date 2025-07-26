"use client"

import { BookOpen, ChefHat, ArrowRight, Utensils, Users, Brain, Code, Database, Cloud, Package, Target, GraduationCap, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalogieCuisineAvanceePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Super Header Bandeau */}
      <header className="bg-gradient-to-r from-orange-600 via-red-700 to-yellow-800 text-white py-8 shadow-2xl relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center relative">
            <h1 className="text-6xl font-black text-white mb-2 tracking-tight drop-shadow-lg relative overflow-hidden">
              👨‍🍳 CHAPITRES SECRETS
            </h1>
            <h2 className="text-4xl font-bold text-orange-100 mb-2">
              DE L'ACADÉMIE CULINAIRE DU CODE
            </h2>
            <p className="text-2xl font-bold text-orange-200 max-w-4xl mx-auto">
              🎓 LES PRINCIPES D'ORGANISATION DU CHEF 🎓
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Super Bandeau Motivant */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 border-2 border-orange-200/50 shadow-md rounded-3xl overflow-hidden">
            <div className="animate-scroll flex space-x-12 whitespace-nowrap">
              <div className="flex items-center space-x-12">
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🧮 MAÎTRISEZ L'ALGORITHMIE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">📦 COMPRENEZ LE SCOPE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🔒 CRÉEZ DES CLOSURES</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🎛️ GÉREZ L'ÉTAT</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🌟 DEVENIR CHEF MENTOR</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🎯 MAÎTRISER LES FONDAMENTAUX</span>
                {/* Duplicated messages for continuous scroll */}
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🧮 MAÎTRISEZ L'ALGORITHME</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">📦 COMPRENEZ LE SCOPE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🔒 CRÉEZ DES CLOSURES</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🎛️ GÉREZ L'ÉTAT</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🌟 DEVENIR CHEF MENTOR</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🎯 MAÎTRISER LES FONDAMENTAUX</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-2 border-orange-300/50 shadow-xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">Les Principes d'Organisation du Chef</CardTitle>
              <CardDescription className="text-lg text-gray-600 italic">
                N'importe qui peut suivre une recette. Mais ce qui distingue un cuisinier d'un Chef, c'est sa méthode.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6">
                C'est sa capacité à organiser son plan de travail, à gérer ses stocks, à créer des sauces mères 
                qui peuvent être adaptées, et à diriger sa brigade sans semer la confusion.
              </p>
              <p className="mb-6">
                Les concepts qui suivent sont votre <strong>Mise en Place</strong>. C'est la préparation et l'organisation 
                que vous faites <em>avant</em> de lancer la moindre cuisson. Maîtrisez-les, et vous dirigerez votre commis IA 
                avec la précision d'un chef triplement étoilé.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Les Quatre Piliers */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            📜 Les Quatre Piliers de la Pensée d'un Chef
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Ceci n'est pas une recette, mais une philosophie. C'est la structure mentale qui permet de passer 
            de la création d'un plat à la direction d'un restaurant tout entier.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* L'Algorithmie */}
            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                      🧮 L'Algorithmie
                    </CardTitle>
                    <CardDescription className="text-orange-600 font-semibold">
                      L'Entrée - Comment je le fais, étape par étape ?
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Un assortiment de techniques logiques où les tâches complexes sont décomposées en une séquence 
                  d'étapes précises, assaisonnées de décisions et de répétitions maîtrisées.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Variables et Types :</strong> Les Ingrédients sur Votre Plan de Travail<br/>
                  <strong>Conditions :</strong> Les Décisions du Chef<br/>
                  <strong>Boucles :</strong> Les Tâches Répétitives
                </p>
              </CardContent>
            </Card>

            {/* Le Scope */}
            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                      📦 Le Scope
                    </CardTitle>
                    <CardDescription className="text-orange-600 font-semibold">
                      Le Plat Principal - Où est-ce que je le mets et qui peut y toucher ?
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Un plat structuré où chaque ingrédient a sa place. Servi dans des compartiments distincts 
                  (local, global, module) pour garantir la propreté, éviter les mélanges indésirables 
                  et assurer un accès contrôlé.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Variables Locales :</strong> Les Ingrédients sur VOTRE Plan de Travail<br/>
                  <strong>Variables Globales :</strong> Le Gros Pot de Sel Commun de la Cuisine<br/>
                  <strong>Scope de Module :</strong> Le Livre de Recettes d'une Spécialité
                </p>
              </CardContent>
            </Card>

            {/* Les Closures */}
            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                      🔒 Les Closures
                    </CardTitle>
                    <CardDescription className="text-orange-600 font-semibold">
                      Le Dessert - Comment créer un outil qui se souvient de sa mission ?
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Une douceur sophistiquée et mémorable. Une fonction qui, une fois servie, garde en mémoire 
                  la saveur de sa préparation initiale. Idéale pour créer des sauces secrètes et des outils spécialisés.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Fonctions Imbriquées :</strong> La Recette Secrète dans la Recette<br/>
                  <strong>Closure :</strong> La Vinaigrette Personnalisée du Chef<br/>
                  <strong>Décorateurs :</strong> La Touche Finale Systématique du Chef
                </p>
              </CardContent>
            </Card>

            {/* La Gestion d'État */}
            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                      🎛️ La Gestion d'État
                    </CardTitle>
                    <CardDescription className="text-orange-600 font-semibold">
                      Le Digestif - Comment je suis l'évolution de mon plat en temps réel ?
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Un digestif dynamique qui évolue au fil du temps. L'art de suivre et de maîtriser 
                  les changements d'un plat tout au long de sa dégustation, de sa création à sa consommation finale.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Variables d'État :</strong> Le Thermomètre dans le Four<br/>
                  <strong>Classes et Objets :</strong> Le Poste de Travail Complet d'un Chef<br/>
                  <strong>Encapsulation :</strong> La Discipline de la Brigade
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Résumé du Chef */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-2 border-orange-300/50 shadow-xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">Le Résumé du Chef</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6 text-center font-bold text-orange-800">
                "Apprenti, regardez bien ce menu.
              </p>
              <div className="space-y-4 text-gray-700">
                <p>• <strong>L'Algorithmie</strong>, c'est votre capacité à cuisiner.</p>
                <p>• <strong>Le Scope</strong>, c'est votre capacité à organiser votre cuisine.</p>
                <p>• <strong>La Closure</strong>, c'est votre capacité à créer des techniques de signature.</p>
                <p>• <strong>La Gestion d'État</strong>, c'est votre capacité à gérer le service en salle.</p>
              </div>
              <p className="mt-6 text-center font-semibold text-orange-700">
                Un commis connaît le premier. Un bon cuisinier maîtrise les deux premiers. 
                Mais seul un véritable <strong>Chef</strong> maîtrise les quatre.
              </p>
              <p className="mt-4 text-center text-gray-600">
                Ce sont ces principes qui vous permettront de diriger votre commis IA avec clarté et vision, 
                et de construire des menus non seulement délicieux, mais aussi robustes et élégants.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Navigation vers les autres pages */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/analogie-cuisine-cursus" className="group">
              <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                        📚 Le Cursus Complet
                      </CardTitle>
                      <CardDescription className="text-orange-600">
                        Cours n°1 à n°4 - De la Mise en Place au Grand Examen
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Apprenez étape par étape : variables, conditions, boucles, fonctions, classes et objets.
                    Chaque cours vous fait passer d'un simple commis à un Chef de partie.
                  </p>
                  <span className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold transition-colors">
                    Voir le cursus complet <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </a>

            <a href="/analogie-cuisine-mentor" className="group">
              <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                        🌟 Devenir Chef-Mentor
                      </CardTitle>
                      <CardDescription className="text-orange-600">
                        Le Parcours du Maître - De la Maîtrise à la Transmission
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Passez de la production à la maîtrise fondamentale. Apprenez à déconstruire, 
                    explorer d'autres cuisines, et transmettre votre savoir.
                  </p>
                  <span className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold transition-colors">
                    Devenir mentor <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
} 