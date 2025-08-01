"use client";

import { useState } from "react";
import {
  Home,
  Menu,
  X,
  ChefHat,
  Building2,
  Code,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

interface HamburgerMenuProps {
  currentPage?: string;
}

export default function HamburgerMenu({ currentPage }: HamburgerMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-28 right-16 z-50 flex flex-col items-center gap-2">
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

      {isMenuOpen && (
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-200 p-4 min-w-[250px] max-h-[80vh] overflow-y-auto">
          <div className="space-y-2">
            <Link
              href="/"
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                currentPage === "accueil"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Accueil</span>
            </Link>

            <div className="border-t border-gray-200 pt-2 mt-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                Analogies
              </h3>
              <Link
                href="/analogie-cuisine"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "analogie-cuisine"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <ChefHat className="h-5 w-5" />
                <span>La Cuisine</span>
              </Link>
              <Link
                href="/analogie-architecture"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "analogie-architecture"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Building2 className="h-5 w-5" />
                <span>L'Architecte</span>
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-2 mt-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                Installation
              </h3>
              <Link
                href="/fondamentaux/installation-python"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "installation-python"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Code className="h-5 w-5" />
                <span>Installation Python</span>
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-2 mt-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                Cours Fondamentaux
              </h3>
              <Link
                href="/fondamentaux/lecon-1"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-1"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 1 : Variables</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-2"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-2"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 2 : Types de données</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-3"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-3"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 3 : Opérateurs</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-4"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-4"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 4 : Structures conditionnelles</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-5"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-5"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 5 : Boucles</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-6"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-6"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 6 : Fonctions</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-7"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-7"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 7 : Listes et tableaux</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-8"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-8"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 8 : Dictionnaires</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-9"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-9"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 9 : Classes et objets</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-10"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-10"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 10 : Gestion d'erreurs</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-11"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-11"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 11 : Modules et packages</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-12"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-12"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 12 : Fichiers et I/O</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-13"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-13"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 13 : Programmation asynchrone</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-14"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-14"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 14 : Tests unitaires</span>
              </Link>
              <Link
                href="/fondamentaux/lecon-15"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "lecon-15"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-5 w-5" />
                <span>Cours 15 : Projet final</span>
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-2 mt-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                Langages
              </h3>
              <Link
                href="/langages/python"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "python"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Code className="h-5 w-5" />
                <span>Python</span>
              </Link>
              <Link
                href="/langages/javascript"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "javascript"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Code className="h-5 w-5" />
                <span>JavaScript</span>
              </Link>
              <Link
                href="/langages/typescript"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  currentPage === "typescript"
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Code className="h-5 w-5" />
                <span>TypeScript</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
