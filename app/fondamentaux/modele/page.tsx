"use client";

import { useState } from "react";
import {
  Brain,
  Code,
  Database,
  Cloud,
  Home,
  Menu,
  X,
  BookOpen,
  ChefHat,
  ArrowRight,
  CheckCircle,
  Play,
  Target,
  Lightbulb,
  Users,
  GraduationCap,
  Package,
  Shield,
  Wrench,
  Hammer,
  Building2,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  AlertCircle,
  ArrowLeft,
  Gamepad2,
  Sprout,
  Leaf,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import HamburgerMenu from "@/components/hamburger-menu";
import Image from "next/image";

export default function CoursModelePage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, language: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // ANALOGIES - À PERSONNALISER
  const analogies = {
    cuisine: {
      title: "🍳 Cuisine",
      description: "Description de l'analogie cuisine",
      examples: ["exemple1", "exemple2", "exemple3"],
      explanation: "Explication de l'analogie cuisine",
    },
    gamer: {
      title: "🎮 Gamer",
      description: "Description de l'analogie gamer",
      examples: ["exemple1", "exemple2", "exemple3"],
      explanation: "Explication de l'analogie gamer",
    },
    jardinage: {
      title: "🌱 Jardinage",
      description: "Description de l'analogie jardinage",
      examples: ["exemple1", "exemple2", "exemple3"],
      explanation: "Explication de l'analogie jardinage",
    },
  };

  // QUIZ - À PERSONNALISER
  const [quizStates, setQuizStates] = useState<{
    [key: string]: boolean | number;
  }>({});

  const handleQuizAnswer = (quizId: string, selectedAnswer: number) => {
    setQuizStates((prev) => ({
      ...prev,
      [quizId]: selectedAnswer,
    }));
  };

  const QuizComponent = ({ quizId, quiz }: { quizId: string; quiz: any }) => {
    const isAnswered = Boolean(quizStates[quizId]);
    const selectedAnswer = quizStates[`${quizId}_selected`] as number;

    return (
      <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-lg p-6 border-2 border-purple-300/50">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="h-6 w-6 text-purple-600" />
          <h3 className="text-xl font-bold text-gray-800">
            Quiz : {quiz.question}
          </h3>
        </div>

        <div className="space-y-3 mb-6">
          {quiz.options.map((option: string, index: number) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnswered) {
                  setQuizStates((prev) => ({
                    ...prev,
                    [quizId]: true,
                    [`${quizId}_selected`]: index,
                  }));
                  handleQuizAnswer(quizId, index);
                }
              }}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                isAnswered
                  ? index === quiz.correctAnswer
                    ? "border-green-500 bg-green-50 text-green-800"
                    : index === selectedAnswer
                    ? "border-red-500 bg-red-50 text-red-800"
                    : "border-gray-200 bg-gray-50 text-gray-600"
                  : "border-gray-200 hover:border-purple-300 hover:bg-purple-50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {isAnswered && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 font-semibold">
              {selectedAnswer === quiz.correctAnswer
                ? "✅ Correct !"
                : "❌ Incorrect"}
            </p>
            <p className="text-blue-700 mt-2">{quiz.explication}</p>
          </div>
        )}
      </div>
    );
  };

  const quizData = {
    quiz1: {
      question: "Question 1 - À personnaliser",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0,
      explication: "Explication de la réponse correcte",
    },
    quiz2: {
      question: "Question 2 - À personnaliser",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 1,
      explication: "Explication de la réponse correcte",
    },
    quiz3: {
      question: "Question 3 - À personnaliser",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 2,
      explication: "Explication de la réponse correcte",
    },
  };

  // EXEMPLES DE CODE - À PERSONNALISER
  const pythonCode = `# Exemple de code Python - À personnaliser

# Code Python ici
print("Hello World")`;

  const javascriptCode = `// Exemple de code JavaScript - À personnaliser

// Code JavaScript ici
console.log("Hello World");`;

  const typescriptCode = `// Exemple de code TypeScript - À personnaliser

// Code TypeScript ici
console.log("Hello World");`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header avec Menu Hamburger */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/Logo_AIGEEKIA.png"
                  alt="Logo AIGEEKIA"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold text-gray-800">
                  AIGEEKIA
                </span>
              </Link>
            </div>
            <HamburgerMenu />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête du Cours */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold text-gray-800">
                    📚 TITRE DU COURS - À PERSONNALISER
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Description du cours - À personnaliser
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </section>

        {/* Objectifs */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    🎯 OBJECTIFS
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Ce que vous allez apprendre dans ce cours
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <strong className="text-gray-800">Objectif 1</strong>
                    <p className="text-sm text-gray-600">
                      Description de l'objectif 1
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <strong className="text-gray-800">Objectif 2</strong>
                    <p className="text-sm text-gray-600">
                      Description de l'objectif 2
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <strong className="text-gray-800">Objectif 3</strong>
                    <p className="text-sm text-gray-600">
                      Description de l'objectif 3
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Analogies Universelles */}
        <section className="mb-12">
          <Card className="mb-8 bg-gradient-to-r from-blue-100 to-blue-100 border-2 border-blue-300 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                🌟 Analogies Simples
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Trois façons de comprendre le concept selon votre univers
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Analogies côte à côte */}
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(analogies).map(([key, analogy]) => (
                  <div
                    key={key}
                    className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-6 border-2 border-blue-300 shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {analogy.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{analogy.description}</p>
                    <p className="text-gray-700 mb-4">{analogy.explanation}</p>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Exemples :
                      </h4>
                      <div className="space-y-2">
                        {analogy.examples.map((example, index) => (
                          <div
                            key={index}
                            className="bg-white rounded p-2 border border-blue-200 shadow-sm"
                          >
                            <code className="text-sm text-blue-600">
                              {example}
                            </code>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Définition Simple */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    📖 DÉFINITION SIMPLE
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Le concept, c'est quoi exactement ?
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🎯 Qu'est-ce que le concept ?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Description du concept - À personnaliser avec des
                    explications détaillées.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Autres explications importantes - À personnaliser.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="font-semibold text-blue-800">
                        Concept 1
                      </div>
                      <div className="text-sm text-blue-600">
                        Description du concept 1
                      </div>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-4">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="font-semibold text-purple-800">
                        Concept 2
                      </div>
                      <div className="text-sm text-purple-600">
                        Description du concept 2
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    🔤 Les Points Clés
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="font-semibold text-orange-800">
                        Point Clé 1
                      </div>
                      <div className="text-sm text-orange-600">
                        Description du point clé 1
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="font-semibold text-orange-800">
                        Point Clé 2
                      </div>
                      <div className="text-sm text-orange-600">
                        Description du point clé 2
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="font-semibold text-orange-800">
                        Point Clé 3
                      </div>
                      <div className="text-sm text-orange-600">
                        Description du point clé 3
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="font-semibold text-orange-800">
                        Point Clé 4
                      </div>
                      <div className="text-sm text-orange-600">
                        Description du point clé 4
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-green-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    💡 Pourquoi c'est important ?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <div>
                        <strong className="text-gray-800">Avantage 1</strong>
                        <p className="text-sm text-gray-600">
                          Description de l'avantage 1
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <div>
                        <strong className="text-gray-800">Avantage 2</strong>
                        <p className="text-sm text-gray-600">
                          Description de l'avantage 2
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <div>
                        <strong className="text-gray-800">Avantage 3</strong>
                        <p className="text-sm text-gray-600">
                          Description de l'avantage 3
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Exemples de Code */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 border-2 border-gray-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    💻 Exemples de Code
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Voir le concept en action dans différents langages
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Python */}
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 font-mono text-sm">
                        Python
                      </span>
                      <Link
                        href="/langages/python"
                        className="text-blue-400 hover:text-blue-300 text-xs underline cursor-pointer"
                      >
                        En savoir plus sur Python
                      </Link>
                    </div>
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                    <code>{pythonCode}</code>
                  </pre>
                </div>

                {/* JavaScript */}
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 font-mono text-sm">
                        JavaScript
                      </span>
                      <Link
                        href="/langages/javascript"
                        className="text-blue-400 hover:text-blue-300 text-xs underline cursor-pointer"
                      >
                        En savoir plus sur JavaScript
                      </Link>
                    </div>
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                    <code>{javascriptCode}</code>
                  </pre>
                </div>

                {/* TypeScript */}
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 font-mono text-sm">
                        TypeScript
                      </span>
                      <Link
                        href="/langages/typescript"
                        className="text-blue-400 hover:text-blue-300 text-xs underline cursor-pointer"
                      >
                        En savoir plus sur TypeScript
                      </Link>
                    </div>
                  </div>
                  <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                    <code>{typescriptCode}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mini-Application */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-300/50 shadow-xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    🎮 Mini-Application
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Testez vos connaissances avec cette mini-application
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Application Interactive
                </h3>
                <p className="text-gray-700 mb-4">
                  Description de la mini-application - À personnaliser
                </p>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <p className="text-gray-600 text-center">
                    Zone interactive - À personnaliser
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quiz Interactifs */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-2 border-purple-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                🧠 Quiz Interactifs
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Testez votre compréhension du concept
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {Object.entries(quizData).map(([quizId, quiz]) => (
                  <QuizComponent key={quizId} quizId={quizId} quiz={quiz} />
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-2 border-blue-300/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                🚀 Prêt pour la suite ?
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Description de la suite - À personnaliser
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Cours suivant - À personnaliser
                  </h3>
                  <p className="text-gray-600">Description du cours suivant</p>
                </div>
                <Link
                  href="/fondamentaux/cours-suivant"
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>Continuer</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
