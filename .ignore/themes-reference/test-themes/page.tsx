"use client"

import { useState } from "react"
import { Brain, Code, Database, Cloud, Home, Menu, X, BookOpen, ChefHat, ArrowRight, CheckCircle, Play, Target, Lightbulb, Users, GraduationCap, Package, Shield, Wrench, Hammer, Building2, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function TestThemesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("blue-smooth");

  const themes = {
    "blue-smooth": {
      name: "Bleu Smooth (Accueil)",
      description: "Bleu doux et professionnel - Style actuel",
      bg: "from-blue-100 via-indigo-100 to-purple-100",
      header: "from-blue-500/60 via-indigo-600/60 to-purple-700/60",
      accent: "blue",
      text: "text-purple-100",
      textSecondary: "text-purple-200",
      cardBg: "from-blue-500/10 to-blue-600/10",
      cardBorder: "border-blue-300/50",
      cardShadow: "hover:shadow-blue-500/50",
      cardHover: "hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20",
      iconBg: "from-blue-500 to-blue-600",
      titleSize: "text-4xl",
      subtitleSize: "text-2xl",
      descriptionSize: "text-lg",
      cardTitleSize: "text-2xl",
      cardDescriptionSize: "text-base"
    },
    "orange-cuisine": {
      name: "Orange Cuisine (Original)",
      description: "Orange énergique qui délimite bien les cadres",
      bg: "from-orange-50 via-red-50 to-yellow-50",
      header: "from-orange-500/60 via-red-600/60 to-yellow-700/60",
      accent: "orange",
      text: "text-orange-100",
      textSecondary: "text-orange-200",
      cardBg: "from-orange-500/10 to-red-600/10",
      cardBorder: "border-orange-300/50",
      cardShadow: "hover:shadow-orange-500/50",
      cardHover: "hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-600/20",
      iconBg: "from-orange-500 to-red-600",
      titleSize: "text-4xl",
      subtitleSize: "text-2xl",
      descriptionSize: "text-lg",
      cardTitleSize: "text-2xl",
      cardDescriptionSize: "text-base"
    }
  };

  const currentTheme = themes[selectedTheme as keyof typeof themes];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentTheme.bg}`}>
      {/* Header avec thème dynamique */}
      <header className={`fixed top-0 left-0 right-0 bg-gradient-to-r ${currentTheme.header} text-white py-6 shadow-lg z-40 overflow-hidden rounded-2xl mx-4 mt-4 backdrop-blur-sm`}>
        <div className="container mx-auto px-4">
          {/* Logo AIGEEKIA */}
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
          
          {/* Signature By AIGEEKIA */}
          <div className="absolute bottom-2 right-12 z-10">
            <span className="text-white/80 font-medium text-xs italic">By AIGEEKIA</span>
          </div>
          
          <div className="text-center relative">
            <h1 className={`${currentTheme.titleSize} font-bold text-white mb-2 tracking-tight drop-shadow-md relative overflow-hidden`}>
              🎨 COMPARAISON CADRES CARRÉS
            </h1>
            <h2 className={`${currentTheme.subtitleSize} font-semibold ${currentTheme.text} mb-2`}>
              BLEU SMOOTH VS ORANGE CUISINE
            </h2>
            <p className={`${currentTheme.descriptionSize} font-medium ${currentTheme.textSecondary} max-w-4xl mx-auto`}>
              ⚡ CHOISISSEZ VOTRE COULEUR PRÉFÉRÉE ⚡
            </p>
          </div>
        </div>
      </header>
      
      {/* Menu hamburger */}
      <div className="fixed top-28 right-16 z-50 flex flex-col items-center gap-2">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex items-center justify-center w-12 h-12 bg-${currentTheme.accent}-600/90 backdrop-blur-sm rounded-full hover:bg-${currentTheme.accent}-700/90 transition-all duration-300 hover:scale-110 shadow-xl border border-${currentTheme.accent}-500/50`}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
        
        {isMenuOpen && (
          <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-${currentTheme.accent}-200 p-4 min-w-[200px]`}>
            <div className="space-y-2">
              <Link href="/" className={`flex items-center gap-3 p-3 rounded-lg hover:bg-${currentTheme.accent}-50 transition-colors text-gray-700 hover:text-${currentTheme.accent}-700`}>
                <Home className="h-5 w-5" />
                <span>Accueil</span>
              </Link>
              <Link href="/fondamentaux" className={`flex items-center gap-3 p-3 rounded-lg hover:bg-${currentTheme.accent}-50 transition-colors text-gray-700 hover:text-${currentTheme.accent}-700`}>
                <Brain className="h-5 w-5" />
                <span>Les Fondamentaux</span>
              </Link>
              <Link href="/analogie-cuisine" className={`flex items-center gap-3 p-3 rounded-lg hover:bg-${currentTheme.accent}-50 transition-colors text-gray-700 hover:text-${currentTheme.accent}-700`}>
                <ChefHat className="h-5 w-5" />
                <span>La Cuisine</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <main className="container mx-auto px-4 py-8 mt-32">
        {/* Sélecteur de thème */}
        <section className="mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">🎨 Choisissez votre couleur</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Tous les styles utilisent des cadres carrés, choisissez votre couleur préférée
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(themes).map(([key, theme]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedTheme(key)}
                    className={`cursor-pointer rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                      selectedTheme === key 
                        ? `border-${theme.accent}-500 bg-${theme.accent}-50/50 shadow-lg` 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${theme.header} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{theme.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{theme.description}</p>
                    <div className={`w-full h-6 bg-gradient-to-r ${theme.header} rounded-lg`}></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Démonstration avec cadres carrés */}
        <section className="mb-12">
          <h2 className={`${currentTheme.titleSize} font-bold text-center mb-8 text-gray-900`}>
            📦 Démonstration : {currentTheme.name}
          </h2>
          <p className={`${currentTheme.descriptionSize} text-center text-gray-600 mb-8`}>
            Style mix avec des cadres carrés et coins arrondis
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Carte carrée exemple 1 */}
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${currentTheme.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Code className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 mb-4 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>💻 Algorithmie</CardTitle>
                <CardDescription className={`${currentTheme.cardDescriptionSize} text-lg text-gray-600 group-hover:text-${currentTheme.accent}-600 transition-colors duration-300`}>
                  Les bases de la programmation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-${currentTheme.accent}-500`} />
                    <span>Cours 1 : Variables Python/JS/TS</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-${currentTheme.accent}-500`} />
                    <span>Cours 2 : Fonctions comparatives</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-${currentTheme.accent}-500`} />
                    <span>Cours 3 : Structures de contrôle</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carte carrée exemple 2 */}
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${currentTheme.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Brain className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 mb-4 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>🧠 Scope & Closures</CardTitle>
                <CardDescription className={`${currentTheme.cardDescriptionSize} text-lg text-gray-600 group-hover:text-${currentTheme.accent}-600 transition-colors duration-300`}>
                  Les concepts avancés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-${currentTheme.accent}-500`} />
                    <span>Variables et portée</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-${currentTheme.accent}-500`} />
                    <span>Fonctions et closures</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className={`h-4 w-4 text-${currentTheme.accent}-500`} />
                    <span>Contextes d'exécution</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 1 : Fondamentaux */}
        <section className="mb-16">
          <h2 className={`${currentTheme.titleSize} font-bold text-center mb-8 text-gray-900`}>
            🎯 Section 1 : Les Fondamentaux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>Variables</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Stockage et manipulation des données</p>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>Fonctions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Blocs de code réutilisables</p>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Logique de décision</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2 : Langages */}
        <section className="mb-16">
          <h2 className={`${currentTheme.titleSize} font-bold text-center mb-8 text-gray-900`}>
            🐍 Section 2 : Les Langages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Package className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>Python</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Langage polyvalent et simple</p>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>JavaScript</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Langage du web moderne</p>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>TypeScript</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">JavaScript avec types</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3 : Concepts Avancés */}
        <section className="mb-16">
          <h2 className={`${currentTheme.titleSize} font-bold text-center mb-8 text-gray-900`}>
            🚀 Section 3 : Concepts Avancés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>Gestion d'État</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Maîtrisez les données de votre application</p>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>DevOps & Sécurité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Déploiement et protection</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 4 : Analogies */}
        <section className="mb-16">
          <h2 className={`${currentTheme.titleSize} font-bold text-center mb-8 text-gray-900`}>
            🍳 Section 4 : Les Analogies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <ChefHat className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>La Cuisine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Programmer comme cuisiner</p>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>L'Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Programmer comme construire</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 5 : Progression */}
        <section className="mb-16">
          <h2 className={`${currentTheme.titleSize} font-bold text-center mb-8 text-gray-900`}>
            📈 Section 5 : Votre Progression
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>37</CardTitle>
                <CardDescription className={`${currentTheme.cardDescriptionSize} font-medium group-hover:text-${currentTheme.accent}-600 transition-colors duration-300`}>Cours Fondamentaux</CardDescription>
              </CardHeader>
            </Card>

            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>4</CardTitle>
                <CardDescription className={`${currentTheme.cardDescriptionSize} font-medium group-hover:text-${currentTheme.accent}-600 transition-colors duration-300`}>Concepts Fondamentaux</CardDescription>
              </CardHeader>
            </Card>

            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>3</CardTitle>
                <CardDescription className={`${currentTheme.cardDescriptionSize} font-medium group-hover:text-${currentTheme.accent}-600 transition-colors duration-300`}>Langages en Parallèle</CardDescription>
              </CardHeader>
            </Card>

            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>2</CardTitle>
                <CardDescription className={`${currentTheme.cardDescriptionSize} font-medium group-hover:text-${currentTheme.accent}-600 transition-colors duration-300`}>Analogies Pédagogiques</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Section 6 : Ressources */}
        <section className="mb-16">
          <h2 className={`${currentTheme.titleSize} font-bold text-center mb-8 text-gray-900`}>
            📚 Section 6 : Ressources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Play className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>Vidéos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Tutoriels vidéo détaillés</p>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>Exercices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Pratiquez vos compétences</p>
              </CardContent>
            </Card>

            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group`}>
              <CardHeader className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentTheme.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Validez vos connaissances</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 7 : Gros Cadres de Test */}
        <section className="mb-16">
          <h2 className={`${currentTheme.titleSize} font-bold text-center mb-8 text-gray-900`}>
            🎨 Section 7 : Gros Cadres de Test
          </h2>
          <p className={`${currentTheme.descriptionSize} text-center text-gray-600 mb-8`}>
            Testez l'impact visuel des couleurs sur de grands espaces
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Gros cadre 1 */}
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group p-8`}>
              <CardHeader className="text-center">
                <div className={`w-24 h-24 bg-gradient-to-br ${currentTheme.iconBg} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 mb-4 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>
                  🚀 Formation Complète
                </CardTitle>
                <CardDescription className={`${currentTheme.cardDescriptionSize} text-xl text-gray-600 group-hover:text-${currentTheme.accent}-600 transition-colors duration-300`}>
                  Maîtrisez la programmation de A à Z
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Cette formation révolutionnaire vous guide à travers tous les concepts essentiels de la programmation moderne. 
                    De la syntaxe de base aux architectures avancées, chaque leçon est conçue pour vous faire progresser rapidement 
                    tout en consolidant vos bases.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${currentTheme.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                        <Code className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Fondamentaux</h4>
                      <p className="text-sm text-gray-600">Variables, fonctions, structures</p>
                    </div>
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${currentTheme.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                        <Database className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Avancé</h4>
                      <p className="text-sm text-gray-600">État, closures, patterns</p>
                    </div>
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${currentTheme.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                        <Cloud className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">Expert</h4>
                      <p className="text-sm text-gray-600">DevOps, sécurité, déploiement</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gros cadre 2 */}
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group p-8`}>
              <CardHeader className="text-center">
                <div className={`w-24 h-24 bg-gradient-to-br ${currentTheme.iconBg} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <ChefHat className="h-12 w-12 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 mb-4 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>
                  🍳 Méthode Pédagogique
                </CardTitle>
                <CardDescription className={`${currentTheme.cardDescriptionSize} text-xl text-gray-600 group-hover:text-${currentTheme.accent}-600 transition-colors duration-300`}>
                  Apprenez avec des analogies concrètes
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Notre approche unique utilise des analogies du monde réel pour rendre la programmation accessible et mémorable. 
                    Comme un chef cuisinier qui maîtrise ses ingrédients et techniques, vous apprendrez à composer avec les éléments 
                    de base pour créer des applications sophistiquées.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <ChefHat className={`h-5 w-5 text-${currentTheme.accent}-500`} />
                        La Cuisine du Code
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Variables = Ingrédients, Fonctions = Recettes, 
                        Conditions = Techniques de cuisson, Boucles = Processus répétitifs
                      </p>
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Building2 className={`h-5 w-5 text-${currentTheme.accent}-500`} />
                        L'Architecture du Code
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Classes = Plans d'étage, Méthodes = Pièces, 
                        Héritage = Fondations, Polymorphisme = Adaptabilité
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 8 : Textes de Test */}
        <section className="mb-16">
          <h2 className={`${currentTheme.titleSize} font-bold text-center mb-8 text-gray-900`}>
            📝 Section 8 : Textes de Test
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Texte long 1 */}
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group p-6`}>
              <CardHeader>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>
                  💡 Pourquoi cette formation ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    La programmation moderne nécessite une compréhension profonde des concepts fondamentaux. 
                    Trop souvent, les formations se concentrent sur la syntaxe sans expliquer le "pourquoi" 
                    derrière chaque concept.
                  </p>
                  <p className="leading-relaxed">
                    Notre approche révolutionnaire combine théorie et pratique avec des analogies du monde réel. 
                    Vous ne mémoriserez pas du code, vous comprendrez les principes qui le sous-tendent.
                  </p>
                  <p className="leading-relaxed">
                    En 30 jours, vous passerez de débutant complet à développeur compétent, capable de créer 
                    des applications réelles et de comprendre le code des autres.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Texte long 2 */}
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group p-6`}>
              <CardHeader>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>
                  🎯 Notre Méthode
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    <strong>1. Compréhension Conceptuelle :</strong> Chaque concept est expliqué avec des analogies 
                    concrètes avant d'aborder la syntaxe. Vous comprendrez "pourquoi" avant d'apprendre "comment".
                  </p>
                  <p className="leading-relaxed">
                    <strong>2. Pratique Multi-Langages :</strong> Nous enseignons Python, JavaScript et TypeScript 
                    en parallèle, vous montrant les similitudes et différences entre les langages.
                  </p>
                  <p className="leading-relaxed">
                    <strong>3. Projets Réels :</strong> Chaque section se termine par un mini-projet qui consolide 
                    vos connaissances et vous donne une expérience pratique immédiate.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 9 : Statistiques Détaillées */}
        <section className="mb-16">
          <h2 className={`${currentTheme.titleSize} font-bold text-center mb-8 text-gray-900`}>
            📊 Section 9 : Statistiques Détaillées
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stats 1 */}
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group p-6`}>
              <CardHeader className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${currentTheme.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>
                  37 Cours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Fondamentaux</span>
                    <span className="font-semibold text-gray-800">15 cours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Langages</span>
                    <span className="font-semibold text-gray-800">12 cours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Avancé</span>
                    <span className="font-semibold text-gray-800">10 cours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats 2 */}
            <Card className={`hover:shadow-2xl ${currentTheme.cardShadow} transition-all duration-500 hover:-translate-y-3 border-2 ${currentTheme.cardBorder} bg-gradient-to-br ${currentTheme.cardBg} shadow-xl rounded-2xl ${currentTheme.cardHover} group p-6`}>
              <CardHeader className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${currentTheme.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className={`${currentTheme.cardTitleSize} font-bold text-gray-800 group-hover:text-${currentTheme.accent}-700 transition-colors duration-300`}>
                  1000+ Étudiants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Taux de réussite</span>
                    <span className="font-semibold text-green-600">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Temps moyen</span>
                    <span className="font-semibold text-gray-800">28 jours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Satisfaction</span>
                    <span className="font-semibold text-yellow-600">4.8/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comparaison des couleurs */}
        <section className="mb-12">
          <h2 className={`${currentTheme.titleSize} font-bold text-center mb-8 text-gray-900`}>
            🎨 Comparaison des Couleurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bleu Smooth */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">🔵 Bleu Smooth</CardTitle>
                <CardDescription className="text-gray-600">
                  Style Accueil (Exact)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Professionnel et moderne</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Couleur douce et apaisante</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Parfait pour l'apprentissage</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Orange Cuisine */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">🟠 Orange Cuisine</CardTitle>
                <CardDescription className="text-gray-600">
                  Style Grand Livre de Cuisine (Exact)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Énergique et créatif</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Délimite bien les cadres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Stimule la créativité</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bandeau de navigation */}
        <section className="mb-12">
          <div className={`bg-gradient-to-br ${currentTheme.bg} border-2 border-${currentTheme.accent}-200/50 shadow-md rounded-3xl overflow-hidden`}>
            <div className="animate-scroll flex space-x-12 whitespace-nowrap">
              <div className="flex items-center space-x-12">
                <span className={`text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl ${currentTheme.cardShadow} transition-all duration-300 hover:-translate-y-1`}>
                  🎯 APPRENEZ LES FONDAMENTAUX
                </span>
                <span className={`text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl ${currentTheme.cardShadow} transition-all duration-300 hover:-translate-y-1`}>
                  🚀 MAÎTRISEZ LA PROGRAMMATION
                </span>
                <span className={`text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl ${currentTheme.cardShadow} transition-all duration-300 hover:-translate-y-1`}>
                  💡 DEVENIR EXPERT EN CODE
                </span>
                <span className={`text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl ${currentTheme.cardShadow} transition-all duration-300 hover:-translate-y-1`}>
                  🎯 APPRENEZ LES FONDAMENTAUX
                </span>
                <span className={`text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl ${currentTheme.cardShadow} transition-all duration-300 hover:-translate-y-1`}>
                  🚀 MAÎTRISEZ LA PROGRAMMATION
                </span>
                <span className={`text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl ${currentTheme.cardShadow} transition-all duration-300 hover:-translate-y-1`}>
                  💡 DEVENIR EXPERT EN CODE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Bouton de validation */}
        <section className="text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                ✅ Style sélectionné : {currentTheme.name}
              </h3>
              <p className="text-gray-600 mb-6">
                Cadres carrés avec la couleur {currentTheme.name.toLowerCase()}. Cette combinaison sera appliquée à toutes les pages.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button 
                  className={`px-6 py-3 bg-${currentTheme.accent}-600 text-white rounded-lg hover:bg-${currentTheme.accent}-700 transition-colors font-semibold`}
                  onClick={() => alert(`Style ${currentTheme.name} avec cadres carrés sélectionné !`)}
                >
                  Appliquer ce style
                </button>
                <Link 
                  href="/" 
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                >
                  Retour à l'accueil
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
} 