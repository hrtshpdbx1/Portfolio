# 🎨 Louise Moraldy - Portfolio



[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![A11y](https://img.shields.io/badge/Accessibility-WCAG%20AAA-green?style=flat-square)](https://www.w3.org/WAI/standards-guidelines/wcag/)


Ce portfolio n'est pas qu'une simple vitrine de mes projets ; c'est un laboratoire d'**accessibilité numérique (a11y)**. L'objectif était de concevoir une interface 100% modulable sans jamais rompre la cohérence visuelle ni la mise en page.

---

<img width="1640" height="626" alt="ThemesAdaptables_tiny" src="https://github.com/user-attachments/assets/003f5571-34df-4e11-87f6-aa3e584cb0cb" />

## 🚀 Points Forts Techniques

### 🧠 Architecture CSS Mathématique
Plutôt que des valeurs fixes, le site repose sur une logique de **calcul en cascade** :
* **Variable Racine Unique :** L'ensemble du layout (tailles, marges, espacements) est lié à une variable `--user-size` en unités `rem` et `em`.
* **Adaptabilité Dynamique :** L'utilisateur peut modifier l'interlignage et la taille du texte en temps réel. Les titres et les espacements se recalculent instantanément et proportionnellement.

### 🌓 Gestion Intelligente du Thème
* **Zéro "Flash Blanc" (FOUC) :** Injection dynamique du CSS dès la première milliseconde via le `localStorage` pour respecter les préférences de l'utilisateur avant même l'affichage.
* **Dualité Chromatique :** Tout le système visuel est généré à partir de deux variables seulement (`--main-text` et `--main-background`), garantissant une inversion parfaite des couleurs pour réduire la fatigue visuelle.

### ♿ Focus Accessibilité (WCAG compliant)
* **Typographies Inclusives :** Intégration de polices spécifiques (OpenDyslexic, Accessible-DfA, Eido) sélectionnées pour répondre aux besoins cognitifs et visuels.
* **Navigation au Clavier :** États `:focus-visible` très marqués et gestion intelligente du scroll pour une expérience tactile et clavier sans frustration.
* **Contrastes Validés :** Palettes générées via *RandomA11y* pour garantir une conformité totale aux exigences du WCAG.

<img width="1641" height="626" alt="CustomSidebar_tiny" src="https://github.com/user-attachments/assets/f66c85a2-df70-4298-bad0-ba2d65406c98" />

## 🛠️ Stack Technique

* **Framework :** [Next.js 15](https://nextjs.org/) (App Router)
* **Logique :** React (Hooks personnalisés pour la gestion de l'accessibilité)
* **Styles :** CSS moderne avec variables CSS natives
* **Icons :** FontAwesome (SVG Core)
* **Optimisation :** Composants `next/image` et `next/link` pour une navigation fluide

## 📁 Structure du Projet

```bash
src/
├── app/              # Routing Next.js (chaque dossier = une route)
│   ├── layout.js     # Root layout (Nav & Footer persistants)
│   └── page.js       # Accueil et sections principales
├── components/       # Briques UI réutilisables (ProjectCard, ContactForm, etc.)
└── public/           # Assets et polices inclusives
