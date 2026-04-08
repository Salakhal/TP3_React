# 📘 TP 3 : Navigation, rendu conditionnel et intégration des ressources avec React

**Projet : DevFlow Workspace**

🎯 Objectif du TP
Ce TP a pour objectif de mettre en pratique les concepts fondamentaux de React à travers la création d'un tableau de bord professionnel (Dashboard) :
* 🔁 Le rendu conditionnel avec `useState`
* 🔄 L’itération des données avec `map()`
* 🌐 La navigation entre pages avec `React Router` et `useNavigate`
* 🖼️ L’intégration des images dynamiques et médias (audio)
* 🎨 L’application de styles CSS modernes (Grid, Flexbox, Variables)

---

## 🚀 Lancement du projet

**1. Création du projet**
```bash
npx create-react-app devflow-workspace
cd devflow-workspace
npm start
```
 ## 2. Installation de React Router
 ```
npm install react-router-dom
```
## 📂 Structure du projet

Voici l'arborescence détaillée de notre code source (dossier `src`) selon la configuration de notre projet :

```text
src/
├── Accueil.js           # Composant principal (Tableau de bord)
├── App.css              # Feuille de style globale
├── App.js               # Composant racine et configuration du routage
├── App.test.js          # Fichiers de tests
├── Apropos.js           # Composant de la page "À propos"
├── Connexion.js         # Composant gérant l'état de connexion utilisateur
├── Contact.js           # Composant de la page "Contact"
├── index.css            # Styles de base
├── index.js             # Point d'entrée de l'application React
├── LecteurAudio.js      # Composant personnalisé pour le lecteur audio
├── ListeTaches.js       # Composant gérant l'affichage des listes (map)
├── Logo.js              # Composant affichant le logo
├── logo.svg             # Image vectorielle du logo
├── reportWebVitals.js   # Fichier de mesure des performances
└── setupTests.js        # Configuration pour les tests



## 🧭 Navigation (React Router)

* Utilisation de `BrowserRouter` dans `index.js`.
* Définition des routes principales avec `<Routes>` et `<Route>` dans `App.js`.
* Navigation du menu avec `<NavLink>` (gère automatiquement la classe `active`).
* **Bonus technique :** Redirection programmatique avec le Hook `useNavigate()` pour le bouton "Voir mes rapports".

**Pages créées :**
* 🏠 Tableau de bord (Accueil)
* ℹ️ Nos Projets (À propos)
* 📞 Support Client (Contact)

---

## 🔁 Rendu conditionnel

Le composant `EspaceUtilisateur` (dans `Accueil.js`) permet de gérer la session de travail de l'utilisateur :

```javascript
const [estConnecte, setEstConnecte] = useState(false);
```

**Affichage conditionnel et dynamique :**

* Changement du badge : `{estConnecte ? '🟢 En Ligne' : '🔴 Hors Ligne'}`
* Changement de la couleur du texte et du message d'état en temps réel.
* Changement du texte du bouton dynamiquement.

---

## 📋 Listes dynamiques avec map()

**Composant `SectionListes` (dans `Accueil.js`) :**

* **Tâches prioritaires :** Affichage dynamique d’un tableau (`Array`) de tâches de développement.
* **Ressources utiles :** Itération sur un tableau de liens (Github, Figma, Docs) via la méthode `.map()`.

---

## 🔔 Alertes et Notifications

Une carte dédiée alerte l'utilisateur du nombre de messages en attente. Le texte met en valeur le chiffre de manière dynamique.

---

## 🖼️ Intégration des médias

* **Images externes :** Intégration du logo React au format SVG.
* **Lecteur Audio :** Intégration d'un message vocal ("Message du Chef de Projet") avec `<audio controls />`.
* **Galerie d’images :** Une grille (`gallery-grid`) affichant trois images de code illustratives depuis la banque d'images Unsplash, stylisées avec `object-fit: cover`.

---

## 🎨 Style CSS

Utilisation d'un fichier `App.css` global et moderne :

* Design en cartes (`.card`) avec fond blanc et ombres douces (`box-shadow`).
* Variables CSS (`:root`) pour maintenir la cohérence des couleurs (ex: `--primary-blue`).
* Mise en page `CSS Grid` pour les statistiques et la galerie d'images.
* Mise en page `Flexbox` pour l'en-tête et les alignements internes des cartes.

---

## 🧪 Fonctionnalités réalisées

* ✔ Navigation fluide en mode SPA (Single Page Application).
* ✔ Gestion d’état complexe avec `useState`.
* ✔ Routage par bouton avec `useNavigate()`.
* ✔ Génération de listes dynamiques via `.map()`.
* ✔ Interface utilisateur professionnelle type "SaaS" / "Dashboard".

---

## 🧠 Conclusion

Ce TP m'a permis de maîtriser l'assemblage de composants React pour créer une interface utilisateur complète, fluide et professionnelle. J'ai pu comprendre l'importance d'une bonne gestion des états pour rendre l'interface réactive, ainsi que la puissance du routage côté client pour une expérience utilisateur optimale.


## 🎥 Démo du Projet

Voici une vidéo de démonstration de notre application en cours de fonctionnement :




https://github.com/user-attachments/assets/546b3a58-f58e-4e63-a9e5-973f1b73f8b7





## 👤 Auteur

* **École Normale Supérieure de Marrakech**
  
* **Réalisé par :** SALMA LAKHAL
  
* **Filière  :** CLE_INFO_S5

  
* **Encadré par :** Pr. Mohamed LACHGAR

* **Module :** `Développement Front-End moderne avec React`






















