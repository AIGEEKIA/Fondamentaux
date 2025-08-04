"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function VignetteComponent() {
  return (
    <div className="w-[1280px] h-[760px] bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 p-6 relative">
      {/* Header - Titre Principal ÉNORME */}
      <div className="mb-8 flex justify-center">
        <div className="relative">
          {/* Container externe - Cercle blanc 3D plus gros */}
          <div className="bg-white rounded-full p-12 shadow-2xl border-4 border-gray-200 transform rotate-1 w-[1000px] h-[300px] flex items-center justify-center">
            {/* Container interne - Warning rouge plus gros */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-full p-8 shadow-inner w-full h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-white text-4xl font-bold leading-tight">
                  Ne programmez PAS avec l'IA
                </h2>
                <h3 className="text-white text-2xl font-semibold leading-tight mt-2 opacity-90">
                  sans connaître ces 3 PILIERS FONDAMENTAUX
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zone Piliers - Layout Horizontal */}
      <div className="flex gap-4 mb-8 h-[400px] items-stretch">
        {/* Card 1 : Algorithmie */}
        <Card className="flex-1 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl">
          <CardHeader className="text-center pb-4">
            {/* Check de validation */}
            <div className="text-4xl font-bold text-green-600 mb-2">✓</div>
            <CardTitle className="text-xl font-bold text-gray-800 mb-2">
              ALGORITHMIE
            </CardTitle>
            <CardDescription className="text-base text-gray-600">
              Bases programmation
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-center">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Variables
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Fonctions
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Structures
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Collections
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Haut niveau
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 : Scope & Closures */}
        <Card className="flex-1 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl">
          <CardHeader className="text-center pb-4">
            {/* Check de validation */}
            <div className="text-4xl font-bold text-green-600 mb-2">✓</div>
            <CardTitle className="text-xl font-bold text-gray-800 mb-2">
              SCOPE CLOSURES
            </CardTitle>
            <CardDescription className="text-base text-gray-600">
              Concepts avancés
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-center">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Global vs Local
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Scope de fonction
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Hoisting
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Chaînes de scope
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Closures
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 3 : Gestion d'État */}
        <Card className="flex-1 border-2 border-blue-300/50 bg-gradient-to-br from-blue-500/10 to-blue-600/10 shadow-xl">
          <CardHeader className="text-center pb-4">
            {/* Check de validation */}
            <div className="text-4xl font-bold text-green-600 mb-2">✓</div>
            <CardTitle className="text-xl font-bold text-gray-800 mb-2 tracking-tighter">
              GESTION D'ÉTAT
            </CardTitle>
            <CardDescription className="text-base text-gray-600">
              Prog avancée
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-center">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Async/Await
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Gestion d'erreurs
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">POO</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Modules
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-bold text-sm">✓</span>
                <span className="text-sm font-medium text-gray-700">
                  Tests/Debug
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
