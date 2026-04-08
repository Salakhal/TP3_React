// src/Accueil.js
import React from 'react';
import './App.css';

const EspaceUtilisateur = ({ estConnecte, setEstConnecte }) => (
  <div className="card">
    <div className="espace-user-header">
      <div>
        <h2 className="card-title">Session de travail</h2>
        <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Gérez votre disponibilité vis-à-vis de l'équipe.</p>
      </div>
      <div className={`badge ${estConnecte ? 'online' : 'offline'}`}>
        {estConnecte ? '🟢 En Ligne' : '🔴 Hors Ligne'}
      </div>
    </div>
    
    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div>
        <h3 style={{ color: estConnecte ? '#16a34a' : '#dc2626', marginBottom: '0.5rem' }}>
          {estConnecte ? 'Votre session est active. L\'équipe vous voit en ligne.' : 'Votre session est en pause. Vous êtes invisible.'}
        </h3>
        <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>
          Changez votre statut pour recevoir les notifications en temps réel.
        </p>
      </div>
      <button className="btn-primary" onClick={() => setEstConnecte(!estConnecte)}>
        {estConnecte ? 'Passer Hors Ligne' : 'Passer En Ligne'}
      </button>
    </div>
  </div>
);

const Presentation = () => (
  <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ maxWidth: '60%' }}>
      <h2 className="card-title">Bienvenue sur DevFlow</h2>
      <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
        Votre espace de travail centralisé. Suivez l'avancement de vos projets, gérez vos tickets de développement et collaborez avec votre équipe en toute fluidité grâce à notre technologie React rapide et sécurisée.
      </p>
      <button className="btn-primary" style={{ marginTop: '1rem' }}>Voir mes rapports</button>
    </div>
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
      alt="Logo" 
      style={{ width: '150px' }} 
    />
  </div>
);

const Statistiques = () => (
  <div className="stats-grid">
    <div className="card stat-card">
      <div className="stat-number">12</div>
      <div style={{ color: '#6b7280' }}>Projets Actifs</div>
    </div>
    <div className="card stat-card">
      <div className="stat-number">84</div>
      <div style={{ color: '#6b7280' }}>Tâches Résolues</div>
    </div>
    <div className="card stat-card">
      <div className="stat-number">5</div>
      <div style={{ color: '#6b7280' }}>Membres connectés</div>
    </div>
  </div>
);

const SectionListes = () => {
  const taches = ["Mettre à jour l'API serveur", "Corriger les bugs d'affichage", "Déployer la version 2.0"];
  const ressources = ["Documentation Officielle ↗", "Maquettes Figma ↗", "Github Repository ↗"];

  return (
    <div className="lists-grid">
      <div className="card">
        <h3 className="card-title">🔥 Tâches prioritaires</h3>
        <ul className="list-items">
          {taches.map((t, i) => <li key={i}>⚠️ {t}</li>)}
        </ul>
      </div>
      <div className="card">
        <h3 className="card-title">📚 Ressources utiles</h3>
        <ul className="list-items">
          {ressources.map((r, i) => <li key={i}>🔗 {r}</li>)}
        </ul>
      </div>
    </div>
  );
};

const SectionMedias = () => (
  <>
    <div className="card">
      <h3 className="card-title">Message audio du Chef de Projet</h3>
      <audio controls style={{ width: '100%', marginTop: '1rem', outline: 'none' }}>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>
    </div>

    <div className="card">
      <h3 className="card-title">Captures d'écran récentes</h3>
      <div className="gallery-grid">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80" alt="Code 1" />
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="Code 2" />
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80" alt="Code 3" />
      </div>
    </div>
  </>
);

const Accueil = ({ estConnecte, setEstConnecte }) => {
  return (
    <>
      <EspaceUtilisateur estConnecte={estConnecte} setEstConnecte={setEstConnecte} />
      <Presentation />
      <Statistiques />
      
      <div className="card" style={{ backgroundColor: '#f8fafc' }}>
        <h3 className="card-title" style={{ margin: 0 }}>🔔 Alertes Système</h3>
        <p style={{ marginTop: '0.5rem', color: '#4b5563' }}>Vous avez <strong>4</strong> nouveaux messages de votre équipe.</p>
      </div>

      <SectionListes />
      <SectionMedias />
    </>
  );
};

export default Accueil;