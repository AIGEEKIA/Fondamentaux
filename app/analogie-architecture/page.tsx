"use client";

import { useState } from "react";
import {
  Building2,
  ArrowRight,
  Hammer,
  Wrench,
  Users,
  Brain,
  Code,
  Shield,
  Home,
  ChefHat,
  GraduationCap,
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
import LogoMenu from "@/components/logo-menu";

export default function AnalogieArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-100">
      {/* Super Header Bandeau */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500/40 via-blue-600/40 to-blue-700/40 text-white py-6 shadow-lg z-40 overflow-hidden rounded-2xl mx-4 mt-4 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center relative">
            <h1 className="text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md relative overflow-hidden">
              L'ARCHITECTE DU BÂTIMENT
            </h1>
            <h2 className="text-3xl font-semibold text-blue-100 mb-2">
              DANS LE DÉVELOPPEMENT LOGICIEL
            </h2>
            <p className="text-xl font-medium text-blue-200 max-w-4xl mx-auto">
              🏗️ CONSTRUIRE DES APPLICATIONS COMME DES BÂTIMENTS 🏗️
            </p>
          </div>
        </div>
      </header>

      {/* Menu hamburger */}
      <LogoMenu />

      <main className="container mx-auto px-4 py-8 mt-48">
        {/* Super Bandeau Motivant */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 border-2 border-blue-200/50 shadow-md rounded-3xl overflow-hidden">
            <div className="animate-scroll flex space-x-12 whitespace-nowrap">
              <div className="flex items-center space-x-12">
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🏗️ CONSTRUIRE SOLIDE ET DURABLE
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  📐 PLANS, FONDATIONS ET ÉTAGES
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🔧 OUTILS ET TECHNIQUES SPÉCIALISÉES
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🏢 DEVENIR ARCHITECTE NUMÉRIQUE
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🌟 CRÉER DES BÂTIMENTS DU FUTUR
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🎯 TRANSFORMER DES BESOINS EN RÉALITÉ
                </span>
                {/* Duplicated messages for continuous scroll */}
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🏗️ CONSTRUIRE SOLIDE ET DURABLE
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  📐 PLANS, FONDATIONS ET ÉTAGES
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🔧 OUTILS ET TECHNIQUES SPÉCIALISÉES
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🏢 DEVENIR ARCHITECTE NUMÉRIQUE
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🌟 CRÉER DES BÂTIMENTS DU FUTUR
                </span>
                <span className="text-lg font-semibold text-gray-600 bg-white/60 px-4 py-2 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                  🎯 TRANSFORMER DES BESOINS EN RÉALITÉ
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                Introduction
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Pour comprendre tout l'écosystème du développement logiciel,
                faisons l'analogie avec un métier :
                <strong> l'architecte du bâtiment</strong>.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6">
                Ce métier implique de transformer des besoins (ce que veut le
                client) en une construction solide, esthétique, fonctionnelle,
                dans le respect des normes et en utilisant des outils
                spécialisés.
              </p>
              <p className="mb-6">
                De même, un développeur conçoit, construit et maintient des
                applications avec des langages, outils, API, frameworks...
                Découvrons chaque pièce de l'écosystème à travers cette
                métaphore !
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Les Langages de Programmation - Les Matériaux de Construction */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🧱 Les Langages de Programmation
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Les Matériaux de Construction
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Python */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  Python
                </CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  Matériau Polyvalent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Facile à manipuler, idéal pour les fondations rapides, la
                  donnée, l'automatisation.
                </p>
              </CardContent>
            </Card>

            {/* JavaScript/TypeScript */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  JavaScript/TypeScript
                </CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  Acier Léger et Flexible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Des interfaces web dynamiques et flexibles, parfait pour les
                  structures modernes.
                </p>
              </CardContent>
            </Card>

            {/* C/C++ */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Hammer className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  C/C++
                </CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  Béton Armé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Pour les structures à haute performance, robuste et fiable.
                </p>
              </CardContent>
            </Card>

            {/* Java/C# */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                  Java/C#
                </CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  Briques Robustes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Adaptées aux grands ensembles, parfaites pour les applications
                  d'entreprise.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Les Frameworks - Les Échafaudages */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🏗️ Les Frameworks
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Les Échafaudages et Préfabriqués
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                      React, Angular, Django, Spring
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-semibold">
                      Échafaudages et Modules Préfabriqués
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Un framework est à l'architecte ce que l'échafaudage ou les
                  modules préfabriqués sont au chantier.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      🚀 Ils accélèrent la construction
                    </h4>
                    <p className="text-blue-800 text-sm">
                      Pièces réutilisables, gain de temps considérable.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      📐 Ils guident
                    </h4>
                    <p className="text-blue-800 text-sm">
                      Respect des meilleures pratiques, structure imposée.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      🎨 Ils permettent la personnalisation
                    </h4>
                    <p className="text-blue-800 text-sm">
                      Adapter l'échafaudage pour l'édifice unique du client.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Les Outils - La Boîte à Outils */}
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                      Les Outils
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-semibold">
                      La Boîte à Outils du Chantier
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Aujourd'hui, impossible de bâtir sans outils spécialisés !
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      💻 IDE/éditeur (VSCode, IntelliJ)
                    </h4>
                    <p className="text-blue-800 text-sm">
                      La trousse multifonctions de l'architecte – plans,
                      simulation, mesure.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      📝 Contrôle de version (Git)
                    </h4>
                    <p className="text-blue-800 text-sm">
                      Carnet de bord et historique des modifications du
                      chantier.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      🔧 Outils de test
                    </h4>
                    <p className="text-blue-800 text-sm">
                      Comme le niveau à bulle pour valider ce qui tient debout.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Les API - Les Fournisseurs */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🔌 Les API
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Les Fournisseurs et Réseaux Utilitaires
          </p>

          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Les Interfaces de Services
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    Accès aux Services Distants
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Dans un bâtiment, on fait venir l'eau, l'électricité, le
                chauffage via des réseaux conçus par d'autres experts. En
                développement, les APIs sont ces interfaces.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    💳 APIs de paiement, météo, cartes
                  </h4>
                  <p className="text-blue-800 text-sm">
                    Accès à des services distants robustes et fiables.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    🔗 Consommer une API
                  </h4>
                  <p className="text-blue-800 text-sm">
                    Brancher le bâtiment au réseau sans tout refaire.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    🏗️ Concevoir une API
                  </h4>
                  <p className="text-blue-800 text-sm">
                    Penser à comment d'autres architectes vont se brancher à ta
                    création.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    📡 Protocoles
                  </h4>
                  <p className="text-blue-800 text-sm">
                    Les normes du bâtiment (HTTP, HTTPS, TCP/IP, WebSocket).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* La Sécurité - Les Normes */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            🔒 La Sécurité
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8">
            Les Normes Antivol et Incendie
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                      Protection et Sécurité
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-semibold">
                      Serrures, Alarmes, Extincteurs
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      🔐 Authentification, autorisation, chiffrement
                    </h4>
                    <p className="text-blue-800 text-sm">
                      Protéger l'accès aux bâtiments numériques.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      🔄 Mises à jour, corrections
                    </h4>
                    <p className="text-blue-800 text-sm">
                      Surveiller les faiblesses et anticiper les sinistres.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Wrench className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                      Maintenance et Évolution
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-semibold">
                      SAV et Agrandissement
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      🧪 Tests automatisés, refactoring
                    </h4>
                    <p className="text-blue-800 text-sm">
                      Entretien régulier des structures numériques.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      📈 Scalabilité, migrations
                    </h4>
                    <p className="text-blue-800 text-sm">
                      Agrandir ou rénover selon la demande.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tableau Synthétique */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            📊 Tableau Synthétique
          </h2>
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-3 px-4 font-bold text-blue-900">
                        Développement
                      </th>
                      <th className="text-left py-3 px-4 font-bold text-blue-900">
                        Chantier/Bâtiment
                      </th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4 font-semibold text-gray-800">
                        Langages
                      </td>
                      <td className="py-3 px-4 text-gray-600">Matériaux</td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4 font-semibold text-gray-800">
                        Frameworks
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        Échafaudages, modules préfabriqués
                      </td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4 font-semibold text-gray-800">
                        Outils (IDE, Git, tests)
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        Boîte à outils, carnet de chantier
                      </td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4 font-semibold text-gray-800">
                        API
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        Fournisseurs/utilitaires (eau, électricité)
                      </td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4 font-semibold text-gray-800">
                        Protocoles
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        Normes de construction, câblage
                      </td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4 font-semibold text-gray-800">
                        Documentation
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        Plans, notices techniques
                      </td>
                    </tr>
                    <tr className="border-b border-blue-100">
                      <td className="py-3 px-4 font-semibold text-gray-800">
                        Sécurité
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        Alarmes, serrures, extincteurs
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-gray-800">
                        Maintenance, évolutions
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        SAV, extensions, rénovation
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion Motivante */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-2 border-blue-400/50 shadow-xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                Conclusion Motivante
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-gray-700">
              <p className="mb-6">
                Être développeur, c'est devenir l'architecte de bâtiments
                numériques : imaginer, assembler, connecter, sécuriser,
                maintenir.
              </p>
              <p className="mb-6">
                Plus tu connais tes matériaux, outils, et fournisseurs, plus tu
                construis solide, rapide, et innovant.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-900 mb-4">
                  Tu veux bâtir des gratte-ciels ou des maisons sur-mesure ?
                </h4>
                <p className="text-blue-800">
                  Plonge dans l'aventure du code, ta boîte à outils n'a qu'une
                  limite : ton imagination !
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-3xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à Devenir Architecte ?
            </h3>
            <p className="text-xl mb-6">
              Commencez par maîtriser les matériaux, puis construisez des
              bâtiments numériques extraordinaires.
            </p>
            <Link href="/fondamentaux/cours-1">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                Commencer la Construction
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
