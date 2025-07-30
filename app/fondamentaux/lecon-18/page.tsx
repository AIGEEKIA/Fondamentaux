import Link from 'next/link'
import { ArrowLeft, CheckCircle, Shield, Lock, Eye, Key } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Lecon28Page() {
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
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-semibold text-gray-800">Cours 28</span>
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
            <span className="text-blue-800 font-medium">Sécurité Cloud et Zero Trust</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Titre et objectifs */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🛡️ Sécurité Cloud et Zero Trust
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sécuriser vos applications cloud avec les principes Zero Trust
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
                <h3 className="font-semibold text-blue-700">☁️ Sécurité Cloud Native</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Security by design</li>
                  <li>• Cloud security posture</li>
                  <li>• Compliance (GDPR, SOC2)</li>
                  <li>• Threat modeling</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">🔐 Zero Trust Architecture</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Never trust, always verify</li>
                  <li>• Identity-based security</li>
                  <li>• Micro-segmentation</li>
                  <li>• Least privilege access</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">🔑 Identity and Access Management</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Multi-factor authentication</li>
                  <li>• Single sign-on (SSO)</li>
                  <li>• Role-based access control</li>
                  <li>• Privileged access management</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">🛡️ Sécurité avancée</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Web Application Firewall</li>
                  <li>• DDoS protection</li>
                  <li>• Encryption at rest/transit</li>
                  <li>• Security monitoring</li>
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
                🏛️ Banque sécurisée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme une banque avec plusieurs niveaux de sécurité : vérification d'identité, 
                codes d'accès, caméras, coffres-forts. Chaque personne n'a accès qu'à ce 
                dont elle a besoin, jamais plus.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                🏰 Château fort
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme un château avec douves, pont-levis, murs épais, tours de guet. 
                Chaque visiteur est vérifié à chaque porte, même s'il était là hier. 
                Personne n'est jamais complètement de confiance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                🛡️ Armure moderne
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme une armure moderne avec plusieurs couches de protection : gilet pare-balles, 
                casque, protections articulaires. Chaque couche protège contre des menaces 
                spécifiques et s'adapte aux conditions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Exemples de code */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Exemples de code</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">Python - Zero Trust avec JWT</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import jwt
import time
from functools import wraps
from flask import request, jsonify

# Configuration
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

def verify_token(token):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        
        if not token:
            return jsonify({'error': 'Token manquant'}), 401
        
        # Enlever "Bearer " du token
        token = token.replace('Bearer ', '')
        
        payload = verify_token(token)
        if not payload:
            return jsonify({'error': 'Token invalide'}), 401
        
        # Vérifier les permissions
        required_role = kwargs.get('required_role')
        if required_role and required_role not in payload.get('roles', []):
            return jsonify({'error': 'Permissions insuffisantes'}), 403
        
        return f(*args, **kwargs)
    return decorated

# Exemple d'utilisation
@app.route('/api/admin')
@require_auth
def admin_endpoint():
    return jsonify({'message': 'Accès admin autorisé'})

@app.route('/api/user')
@require_auth
def user_endpoint():
    return jsonify({'message': 'Accès utilisateur autorisé'})`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">JavaScript - WAF avec Express</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();

// Middleware de sécurité
app.use(helmet()); // Headers de sécurité
app.use(cors({
  origin: ['https://yourdomain.com'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per windowMs
  message: 'Trop de requêtes, réessayez plus tard'
});
app.use('/api/', limiter);

// Validation des entrées
const validateInput = (req, res, next) => {
  const { email, password } = req.body;
  
  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email invalide' });
  }
  
  // Validation password
  if (password.length < 8) {
    return res.status(400).json({ error: 'Mot de passe trop court' });
  }
  
  // Protection contre les injections
  const sqlInjectionPattern = /(\b(union|select|insert|delete|drop|create)\b)/i;
  if (sqlInjectionPattern.test(email) || sqlInjectionPattern.test(password)) {
    return res.status(400).json({ error: 'Caractères non autorisés' });
  }
  
  next();
};

app.use('/api/auth', validateInput);

// Middleware de logging de sécurité
app.use((req, res, next) => {
  const securityLog = {
    timestamp: new Date().toISOString(),
    ip: req.ip,
    method: req.method,
    url: req.url,
    userAgent: req.get('User-Agent')
  };
  
  console.log('Security Log:', securityLog);
  next();
});`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">TypeScript - IAM avec AWS</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import { IAMClient, CreateUserCommand, AttachUserPolicyCommand } from '@aws-sdk/client-iam';

interface UserPermissions {
  username: string;
  policies: string[];
  groups: string[];
}

class IAMManager {
  private client: IAMClient;
  
  constructor() {
    this.client = new IAMClient({ region: 'us-east-1' });
  }
  
  async createUserWithPermissions(user: UserPermissions): Promise<void> {
    try {
      // Créer l'utilisateur
      await this.client.send(new CreateUserCommand({
        UserName: user.username
      }));
      
      // Attacher les politiques
      for (const policy of user.policies) {
        await this.client.send(new AttachUserPolicyCommand({
          UserName: user.username,
          PolicyArn: policy
        }));
      }
      
      console.log(\`Utilisateur \${user.username} créé avec succès\`);
    } catch (error) {
      console.error('Erreur lors de la création:', error);
      throw error;
    }
  }
  
  // Vérification des permissions
  async checkUserPermissions(username: string): Promise<string[]> {
    // Logique de vérification des permissions
    return ['s3:read', 'ec2:describe'];
  }
}

// Exemple d'utilisation
const iamManager = new IAMManager();

const newUser: UserPermissions = {
  username: 'john.doe',
  policies: [
    'arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess',
    'arn:aws:iam::aws:policy/AmazonEC2ReadOnlyAccess'
  ],
  groups: ['developers']
};

await iamManager.createUserWithPermissions(newUser);`}
              </pre>
            </CardContent>
          </Card>
        </div>

        {/* Mini-application concept */}
        <Card className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">🎯 Mini-application : Système d'authentification sécurisé</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Créez un système d'authentification complet avec :
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Authentification multi-facteurs (SMS, Email, TOTP)</li>
              <li>• Gestion des sessions sécurisées</li>
              <li>• Rate limiting et protection DDoS</li>
              <li>• Audit trail des connexions</li>
              <li>• Gestion des rôles et permissions</li>
              <li>• Chiffrement des données sensibles</li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                      <Link 
              href="/fondamentaux/lecon-17" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Cours précédent
            </Link>
            <Link 
              href="/fondamentaux/lecon-19" 
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