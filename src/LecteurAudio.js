// src/LecteurAudio.js
import React from 'react';

const LecteurAudio = () => {
  return (
    <div className="lecteur-audio">
      <h3 className="card-title">
        <span>🎵</span> Piste audio d'illustration :
      </h3>
      <p className="card-subtitle">Exemple sonore de la plateforme SoundHelix</p>
      <audio controls style={{ width: '100%', outline: 'none' }}>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Votre navigateur est obsolète pour lire cet audio.
      </audio>
    </div>
  );
};

export default LecteurAudio;