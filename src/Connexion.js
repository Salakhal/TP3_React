import React, { useState } from 'react';

const Connexion = () => {
  const [statutUser, setStatutUser] = useState('hors_ligne');

  const basculerStatut = () => {
    setStatutUser(prevStatut => prevStatut === 'hors_ligne' ? 'en_ligne' : 'hors_ligne');
  };

  const estConnecte = statutUser === 'en_ligne';

  return (
    <div style={{ padding: '15px', border: '2px solid #ddd', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h3 style={{ margin: 0, color: estConnecte ? 'green' : '#dc3545' }}>
        {estConnecte ? '🟢 Vous êtes connecté' : '🔴 Vous êtes déconnecté'}
      </h3>
      
      <button 
        onClick={basculerStatut} 
        style={{ 
          padding: '8px 16px', 
          backgroundColor: estConnecte ? '#dc3545' : '#28a745', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        {estConnecte ? 'Me déconnecter' : 'Me connecter'}
      </button>
    </div>
  );
};

export default Connexion;