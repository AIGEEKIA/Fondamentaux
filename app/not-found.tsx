import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Page non trouvée</h2>
        <p className="text-gray-600 mb-6">La page que vous recherchez n'existe pas.</p>
        <a 
          href="/"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors inline-block"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  )
} 