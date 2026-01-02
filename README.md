# wvCreative - Portfolio Graphiste & Web Designer

Site web portfolio professionnel pour wvCreative avec design moderne, animations attractives et couleurs bleue et verte.

## 🎨 Fonctionnalités

- ✨ Design moderne avec glassmorphism et animations fluides
- 🎨 Couleurs bleue (#0066FF) et verte (#00FF88) mises en évidence
- 📱 Responsive sur tous les appareils
- 🖼️ Portfolio graphique avec 4 catégories (Beauté, Événement, Vente en ligne, Streaming)
- 💻 Portfolio web design
- 📬 Formulaire de contact avec intégration WhatsApp
- 🌊 Animations et effets visuels attractifs

## 📁 Structure du projet

```
Mon Site PorFolio/
├── index.html          # Page principale
├── index.css           # Styles principaux et design system
├── components.css      # Styles des composants
├── script.js           # JavaScript interactif
├── assets/             # Dossier des images
│   ├── graphic-beaute-1.jpg
│   ├── graphic-beaute-2.jpg
│   ├── graphic-beaute-3.jpg
│   ├── graphic-event-1.jpg
│   ├── graphic-event-2.jpg
│   ├── graphic-event-3.jpg
│   ├── graphic-shop-1.jpg
│   ├── graphic-shop-2.jpg
│   ├── graphic-shop-3.jpg
│   ├── graphic-stream-1.jpg
│   ├── graphic-stream-2.jpg
│   ├── graphic-stream-3.jpg
│   ├── web-ecommerce.jpg
│   ├── web-portfolio.jpg
│   ├── web-restaurant.jpg
│   ├── web-immobilier.jpg
│   ├── web-fitness.jpg
│   └── web-streaming.jpg
└── README.md
```

## 🖼️ Ajouter vos images

Pour personnaliser le portfolio avec vos propres réalisations:

### 1. Design Graphique

Ajoutez vos images dans le dossier `assets/` avec les noms suivants:

**Catégorie Beauté:**
- `graphic-beaute-1.jpg`
- `graphic-beaute-2.jpg`
- `graphic-beaute-3.jpg`

**Catégorie Événement:**
- `graphic-event-1.jpg`
- `graphic-event-2.jpg`
- `graphic-event-3.jpg`

**Catégorie Vente en ligne:**
- `graphic-shop-1.jpg`
- `graphic-shop-2.jpg`
- `graphic-shop-3.jpg`

**Catégorie Streaming:**
- `graphic-stream-1.jpg`
- `graphic-stream-2.jpg`
- `graphic-stream-3.jpg`

### 2. Web Design

Ajoutez vos captures d'écran de sites web:
- `web-ecommerce.jpg`
- `web-portfolio.jpg`
- `web-restaurant.jpg`
- `web-immobilier.jpg`
- `web-fitness.jpg`
- `web-streaming.jpg`

### 3. Format recommandé

- **Résolution:** 800x1000px minimum
- **Format:** JPG ou PNG
- **Poids:** Optimisé (< 500 KB par image)

## 🚀 Lancement du site

### Méthode 1: Ouvrir directement
Double-cliquez sur `index.html` pour ouvrir le site dans votre navigateur.

### Méthode 2: Serveur local (recommandé)
Pour un meilleur fonctionnement, utilisez un serveur local:

```powershell
# Avec Python
python -m http.server 8000

# Avec Node.js (si npx installé)
npx -y http-server -p 8000
```

Puis ouvrez: http://localhost:8000

## 📞 Informations de contact

- **WhatsApp:** +237 671 170 671
- **Email:** wappi.vignoly@gmail.com
- **Nom:** wvCreative

Ces informations sont déjà intégrées dans le site et le bouton WhatsApp flottant.

## 🎨 Personnalisation des couleurs

Les couleurs peuvent être modifiées dans `index.css` au niveau des variables CSS:

```css
:root {
  --primary-blue: #0066FF;
  --primary-green: #00FF88;
  --blue-dark: #0047B3;
  --green-dark: #00CC6A;
  /* ... */
}
```

## ✨ Fonctionnalités spéciales

### 1. Filtrage par catégorie
Les visiteurs peuvent filtrer les réalisations graphiques par catégorie (Beauté, Événement, etc.)

### 2. Bouton WhatsApp flottant
Un bouton WhatsApp fixe en bas à droite permet un contact direct.

### 3. Formulaire de contact intelligent
Le formulaire envoie automatiquement le message via WhatsApp.

### 4. Animations fluides
Toutes les sections ont des animations au scroll pour une expérience premium.

### 5. Navigation responsive
Menu hamburger sur mobile pour une navigation optimale.

## 🌐 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (dernières versions)
- ✅ Mobile (iOS, Android)
- ✅ Tablette
- ✅ Desktop

## 📝 Modification du contenu

### Ajouter des projets graphiques

Dans `script.js`, modifiez le tableau `graphicPortfolio`:

```javascript
const graphicPortfolio = [
    {
        id: 1,
        category: 'beaute', // ou 'evenement', 'vente', 'streaming'
        title: 'Titre de votre projet',
        description: 'Description de votre projet',
        image: 'assets/votre-image.jpg'
    },
    // ... ajoutez vos projets
];
```

### Ajouter des sites web

Dans `script.js`, modifiez le tableau `webPortfolio`:

```javascript
const webPortfolio = [
    {
        id: 1,
        title: 'Nom du site',
        description: 'Description du site',
        image: 'assets/votre-screenshot.jpg',
        link: 'https://votre-site.com'
    },
    // ... ajoutez vos sites
];
```

## 🎯 Conseils pour les images

1. **Qualité:** Utilisez des images haute résolution
2. **Format vertical:** Les images verticales (portrait) fonctionnent mieux
3. **Cohérence:** Gardez un style visuel cohérent
4. **Optimisation:** Compressez vos images pour un chargement rapide
5. **Nommage:** Respectez les noms de fichiers pour un affichage correct

## 💡 Prochaines étapes

1. ✅ Ajoutez vos images dans le dossier `assets/`
2. ✅ Personnalisez les titres et descriptions dans `script.js`
3. ✅ Testez le site localement
4. ✅ Déployez sur un hébergement web (Netlify, Vercel, GitHub Pages, etc.)

## 🆘 Support

Pour toute question ou assistance, contactez:
- **Email:** wappi.vignoly@gmail.com
- **WhatsApp:** +237 671 170 671

---

**Fait avec ❤️ et ⚡ par wvCreative**
