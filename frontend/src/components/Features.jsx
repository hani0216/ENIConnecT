import React from 'react'
import Separation from './Separtion'
import Frame from './Frame'
import '../styles/Features.css'

function Features() {
  return (
    <div className='Features'>
      <Separation title={"Fonctionnalités"} />
      <div className='frames'>
        <Frame 
          FrameTitle={"💬 Discussion Instantanée"} 
          FrameSubtitle={"Connectez-vous en temps réel !"} 
          FrameDescription={
            "Échangez instantanément avec vos camarades, formateurs et enseignants. Créez des discussions privées ou des groupes pour collaborer facilement. Partagez des idées, des fichiers et obtenez des réponses rapides à vos questions académiques, où que vous soyez !"
          } 
        />
        <Frame 
          FrameTitle={"❓ Réseau de Questions-Réponses"} 
          FrameSubtitle={"Une réponse à chaque question !"} 
          FrameDescription={
            "Posez vos questions académiques, partagez vos doutes ou demandez des explications détaillées. Trouvez rapidement des réponses précises. Contribuez à l'amélioration collective en aidant d'autres étudiants, tout en enrichissant la base de connaissances partagée de la communauté."
          } 
        />
        <Frame 
          FrameTitle={"🕶️ Publications Anonymes"} 
          FrameSubtitle={"Partagez sans retenue !"} 
          FrameDescription={
            "Exprimez librement vos idées, préoccupations ou questions sans révéler votre identité. Une plateforme où vous pouvez partager vos pensées sans crainte de jugement, tout en recevant des réponses constructives et bienveillantes de la communauté ENIT."
          } 
        />
      </div>
    </div>
  );
}

export default Features;
