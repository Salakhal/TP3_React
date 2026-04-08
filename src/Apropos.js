// src/Apropos.js
import React from 'react';
import './App.css';

const Apropos = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      <div className="card">
        <h2 className="card-title">À propos de notre projet</h2>
        <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '1rem' }}>
          Bienvenue sur notre application React professionnelle. Ce projet a été développé pour démontrer de manière concrète nos compétences en développement Front-End.
        </p>
        <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
          Nous avons mis en place une architecture moderne utilisant les dernières fonctionnalités de React, incluant le routage dynamique, la gestion d'état, et un design responsive et épuré.
        </p>
      </div>

      <div className="card">
        <h3 className="card-title">🚀 Technologies Utilisées</h3>
        <ul className="list-items">
          <li>• <strong>React.js</strong> (Composants fonctionnels & Hooks)</li>
          <li>• <strong>React Router DOM</strong> (Navigation SPA fluide sans rechargement)</li>
          <li>• <strong>CSS3 Moderne</strong> (Variables, Flexbox, Grid, Ombres douces)</li>
          <li>• <strong>JSX</strong> (Rendu conditionnel et boucles avec map)</li>
        </ul>
      </div>

    </div>
  );
};

export default Apropos;