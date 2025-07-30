import Link from 'next/link'
import { ArrowLeft, CheckCircle, Search, Shield, Target, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Lecon30Page() {
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
                <Search className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-semibold text-gray-800">Cours 30</span>
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
            <span className="text-blue-800 font-medium">Threat Hunting et DevSecOps</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Titre et objectifs */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🔍 Threat Hunting et DevSecOps
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chasser activement les menaces et intégrer la sécurité dans le développement
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
                <h3 className="font-semibold text-blue-700">🔍 Threat Hunting</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hypothèses de menaces</li>
                  <li>• Analyse proactive</li>
                  <li>• Investigation forensique</li>
                  <li>• IOC et TTP</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">🛡️ DevSecOps Practices</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Security as Code</li>
                  <li>• SAST/DAST/IAST</li>
                  <li>• Container security</li>
                  <li>• Compliance automation</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">🤖 Security Automation</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• SOAR (Security Orchestration)</li>
                  <li>• Playbooks automatisés</li>
                  <li>• Incident response</li>
                  <li>• Threat intelligence</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-700">📊 Security Metrics</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mean Time to Detection</li>
                  <li>• Mean Time to Response</li>
                  <li>• Security ROI</li>
                  <li>• Risk scoring</li>
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
                🕵️ Détective privé
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme un détective qui suit des pistes, analyse des indices et 
                développe des hypothèses sur les crimes. Il utilise des techniques 
                avancées pour découvrir ce qui se cache sous la surface.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                🏭 Usine sécurisée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme une usine où la sécurité est intégrée à chaque étape de production. 
                Les contrôles qualité incluent des vérifications de sécurité, et 
                l'automatisation assure la cohérence.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                🚨 Centre de commandement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comme un centre de commandement militaire qui coordonne les opérations, 
                analyse les menaces en temps réel et déploie automatiquement les 
                ressources appropriées.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Exemples de code */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">💻 Exemples de code</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">Python - Threat Hunting avec YARA</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`import yara
import os
import json
from datetime import datetime

class ThreatHunter:
    def __init__(self):
        self.rules = {}
        self.load_yara_rules()
    
    def load_yara_rules(self):
        """Charger les règles YARA pour la détection"""
        rules_dir = "yara_rules/"
        
        for filename in os.listdir(rules_dir):
            if filename.endswith('.yar'):
                rule_path = os.path.join(rules_dir, filename)
                try:
                    self.rules[filename] = yara.compile(rule_path)
                except Exception as e:
                    print(f"Erreur lors du chargement de {filename}: {e}")
    
    def hunt_in_file(self, file_path):
        """Chercher des menaces dans un fichier"""
        results = []
        
        try:
            with open(file_path, 'rb') as f:
                file_content = f.read()
            
            for rule_name, rule in self.rules.items():
                matches = rule.match(data=file_content)
                
                if matches:
                    for match in matches:
                        results.append({
                            'rule': rule_name,
                            'strings': match.strings,
                            'metadata': match.meta,
                            'file': file_path,
                            'timestamp': datetime.now().isoformat()
                        })
        
        except Exception as e:
            print(f"Erreur lors de l'analyse de {file_path}: {e}")
        
        return results
    
    def hunt_in_directory(self, directory_path):
        """Chercher des menaces dans un répertoire"""
        all_results = []
        
        for root, dirs, files in os.walk(directory_path):
            for file in files:
                file_path = os.path.join(root, file)
                results = self.hunt_in_file(file_path)
                all_results.extend(results)
        
        return all_results
    
    def analyze_network_traffic(self, pcap_file):
        """Analyser le trafic réseau pour détecter des menaces"""
        import pyshark
        
        threats = []
        cap = pyshark.FileCapture(pcap_file)
        
        for packet in cap:
            # Détecter les connexions suspectes
            if hasattr(packet, 'ip'):
                if self.is_suspicious_connection(packet):
                    threats.append({
                        'source': packet.ip.src,
                        'dest': packet.ip.dst,
                        'protocol': packet.transport_layer,
                        'timestamp': packet.sniff_timestamp
                    })
        
        return threats
    
    def is_suspicious_connection(self, packet):
        """Déterminer si une connexion est suspecte"""
        suspicious_ips = [
            '192.168.1.100',  # IP suspecte
            '10.0.0.50'       # IP suspecte
        ]
        
        if hasattr(packet, 'ip'):
            return packet.ip.src in suspicious_ips or packet.ip.dst in suspicious_ips
        
        return False

# Exemple d'utilisation
hunter = ThreatHunter()

# Chercher dans un fichier
results = hunter.hunt_in_file('suspicious_file.exe')
print(f"Détecté {len(results)} menaces dans le fichier")

# Chercher dans un répertoire
all_threats = hunter.hunt_in_directory('/path/to/scan')
print(f"Détecté {len(all_threats)} menaces au total")

# Analyser le trafic réseau
network_threats = hunter.analyze_network_traffic('capture.pcap')
print(f"Détecté {len(network_threats)} connexions suspectes")`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">JavaScript - DevSecOps Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`// Pipeline DevSecOps avec GitHub Actions
const yaml = require('js-yaml');

class DevSecOpsPipeline {
  constructor() {
    this.securityTools = {
      sast: ['sonarqube', 'semgrep'],
      dast: ['zap', 'burp'],
      iast: ['contrast', 'appscan'],
      container: ['trivy', 'snyk']
    };
  }
  
  generateSecurityPipeline() {
    const pipeline = {
      name: 'Security Pipeline',
      on: ['push', 'pull_request'],
      jobs: {
        'security-scan': {
          'runs-on': 'ubuntu-latest',
          steps: [
            {
              name: 'Checkout code',
              uses: 'actions/checkout@v3'
            },
            {
              name: 'SAST Scan',
              uses: 'github/codeql-action/init@v2',
              with: {
                languages: 'javascript'
              }
            },
            {
              name: 'Run CodeQL Analysis',
              uses: 'github/codeql-action/analyze@v2'
            },
            {
              name: 'Container Security Scan',
              run: |
                docker run --rm -v $(pwd):/app aquasec/trivy fs /app
            },
            {
              name: 'Dependency Check',
              run: |
                npm audit
                npm audit fix
            }
          ]
        },
        'compliance-check': {
          'runs-on': 'ubuntu-latest',
          needs: 'security-scan',
          steps: [
            {
              name: 'Check Compliance',
              run: |
                # Vérifier les politiques de sécurité
                ./scripts/compliance-check.sh
            }
          ]
        }
      }
    };
    
    return yaml.dump(pipeline);
  }
  
  // Intégration de la sécurité dans le code
  generateSecurityHooks() {
    return {
      preCommit: [
        'npm run lint:security',
        'npm run test:security',
        'git-secrets --scan'
      ],
      prePush: [
        'npm audit',
        'npm run build:security'
      ]
    };
  }
  
  // Monitoring de sécurité
  generateSecurityMonitoring() {
    return {
      metrics: [
        'vulnerabilities_detected',
        'mean_time_to_fix',
        'security_test_coverage',
        'compliance_score'
      ],
      alerts: [
        {
          name: 'High Severity Vulnerability',
          condition: 'severity == "high"',
          action: 'notify_security_team'
        },
        {
          name: 'Compliance Violation',
          condition: 'compliance_score < 0.8',
          action: 'block_deployment'
        }
      ]
    };
  }
}

// Exemple d'utilisation
const pipeline = new DevSecOpsPipeline();

// Générer le pipeline de sécurité
const yamlPipeline = pipeline.generateSecurityPipeline();
console.log('Pipeline de sécurité:', yamlPipeline);

// Configurer les hooks de sécurité
const hooks = pipeline.generateSecurityHooks();
console.log('Hooks de sécurité:', hooks);

// Configurer le monitoring
const monitoring = pipeline.generateSecurityMonitoring();
console.log('Monitoring de sécurité:', monitoring);`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">TypeScript - SOAR Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`interface SecurityIncident {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  type: string;
  description: string;
  timestamp: Date;
  indicators: string[];
  status: 'open' | 'investigating' | 'resolved';
}

interface Playbook {
  id: string;
  name: string;
  triggers: string[];
  actions: PlaybookAction[];
  conditions: PlaybookCondition[];
}

interface PlaybookAction {
  type: 'block_ip' | 'quarantine_host' | 'notify_team' | 'create_ticket';
  parameters: Record<string, any>;
}

interface PlaybookCondition {
  field: string;
  operator: 'equals' | 'contains' | 'greater_than';
  value: any;
}

class SOARPlatform {
  private incidents: SecurityIncident[] = [];
  private playbooks: Playbook[] = [];
  
  // Détecter et créer un incident
  detectIncident(alert: any): SecurityIncident {
    const incident: SecurityIncident = {
      id: this.generateIncidentId(),
      severity: this.calculateSeverity(alert),
      type: alert.type,
      description: alert.description,
      timestamp: new Date(),
      indicators: alert.indicators || [],
      status: 'open'
    };
    
    this.incidents.push(incident);
    this.triggerPlaybooks(incident);
    
    return incident;
  }
  
  // Déclencher les playbooks appropriés
  private triggerPlaybooks(incident: SecurityIncident): void {
    for (const playbook of this.playbooks) {
      if (this.shouldTriggerPlaybook(playbook, incident)) {
        this.executePlaybook(playbook, incident);
      }
    }
  }
  
  // Vérifier si un playbook doit être déclenché
  private shouldTriggerPlaybook(playbook: Playbook, incident: SecurityIncident): boolean {
    return playbook.triggers.some(trigger => 
      incident.type.includes(trigger) || 
      incident.description.includes(trigger)
    );
  }
  
  // Exécuter un playbook
  private async executePlaybook(playbook: Playbook, incident: SecurityIncident): Promise<void> {
    console.log(\`Exécution du playbook: \${playbook.name}\`);
    
    for (const action of playbook.actions) {
      if (this.evaluateConditions(playbook.conditions, incident)) {
        await this.executeAction(action, incident);
      }
    }
  }
  
  // Évaluer les conditions d'un playbook
  private evaluateConditions(conditions: PlaybookCondition[], incident: SecurityIncident): boolean {
    return conditions.every(condition => {
      const value = this.getFieldValue(condition.field, incident);
      
      switch (condition.operator) {
        case 'equals':
          return value === condition.value;
        case 'contains':
          return String(value).includes(String(condition.value));
        case 'greater_than':
          return Number(value) > Number(condition.value);
        default:
          return false;
      }
    });
  }
  
  // Exécuter une action
  private async executeAction(action: PlaybookAction, incident: SecurityIncident): Promise<void> {
    switch (action.type) {
      case 'block_ip':
        await this.blockIP(incident.indicators);
        break;
      case 'quarantine_host':
        await this.quarantineHost(incident.indicators);
        break;
      case 'notify_team':
        await this.notifySecurityTeam(incident);
        break;
      case 'create_ticket':
        await this.createTicket(incident);
        break;
    }
  }
  
  // Actions de sécurité
  private async blockIP(ips: string[]): Promise<void> {
    console.log(\`Blocage des IPs: \${ips.join(', ')}\`);
    // Implémentation du blocage d'IP
  }
  
  private async quarantineHost(hosts: string[]): Promise<void> {
    console.log(\`Mise en quarantaine des hôtes: \${hosts.join(', ')}\`);
    // Implémentation de la quarantaine
  }
  
  private async notifySecurityTeam(incident: SecurityIncident): Promise<void> {
    console.log(\`Notification de l'équipe de sécurité pour l'incident: \${incident.id}\`);
    // Implémentation de la notification
  }
  
  private async createTicket(incident: SecurityIncident): Promise<void> {
    console.log(\`Création d'un ticket pour l'incident: \${incident.id}\`);
    // Implémentation de la création de ticket
  }
  
  private generateIncidentId(): string {
    return \`INC-\${Date.now()}-\${Math.random().toString(36).substr(2, 9)}\`;
  }
  
  private calculateSeverity(alert: any): 'low' | 'medium' | 'high' | 'critical' {
    // Logique de calcul de la sévérité
    return 'medium';
  }
  
  private getFieldValue(field: string, incident: SecurityIncident): any {
    return (incident as any)[field];
  }
}

// Exemple d'utilisation
const soar = new SOARPlatform();

// Détecter un incident
const alert = {
  type: 'malware_detection',
  description: 'Malware detected on host 192.168.1.100',
  indicators: ['192.168.1.100', 'malware_hash_123']
};

const incident = soar.detectIncident(alert);
console.log('Incident créé:', incident);`}
              </pre>
            </CardContent>
          </Card>
        </div>

        {/* Mini-application concept */}
        <Card className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-800">🎯 Mini-application : Plateforme Threat Hunting</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Créez une plateforme complète de threat hunting qui :
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Analyse les logs en temps réel</li>
              <li>• Détecte les patterns suspects</li>
              <li>• Génère des hypothèses de menaces</li>
              <li>• Automatise les investigations</li>
              <li>• Intègre avec les outils de sécurité</li>
              <li>• Fournit des rapports détaillés</li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                      <Link 
              href="/fondamentaux/lecon-19" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Cours précédent
            </Link>
            <Link 
              href="/fondamentaux" 
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              Retour aux fondamentaux
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
        </div>
      </div>
    </div>
  )
} 