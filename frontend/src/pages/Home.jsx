import '../styles/Home.css'
import React from 'react';
import HomeNavBar from '../components/HomeNavBar';
import FEATURES from '../components/Features' ;
import Eniconnect from '../components/Eniconnect';
import ABOUT from '../components/About'
import HomeFooter from '../components/HomeFooter';

const Home = () => {
    return (
        <div>
            <header>
                <HomeNavBar />
                {/* <Eniconnect />*/}
                


            </header>
            <body>
                <div className='div1'>
                   
                    <section className='leftSection'>
                        <Eniconnect />
                        <text className='content'>Connectez-vous à l’ENIT. <br />
                            Répondre à vos questions. <br />
                            Partagez votre connaissance.</text>
                        <text className='text2'>
                        Forum de Question/Réponse, Espace de collaboration, et d’autres..  
                        </text>

                        </section>
                        
                       
                        
                  
                    <section className='Gif'></section>
                </div>
                
                <button className='medium-primary-1' style={{marginLeft: '30%'  , marginTop: '2%'}}>
                <span className='button-2' >Inscrivez-vous</span>
                </button>
                <div className='features'>
                   <FEATURES />
                   <ABOUT />
                   <HomeFooter />


                </div>
         
            </body>
        </div>
        
    );
};

export default Home;