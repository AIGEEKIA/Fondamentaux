"use client"

import { useState } from "react"
import { BookOpen, Code, Database, Cloud, Package, GraduationCap, Home, ArrowLeft, Menu, X, CheckCircle, ArrowRight, Target, Lightbulb, Globe, Zap, Shield, Users, Clock, Brain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function JavaScriptPage() {
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
              ⚡ JAVASCRIPT
            </h1>
            <h2 className="text-3xl font-semibold text-purple-100 mb-2">
              LE LANGAGE DU WEB MODERNE
            </h2>
            <p className="text-xl font-medium text-purple-200 max-w-4xl mx-auto">
              🌐 DE FRONTEND À BACKEND, TOUT EST POSSIBLE 🌐
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
              <Link href="/langages/python" className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700 hover:text-purple-700">
                <Code className="h-5 w-5" />
                <span>Python</span>
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
            <Link href="/" className="hover:text-yellow-600 transition-colors">Accueil</Link>
            <ArrowRight className="h-4 w-4" />
            <Link href="/fondamentaux" className="hover:text-yellow-600 transition-colors">Fondamentaux</Link>
            <ArrowRight className="h-4 w-4" />
            <Link href="/fondamentaux/lecon-1" className="hover:text-yellow-600 transition-colors">Cours 1</Link>
            <ArrowRight className="h-4 w-4" />
            <span className="text-yellow-600 font-semibold">JavaScript</span>
          </div>
        </nav>

        {/* Qu'est-ce que JavaScript ? */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-yellow-100/50 to-orange-100/50 border-2 border-yellow-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">⚡ Qu'est-ce que JavaScript ?</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Le langage de programmation le plus utilisé au monde
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-yellow-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">📖 Histoire et Évolution</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1995</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Création par Brendan Eich</h4>
                        <p className="text-gray-700 text-sm">Créé en 10 jours pour Netscape Navigator. Initialement appelé "Mocha" puis "LiveScript"</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1997</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Standardisation ECMAScript</h4>
                        <p className="text-gray-700 text-sm">JavaScript devient un standard international sous le nom ECMAScript</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2009</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">ES5 et la révolution</h4>
                        <p className="text-gray-700 text-sm">Introduction de méthodes importantes comme forEach, map, filter</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2015</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">ES6/ES2015 - La renaissance</h4>
                        <p className="text-gray-700 text-sm">Classes, modules, arrow functions, destructuring, promises</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2023</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">JavaScript moderne</h4>
                        <p className="text-gray-700 text-sm">WebAssembly, Node.js, React, Vue, Angular, et bien plus</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-yellow-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 Pourquoi JavaScript ?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">✅ Avantages :</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Ubiquité :</strong> Fonctionne partout (navigateur, serveur, mobile)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Écosystème :</strong> npm avec 2+ millions de packages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Flexibilité :</strong> Paradigmes multiples (OOP, fonctionnel)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span><strong>Communauté :</strong> Plus grande communauté de développeurs</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">⚠️ Inconvénients :</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0">⚠️</div>
                          <span><strong>Typage dynamique :</strong> Erreurs à l'exécution</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0">⚠️</div>
                          <span><strong>Coercion :</strong> Conversions automatiques parfois surprenantes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0">⚠️</div>
                          <span><strong>Fragmentation :</strong> Différences entre navigateurs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Écosystème moderne */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-100/50 to-purple-100/50 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">🚀 Écosystème moderne</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    L'écosystème JavaScript en 2024
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">🌐 Frontend</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Frameworks :</strong> React, Vue, Angular, Svelte</p>
                    <p><strong>Build tools :</strong> Vite, Webpack, Parcel</p>
                    <p><strong>CSS :</strong> Tailwind, Styled Components</p>
                    <p><strong>State :</strong> Redux, Zustand, Context</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Database className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">⚙️ Backend</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Runtime :</strong> Node.js, Deno, Bun</p>
                    <p><strong>Frameworks :</strong> Express, Fastify, NestJS</p>
                    <p><strong>Databases :</strong> MongoDB, PostgreSQL, Redis</p>
                    <p><strong>APIs :</strong> REST, GraphQL, WebSockets</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">🛠️ Outils</h3>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Package manager :</strong> npm, yarn, pnpm</p>
                    <p><strong>Testing :</strong> Jest, Vitest, Cypress</p>
                    <p><strong>Linting :</strong> ESLint, Prettier</p>
                    <p><strong>TypeScript :</strong> Typage statique</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Prérequis et installation */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-100/50 to-blue-100/50 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
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
                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🔧 Installation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Node.js (Recommandé) :</h4>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <code className="text-green-400 text-sm">
                          # Télécharger depuis nodejs.org<br/>
                          # Ou avec winget (Windows)<br/>
                          winget install OpenJS.NodeJS<br/><br/>
                          # Vérifier l'installation<br/>
                          node --version<br/>
                          npm --version
                        </code>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Alternative : Deno</h4>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <code className="text-green-400 text-sm">
                          # Installation Deno<br/>
                          curl -fsSL https://deno.land/x/install/install.sh | sh<br/><br/>
                          # Ou avec winget<br/>
                          winget install DenoLand.Deno
                        </code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">📚 Prérequis recommandés</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">🎓 Connaissances de base :</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• HTML et CSS de base</li>
                        <li>• Concepts de programmation</li>
                        <li>• Variables et types de données</li>
                        <li>• Structures de contrôle</li>
                        <li>• Fonctions et portée</li>
                        <li>• Programmation orientée objet</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">🛠️ Outils utiles :</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• VS Code avec extensions JS</li>
                        <li>• Chrome DevTools</li>
                        <li>• Git pour la versioning</li>
                        <li>• npm/yarn pour les packages</li>
                        <li>• ESLint pour le linting</li>
                        <li>• Jest pour les tests</li>
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
                    <Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript" className="block p-4 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                        <div>
                          <h4 className="font-semibold text-gray-800">MDN Web Docs</h4>
                          <p className="text-sm text-gray-600">Documentation complète en français</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="https://tc39.es/ecma262/" className="block p-4 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
                      <div className="flex items-center gap-3">
                        <Code className="h-5 w-5 text-purple-600" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Spécification ECMAScript</h4>
                          <p className="text-sm text-gray-600">Documentation technique officielle</p>
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
                          <p className="text-sm text-gray-600">Comprendre les variables en JavaScript</p>
                        </div>
                      </div>
                    </Link>
                    <Link href="/langages/typescript" className="block p-4 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-colors">
                      <div className="flex items-center gap-3">
                        <Code className="h-5 w-5 text-purple-600" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Découvrir TypeScript</h4>
                          <p className="text-sm text-gray-600">JavaScript avec typage statique</p>
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