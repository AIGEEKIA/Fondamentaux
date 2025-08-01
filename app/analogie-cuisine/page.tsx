"use client";

import { useState } from "react";
import {
  BookOpen,
  ChefHat,
  ArrowRight,
  Utensils,
  Users,
  Brain,
  Code,
  Database,
  Cloud,
  Package,
  GraduationCap,
  Home,
  ArrowLeft,
  Target,
  Play,
  PenTool,
  Globe,
  Users2,
  Award,
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
import HamburgerMenu from "@/components/hamburger-menu";

export default function AnalogieCuisinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
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
              📖 LE GRAND LIVRE DE CUISINE
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              DU DÉVELOPPEUR MODERNE
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              🍳 L'ART CULINAIRE DE LA PROGRAMMATION 🍳
            </p>
          </div>
        </div>
      </header>

      {/* Menu hamburger */}
      <HamburgerMenu currentPage="analogie-cuisine" />

      <main className="container mx-auto px-4 py-8 mt-48">
        {/* Super Bandeau Motivant */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-indigo-200/50 shadow-md rounded-3xl overflow-hidden">
            <div className="animate-scroll flex space-x-12 whitespace-nowrap">
              <div className="flex items-center space-x-12">
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  👨‍🍳 APPRENEZ LES RECETTES DU CODE
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🥘 INGRÉDIENTS, TECHNIQUES ET SAVEURS
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🍽️ DEVENIR CHEF DANS LA CUISINE TECH
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🔥 MAÎTRISEZ L'ART DE LA PROGRAMMATION
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🌟 CRÉEZ DES PLATS NUMÉRIQUES UNIQUES
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🎯 TRANSFORMEZ VOS IDÉES EN APPLICATIONS
                </span>
                {/* Duplicated messages for continuous scroll */}
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  👨‍🍳 APPRENEZ LES RECETTES DU CODE
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🥘 INGRÉDIENTS, TECHNIQUES ET SAVEURS
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🍽️ DEVENIR CHEF DANS LA CUISINE TECH
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🔥 MAÎTRISEZ L'ART DE LA PROGRAMMATION
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🌟 CRÉEZ DES PLATS NUMÉRIQUES UNIQUES
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🎯 TRANSFORMEZ VOS IDÉES EN APPLICATIONS
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* L'Avant-Propos du Chef */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-600/10 border-2 border-blue-300/50 shadow-xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                L'Avant-Propos du Chef
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 italic">
                Cher apprenti, vous tenez entre vos mains plus qu'un simple
                recueil de recettes...
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6">
                C'est une carte complète du monde culinaire de la technologie.
                Chaque langage est un ingrédient fondamental, chaque framework
                une cuisine spécialisée, et chaque base de données un
                garde-manger méticuleusement organisé.
              </p>
              <p className="mb-6">
                Le plus grand secret des chefs n'est pas leur technique, mais
                leur capacité à choisir les bons ingrédients et les bons outils
                pour le plat qu'ils imaginent. Votre commis IA est un prodige,
                capable de réciter ce livre par cœur. Mais sans votre vision,
                sans votre goût, il n'est qu'un robot.
              </p>
              <p className="font-semibold text-blue-700">
                Apprenez les saveurs, comprenez les cuisines, et vous deviendrez
                un véritable créateur.
              </p>
              <p className="mt-6 text-center font-bold text-blue-800">
                Maintenant, à nos fourneaux.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Partie I : Les Ingrédients Fondamentaux */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🍳 Partie I : Les Ingrédients Fondamentaux - Les Éléments du Goût
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Tout plat commence par la qualité de ses ingrédients. Ce sont les
            langages de programmation, chacun avec son propre profil de saveur
            et son utilisation de prédilection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* JavaScript/TypeScript */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      JavaScript/TypeScript
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      L'Eau et la Farine Universelles
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  <strong>La base de la pâtisserie web.</strong> JavaScript est
                  l'ingrédient de base, dynamique et flexible. TypeScript est la
                  même farine, mais passée au tamis et enrichie de vitamines
                  (typage statique), garantissant une pâte plus fiable et sans
                  grumeaux.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Conseil du Chef pour l'IA :</strong> Votre commis en
                  rêve la nuit. Soyez précis sur la version : "Écris cette
                  fonction en TypeScript avec des types stricts pour les
                  paramètres et la valeur de retour".
                </p>
              </CardContent>
            </Card>

            {/* Python */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      Python
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Le Couteau Suisse du Chef
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  <strong>Polyvalence et lisibilité.</strong> Une saveur douce
                  et une syntaxe claire comme du bouillon. Parfait pour la mise
                  en place (scripts), la cuisine principale du fond (backend
                  avec Django/Flask), et surtout pour le laboratoire de
                  gastronomie moléculaire (Data Science, IA avec Pandas,
                  TensorFlow).
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Conseil du Chef pour l'IA :</strong> Excellent pour
                  l'automatisation. "Écris un script Python qui lit le fichier
                  `data.csv` et calcule la moyenne de la colonne 'ventes'".
                </p>
              </CardContent>
            </Card>

            {/* Java */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      Java
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Le Grand Chaudron de la Cuisine d'Entreprise
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  <strong>Robustesse et portabilité.</strong> Un goût riche et
                  une recette un peu verbeuse. Cuit lentement mais produit des
                  plats capables de nourrir des milliers de personnes
                  (applications d'entreprise). Grâce à la "plaque de cuisson
                  universelle" (JVM), un plat cuisiné sur une cuisinière à gaz
                  (Windows) aura le même goût sur une cuisinière à induction
                  (Linux).
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Conseil du Chef pour l'IA :</strong> L'IA le connaît
                  bien. Demandez des patrons de conception (Design Patterns) :
                  "Génère une classe Java utilisant le pattern Singleton pour
                  gérer la connexion à la base de données".
                </p>
              </CardContent>
            </Card>

            {/* C# */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      C# (C-Sharp)
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Le Menu Dégustation de la Maison Microsoft
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  <strong>Élégance et écosystème intégré.</strong> Une saveur
                  similaire à Java, mais servie dans une vaisselle plus moderne
                  et conçue pour s'harmoniser parfaitement avec les autres plats
                  de la maison (Windows, Azure, .NET). Très prisé pour les
                  applications d'entreprise et le développement de jeux (Unity).
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Conseil du Chef pour l'IA :</strong> Spécifiez le
                  framework : "Crée une API web minimale en C# avec .NET 7 qui
                  expose un endpoint `/products`".
                </p>
              </CardContent>
            </Card>

            {/* PHP */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      PHP
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Le Ragoût Rustique qui a Nourri le Monde
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  <strong>Simplicité et omniprésence côté serveur.</strong> Un
                  plat qui semble simple, mais qui est la base de 80% des tables
                  d'hôtes du web (Wordpress, Facebook). Autrefois rustique, il
                  est aujourd'hui servi dans des versions gastronomiques
                  (Laravel, Symfony) avec des saveurs complexes.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Conseil du Chef pour l'IA :</strong> Très direct.
                  "Crée une classe PHP `User` avec des propriétés privées pour
                  l'email et le mot de passe, et des méthodes publiques `getter`
                  et `setter`".
                </p>
              </CardContent>
            </Card>

            {/* Rust */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      Rust
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Le Couteau en Acier Chirurgical Damassé
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  <strong>Performance et sécurité absolue.</strong> Un outil
                  d'une précision extrême. Pas pour couper les légumes de tous
                  les jours, mais pour les tâches où la moindre erreur ruine le
                  plat (programmation système, CLI, WebAssembly). Sa saveur
                  principale est la "garantie zéro intoxication alimentaire"
                  (sécurité de la mémoire sans "garbage collector").
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Conseil du Chef pour l'IA :</strong> L'IA apprend
                  vite. Idéal pour des tâches précises : "Écris une fonction en
                  Rust qui prend une tranche de chaîne de caractères (`&str`) et
                  renvoie la première parole".
                </p>
              </CardContent>
            </Card>

            {/* Go */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      Go (Golang)
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      La Brigade de Cuisine Efficace et Synchronisée
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  <strong>Simplicité et concurrence.</strong> Conçu par Google
                  pour des cuisines à très haut débit. Peu d'ustensiles, mais
                  chacun est parfaitement optimisé. Sa spécialité : plusieurs
                  chefs peuvent travailler en même temps dans un petit espace
                  sans jamais se gêner (concurrence facile et performante).
                  Idéal pour les services réseau et l'infrastructure.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Conseil du Chef pour l'IA :</strong> Parfait pour la
                  concurrence. "Écris un programme Go qui lance trois
                  goroutines, chacune attendant un temps aléatoire avant
                  d'imprimer son numéro d'identification".
                </p>
              </CardContent>
            </Card>

            {/* SQL */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      SQL
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Le Langage Universel du Garde-Manger
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  <strong>
                    Ce n'est pas un ingrédient, c'est la langue de
                    l'organisation.
                  </strong>{" "}
                  C'est la grammaire que vous utilisez pour demander au commis
                  du garde-manger : "Apporte-moi toutes les tomates (`SELECT *
                  FROM legumes WHERE nom = 'tomate'`)". Essentiel et universel.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Conseil du Chef pour l'IA :</strong> Soyez très précis
                  sur le dialecte si possible : "Génère une requête PostgreSQL
                  qui joint la table `users` et `orders`...".
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Partie II : Les Cuisines Spécialisées */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🍳 Partie II : Les Cuisines Spécialisées - L'Art de la Gastronomie
            (Frameworks)
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Un ingrédient ne fait pas un plat. Une cuisine fournit les outils,
            les techniques et le livre de recettes (le framework) pour
            transformer les ingrédients en un repas complet.
          </p>

          {/* A. La Cuisine du Web Frontend */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-6 text-blue-800">
              A. La Cuisine du Web Frontend (La Salle de Restaurant)
            </h3>
            <p className="text-lg text-center text-gray-600 mb-8">
              Là où le plat est présenté au client. L'apparence et l'interaction
              sont reines.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Next.js */}
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                        Next.js
                      </CardTitle>
                      <CardDescription className="text-indigo-600 font-semibold">
                        Le Restaurant 3 Étoiles Polyvalent
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    <strong>Base : React</strong>
                    <br />
                    Il peut servir des amuse-bouches préparés à l'avance et
                    servis instantanément (SSG), des plats principaux cuits à la
                    minute selon la commande du client (SSR), et des desserts
                    interactifs assemblés à table (CSR). C'est la référence.
                  </p>
                </CardContent>
              </Card>

              {/* Vite + React */}
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                        Vite + React
                      </CardTitle>
                      <CardDescription className="text-indigo-600 font-semibold">
                        L'Atelier de Cuisine Expérimental
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    <strong>Base : React</strong>
                    <br />
                    Pas un restaurant complet, mais un laboratoire avec un four
                    à induction qui atteint 500°C en 3 secondes. Conçu pour un
                    prototypage et un développement ultra-rapide, idéal pour
                    créer des plats uniques servis entièrement sur place (SPA).
                  </p>
                </CardContent>
              </Card>

              {/* Astro */}
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                        Astro
                      </CardTitle>
                      <CardDescription className="text-indigo-600 font-semibold">
                        Le Bar à Salades Gastronomique "Zéro-Calorie"
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    <strong>Base : Multi-Bibliothèques</strong>
                    <br />
                    La base est une salade ultra-légère et saine (HTML pur).
                    Vous n'ajoutez des "toppings" riches (JavaScript via des
                    îlots React/Vue) que là où c'est nécessaire. La performance
                    et la légèreté sont les obsessions de ce chef.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* B. La Cuisine du Web Backend */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-6 text-blue-800">
              B. La Cuisine du Web Backend (La Cuisine Principale)
            </h3>
            <p className="text-lg text-center text-gray-600 mb-8">
              Là où la logique métier s'exécute, où les commandes sont traitées
              et où l'on communique avec la réserve.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Express / Nest.js */}
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                        Express / Nest.js
                      </CardTitle>
                      <CardDescription className="text-indigo-600 font-semibold">
                        La Cuisine Modulaire sur Mesure
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    <strong>
                      Ingrédient Principal : JavaScript / TypeScript
                    </strong>
                    <br />
                    Express est le plan de travail nu : vous choisissez chaque
                    ustensile. Nest.js est le même espace, mais conçu par un
                    architecte d'intérieur : une structure stricte et des
                    emplacements prédéfinis pour chaque chose, pour une
                    efficacité maximale en équipe.
                  </p>
                </CardContent>
              </Card>

              {/* Django / Flask */}
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                        Django / Flask
                      </CardTitle>
                      <CardDescription className="text-indigo-600 font-semibold">
                        Les Deux Écoles de la Gastronomie Python
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    <strong>Ingrédient Principal : Python</strong>
                    <br />
                    Django est le menu "tout-compris" : le service de table, la
                    sécurité, l'accès au garde-manger (ORM) et même l'argenterie
                    sont inclus. Flask est le menu "à la carte" : vous avez une
                    assiette parfaite et vous choisissez chaque élément que vous
                    voulez ajouter.
                  </p>
                </CardContent>
              </Card>

              {/* Laravel */}
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                        Laravel
                      </CardTitle>
                      <CardDescription className="text-indigo-600 font-semibold">
                        L'Atelier de l'Artisan Ébéniste
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    <strong>Ingrédient Principal : PHP</strong>
                    <br />
                    Une cuisine conçue pour le bonheur et l'élégance du chef.
                    Chaque outil est pensé pour être agréable à utiliser et pour
                    produire des plats sophistiqués rapidement. La communauté
                    est une immense confrérie d'artisans qui partagent leurs
                    secrets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* C. La Cuisine Mobile */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-6 text-blue-800">
              C. La Cuisine Mobile (Le Service de Livraison)
            </h3>
            <p className="text-lg text-center text-gray-600 mb-8">
              Pour emballer vos plats afin qu'ils soient dégustés sur de petits
              écrans, n'importe où.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* React Native */}
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                        React Native
                      </CardTitle>
                      <CardDescription className="text-indigo-600 font-semibold">
                        Cuisiner une Fois, Servir sur Deux Vaisselles Distinctes
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    <strong>Ingrédient Principal : JavaScript / React</strong>
                    <br />
                    Vous préparez votre plat avec les techniques React, et il
                    est servi dans une assiette iOS ou une assiette Android, en
                    utilisant les couverts natifs de chaque plateforme. C'est le
                    même plat, mais il respecte les coutumes locales.
                  </p>
                </CardContent>
              </Card>

              {/* Flutter */}
              <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                        Flutter
                      </CardTitle>
                      <CardDescription className="text-indigo-600 font-semibold">
                        L'Atelier du Peintre sur Porcelaine
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    <strong>
                      Ingrédient Principal : Dart (langage de Google)
                    </strong>
                    <br />
                    Vous ne vous contentez pas d'utiliser la vaisselle
                    existante, vous la peignez vous-même au pixel près. Le plat
                    aura exactement la même apparence, qu'il soit servi sur une
                    assiette iOS, Android ou même sur une table web. Le contrôle
                    visuel est absolu.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partie III : L'Office et le Garde-Manger */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🧊 Partie III : L'Office et le Garde-Manger - La Gestion des
            Ingrédients
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Un restaurant ne peut fonctionner sans une logistique impeccable en
            coulisses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Bases de Données */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      Bases de Données (SQL/NoSQL)
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Le Garde-Manger Organisé vs. le Frigo Familial
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Le <strong>SQL</strong> (PostgreSQL, MySQL) est le
                  garde-manger avec des étagères et des bocaux étiquetés :
                  rigide, fiable, parfait pour des données structurées. Le{" "}
                  <strong>NoSQL</strong> (MongoDB, Firebase) est le grand frigo
                  où l'on peut mettre des boîtes de toutes formes : flexible,
                  rapide à utiliser, idéal pour des données non structurées.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Conseil du Chef pour l'IA :</strong> Adaptez votre
                  demande au type : "Génère un schéma PostgreSQL pour un
                  blog..." vs "Génère un exemple de document JSON pour un profil
                  utilisateur sur MongoDB...".
                </p>
              </CardContent>
            </Card>

            {/* Le Cloud */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      Le Cloud (AWS, Azure, GCP)
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      La Chaîne Mondiale de Cuisines Fantômes à Louer
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Vous ne construisez plus votre propre restaurant. Vous louez
                  une cuisine professionnelle parfaitement équipée, avec
                  électricité, eau, et sécurité, et vous payez à l'heure. Vous
                  pouvez louer une petite cuisine pour un soir, ou un entrepôt
                  entier pour un festival.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Conseil du Chef pour l'IA :</strong> Soyez spécifique
                  sur le service : "Donne-moi un template pour une fonction
                  serverless sur AWS Lambda..." ou "Écris les commandes pour
                  déployer une application sur Google App Engine".
                </p>
              </CardContent>
            </Card>

            {/* Conteneurs */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      Conteneurs (Docker)
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      La Boîte de Préparation de Repas Standardisée
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  La recette, tous les ingrédients pré-pesés et les instructions
                  de cuisson sont scellés dans une boîte standard. Cette boîte
                  peut être envoyée à n'importe quelle cuisine dans le monde
                  (n'importe quel ordinateur) et le plat final sera{" "}
                  <strong>exactement</strong> le même. Fini le "ça marchait sur
                  ma machine !".
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Conseil du Chef pour l'IA :</strong> Un must pour le
                  déploiement. "Crée un `Dockerfile` pour une application
                  Node.js simple qui expose le port 3000".
                </p>
              </CardContent>
            </Card>

            {/* Orchestration */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      Orchestration (Kubernetes)
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Le Maître d'Hôtel d'un Banquet Mondial
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Quand vous avez des milliers de boîtes-repas (Docker) à livrer
                  pour un banquet planétaire, Kubernetes est le maître d'hôtel
                  qui gère tout : il s'assure que les boîtes arrivent à la bonne
                  table, en remplace une si elle est abîmée, et commande plus de
                  boîtes si plus d'invités arrivent.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Conseil du Chef pour l'IA :</strong> C'est un sujet
                  avancé. L'IA peut générer des fichiers de configuration :
                  "Génère un fichier de configuration YAML pour un déploiement
                  Kubernetes simple...".
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Chapitre 2 : Les Chapitres Secrets */}
        <section id="chapitre-2" className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            👨‍🍳 Chapitre 2 : Les Chapitres Secrets
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Ceci n'est pas une recette, mais une philosophie. C'est la structure
            mentale qui permet de passer de la création d'un plat à la direction
            d'un restaurant tout entier.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* L'Algorithmie */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      🧮 L'Algorithmie
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      L'Entrée - Comment je le fais, étape par étape ?
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Un assortiment de techniques logiques où les tâches complexes
                  sont décomposées en une séquence d'étapes précises,
                  assaisonnées de décisions et de répétitions maîtrisées.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Variables et Types :</strong> Les Ingrédients sur
                  Votre Plan de Travail
                  <br />
                  <strong>Conditions :</strong> Les Décisions du Chef
                  <br />
                  <strong>Boucles :</strong> Les Tâches Répétitives
                </p>
              </CardContent>
            </Card>

            {/* Le Scope */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      📦 Le Scope
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Le Plat Principal - Où est-ce que je le mets et qui peut y
                      toucher ?
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Un plat structuré où chaque ingrédient a sa place. Servi dans
                  des compartiments distincts (local, global, module) pour
                  garantir la propreté, éviter les mélanges indésirables et
                  assurer un accès contrôlé.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Variables Locales :</strong> Les Ingrédients sur VOTRE
                  Plan de Travail
                  <br />
                  <strong>Variables Globales :</strong> Le Gros Pot de Sel
                  Commun de la Cuisine
                  <br />
                  <strong>Scope de Module :</strong> Le Livre de Recettes d'une
                  Spécialité
                </p>
              </CardContent>
            </Card>

            {/* Les Closures */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      🔒 Les Closures
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Le Dessert - Comment créer un outil qui se souvient de sa
                      mission ?
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Une douceur sophistiquée et mémorable. Une fonction qui, une
                  fois servie, garde en mémoire la saveur de sa préparation
                  initiale. Idéale pour créer des sauces secrètes et des outils
                  spécialisés.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Fonctions Imbriquées :</strong> La Recette Secrète
                  dans la Recette
                  <br />
                  <strong>Closure :</strong> La Vinaigrette Personnalisée du
                  Chef
                  <br />
                  <strong>Décorateurs :</strong> La Touche Finale Systématique
                  du Chef
                </p>
              </CardContent>
            </Card>

            {/* La Gestion d'État */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      ⚡ La Gestion d'État
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Le Service - Comment maintenir l'harmonie dans un
                      restaurant en pleine effervescence ?
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  L'art de maintenir l'ordre dans le chaos. Comme un chef qui
                  coordonne plusieurs cuisiniers, vous devez gérer les données
                  qui changent, les interactions utilisateur, et l'état global
                  de l'application.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>État Local :</strong> L'Ordre sur Votre Plan de
                  Travail
                  <br />
                  <strong>État Global :</strong> L'Organisation de Toute la
                  Cuisine
                  <br />
                  <strong>Gestion Asynchrone :</strong> La Coordination des
                  Tâches
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Chapitre 3 : Le Cursus Complet */}
        <section id="chapitre-3" className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            📚 Chapitre 3 : Le Cursus Complet
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            De la mise en place au grand examen - Le parcours complet de
            l'apprenti chef
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">
                      Les Bols Étiquetés
                    </CardTitle>
                    <CardDescription className="text-indigo-600">
                      Variables
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Vous prenez un bol vide et vous y collez une étiquette :
                  "sucre". C'est votre variable. Son nom est `sucre`.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">
                      La Nature de l'Ingrédient
                    </CardTitle>
                    <CardDescription className="text-indigo-600">
                      Types de Données
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Ce que vous mettez dans le bol a une nature. Est-ce une poudre
                  (`integer`), un liquide (`float`), quelques mots (`string`),
                  ou juste un 'oui/non' (`boolean`) ?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-800">
                      La Balance de Précision
                    </CardTitle>
                    <CardDescription className="text-indigo-600">
                      Opérateurs
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Les outils pour transformer vos ingrédients : additionner,
                  soustraire, comparer les poids...
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-600/10 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    🔪 L'Ordre du Chef à son Commis IA
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="mb-4">
                "Commis, prépare mon plan de travail pour la recette du jour. Je
                veux une organisation parfaite.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  <strong>Le Sucre :</strong> Prends un bol, étiquette-le
                  `quantite_sucre` et mets-y `150` grammes (un nombre entier).
                </li>
                <li>
                  <strong>L'Extrait de Vanille :</strong> Prends une fiole,
                  étiquette-la `extrait_vanille_litres` et mets-y `0.01` litre
                  (un nombre décimal).
                </li>
                <li>
                  <strong>Le Nom du Plat :</strong> Prends une ardoise,
                  étiquette-la `nom_du_gateau` et écris dessus `"Le Fondant
                  Suprême"` (du texte).
                </li>
                <li>
                  <strong>La Vérification :</strong> Prends un mémo,
                  étiquette-le `est_un_dessert` et écris juste `True` (une
                  simple confirmation).
                </li>
                <li>
                  <strong>Maintenant, fais l'inventaire !</strong> Affiche le
                  contenu de chaque conteneur, et surtout, dis-moi la nature (le
                  type) de chaque ingrédient pour que je sois sûr que tu ne t'es
                  pas trompé."
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Chapitre 4 : Le Parcours du Chef-Mentor */}
        <section id="chapitre-4" className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🌟 Chapitre 4 : Le Parcours du Chef-Mentor
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            De la maîtrise à la transmission - Les quatre étapes du parcours
            mentor
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Étape 1 */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <PenTool className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      🎓 Étape 1 : La Déconstruction des Classiques
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Comprendre pourquoi ça marche, pas seulement comment
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Analysez chaque recette classique comme un architecte examine
                  un monument. Pourquoi cette technique ? Pourquoi cet ordre ?
                  Pourquoi cette température ?
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Objectif :</strong> Comprendre les principes
                  sous-jacents
                  <br />
                  <strong>Méthode :</strong> Décomposer, analyser, reconstruire
                  <br />
                  <strong>Résultat :</strong> Maîtrise fondamentale
                </p>
              </CardContent>
            </Card>

            {/* Étape 2 */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      🌍 Étape 2 : Le Voyage d'Étude
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Explorer d'autres cuisines et techniques du monde
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Sortez de votre zone de confort culinaire. Explorez les
                  techniques asiatiques, les méthodes traditionnelles, les
                  innovations modernes. Chaque cuisine a ses secrets.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Objectif :</strong> Élargir sa palette technique
                  <br />
                  <strong>Méthode :</strong> Étudier, expérimenter, adapter
                  <br />
                  <strong>Résultat :</strong> Vision universelle
                </p>
              </CardContent>
            </Card>

            {/* Étape 3 */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      📚 Étape 3 : L'Écriture du Grand Livre
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Documenter et structurer votre savoir pour la transmission
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Transformez votre expérience en savoir transmissible. Créez
                  des guides, des tutoriels, des explications claires. L'art de
                  la transmission commence ici.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Objectif :</strong> Structurer le savoir
                  <br />
                  <strong>Méthode :</strong> Écrire, organiser, clarifier
                  <br />
                  <strong>Résultat :</strong> Savoir transmissible
                </p>
              </CardContent>
            </Card>

            {/* Étape 4 */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Users2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                      👥 Étape 4 : L'École du Chef
                    </CardTitle>
                    <CardDescription className="text-indigo-600 font-semibold">
                      Transmettre et inspirer la nouvelle génération
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Devenez le mentor que vous auriez aimé avoir. Guidez les
                  apprentis, partagez vos erreurs, inspirez par l'exemple. La
                  transmission est l'ultime maîtrise.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Objectif :</strong> Transmettre le savoir
                  <br />
                  <strong>Méthode :</strong> Enseigner, guider, inspirer
                  <br />
                  <strong>Résultat :</strong> Héritage durable
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* La Leçon Finale du Chef */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-600/10 border-2 border-blue-300/50 shadow-xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                La Leçon Finale du Chef
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6">
                Apprenti, ce livre peut sembler intimidant. Ne cherchez pas à
                tout mémoriser. Aucun chef ne maîtrise toutes les cuisines du
                monde.
              </p>
              <p className="mb-6">
                Choisissez-en une. Devenez-y excellent. Préparez un plat simple,
                mais parfait.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold text-blue-800 mb-4">
                  Votre Premier Plat Signature :
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Cuisine :</strong> Next.js
                  </li>
                  <li>
                    <strong>Ingrédients :</strong> React & TypeScript
                  </li>
                  <li>
                    <strong>Dressage :</strong> Tailwind CSS
                  </li>
                  <li>
                    <strong>Ustensiles :</strong> shadcn/ui
                  </li>
                  <li>
                    <strong>Garde-manger :</strong> Supabase (qui offre un
                    garde-manger PostgreSQL facile d'accès)
                  </li>
                </ul>
              </div>
              <p className="font-semibold text-blue-700 text-center">
                Donnez cet ordre à votre commis : "Initialise un projet Next.js
                avec TypeScript et Tailwind. Intègre shadcn/ui. Puis, montre-moi
                comment créer une page qui affiche une liste de produits depuis
                une table 'products' dans ma base de données Supabase."
              </p>
              <p className="mt-6 text-center font-bold text-blue-800">
                C'est ainsi que l'on passe d'apprenti à Chef. La cuisine est à
                vous. Impressionnez-moi.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Navigation vers les cours pratiques */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-600/10 border-2 border-blue-300/50 shadow-xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                Passez à la Pratique
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Maintenant que vous avez la théorie, découvrez les cours
                pratiques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/" className="block">
                  <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                          <Home className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                            🏠 Accueil
                          </CardTitle>
                          <CardDescription className="text-indigo-600 font-semibold">
                            Page Principale
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        Retournez à la page d'accueil pour découvrir tous les
                        cours et ressources disponibles.
                      </p>
                      <div className="inline-flex items-center gap-2 text-indigo-600 group-hover:text-indigo-800 font-semibold transition-colors">
                        Retour à l'accueil <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/fondamentaux/lecon-1" className="block">
                  <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 shadow-xl hover:border-indigo-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-indigo-600/20 group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                          <Code className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
                            💻 Cours 1 : Variables
                          </CardTitle>
                          <CardDescription className="text-indigo-600 font-semibold">
                            Python, JavaScript, TypeScript
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        Commencez par le premier cours pratique sur les
                        variables avec des exemples concrets.
                      </p>
                      <div className="inline-flex items-center gap-2 text-indigo-600 group-hover:text-indigo-800 font-semibold transition-colors">
                        Commencer le cours <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
