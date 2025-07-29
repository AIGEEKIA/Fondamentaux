"use client"

import { useState } from "react"
import { BookOpen, Code, Database, Cloud, Package, GraduationCap, Home, ArrowLeft, Menu, X, CheckCircle, ArrowRight, Target, Lightbulb, Globe, Zap, Shield, Users, Brain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function PythonPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500/90 via-indigo-600/90 to-purple-700/90 text-white py-6 shadow-lg z-40 overflow-hidden rounded-2xl mx-4 mt-4 backdrop-blur-sm">
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
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md relative overflow-hidden">
              🐍 PYTHON
            </h1>
            <h2 className="text-3xl font-semibold text-purple-100 mb-2">
              LE LANGAGE DE PROGRAMMATION UNIVERSEL
            </h2>
            <p className="text-xl font-medium text-purple-200 max-w-4xl mx-auto">
              ⚡ SIMPLE, PUISSANT ET POLYVALENT ⚡
            </p>
          </div>
        </div>
      </header>
      
      {/* Menu hamburger */}
      <div className="fixed top-28 right-16 z-50 flex flex-col items-center gap-2">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center w-12 h-12 bg-purple-600/90 backdrop-blur-sm rounded-full hover:bg-purple-700/90 transition-all duration-300 hover:scale-110 shadow-xl border border-purple-500/50"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
        
        {isMenuOpen && (
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-200 p-4 min-w-[200px]">
            <div className="space-y-2">
              <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700">
                <Home className="h-5 w-5" />
                <span>Accueil</span>
              </Link>
              <Link href="/fondamentaux" className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700">
                <Brain className="h-5 w-5" />
                <span>Les Fondamentaux</span>
              </Link>
              <Link href="/fondamentaux/lecon-1" className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700">
                <GraduationCap className="h-5 w-5" />
                <span>Cours 1 : Variables</span>
              </Link>
              <Link href="/langages/javascript" className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700">
                <Code className="h-5 w-5" />
                <span>JavaScript</span>
              </Link>
              <Link href="/langages/typescript" className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700">
                <Code className="h-5 w-5" />
                <span>TypeScript</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <main className="container mx-auto px-4 py-8 mt-32">
        {/* Navigation breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-purple-600 transition-colors">Accueil</Link>
            <ArrowRight className="h-4 w-4" />
            <Link href="/fondamentaux" className="hover:text-purple-600 transition-colors">Fondamentaux</Link>
            <ArrowRight className="h-4 w-4" />
            <Link href="/fondamentaux/lecon-1" className="hover:text-purple-600 transition-colors">Cours 1</Link>
            <ArrowRight className="h-4 w-4" />
            <span className="text-purple-600 font-semibold">Python</span>
          </div>
        </nav>

        {/* Qu'est-ce que Python ? */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-100/50 to-purple-100/50 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">🐍 Qu'est-ce que Python ?</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Le langage de programmation le plus populaire au monde
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">📖 Histoire et Philosophie</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Python a été créé par <strong>Guido van Rossum</strong> en 1991. Son nom vient de la troupe de comédiens 
                    "Monty Python" que le créateur appréciait. La philosophie de Python est résumée dans le "Zen de Python" :
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Simple est mieux que complexe</strong></li>
                      <li>• <strong>Lisible compte</strong></li>
                      <li>• <strong>Explicite est mieux qu'implicite</strong></li>
                      <li>• <strong>Il ne devrait y avoir qu'une seule façon évidente de faire quelque chose</strong></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 Pourquoi Python ?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">✅ Avantages :</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Simplicité :</strong> Syntaxe claire et lisible</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Polyvalence :</strong> Web, IA, data science, automation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Écosystème riche :</strong> 300,000+ packages disponibles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Communauté active :</strong> Support et documentation excellents</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">⚠️ Inconvénients :</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0">⚠️</div>
                          <span><strong>Performance :</strong> Plus lent que C/C++</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0">⚠️</div>
                          <span><strong>GIL :</strong> Limitation du multithreading</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0">⚠️</div>
                          <span><strong>Packaging :</strong> Gestion des dépendances complexe</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cas d'usage */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-100/50 to-blue-100/50 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">🎯 Cas d'usage populaires</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Où Python excelle vraiment
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">🤖 Intelligence Artificielle</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    <strong>TensorFlow, PyTorch, scikit-learn</strong><br/>
                    Machine Learning, Deep Learning, NLP
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Database className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">📊 Data Science</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    <strong>pandas, numpy, matplotlib</strong><br/>
                    Analyse de données, visualisation
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">🌐 Développement Web</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    <strong>Django, Flask, FastAPI</strong><br/>
                    Backend, APIs, applications web
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Prérequis et installation */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-orange-100/50 to-red-100/50 border-2 border-orange-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">📦 Prérequis et Installation</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Tout ce qu'il faut savoir pour commencer
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🔧 Installation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Windows :</h4>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <code className="text-green-400 text-sm">
                          # Télécharger depuis python.org<br/>
                          # Ou utiliser winget<br/>
                          winget install Python.Python.3.11
                        </code>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">macOS :</h4>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <code className="text-green-400 text-sm">
                          # Avec Homebrew<br/>
                          brew install python<br/><br/>
                          # Ou télécharger depuis python.org
                        </code>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Linux :</h4>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <code className="text-green-400 text-sm">
                          # Ubuntu/Debian<br/>
                          sudo apt update<br/>
                          sudo apt install python3 python3-pip
                        </code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">📚 Prérequis recommandés</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">🎓 Connaissances de base :</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Logique de programmation</li>
                        <li>• Concepts de variables et types</li>
                        <li>• Structures de contrôle (if/else)</li>
                        <li>• Boucles (for/while)</li>
                        <li>• Fonctions de base</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">🛠️ Outils utiles :</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• VS Code ou PyCharm</li>
                        <li>• Terminal/Command Prompt</li>
                        <li>• Git pour la versioning</li>
                        <li>• pip pour les packages</li>
                        <li>• venv pour les environnements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Aller plus loin */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-purple-100/50 to-indigo-100/50 border-2 border-purple-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">🚀 Aller plus loin</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Ressources pour approfondir vos connaissances
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">📖 Ressources officielles</h3>
                  <div className="space-y-3">
                    <Link href="https://docs.python.org/fr/3/" className="block p-4 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Documentation officielle</h4>
                          <p className="text-sm text-gray-600">Guide complet en français</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="https://www.python.org/dev/peps/" className="block p-4 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
                      <div className="flex items-center gap-3">
                        <Code className="h-5 w-5 text-purple-600" />
                        <div>
                          <h4 className="font-semibold text-gray-800">PEP (Python Enhancement Proposals)</h4>
                          <p className="text-sm text-gray-600">Évolution du langage</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">🎯 Prochaines étapes</h3>
                  <div className="space-y-3">
                    <Link href="/fondamentaux/lecon-1" className="block p-4 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="h-5 w-5 text-purple-600" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Cours 1 : Variables</h4>
                          <p className="text-sm text-gray-600">Comprendre les variables en Python</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="/langages/javascript" className="block p-4 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
                      <div className="flex items-center gap-3">
                        <Code className="h-5 w-5 text-purple-600" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Découvrir JavaScript</h4>
                          <p className="text-sm text-gray-600">Le langage du web</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
} 