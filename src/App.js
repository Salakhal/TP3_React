// src/App.js
import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';
import './App.css';

const App = () => {
  const [estConnecte, setEstConnecte] = useState(false);

  return (
    <div>
      <header className="navbar">
        {/* NOUVEAU NOM DE L'APPLICATION */}
        <h1 className="nav-brand">⚡ DevFlow Workspace</h1>
        <nav className="nav-menu">
          {/* NOUVEAUX NOMS POUR LE MENU */}
          <NavLink to="/">Tableau de bord</NavLink>
          <NavLink to="/apropos">Nos Projets</NavLink>
          <NavLink to="/contact">Support Client</NavLink>
        </nav>
      </header>

      <main className="main-container">
        <Routes>
          <Route path="/" element={<Accueil estConnecte={estConnecte} setEstConnecte={setEstConnecte} />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;