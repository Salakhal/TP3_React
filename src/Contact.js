// src/Contact.js
import React from 'react';
import './App.css';

const Contact = () => {
  // Styles pour les champs du formulaire
  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1.2rem',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
    color: '#374151'
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
      
      {/* Colonne 1 : Le Formulaire */}
      <div className="card">
        <h2 className="card-title">Envoyez-nous un message</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("Message envoyé avec succès !"); }}>
          <div>
            <label style={labelStyle}>Nom complet</label>
            <input type="text" placeholder="Votre nom" style={inputStyle} required />
          </div>
          <div>
            <label style={labelStyle}>Adresse e-mail</label>
            <input type="email" placeholder="votre.email@exemple.com" style={inputStyle} required />
          </div>
          <div>
            <label style={labelStyle}>Message</label>
            <textarea rows="4" placeholder="Comment pouvons-nous vous aider ?" style={inputStyle} required></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Envoyer le message
          </button>
        </form>
      </div>

      {/* Colonne 2 : Les Coordonnées */}
      <div className="card" style={{ height: 'fit-content' }}>
        <h3 className="card-title">📍 Nos coordonnées</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#4b5563', marginTop: '1.5rem' }}>
          <p><strong>Email :</strong> lakhalsalma18@gmial.com</p>
          <p><strong>Téléphone :</strong> +212 5 00 00 00 00</p>
          <p><strong>Adresse :</strong> Centre d'innovation, Marrakech, Maroc</p>
          
          <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '1rem 0' }} />
          
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            Notre équipe de support technique est disponible du lundi au vendredi, de 9h00 à 18h00 pour répondre à toutes vos questions concernant cette application React.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Contact;