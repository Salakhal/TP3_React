// src/Logo.js
import React from 'react';

const Logo = () => {
  return (
    <figure className="logo-container">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
        alt="Emblème de la plateforme" 
        style={{ width: '100px' }} 
      />
      <figcaption className="card-subtitle" style={{ marginTop: '1rem' }}>
        Schéma d'architecture React intégré dynamiquement
      </figcaption>
    </figure>
  );
};

export default Logo;