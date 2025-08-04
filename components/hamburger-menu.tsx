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
              <span>Analogie Cuisine</span>
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
              <span>Analogie Architecture</span>
            </Link>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-4">
              Cours Fondamentaux
            </h3>
            <Link
              href="/fondamentaux/cours-1"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 1 : Variables</span>
            </Link>
            <Link
              href="/fondamentaux/cours-2"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 2 : Types de données</span>
            </Link>
            <Link
              href="/fondamentaux/cours-3"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 3 : Structures de contrôle</span>
            </Link>
            <Link
              href="/fondamentaux/cours-4"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 4 : Collections avancées</span>
            </Link>
            <Link
              href="/fondamentaux/cours-5"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 5 : Fonctions de haut niveau</span>
            </Link>
            <Link
              href="/fondamentaux/cours-6"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 6 : Scope & Closures</span>
            </Link>
            <Link
              href="/fondamentaux/cours-7"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 7 : Scope de fonction et de bloc</span>
            </Link>
            <Link
              href="/fondamentaux/cours-8"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 8 : Hoisting et temporal dead zone</span>
            </Link>
            <Link
              href="/fondamentaux/cours-9"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 9 : Chaînes de scope</span>
            </Link>
            <Link
              href="/fondamentaux/cours-10"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 10 : Fonctions imbriquées</span>
            </Link>
            <Link
              href="/fondamentaux/cours-11"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 11 : Gestion d'état</span>
            </Link>
            <Link
              href="/fondamentaux/cours-12"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 12 : Gestion d'erreurs</span>
            </Link>
            <Link
              href="/fondamentaux/cours-13"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 13 : POO</span>
            </Link>
            <Link
              href="/fondamentaux/cours-14"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 14 : Modules</span>
            </Link>
            <Link
              href="/fondamentaux/cours-15"
              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <span>Cours 15 : Tests</span>
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
            <Link
              href="/fondamentaux/installation-python"
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                currentPage === "installation-python"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <GraduationCap className="h-5 w-5" />
              <span>Installation Python</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
