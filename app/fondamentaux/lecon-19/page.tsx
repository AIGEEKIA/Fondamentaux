import Link from 'next/link'
import { ArrowLeft, CheckCircle, Brain, Shield, Eye, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Lecon29Page() {
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
                <Brain className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-semibold text-gray-800">Cours 29</span>
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
            <span className="text-blue-800 font-medium">IA et Sécurité Avancée</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Titre et objectifs */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🤖 IA et Sécurité Avancée
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utiliser l'intelligence artificielle pour détecter et prévenir les menaces
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
                <h3 className="font-semibold text-blue-700">🧠 IA pour la sécurité</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Machine Learning pour détection</li>
                  <li>• Analyse comportementale</li>
                  <li>• Prédiction de menaces</li>
                  <li>• Automatisation de la réponse</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">🔍 Threat Detection</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Anomaly detection</li>
                  <li>• Pattern recognition</li>
                  <li>• Real-time monitoring</li>
                  <li>• False positive reduction</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">🤖 Machine Learning en cybersécurité</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Classification de malware</li>
                  <li>• NLP pour analyse de logs</li>
                  <li>• Computer vision pour CAPTCHA</li>
                  <li>• Reinforcement learning</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">🛡️ Sécurité de l'IA</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Adversarial attacks</li>
                  <li>• Model poisoning</li>
                  <li>• Privacy-preserving ML</li>
                  <li>• Explainable AI</li>
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
                🏥 Médecin IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme un médecin qui utilise l'IA pour analyser les radios, détecter 
                les anomalies et prédire les risques. L'IA apprend des millions de cas 
                pour identifier des patterns invisibles à l'œil humain.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                🚔 Détective intelligent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme un détective qui utilise des outils avancés pour analyser les 
                indices, reconnaître les patterns criminels et prédire où le prochain 
                crime pourrait se produire.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                🛡️ Système immunitaire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme le système immunitaire qui apprend à reconnaître les virus, 
                s'adapte aux nouvelles menaces et développe des anticorps spécifiques 
                pour chaque type d'attaque.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Exemples de code */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Exemples de code</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">Python - Détection d'anomalies avec ML</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import numpy as np
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import StandardScaler
import pandas as pd

class AnomalyDetector:
    def __init__(self):
        self.model = IsolationForest(
            contamination=0.1,
            random_state=42
        )
        self.scaler = StandardScaler()
        self.is_fitted = False
    
    def train(self, data):
        """Entraîner le modèle avec des données normales"""
        # Normaliser les données
        scaled_data = self.scaler.fit_transform(data)
        
        # Entraîner le modèle
        self.model.fit(scaled_data)
        self.is_fitted = True
    
    def detect_anomalies(self, data):
        """Détecter les anomalies dans de nouvelles données"""
        if not self.is_fitted:
            raise ValueError("Le modèle doit être entraîné d'abord")
        
        # Normaliser les données
        scaled_data = self.scaler.transform(data)
        
        # Prédire les anomalies (-1 = anomalie, 1 = normal)
        predictions = self.model.predict(scaled_data)
        
        # Calculer le score d'anomalie
        scores = self.model.decision_function(scaled_data)
        
        return predictions, scores
    
    def analyze_network_traffic(self, traffic_data):
        """Analyser le trafic réseau pour détecter des anomalies"""
        features = [
            'bytes_sent', 'bytes_received', 'packets_sent',
            'packets_received', 'duration', 'connections'
        ]
        
        # Extraire les features
        X = traffic_data[features].values
        
        # Détecter les anomalies
        predictions, scores = self.detect_anomalies(X)
        
        # Identifier les connexions suspectes
        anomalies = traffic_data[predictions == -1]
        
        return anomalies, scores

# Exemple d'utilisation
detector = AnomalyDetector()

# Données d'entraînement (trafic normal)
normal_traffic = pd.read_csv('normal_traffic.csv')
detector.train(normal_traffic[['bytes_sent', 'bytes_received', 'duration']])

# Détecter les anomalies
new_traffic = pd.read_csv('new_traffic.csv')
anomalies, scores = detector.analyze_network_traffic(new_traffic)

print(f"Détecté {len(anomalies)} connexions suspectes")`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">JavaScript - NLP pour analyse de logs</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Analyse de logs avec NLP
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

class LogAnalyzer {
  constructor() {
    this.classifier = new natural.BayesClassifier();
    this.suspiciousPatterns = [
      'failed login',
      'unauthorized access',
      'sql injection',
      'xss attack',
      'brute force'
    ];
  }
  
  trainClassifier(logs) {
    logs.forEach(log => {
      const tokens = tokenizer.tokenize(log.message.toLowerCase());
      const category = this.categorizeLog(log);
      this.classifier.addDocument(tokens, category);
    });
    
    this.classifier.train();
  }
  
  categorizeLog(log) {
    const message = log.message.toLowerCase();
    
    // Détecter les patterns suspects
    for (const pattern of this.suspiciousPatterns) {
      if (message.includes(pattern)) {
        return 'suspicious';
      }
    }
    
    // Analyser la fréquence
    if (this.isHighFrequency(log)) {
      return 'potential_attack';
    }
    
    return 'normal';
  }
  
  isHighFrequency(log) {
    const timeWindow = 5 * 60 * 1000; // 5 minutes
    const recentLogs = this.getRecentLogs(log.ip, timeWindow);
    return recentLogs.length > 10; // Plus de 10 tentatives en 5 min
  }
  
  analyzeLogs(newLogs) {
    const analysis = {
      suspicious: [],
      potential_attacks: [],
      normal: []
    };
    
    newLogs.forEach(log => {
      const tokens = tokenizer.tokenize(log.message.toLowerCase());
      const category = this.classifier.classify(tokens);
      
      analysis[category].push({
        ...log,
        confidence: this.classifier.getClassifications(tokens)[0].value
      });
    });
    
    return analysis;
  }
  
  detectAnomalies(logs) {
    const anomalies = [];
    
    logs.forEach(log => {
      const analysis = this.analyzeLogs([log]);
      
      if (analysis.suspicious.length > 0 || analysis.potential_attacks.length > 0) {
        anomalies.push({
          log,
          threat_level: analysis.suspicious.length > 0 ? 'high' : 'medium',
          reason: this.getThreatReason(log)
        });
      }
    });
    
    return anomalies;
  }
}

// Exemple d'utilisation
const analyzer = new LogAnalyzer();

// Entraîner avec des logs historiques
const historicalLogs = [
  { message: 'User login successful', ip: '192.168.1.1', timestamp: Date.now() },
  { message: 'Failed login attempt', ip: '192.168.1.2', timestamp: Date.now() },
  { message: 'SQL injection detected', ip: '192.168.1.3', timestamp: Date.now() }
];

analyzer.trainClassifier(historicalLogs);

// Analyser de nouveaux logs
const newLogs = [
  { message: 'Multiple failed logins', ip: '192.168.1.4', timestamp: Date.now() }
];

const anomalies = analyzer.detectAnomalies(newLogs);
console.log('Anomalies détectées:', anomalies);`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">TypeScript - Adversarial ML Defense</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`interface SecurityModel {
  predict(input: number[]): number;
  train(data: number[][]): void;
}

class AdversarialDefense {
  private model: SecurityModel;
  private defenseThreshold: number = 0.8;
  
  constructor(model: SecurityModel) {
    this.model = model;
  }
  
  // Détecter les attaques adversariales
  detectAdversarialAttack(input: number[]): boolean {
    const originalPrediction = this.model.predict(input);
    
    // Générer des perturbations
    const perturbations = this.generatePerturbations(input);
    
    // Vérifier la stabilité du modèle
    const predictions = perturbations.map(p => this.model.predict(p));
    const predictionVariance = this.calculateVariance(predictions);
    
    // Si la variance est élevée, c'est probablement une attaque
    return predictionVariance > this.defenseThreshold;
  }
  
  // Défense par robustification
  robustifyModel(trainingData: number[][]): void {
    // Ajouter du bruit aux données d'entraînement
    const augmentedData = trainingData.map(sample => 
      this.addNoise(sample, 0.1)
    );
    
    // Ré-entraîner le modèle avec les données robustifiées
    this.model.train([...trainingData, ...augmentedData]);
  }
  
  // Validation d'entrée
  validateInput(input: number[]): boolean {
    // Vérifier les valeurs aberrantes
    const mean = input.reduce((a, b) => a + b) / input.length;
    const std = Math.sqrt(
      input.reduce((sq, n) => sq + Math.pow(n - mean, 2), 0) / input.length
    );
    
    // Rejeter les entrées trop éloignées de la moyenne
    return input.every(value => 
      Math.abs(value - mean) < 3 * std
    );
  }
  
  // Système de détection multi-couches
  securePrediction(input: number[]): { prediction: number; confidence: number; isSecure: boolean } {
    // Validation d'entrée
    if (!this.validateInput(input)) {
      return { prediction: -1, confidence: 0, isSecure: false };
    }
    
    // Détection d'attaque adversarial
    if (this.detectAdversarialAttack(input)) {
      return { prediction: -1, confidence: 0, isSecure: false };
    }
    
    // Prédiction sécurisée
    const prediction = this.model.predict(input);
    const confidence = this.calculateConfidence(input);
    
    return {
      prediction,
      confidence,
      isSecure: confidence > 0.7
    };
  }
  
  private generatePerturbations(input: number[]): number[][] {
    const perturbations = [];
    const epsilon = 0.01;
    
    for (let i = 0; i < input.length; i++) {
      const perturbed = [...input];
      perturbed[i] += epsilon;
      perturbations.push(perturbed);
      
      const perturbed2 = [...input];
      perturbed2[i] -= epsilon;
      perturbations.push(perturbed2);
    }
    
    return perturbations;
  }
  
  private calculateVariance(predictions: number[]): number {
    const mean = predictions.reduce((a, b) => a + b) / predictions.length;
    return predictions.reduce((sq, n) => sq + Math.pow(n - mean, 2), 0) / predictions.length;
  }
  
  private addNoise(sample: number[], noiseLevel: number): number[] {
    return sample.map(value => 
      value + (Math.random() - 0.5) * noiseLevel
    );
  }
  
  private calculateConfidence(input: number[]): number {
    // Logique de calcul de confiance
    return 0.85; // Exemple simplifié
  }
}

// Exemple d'utilisation
const securityModel: SecurityModel = {
  predict: (input) => Math.random(),
  train: (data) => console.log('Training...')
};

const defense = new AdversarialDefense(securityModel);

// Prédiction sécurisée
const result = defense.securePrediction([1, 2, 3, 4, 5]);
console.log('Résultat sécurisé:', result);`}
              </pre>
            </CardContent>
          </Card>
        </div>

        {/* Mini-application concept */}
        <Card className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">🎯 Mini-application : Système de détection d'intrusion IA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Créez un système de détection d'intrusion intelligent qui :
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Analyse le trafic réseau en temps réel</li>
              <li>• Détecte les patterns suspects avec ML</li>
              <li>• Apprend des nouvelles menaces</li>
              <li>• Génère des alertes intelligentes</li>
              <li>• S'adapte automatiquement aux nouvelles attaques</li>
              <li>• Fournit des explications sur les détections</li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                      <Link 
              href="/fondamentaux/lecon-18" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Cours précédent
            </Link>
            <Link 
              href="/fondamentaux/lecon-20" 
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