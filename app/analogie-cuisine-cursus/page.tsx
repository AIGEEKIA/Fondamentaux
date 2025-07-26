"use client"

import { BookOpen, ChefHat, ArrowRight, Utensils, Users, Brain, Code, Database, Cloud, Package, Target, GraduationCap, Lightbulb, Play, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalogieCuisineCursusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Super Header Bandeau */}
      <header className="bg-gradient-to-r from-orange-600 via-red-700 to-yellow-800 text-white py-8 shadow-2xl relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center relative">
            <h1 className="text-6xl font-black text-white mb-2 tracking-tight drop-shadow-lg relative overflow-hidden">
              📚 LE CURSUS COMPLET
            </h1>
            <h2 className="text-4xl font-bold text-orange-100 mb-2">
              DE L'ACADÉMIE CULINAIRE DU CODE
            </h2>
            <p className="text-2xl font-bold text-orange-200 max-w-4xl mx-auto">
              🎓 DE LA MISE EN PLACE AU GRAND EXAMEN 🎓
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
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">📝 COURS N°1 - LA MISE EN PLACE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🔪 COURS N°2 - LE COUP DE MAIN</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">👨‍🍳 COURS N°3 - LE PREMIER POSTE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🎯 COURS N°4 - LE CHEF DE PARTIE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🏆 LE GRAND EXAMEN FINAL</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🌟 DEVENIR UN VRAI CHEF</span>
                {/* Duplicated messages for continuous scroll */}
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">📝 COURS N°1 - LA MISE EN PLACE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🔪 COURS N°2 - LE COUP DE MAIN</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">👨‍🍳 COURS N°3 - LE PREMIER POSTE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🎯 COURS N°4 - LE CHEF DE PARTIE</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🏆 LE GRAND EXAMEN FINAL</span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">🌟 DEVENIR UN VRAI CHEF</span>
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
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">Bienvenue à l'Académie Culinaire du Code</CardTitle>
              <CardDescription className="text-lg text-gray-600 italic">
                Vous êtes l'unique apprenti, et je serai votre Chef Instructeur. Chaque leçon vous fera passer d'un simple commis à un Chef de partie, puis à un Chef capable de diriger sa propre cuisine.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6">
                Votre commis IA est à vos côtés, prêt à exécuter vos ordres. Enfilez votre tablier. Commençons.
              </p>
              <p className="font-semibold text-orange-700 text-center">
                Chaque cours vous fera gravir un échelon vers la maîtrise complète de l'art culinaire du code.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Cours n°1 : La Mise en Place */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            📝 Cours n°1 : La Mise en Place - L'Art de Préparer son Plan de Travail
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            "Apprenti, avant de toucher à une seule casserole, un Chef prépare son plan de travail. 
            C'est la mise en place. Chaque ingrédient est pesé, mesuré, et placé dans un bol étiqueté."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">Les Bols Étiquetés</CardTitle>
                    <CardDescription className="text-orange-600">Variables</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Vous prenez un bol vide et vous y collez une étiquette : "sucre". C'est votre variable. Son nom est `sucre`.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">La Nature de l'Ingrédient</CardTitle>
                    <CardDescription className="text-orange-600">Types de Données</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Ce que vous mettez dans le bol a une nature. Est-ce une poudre (`integer`), un liquide (`float`), 
                  quelques mots (`string`), ou juste un 'oui/non' (`boolean`) ?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">La Balance de Précision</CardTitle>
                    <CardDescription className="text-orange-600">Opérateurs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Les outils pour transformer vos ingrédients : additionner, soustraire, comparer les poids...
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-2 border-orange-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-800">🔪 L'Ordre du Chef à son Commis IA</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="mb-4">
                "Commis, prépare mon plan de travail pour la recette du jour. Je veux une organisation parfaite.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>Le Sucre :</strong> Prends un bol, étiquette-le `quantite_sucre` et mets-y `150` grammes (un nombre entier).</li>
                <li><strong>L'Extrait de Vanille :</strong> Prends une fiole, étiquette-la `extrait_vanille_litres` et mets-y `0.01` litre (un nombre décimal).</li>
                <li><strong>Le Nom du Plat :</strong> Prends une ardoise, étiquette-la `nom_du_gateau` et écris dessus `"Le Fondant Suprême"` (du texte).</li>
                <li><strong>La Vérification :</strong> Prends un mémo, étiquette-le `est_un_dessert` et écris juste `True` (une simple confirmation).</li>
                <li><strong>Maintenant, fais l'inventaire !</strong> Affiche le contenu de chaque conteneur, et surtout, dis-moi la nature (le type) de chaque ingrédient pour que je sois sûr que tu ne t'es pas trompé."</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Cours n°2 : Le Coup de Main */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🔪 Cours n°2 : Le Coup de Main - Suivre (et Écrire) les Étapes de la Recette
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            "Une recette n'est pas qu'une liste d'ingrédients. C'est une séquence d'actions et de décisions. 
            Un bon cuisinier sait lire ces instructions. Un Chef sait les écrire."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">Les Points de Décision</CardTitle>
                    <CardDescription className="text-orange-600">Conditions (if/else)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  "Si le gâteau n'est pas assez doré, laissez-le 5 minutes de plus. Sinon, sortez-le du four."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">Les Tâches Répétitives</CardTitle>
                    <CardDescription className="text-orange-600">Boucles (for/while)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  "Pour chacune des 5 pommes de terre, épluchez-la." (Boucle `for`). 
                  "Fouettez les blancs en neige tant qu'ils ne sont pas fermes." (Boucle `while`).
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-2 border-orange-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-800">🔪 L'Ordre du Chef à son Commis IA</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="mb-4">
                "Commis, nous devons prendre des décisions pour notre 'Gâteau au Chocolat'.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Déclare une variable `temps_de_cuisson` et mets-y la valeur `35`.</li>
                <li>Écris une condition :
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Si le `temps_de_cuisson` est inférieur à 30, affiche "Le gâteau n'est pas encore assez cuit !"</li>
                    <li>• Sinon si le `temps_de_cuisson` est exactement égal à 30, affiche "Le gâteau est parfait !"</li>
                    <li>• Sinon (s'il est supérieur à 30), affiche "Attention, le gâteau est peut-être trop cuit !"</li>
                  </ul>
                </li>
                <li>Maintenant, déclare deux variables booléennes : `a_du_chocolat = True` et `a_de_la_farine = True`. Écris une condition qui affiche "Nous pouvons faire le gâteau !" uniquement si les deux variables sont vraies.</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Cours n°3 : Le Premier Poste */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            👨‍🍳 Cours n°3 : Le Premier Poste - Créer sa Première Recette Réutilisable
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            "Vous savez maintenant suivre une recette. Il est temps d'en créer une. Une bonne recette est autonome, 
            fiable et réutilisable. C'est votre premier poste de travail. En cuisine, on appelle ça une fonction."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">La Recette Fiche</CardTitle>
                    <CardDescription className="text-orange-600">Fonction</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  C'est une fiche qui décrit une tâche complète. Ex: "Recette de la Vinaigrette".
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">Les Ingrédients Nécessaires</CardTitle>
                    <CardDescription className="text-orange-600">Paramètres / Arguments</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  La fiche précise ce dont vous avez besoin : "Huile, Vinaigre, Sel". Ce sont les paramètres.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-2 border-orange-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-800">🔪 L'Ordre du Chef à son Commis IA</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="mb-4">
                "Commis, nous allons standardiser une tâche.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Crée une fonction nommée `preparer_vinaigrette`.</li>
                <li>Elle doit accepter trois paramètres : `huile`, `vinaigre`, `moutarde`.</li>
                <li>À l'intérieur, elle doit créer une variable locale `melange` qui combine les ingrédients.</li>
                <li>Finalement, elle doit retourner la phrase : `Vinaigrette prête avec [huile], [vinaigre] et [moutarde] !`</li>
                <li>Maintenant, utilise cette fonction pour me préparer une vinaigrette avec 'olive', 'balsamique' et 'dijon'."</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Cours n°4 : Le Chef de Partie */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🎯 Cours n°4 : Le Chef de Partie - Spécialisation et Organisation
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            "Une grande cuisine est organisée en postes spécialisés : le saucier, le pâtissier, le garde-manger... 
            Chaque 'Chef de Partie' a son propre livre de recettes. C'est un expert."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <ChefHat className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">Le Plan du Poste</CardTitle>
                    <CardDescription className="text-orange-600">Classe</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Le plan d'architecte pour un "Poste de Pâtisserie". Il définit ce qu'un pâtissier a et ce qu'il sait faire.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">L'Expert à son Poste</CardTitle>
                    <CardDescription className="text-orange-600">Objet (Instance)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  "Chef Pierre" au poste de pâtisserie. Il est une instance réelle du plan. Il a ses propres ingrédients 
                  (`attributs`) et ses propres compétences (`méthodes`).
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-2 border-orange-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-800">🔪 L'Ordre du Chef à son Commis IA</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="mb-4">
                "Commis, nous avons besoin d'un spécialiste.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Crée le plan (la `class`) pour un `Patissier`.</li>
                <li>Lorsqu'on embauche un pâtissier (méthode `__init__`), il doit avoir un `nom` et un stock de `farine` initial.</li>
                <li>Donne-lui une compétence (une `méthode`) appelée `faire_un_gateau`. Cette méthode doit utiliser 250g de sa farine et afficher "Le Chef [nom] a fait un gâteau ! Il reste [stock]g de farine."</li>
                <li>Maintenant, embauche deux pâtissiers : `pierre = Patissier("Pierre", 1000)` et `marie = Patissier("Marie", 1200)`.</li>
                <li>Demande à Pierre de faire un gâteau."</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Le Grand Examen */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🏆 Le Grand Examen : Le Dîner Complet
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            "Apprenti, vous avez appris les bases, organisé votre poste et vous vous êtes spécialisé. 
            Il est temps de tout rassembler. Vous allez diriger la préparation d'un dîner complet. Vous êtes le Chef."
          </p>
          
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-2 border-orange-300/50 shadow-xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-800">Le Projet : Un Mini-Livre de Recettes Numérique</CardTitle>
                  <CardDescription className="text-orange-600">
                    Vous allez créer un programme simple qui permet de gérer une collection de recettes.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="mb-4">
                "Commis, ce soir, c'est le grand soir. Voici le plan d'action :
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>Le Plan de la Recette (`class Recette`) :</strong> Crée une classe `Recette`. Chaque recette doit avoir un `nom`, une liste d'`ingredients`, et une `duree_preparation`.</li>
                <li><strong>Le Livre de Cuisine (`class LivreDeCuisine`) :</strong> Crée une classe `LivreDeCuisine`. Ce livre aura une liste de recettes. Donne-lui deux compétences (méthodes) :
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• `ajouter_recette(recette)` : Pour ajouter un objet `Recette` au livre.</li>
                    <li>• `afficher_recettes()` : Pour parcourir toutes les recettes du livre et afficher leur nom et leur durée.</li>
                  </ul>
                </li>
                <li><strong>La Mise en Place :</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Crée deux objets `Recette` : un "Gâteau au Yaourt" (ingrédients : yaourt, farine, sucre ; durée : 45 min) et une "Salade César" (ingrédients : salade, poulet, croûtons ; durée : 20 min).</li>
                    <li>• Crée un objet `LivreDeCuisine` appelé `mon_livre`.</li>
                  </ul>
                </li>
                <li><strong>L'Exécution :</strong>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>• Ajoute les deux recettes que tu as créées dans `mon_livre`.</li>
                    <li>• Appelle la méthode pour afficher toutes les recettes du livre.</li>
                  </ul>
                </li>
              </ol>
              <p className="mt-6 text-center font-bold text-orange-800">
                Exécution !
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Navigation vers les autres pages */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/analogie-cuisine-avancee" className="group">
              <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
                        🧮 Les Principes Avancés
                      </CardTitle>
                      <CardDescription className="text-orange-600">
                        Les Quatre Piliers de la Pensée d'un Chef
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Découvrez les concepts avancés : Algorithmie, Scope, Closures et Gestion d'État. 
                    Les fondements qui distinguent un commis d'un véritable Chef.
                  </p>
                  <span className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold transition-colors">
                    Voir les principes avancés <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </a>

            <a href="/analogie-cuisine-mentor" className="group">
              <Card className="hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-orange-300/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 shadow-xl hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Lightbulb className="h-6 w-6 text-white" />
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