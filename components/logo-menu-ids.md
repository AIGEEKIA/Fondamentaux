# 🎯 IDs et Test IDs du Menu AIGEEKIA

## 📍 Éléments principaux

### **Conteneur du menu**

- **ID :** `menu-container`
- **Test ID :** `menu-container`
- **Localisation :** Ligne 23
- **Fonction :** Conteneur principal du menu fixe

### **Bouton du menu**

- **ID :** `aigekia-menu-button`
- **Test ID :** `aigekia-menu-button`
- **Localisation :** Ligne 26
- **Fonction :** Bouton principal qui ouvre/ferme le menu
- **Attributs ARIA :**
  - `aria-label="Menu de navigation AIGEEKIA"`
  - `aria-expanded={isMenuOpen}`
  - `aria-controls="aigekia-menu-dropdown"`

### **Menu déroulant**

- **ID :** `aigekia-menu-dropdown`
- **Test ID :** `aigekia-menu-dropdown`
- **Localisation :** Ligne 52
- **Fonction :** Conteneur du menu déroulant
- **Attributs ARIA :**
  - `role="menu"`
  - `aria-labelledby="aigekia-menu-button"`

## 📂 Sections du menu

### **Section Cours Fondamentaux**

- **ID :** `menu-section-cours`
- **Test ID :** `menu-section-cours`
- **Localisation :** Ligne 85
- **Fonction :** Titre de la section des cours

### **Section Langages**

- **ID :** `menu-section-langages`
- **Test ID :** `menu-section-langages`
- **Localisation :** Ligne 200
- **Fonction :** Titre de la section des langages

## 🔍 Comment chercher rapidement

### **Dans l'IDE :**

```bash
# Recherche par ID
Ctrl + Shift + F → "aigekia-menu-button"

# Recherche par Test ID
Ctrl + Shift + F → "data-testid"

# Recherche par fonction
Ctrl + Shift + F → "setIsMenuOpen"
```

### **Dans le navigateur (DevTools) :**

```javascript
// Sélectionner le bouton
document.getElementById("aigekia-menu-button");

// Sélectionner le menu
document.getElementById("aigekia-menu-dropdown");

// Sélectionner par Test ID
document.querySelector('[data-testid="aigekia-menu-button"]');
```

### **Dans les tests :**

```javascript
// Test avec Test ID
screen.getByTestId("aigekia-menu-button");

// Test avec ID
screen.getByRole("button", { name: /menu de navigation aigekia/i });
```

## 🎨 Modifications possibles

### **Changer la position :**

```css
/* Modifier la position du conteneur */
#menu-container {
  top: 20px;
  right: 20px;
}
```

### **Changer le style du bouton :**

```css
/* Modifier l'apparence du bouton */
#aigekia-menu-button {
  background: linear-gradient(to bottom, #3b82f6, #ffffff);
  border-radius: 50%;
}
```

### **Changer le style du menu :**

```css
/* Modifier l'apparence du menu déroulant */
#aigekia-menu-dropdown {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}
```

## 🚀 Avantages des IDs nommés

1. **Recherche rapide** : Trouver facilement les éléments
2. **Tests automatisés** : Sélectionner précisément les éléments
3. **Accessibilité** : Attributs ARIA pour les lecteurs d'écran
4. **Maintenance** : Code plus lisible et maintenable
5. **Debugging** : Identifier rapidement les problèmes

## 📝 Notes importantes

- **Accessibilité** : Les attributs ARIA améliorent l'accessibilité
- **Tests** : Les `data-testid` facilitent les tests automatisés
- **Performance** : Les IDs sont plus rapides que les sélecteurs CSS complexes
- **Maintenance** : Noms explicites facilitent la maintenance
