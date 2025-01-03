import React from 'react'
import '../styles/About.css'
import SEPARATION from './Separtion'

function About() {
  return (
    <div >
        <SEPARATION title={"A propos"} />
        <div className='TotalDiv'>
         
            <section className='AboutEniconnect'>
                <div className='container2'>
                <text  className='title1'>📘 À propos d'ENIConnect 🚀</text><br></br>
                <text className='textAbout'>ENIConnect est une plateforme collaborative innovante conçue spécialement pour les étudiants et enseignants de l'ENIT. Notre mission est de faciliter la communication, l'entraide académique et la collaboration au sein de la communauté universitaire.<br/>
                    Dans un environnement universitaire dynamique, la communication efficace et l'accès à l'information sont essentiels. ENIConnect offre un espace où vous pouvez non seulement interagir facilement avec vos camarades et enseignants, mais aussi partager des connaissances, poser des questions, et collaborer sur divers projets académiques.
                    </text> 
                </div>
                
                 </section>
            
               
                <section className='EnitPic'></section>
            


     
         
        </div>
    </div>
  )
}

export default About