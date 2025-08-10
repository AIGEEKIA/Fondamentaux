#!/bin/bash

# 🎯 SCRIPT DE NETTOYAGE DE LA FORMATION
# Nettoie la formation actuelle des fichiers template

set -e

# Configuration des couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

log() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

info "Nettoyage de la formation actuelle..."

# Supprimer les fichiers du template
if [ -d ".cursor/rules" ]; then
    rm -rf .cursor/rules/
    log "Dossier .cursor/rules supprimé"
fi

if [ -f ".cursorrules" ]; then
    rm .cursorrules
    log "Fichier .cursorrules supprimé"
fi

if [ -f "scripts/generate-template.js" ]; then
    rm scripts/generate-template.js
    log "Script generate-template.js supprimé"
fi

if [ -f "TEMPLATE_SUMMARY.md" ]; then
    rm TEMPLATE_SUMMARY.md
    log "Fichier TEMPLATE_SUMMARY.md supprimé"
fi

if [ -f "TEMPLATE_REPOSITORY_SETUP.md" ]; then
    rm TEMPLATE_REPOSITORY_SETUP.md
    log "Fichier TEMPLATE_REPOSITORY_SETUP.md supprimé"
fi

if [ -f "GUIDE_UTILISATION_RAPIDE.md" ]; then
    rm GUIDE_UTILISATION_RAPIDE.md
    log "Fichier GUIDE_UTILISATION_RAPIDE.md supprimé"
fi

if [ -f "CONTROLE_FINAL.md" ]; then
    rm CONTROLE_FINAL.md
    log "Fichier CONTROLE_FINAL.md supprimé"
fi

if [ -f "RESUME_FINAL.md" ]; then
    rm RESUME_FINAL.md
    log "Fichier RESUME_FINAL.md supprimé"
fi

# Supprimer les scripts de configuration
if [ -f "scripts/setup-template-repository.sh" ]; then
    rm scripts/setup-template-repository.sh
    log "Script setup-template-repository.sh supprimé"
fi

if [ -f "scripts/setup-template-repository-auto.sh" ]; then
    rm scripts/setup-template-repository-auto.sh
    log "Script setup-template-repository-auto.sh supprimé"
fi

if [ -f "scripts/cleanup-formation.sh" ]; then
    rm scripts/cleanup-formation.sh
    log "Script cleanup-formation.sh supprimé"
fi

# Supprimer le dossier scripts s'il est vide
if [ -d "scripts" ] && [ -z "$(ls -A scripts)" ]; then
    rmdir scripts
    log "Dossier scripts supprimé (vide)"
fi

# Supprimer le dossier .cursor s'il est vide
if [ -d ".cursor" ] && [ -z "$(ls -A .cursor)" ]; then
    rmdir .cursor
    log "Dossier .cursor supprimé (vide)"
fi

echo ""
log "🎉 NETTOYAGE TERMINÉ AVEC SUCCÈS !"
echo ""
log "Votre formation est maintenant propre et prête pour GitHub !"
echo ""
log "Le template a été créé dans : ../formation-interactive-template"
echo ""
warning "Pour publier le template sur GitHub :"
echo "1. Allez sur https://github.com/new"
echo "2. Créez un repository nommé : formation-interactive-template"
echo "3. Puis exécutez :"
echo "   cd ../formation-interactive-template"
echo "   git push -u origin main"
echo ""
log "Votre formation est prête ! 🚀"
