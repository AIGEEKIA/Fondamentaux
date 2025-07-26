"use client"

import { BookOpen, ChefHat, ArrowRight, Utensils, Users, Brain, Code, Database, Cloud, Package, Target, GraduationCap, Lightbulb, Globe, PenTool, Users2, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalogieCuisineMentorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Super Header Bandeau */}
      <header className="bg-gradient-to-r from-orange-600 via-red-700 to-yellow-800 text-white py-8 shadow-2xl relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center relative">
            <h1 className="text-6xl font-black text-white mb-2 tracking-tight drop-shadow-lg relative overflow-hidden">
              🌟 LE PARCOURS DU CHEF-MENTOR
            </h1>
            <h2 className="text-4xl font-bold text-orange-100 mb-2">
              DE LA MAÎTRISE À LA TRANSMISSION
            </h2>
            <p className="text-2xl font-bold text-orange-200 max-w-4xl mx-auto">
              🎓 DEVENIR MAÎTRE D'ÉCOLE ET ARCHITECTE 🎓
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
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🎓 DÉCONSTRUIRE LES CLASSIQUES</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🌍 EXPLORER D'AUTRES CUISINES</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">📚 ÉCRIRE LE GRAND LIVRE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🌟 DEVENIR MAÎTRE D'ÉCOLE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🏆 TRANSMETTRE LE SAVOIR</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🎯 CRÉER L'AVENIR</span>
                {/* Duplicated messages for continuous scroll */}
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🎓 DÉCONSTRUIRE LES CLASSIQUES</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🌍 EXPLORER D'AUTRES CUISINES</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">📚 ÉCRIRE LE GRAND LIVRE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🌟 DEVENIR MAÎTRE D'ÉCOLE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🏆 TRANSMETTRE LE SAVOIR</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🎯 CRÉER L'AVENIR</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-2 border-orange-300/50 shadow-xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">Le Parcours du Maître</CardTitle>
              <CardDescription className="text-lg text-gray-600 italic">
                De la maîtrise technique à la transmission du savoir. Le chemin qui transforme un chef en mentor.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6">
                Vous avez maîtrisé les techniques, créé des plats délicieux, et même dirigé une brigade. 
                Maintenant, il est temps de passer à l'étape supérieure : devenir un maître d'école.
              </p>
              <p className="mb-6">
                Ce parcours vous transformera d'un excellent cuisinier en un architecte de la connaissance, 
                capable de transmettre non seulement des recettes, mais une vision complète de l'art culinaire.
              </p>
              <p className="font-semibold text-orange-700">
                Prêt à devenir le mentor de la prochaine génération de chefs ?
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Les Étapes du Mentor */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🎓 Les Quatre Étapes du Parcours Mentor
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Chaque étape vous rapproche de la maîtrise ultime : la capacité à transmettre et à inspirer.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Étape 1 */}
            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <PenTool className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                      🎓 Étape 1 : La Déconstruction des Classiques
                    </CardTitle>
                    <CardDescription className="text-orange-600 font-semibold">
                      Comprendre pourquoi ça marche, pas seulement comment
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Analysez chaque recette classique comme un architecte examine un monument. 
                  Pourquoi cette technique ? Pourquoi cet ordre ? Pourquoi cette température ?
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Objectif :</strong> Comprendre les principes sous-jacents<br/>
                  <strong>Méthode :</strong> Décomposer, analyser, reconstruire<br/>
                  <strong>Résultat :</strong> Maîtrise fondamentale
                </p>
              </CardContent>
            </Card>

            {/* Étape 2 */}
            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                      🌍 Étape 2 : Le Voyage d'Étude
                    </CardTitle>
                    <CardDescription className="text-orange-600 font-semibold">
                      Explorer d'autres cuisines et techniques du monde
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Sortez de votre zone de confort culinaire. Explorez les techniques asiatiques, 
                  les méthodes traditionnelles, les innovations modernes. Chaque cuisine a ses secrets.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Objectif :</strong> Élargir sa palette technique<br/>
                  <strong>Méthode :</strong> Étudier, expérimenter, adapter<br/>
                  <strong>Résultat :</strong> Vision universelle
                </p>
              </CardContent>
            </Card>

            {/* Étape 3 */}
            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                      📚 Étape 3 : L'Écriture du Grand Livre
                    </CardTitle>
                    <CardDescription className="text-orange-600 font-semibold">
                      Documenter et structurer votre savoir pour la transmission
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Transformez votre expérience en savoir transmissible. Créez des guides, 
                  des tutoriels, des explications claires. L'art de la transmission commence ici.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Objectif :</strong> Structurer le savoir<br/>
                  <strong>Méthode :</strong> Écrire, organiser, clarifier<br/>
                  <strong>Résultat :</strong> Savoir transmissible
                </p>
              </CardContent>
            </Card>

            {/* Étape 4 */}
            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Users2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                      🏆 Étape 4 : Le Conseil Final du Maître
                    </CardTitle>
                    <CardDescription className="text-orange-600 font-semibold">
                      Devenir mentor et guider la prochaine génération
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Maintenant, vous êtes prêt à transmettre. Guidez les apprentis, 
                  partagez votre vision, inspirez la prochaine génération de chefs.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Objectif :</strong> Transmettre et inspirer<br/>
                  <strong>Méthode :</strong> Enseigner, guider, inspirer<br/>
                  <strong>Résultat :</strong> Héritage durable
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Le Conseil Final du Maître */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-2 border-orange-300/50 shadow-xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">Le Conseil Final du Maître</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6 text-center font-bold text-orange-800">
                "Mon cher apprenti devenu maître,
              </p>
              <div className="space-y-4 text-gray-700">
                <p>• <strong>La déconstruction</strong> vous a donné la compréhension profonde.</p>
                <p>• <strong>Le voyage d'étude</strong> vous a ouvert l'esprit à l'universel.</p>
                <p>• <strong>L'écriture</strong> vous a appris à structurer et transmettre.</p>
                <p>• <strong>Le mentorat</strong> vous transforme en architecte du savoir.</p>
              </div>
              <p className="mt-6 text-center font-semibold text-orange-700">
                Maintenant, vous n'êtes plus seulement un chef qui cuisine. 
                Vous êtes un <strong>maître d'école</strong> qui inspire et forme.
              </p>
              <p className="mt-4 text-center text-gray-600">
                Votre mission : transmettre non seulement des techniques, mais une vision, 
                une philosophie, un amour de l'art culinaire qui survivra à votre passage.
              </p>
              <p className="mt-6 text-center font-bold text-orange-800">
                Allez, et que votre savoir illumine les cuisines de demain.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Navigation vers les autres pages */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/analogie-cuisine" className="group">
              <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                        📚 Retour aux Fondamentaux
                      </CardTitle>
                      <CardDescription className="text-orange-600">
                        Revoir les bases de la cuisine du développeur
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Revenez aux ingrédients fondamentaux et aux cuisines spécialisées. 
                    Les bases solides sont essentielles pour tout mentor.
                  </p>
                  <span className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold transition-colors">
                    Voir les fondamentaux <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </a>

            <a href="/analogie-cuisine-avancee" className="group">
              <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                        🧮 Les Principes Avancés
                      </CardTitle>
                      <CardDescription className="text-orange-600">
                        Revoir les quatre piliers de la pensée du chef
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Revisitez les chapitres secrets : algorithmie, scope, closures et gestion d'état. 
                    La maîtrise de ces concepts est essentielle pour tout mentor.
                  </p>
                  <span className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold transition-colors">
                    Voir les principes <ArrowRight className="h-4 w-4" />
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