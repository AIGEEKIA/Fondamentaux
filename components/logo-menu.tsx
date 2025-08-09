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
import Image from "next/image";

interface LogoMenuProps {
  currentPage?: string;
  photoUrl?: string;
}

export default function LogoMenu({ currentPage, photoUrl }: LogoMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-8 right-12 z-50">
      {/* Bouton menu ultra-stable - AUCUN MOUVEMENT */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex flex-col items-center bg-gradient-to-b from-blue-800 to-white rounded-full shadow-lg border border-blue-400 p-2"
        style={{
          transform: "none",
          transition: "none",
          willChange: "auto",
          userSelect: "none",
          pointerEvents: "auto",
        }}
      >
        {/* Logo fixe */}
        <div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg border border-blue-100 flex items-center justify-center overflow-hidden mb-2"
          style={{
            transform: "none",
            transition: "none",
            willChange: "auto",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          <Image
            src="/Logo_AIGEEKIA.png"
            alt="Logo AIGEEKIA"
            width={200}
            height={200}
            className="object-cover rounded-full"
            priority
            style={{
              transform: "none",
              transition: "none",
              willChange: "auto",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Texte AIGEEKIA fixe */}
        <div className="mb-2">
          <span className="font-bold text-blue-700 text-xs">AIGEEKIA</span>
        </div>

        {/* Icône menu fixe */}
        <div className="mt-1">
          {isMenuOpen ? (
            <X className="h-4 w-4 text-blue-600" />
          ) : photoUrl ? (
            <div className="w-4 h-4 rounded-full overflow-hidden">
              <Image
                src={photoUrl}
                alt="Photo utilisateur"
                width={16}
                height={16}
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <Menu className="h-4 w-4 text-blue-600" />
          )}
        </div>
      </button>

      {/* Menu déroulant - position absolue pour ne pas affecter le logo */}
      {isMenuOpen && (
        <div
          className="absolute bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-200 p-4 min-w-[280px] max-h-[80vh] overflow-y-auto"
          style={{
            top: "100%",
            right: "0",
            marginTop: "0.5rem",
            transform: "none",
            transition: "none",
            willChange: "auto",
          }}
        >
          <div className="space-y-2">
            <Link
              href="/"
              className={`flex items-center gap-3 p-3 rounded-lg ${
                currentPage === "accueil"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:text-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Accueil</span>
            </Link>
            <Link
              href="/analogie-cuisine"
              className={`flex items-center gap-3 p-3 rounded-lg ${
                currentPage === "analogie-cuisine"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:text-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <ChefHat className="h-5 w-5" />
              <span>Analogie Cuisine</span>
            </Link>
            <Link
              href="/analogie-architecture"
              className={`flex items-center gap-3 p-3 rounded-lg ${
                currentPage === "analogie-architecture"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:text-blue-700"
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
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 1 : Variables</span>
            </Link>
            <Link
              href="/fondamentaux/cours-2"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 2 : Types de données</span>
            </Link>
            <Link
              href="/fondamentaux/cours-3"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 3 : Structures de contrôle</span>
            </Link>
            <Link
              href="/fondamentaux/cours-4"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 4 : Collections avancées</span>
            </Link>
            <Link
              href="/fondamentaux/cours-5"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 5 : Fonctions de haut niveau</span>
            </Link>
            <Link
              href="/fondamentaux/cours-6"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 6 : Scope & Closures</span>
            </Link>
            <Link
              href="/fondamentaux/cours-7"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 7 : Scope fonction et bloc</span>
            </Link>
            <Link
              href="/fondamentaux/cours-8"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 8 : Hoisting et TDZ</span>
            </Link>
            <Link
              href="/fondamentaux/cours-9"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 9 : Chaînes de scope</span>
            </Link>
            <Link
              href="/fondamentaux/cours-10"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 10 : Fonctions imbriquées</span>
            </Link>
            <Link
              href="/fondamentaux/cours-11"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 11 : Gestion d'état</span>
            </Link>
            <Link
              href="/fondamentaux/cours-12"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 12 : Gestion d'erreurs</span>
            </Link>
            <Link
              href="/fondamentaux/cours-13"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 13 : POO</span>
            </Link>
            <Link
              href="/fondamentaux/cours-14"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Cours 14 : Modules</span>
            </Link>
            <Link
              href="/fondamentaux/cours-15"
              className="block p-3 rounded-lg text-gray-700 hover:text-blue-700"
              onClick={() => setIsMenuOpen(false)}
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
              className={`flex items-center gap-3 p-3 rounded-lg ${
                currentPage === "python"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:text-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Code className="h-5 w-5" />
              <span>Python</span>
            </Link>
            <Link
              href="/langages/javascript"
              className={`flex items-center gap-3 p-3 rounded-lg ${
                currentPage === "javascript"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:text-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Code className="h-5 w-5" />
              <span>JavaScript</span>
            </Link>
            <Link
              href="/langages/typescript"
              className={`flex items-center gap-3 p-3 rounded-lg ${
                currentPage === "typescript"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:text-blue-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Code className="h-5 w-5" />
              <span>TypeScript</span>
            </Link>
            <Link
              href="/fondamentaux/installation-python"
              className={`flex items-center gap-3 p-3 rounded-lg ${
                currentPage === "installation-python"
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:text-blue-700"
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
