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
  Users,
  Shield,
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

export default function PlanStructurePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-100">
      {/* Super Header Bandeau */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500/40 via-blue-600/40 to-blue-700/40 text-white py-6 shadow-lg z-40 overflow-hidden rounded-2xl mx-4 mt-4 backdrop-blur-sm">
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
              📋 PLAN DE STRUCTURE
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              APPRENDRE À DÉFINIR LES ZONES
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              🎯 GUIDE VISUEL DES COMPOSANTS
            </p>
          </div>
        </div>
      </header>

      {/* Menu hamburger en dehors du header - Aligné sur le même axe X */}
      <div className="fixed top-28 right-16 z-50 flex flex-col items-center gap-2">
        {/* Menu hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center w-12 h-12 bg-blue-600/90 backdrop-blur-sm rounded-full hover:bg-blue-700/90 transition-all duration-300 hover:scale-110 shadow-xl border border-blue-500/50"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Menu déroulant */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-blue-200/50 min-w-48 z-10">
            <div className="p-2">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span className="font-medium">Accueil</span>
              </Link>
              <Link
                href="/analogie-cuisine"
                className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <ChefHat className="h-4 w-4" />
                <span className="font-medium">La Cuisine</span>
              </Link>
              <Link
                href="/analogie-architecture"
                className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Building2 className="h-4 w-4" />
                <span className="font-medium">L'Architecte</span>
              </Link>
              <Link
                href="/fondamentaux"
                className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-100 rounded-lg transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <Brain className="h-4 w-4" />
                <span className="font-medium">Les Fondamentaux</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-1"
                className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-blue-100 rounded-lg transition-all duration-200"
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
        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                📋 Plan de Structure - Page d'Accueil
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Apprenez à identifier et définir chaque zone de votre page web
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6">
                Cette page vous montre <strong>visuellement</strong> comment
                structurer une page web moderne. Chaque section est expliquée
                avec son code et ses caractéristiques.
              </p>
              <p className="mb-6">
                <strong>Objectif :</strong> Comprendre comment définir chaque
                zone pour pouvoir les reproduire et les modifier selon vos
                besoins.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* ZONE 1: HEADER */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🎨 ZONE 1 : HEADER (En-tête fixe)
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Explication */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  📝 Définition du Header
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🎯 Rôle :</h4>
                  <p className="text-gray-700">
                    Zone fixe en haut de page qui reste visible lors du scroll
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">
                    📍 Position :
                  </h4>
                  <p className="text-gray-700">
                    `fixed top-0 left-0 right-0` - Collé en haut de l'écran
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🎨 Style :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Dégradé bleu avec transparence `/40`</li>
                    <li>• Effet de flou `backdrop-blur-sm`</li>
                    <li>• Ombre et coins arrondis</li>
                    <li>• Z-index élevé `z-40`</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">📱 Contenu :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Titre principal</li>
                    <li>• Sous-titre</li>
                    <li>• Logo (position absolue)</li>
                    <li>• Signature</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Code d'exemple */}
            <Card className="bg-gray-900 text-green-400 border-2 border-gray-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-400">
                  💻 Code du Header
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm overflow-x-auto">
                  {`<header className="fixed top-0 left-0 right-0 
  bg-gradient-to-r from-blue-500/40 
  via-blue-600/40 to-blue-700/40 
  text-white py-6 shadow-lg z-40 
  overflow-hidden rounded-2xl mx-4 mt-4 
  backdrop-blur-sm">
  <div className="container mx-auto px-4">
    <div className="text-center relative">
      <h1 className="text-5xl font-bold 
        text-white mb-2">
        TITRE PRINCIPAL
      </h1>
      <h2 className="text-3xl font-semibold 
        text-blue-100 mb-2">
        Sous-titre
      </h2>
    </div>
  </div>
</header>`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ZONE 2: BANDEAU ANIMÉ */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🚀 ZONE 2 : BANDEAU ANIMÉ (Défilant)
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Explication */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  📝 Définition du Bandeau Animé
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🎯 Rôle :</h4>
                  <p className="text-gray-700">
                    Attirer l'attention avec des messages qui défilent
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">
                    🎬 Animation :
                  </h4>
                  <p className="text-gray-700">
                    `animate-scroll` - Défilement continu des messages
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🎨 Style :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Messages dans des badges arrondis</li>
                    <li>• Fond semi-transparent</li>
                    <li>• Effet hover avec translation</li>
                    <li>• Ombre colorée au survol</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">📱 Contenu :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Messages motivants</li>
                    <li>• Emojis pour l'impact visuel</li>
                    <li>• Duplication pour continuité</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Code d'exemple */}
            <Card className="bg-gray-900 text-green-400 border-2 border-gray-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-400">
                  💻 Code du Bandeau Animé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm overflow-x-auto">
                  {`<section className="mb-8">
  <div className="bg-gradient-to-br 
    from-blue-50 via-indigo-50 to-blue-50 
    border-2 border-blue-200/50 shadow-md 
    rounded-3xl overflow-hidden">
    <div className="animate-scroll flex 
      space-x-12 whitespace-nowrap">
      <div className="flex items-center space-x-12">
        <span className="text-lg font-semibold 
          text-gray-600 bg-white/60 px-4 py-2 
          rounded-full shadow-2xl 
          hover:shadow-blue-500/50 
          transition-all duration-300 
          hover:-translate-y-1">
          🚀 MESSAGE MOTIVANT
        </span>
        {/* Messages dupliqués pour continuité */}
      </div>
    </div>
  </div>
</section>`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ZONE 3: SECTION STATISTIQUES */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            📊 ZONE 3 : SECTION STATISTIQUES
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Explication */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  📝 Définition des Statistiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🎯 Rôle :</h4>
                  <p className="text-gray-700">
                    Afficher des chiffres clés de manière visuelle
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">📐 Layout :</h4>
                  <p className="text-gray-700">
                    `grid grid-cols-1 md:grid-cols-4` - Responsive
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🎨 Style :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Cartes avec dégradé subtil</li>
                    <li>• Icônes dans des cercles colorés</li>
                    <li>• Effet hover avec ombre colorée</li>
                    <li>• Translation vers le haut au survol</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">📱 Contenu :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Chiffres en gros</li>
                    <li>• Descriptions explicatives</li>
                    <li>• Icônes thématiques</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Code d'exemple */}
            <Card className="bg-gray-900 text-green-400 border-2 border-gray-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-400">
                  💻 Code des Statistiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm overflow-x-auto">
                  {`<section className="mb-12">
  <div className="grid grid-cols-1 
    md:grid-cols-4 gap-6 mb-8">
    <Card className="text-center 
      hover:shadow-2xl hover:shadow-blue-500/50 
      transition-all duration-500 
      hover:-translate-y-3 
      bg-gradient-to-br from-blue-500/10 
      to-blue-600/10 border-2 border-blue-300/50 
      shadow-lg hover:border-blue-400 group">
      <CardHeader>
        <div className="w-12 h-12 
          bg-gradient-to-br from-blue-500 
          to-blue-600 rounded-xl flex items-center 
          justify-center mx-auto mb-4 shadow-lg 
          group-hover:shadow-blue-500/50 
          group-hover:scale-110 transition-all duration-300">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-3xl font-bold 
          text-gray-800 group-hover:text-blue-700 
          transition-colors duration-300">
          37
        </CardTitle>
        <CardDescription className="text-lg font-medium 
          group-hover:text-blue-600 transition-colors duration-300">
          Cours Fondamentaux
        </CardDescription>
      </CardHeader>
    </Card>
  </div>
</section>`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ZONE 4: SECTION ANALOGIES */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🎯 ZONE 4 : SECTION ANALOGIES
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Explication */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  📝 Définition des Analogies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🎯 Rôle :</h4>
                  <p className="text-gray-700">
                    Présenter les approches pédagogiques principales
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">📐 Layout :</h4>
                  <p className="text-gray-700">
                    `grid grid-cols-1 lg:grid-cols-2` - 2 cartes principales
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🎨 Style :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Cartes larges avec icônes</li>
                    <li>• Descriptions détaillées</li>
                    <li>• Liens de navigation</li>
                    <li>• Effets hover sophistiqués</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">📱 Contenu :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Titres avec emojis</li>
                    <li>• Sous-titres colorés</li>
                    <li>• Descriptions longues</li>
                    <li>• Boutons d'action</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Code d'exemple */}
            <Card className="bg-gray-900 text-green-400 border-2 border-gray-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-400">
                  💻 Code des Analogies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm overflow-x-auto">
                  {`<section className="mb-12">
  <h2 className="text-4xl font-bold text-center 
    mb-8 text-gray-900">
    Les 2 Approches Pédagogiques
  </h2>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <Link href="/analogie-cuisine" className="block">
      <Card className="hover:shadow-2xl 
        hover:shadow-blue-500/50 transition-all 
        duration-500 hover:-translate-y-3 
        cursor-pointer group border-2 
        border-blue-300/50 
        bg-gradient-to-br from-blue-500/10 
        to-blue-600/10 shadow-xl 
        hover:border-blue-400">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 
              bg-gradient-to-br from-blue-500 
              to-blue-600 rounded-2xl flex items-center 
              justify-center shadow-lg 
              group-hover:shadow-blue-500/50 
              group-hover:scale-110 transition-all duration-300">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold 
                text-gray-800 group-hover:text-blue-700 
                transition-colors duration-300">
                Le Grand Livre de Cuisine
              </CardTitle>
              <CardDescription className="text-base 
                font-medium text-indigo-600 
                group-hover:text-indigo-700 
                transition-colors duration-300">
                Recettes (algorithmes), ingrédients (variables)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6 text-lg 
            leading-relaxed group-hover:text-gray-700 
            transition-colors duration-300">
            Description détaillée...
          </p>
          <div className="flex items-center text-blue-600 
            group-hover:text-blue-700 font-semibold 
            group-hover:scale-105 transition-all duration-300">
            <span>Explorer l'analogie</span>
            <ArrowRight className="h-5 w-5 ml-2 
              group-hover:translate-x-3 transition-transform duration-300" />
          </div>
        </CardContent>
      </Card>
    </Link>
  </div>
</section>`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ZONE 5: SECTION CONCEPTS FONDAMENTAUX */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🧠 ZONE 5 : CONCEPTS FONDAMENTAUX
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Explication */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  📝 Définition des Concepts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🎯 Rôle :</h4>
                  <p className="text-gray-700">
                    Présenter les 4 concepts principaux du cours
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">📐 Layout :</h4>
                  <p className="text-gray-700">
                    `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4` - 4 cartes
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🎨 Style :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Cartes carrées avec icônes</li>
                    <li>• Titres avec emojis</li>
                    <li>• Descriptions courtes</li>
                    <li>• Navigation vers /fondamentaux</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">📱 Contenu :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Algorithmie (💻)</li>
                    <li>• Scope & Closures (🧠)</li>
                    <li>• Gestion d'État (⚡)</li>
                    <li>• DevOps & Sécurité (🛡️)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Code d'exemple */}
            <Card className="bg-gray-900 text-green-400 border-2 border-gray-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-400">
                  💻 Code des Concepts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm overflow-x-auto">
                  {`<section className="mb-12">
  <h2 className="text-4xl font-bold text-center 
    mb-8 text-gray-900">
    Les 4 Concepts Fondamentaux
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-4 gap-6 mb-8">
    <Link href="/fondamentaux" className="block">
      <Card className="text-center hover:shadow-2xl 
        hover:shadow-blue-500/50 transition-all 
        duration-500 hover:-translate-y-3 
        border-2 border-blue-300/50 
        bg-gradient-to-br from-blue-500/10 
        to-blue-600/10 shadow-xl 
        hover:border-blue-400 group cursor-pointer">
        <CardHeader className="pb-4">
          <div className="w-16 h-16 
            bg-gradient-to-br from-blue-500 
            to-blue-600 rounded-2xl flex items-center 
            justify-center mx-auto mb-6 shadow-lg 
            group-hover:shadow-blue-500/50 
            group-hover:scale-110 transition-all duration-300">
            <Code className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold 
            text-gray-800 group-hover:text-blue-700 
            transition-colors duration-300">
            💻 Algorithmie
          </CardTitle>
          <CardDescription className="text-base 
            font-medium text-gray-600 
            group-hover:text-blue-600 
            transition-colors duration-300">
            Variables, structures de contrôle, boucles
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  </div>
</section>`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ZONE 6: CALL TO ACTION */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🎯 ZONE 6 : CALL TO ACTION
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Explication */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  📝 Définition du CTA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🎯 Rôle :</h4>
                  <p className="text-gray-700">
                    Encourager l'action principale (commencer la formation)
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">🎨 Style :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Bouton principal avec dégradé</li>
                    <li>• Texte blanc sur fond coloré</li>
                    <li>• Ombre colorée au survol</li>
                    <li>• Translation vers le haut</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600 mb-2">📱 Contenu :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Titre accrocheur</li>
                    <li>• Description motivante</li>
                    <li>• Bouton d'action</li>
                    <li>• Navigation vers /fondamentaux</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Code d'exemple */}
            <Card className="bg-gray-900 text-green-400 border-2 border-gray-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-400">
                  💻 Code du CTA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm overflow-x-auto">
                  {`<section className="text-center">
  <div className="bg-gradient-to-r from-blue-500 
    to-blue-600 text-white p-8 rounded-3xl 
    shadow-2xl hover:shadow-blue-500/50 
    transition-all duration-500 hover:-translate-y-3">
    <h3 className="text-3xl font-bold mb-4">
      Commencez Votre Formation !
    </h3>
    <p className="text-xl mb-6">
      Rejoignez des milliers d'apprenants qui ont 
      transformé leur carrière
    </p>
    <Link href="/fondamentaux" 
      className="bg-white text-blue-600 px-8 py-4 
      rounded-full font-bold text-xl 
      hover:bg-blue-50 transition-all duration-300 
      hover:scale-105 shadow-lg inline-block">
      Commencer Maintenant
    </Link>
  </div>
</section>`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* RÉSUMÉ DES CLASSES CSS IMPORTANTES */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🎨 CLASSES CSS IMPORTANTES À RETENIR
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Positionnement */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  📍 Positionnement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="bg-gray-100 p-2 rounded">
                  <code className="text-sm">fixed</code> - Élément fixe
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <code className="text-sm">relative</code> - Position relative
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <code className="text-sm">absolute</code> - Position absolue
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <code className="text-sm">top-0 left-0 right-0</code> - Pleine
                  largeur
                </div>
              </CardContent>
            </Card>

            {/* Layout */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  📐 Layout
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="bg-gray-100 p-2 rounded">
                  <code className="text-sm">grid</code> - Grille responsive
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <code className="text-sm">flex</code> - Flexbox
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <code className="text-sm">container mx-auto</code> - Centrage
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <code className="text-sm">gap-6</code> - Espacement
                </div>
              </CardContent>
            </Card>

            {/* Effets */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  ✨ Effets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="bg-gray-100 p-2 rounded">
                  <code className="text-sm">hover:shadow-2xl</code> - Ombre au
                  survol
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <code className="text-sm">hover:-translate-y-3</code> -
                  Translation
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <code className="text-sm">transition-all duration-300</code> -
                  Animation
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  <code className="text-sm">backdrop-blur-sm</code> - Flou
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section Navigation Directe */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🚀 NAVIGATION DIRECTE
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Cliquez sur les liens ci-dessous pour accéder directement aux pages
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Accueil */}
            <Link href="/" className="block">
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                    <Home className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    🏠 Page d'Accueil
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Page principale avec toutes les sections
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Fondamentaux */}
            <Link href="/fondamentaux" className="block">
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    🧠 Les Fondamentaux
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    4 concepts essentiels du développement
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Cours 1 */}
            <Link href="/fondamentaux/lecon-1" className="block">
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    📚 Cours 1 : Variables
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Python, JavaScript, TypeScript
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Cuisine */}
            <Link href="/analogie-cuisine" className="block">
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                    <ChefHat className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    👨‍🍳 Le Grand Livre de Cuisine
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Analogie culinaire du développement
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Architecture */}
            <Link href="/analogie-architecture" className="block">
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    🏗️ L'Architecte du Bâtiment
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Analogie architecturale du développement
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Installation Python */}
            <Link href="/fondamentaux/installation-python" className="block">
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    🐍 Installation Python
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Guide d'installation et configuration
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            {/* Langages */}
            <Link href="/langages/python" className="block">
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    🐍 Python
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Détails sur le langage Python
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/langages/javascript" className="block">
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    ⚡ JavaScript
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Détails sur le langage JavaScript
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/langages/typescript" className="block">
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    🔷 TypeScript
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Détails sur le langage TypeScript
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3">
            <h3 className="text-3xl font-bold mb-4">
              🎓 Maintenant vous savez structurer !
            </h3>
            <p className="text-xl mb-6">
              Vous avez appris à identifier et définir chaque zone de votre page
              web. Utilisez ces connaissances pour créer vos propres pages !
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Retour à l'Accueil
              </Link>
              <Link
                href="/fondamentaux"
                className="bg-blue-700 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Commencer la Formation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
