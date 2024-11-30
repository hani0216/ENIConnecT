import '../styles/Home.css'
import React from 'react';
import HomeNavBar from '../components/HomeNavBar';


import Eniconnect from '../components/Eniconnect';

const Home = () => {
    return (
        <div>
            <header>
                <HomeNavBar />
                {/* <Eniconnect />*/}
                


            </header>
            <body>
                <div className='div1'>
                    <section  >
                        <section className='leftSection'>
                        <Eniconnect />
                        <text className='content'>Connectez-vous à l’ENIT. <br />
                            Répondre à vos questions. <br />
                            Partagez votre connaissance.</text>
                        <text className='text2'>
                        Forum de Question/Réponse, Espace de collaboration, et d’autres..  
                        </text>

                        </section>
                        
                       
                        
                    </section>
                    <section className='Gif'></section>
                </div>
         
            </body>
        </div>
        
    );
};

export default Home;