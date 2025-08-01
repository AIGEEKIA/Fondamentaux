import Link from 'next/link'
import { ArrowLeft, CheckCircle, Monitor, Activity, AlertTriangle, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Lecon16Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/fondamentaux" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span>Retour aux fondamentaux</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Monitor className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-semibold text-gray-800">Cours 16</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-blue-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-2 text-sm text-blue-600">
            <Link href="/" className="hover:text-blue-700">Accueil</Link>
            <span>/</span>
            <Link href="/fondamentaux" className="hover:text-blue-700">Fondamentaux</Link>
            <span>/</span>
            <span className="text-blue-800 font-medium">Observabilité et Monitoring</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Titre et objectifs */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🛡️ Observabilité et Monitoring
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Surveiller, analyser et optimiser vos applications en temps réel
          </p>
        </div>

        {/* Objectifs */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <CheckCircle className="h-6 w-6" />
              Objectifs du cours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">📊 Monitoring d'applications</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Métriques de performance</li>
                  <li>• Temps de réponse</li>
                  <li>• Taux d'erreur</li>
                  <li>• Utilisation des ressources</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">📈 Logs et métriques</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Centralisation des logs</li>
                  <li>• Agrégation de métriques</li>
                  <li>• Corrélation d'événements</li>
                  <li>• Analyse temporelle</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">🚨 Alerting et dashboards</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Seuils d'alerte</li>
                  <li>• Notifications</li>
                  <li>• Dashboards temps réel</li>
                  <li>• Escalade automatique</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">🔍 Observabilité avancée</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Distributed tracing</li>
                  <li>• APM (Application Performance Monitoring)</li>
                  <li>• SLO/SLI</li>
                  <li>• Chaos engineering</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analogies */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                🏥 Hôpital
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme un hôpital qui surveille les signes vitaux des patients en temps réel. 
                Les moniteurs affichent le rythme cardiaque, la tension, la température. 
                Les alertes se déclenchent quand un paramètre sort de la normale.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                🚗 Voiture connectée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme une voiture moderne avec ses capteurs qui surveillent l'huile, 
                la température, la pression des pneus. Le tableau de bord affiche 
                toutes les métriques importantes en temps réel.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                🏭 Usine intelligente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme une usine avec des capteurs partout qui surveillent la production, 
                la qualité, les déchets. Les tableaux de bord montrent l'efficacité 
                et alertent en cas de problème.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Exemples de code */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Exemples de code</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">Python - Monitoring avec Prometheus</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`from prometheus_client import Counter, Histogram, start_http_server
import time

# Métriques
request_count = Counter('http_requests_total', 'Total HTTP requests')
request_duration = Histogram('http_request_duration_seconds', 'HTTP request duration')

# Middleware de monitoring
def monitor_requests(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        request_count.inc()
        
        try:
            result = func(*args, **kwargs)
            return result
        finally:
            duration = time.time() - start_time
            request_duration.observe(duration)
    
    return wrapper

# Exemple d'utilisation
@monitor_requests
def api_endpoint():
    time.sleep(0.1)  # Simulation d'un traitement
    return {"status": "success"}

# Démarrer le serveur de métriques
start_http_server(8000)`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">JavaScript - Logging structuré</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Winston pour le logging structuré
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Middleware de logging
const logMiddleware = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('HTTP Request', {
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration: duration,
      userAgent: req.get('User-Agent')
    });
  });
  
  next();
};

// Exemple d'utilisation
app.use(logMiddleware);`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">TypeScript - APM avec Sentry</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import * as Sentry from '@sentry/node';

// Configuration Sentry
Sentry.init({
  dsn: 'your-sentry-dsn',
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

// Monitoring de performance
const performanceMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const transaction = Sentry.startTransaction({
    op: 'http.server',
    name: \`\${req.method} \${req.path}\`,
  });

  Sentry.getCurrentHub().configureScope(scope => {
    scope.setSpan(transaction);
  });

  res.on('finish', () => {
    transaction.setTag('http.status_code', res.statusCode);
    transaction.finish();
  });

  next();
};

// Monitoring d'erreurs
const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  Sentry.captureException(error);
  res.status(500).json({ error: 'Internal Server Error' });
};

app.use(performanceMiddleware);
app.use(errorHandler);`}
              </pre>
            </CardContent>
          </Card>
        </div>

        {/* Mini-application concept */}
        <Card className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">🎯 Mini-application : Dashboard de monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Créez un dashboard simple qui affiche :
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Métriques en temps réel (CPU, mémoire, réseau)</li>
              <li>• Graphiques avec Chart.js ou D3.js</li>
              <li>• Système d'alertes configurable</li>
              <li>• Logs en temps réel avec filtres</li>
              <li>• Notifications push pour les alertes critiques</li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                      <Link 
              href="/fondamentaux/lecon-15" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Cours précédent
            </Link>
            <Link 
              href="/fondamentaux/lecon-17" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              Cours suivant
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
        </div>
      </div>
    </div>
  )
} 