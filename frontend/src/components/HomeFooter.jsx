import React from 'react';
import '../styles/HomeFooter.css';

function HomeFooter() {
  return (
    <footer className='Footer1 container'>
      <div className='logo2'>      
      </div>
      <div className='footer-content'>
        <section className='contribution'>
          <h4>🤝 Contribution et Open Source 📚</h4>
          <p>
            Projet réalisé par des étudiants de l'ENIT.<br />
            Objectif : améliorer la vie associative et la collaboration.<br />
            Engagement envers l'open source pour un outil évolutif et participatif.<br />
            Code source ouvert à toute contribution et amélioration.<br />
            Vos idées sont les bienvenues pour enrichir ENIConnect.<br />
            Contactez-nous pour toute question ou suggestion.
          </p>
        </section>

      

        <section className='contact'>
          <h3>Coordonnées de contact</h3>
          <p><i className="fas fa-phone"></i> +216 50 231 860</p>
          <p><i className="fas fa-envelope"></i> Eniconnect@enit.utm.tn</p>
          <p><i className="fas fa-map-marker-alt"></i> École nationale d'ingénieurs de Tunis, Manar 1, Tunis</p>
        </section>
      </div>
    </footer>
  );
}

export default HomeFooter;