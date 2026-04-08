// src/ListeTaches.js
import React from 'react';

const ListeTaches = () => {
  const missions = [
    { identifiant: 101, intitule: "Maîtriser les bases de React" },
    { identifiant: 102, intitule: "Concevoir une navigation fluide" },
    { identifiant: 103, intitule: "Valider le TP avec succès" }
  ];

  // Map des index pour avoir des puces numériques stylisées
  const numbersMap = ['①', '②', '③'];

  return (
    <div>
      <h3 className="card-title">
        <span>🎯</span> Objectifs à atteindre :
      </h3>
      <p className="card-subtitle">Critères de validation pour ce module de TP</p>
      <ul className="liste-missions">
        {missions.map(({ identifiant, intitule }, index) => (
          <li key={identifiant}>
            <span style={{ fontSize: '1.25rem', color: '#64748b' }}>
              {numbersMap[index]}
            </span> 
            <strong>{intitule}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListeTaches;