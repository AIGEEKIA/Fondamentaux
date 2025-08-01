import Link from 'next/link'
import { ArrowLeft, CheckCircle, GitBranch, Zap, Settings, Workflow } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Lecon17Page() {
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
                <GitBranch className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-semibold text-gray-800">Cours 17</span>
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
            <span className="text-blue-800 font-medium">Automatisation et GitOps</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Titre et objectifs */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ⚡ Automatisation et GitOps
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automatiser vos déploiements et gérer l'infrastructure comme du code
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
                <h3 className="font-semibold text-blue-700">🔄 CI/CD Pipelines</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Intégration continue</li>
                  <li>• Déploiement continu</li>
                  <li>• Tests automatisés</li>
                  <li>• Rollback automatique</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">🏗️ Infrastructure as Code</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Terraform/CloudFormation</li>
                  <li>• Configuration management</li>
                  <li>• Versioning de l'infra</li>
                  <li>• Multi-environnements</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">📦 GitOps Workflows</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Git comme source de vérité</li>
                  <li>• ArgoCD/Flux</li>
                  <li>• Pull-based deployments</li>
                  <li>• Drift detection</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">🤖 Automatisation avancée</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Self-healing systems</li>
                  <li>• Auto-scaling</li>
                  <li>• Chaos engineering</li>
                  <li>• Blue-green deployments</li>
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
                🏭 Usine robotisée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme une usine moderne où les robots assemblent automatiquement les produits. 
                Chaque étape est programmée, testée et exécutée sans intervention humaine. 
                Si un problème survient, le système s'arrête et alerte.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                🏠 Maison intelligente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme une maison connectée où tout est automatisé : éclairage, chauffage, 
                sécurité. Les règles sont définies dans un système central et s'exécutent 
                automatiquement selon les conditions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                🚗 Voiture autonome
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme une voiture autonome qui suit un GPS et des règles de conduite. 
                Elle s'adapte automatiquement aux conditions de route, freine si nécessaire, 
                et suit le chemin défini sans intervention.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Exemples de code */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Exemples de code</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">Python - Pipeline CI/CD avec GitHub Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
      
      - name: Install dependencies
        run: |
          pip install -r requirements.txt
          pip install pytest
      
      - name: Run tests
        run: pytest

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: |
          echo "Deploying to production..."
          # Script de déploiement
          ./deploy.sh production`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">JavaScript - Infrastructure as Code avec Terraform</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "us-west-2"
}

# VPC
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "main-vpc"
    Environment = "production"
  }
}

# Subnet
resource "aws_subnet" "main" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
  
  tags = {
    Name = "main-subnet"
  }
}

# Security Group
resource "aws_security_group" "app" {
  name        = "app-sg"
  description = "Security group for application"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">TypeScript - GitOps avec ArgoCD</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// argocd-app.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/myorg/myapp
    targetRevision: HEAD
    path: k8s
  destination:
    server: https://kubernetes.default.svc
    namespace: production
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
      - CreateNamespace=true
    retry:
      limit: 5
      backoff:
        duration: 5s
        factor: 2
        maxDuration: 3m

// k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: myapp:latest
        ports:
        - containerPort: 8080`}
              </pre>
            </CardContent>
          </Card>
        </div>

        {/* Mini-application concept */}
        <Card className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">🎯 Mini-application : Pipeline CI/CD</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Créez un pipeline CI/CD complet qui :
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Détecte les changements dans Git</li>
              <li>• Lance automatiquement les tests</li>
              <li>• Construit l'image Docker</li>
              <li>• Déploie en staging puis production</li>
              <li>• Envoie des notifications Slack/Email</li>
              <li>• Permet le rollback en un clic</li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                      <Link 
              href="/fondamentaux/lecon-16" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Cours précédent
            </Link>
            <Link 
              href="/fondamentaux/lecon-18" 
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