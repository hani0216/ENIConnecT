import '../styles/Home.css';
import React from 'react';
import HomeNavBar from '../components/HomeNavBar';
import FEATURES from '../components/Features';
import Eniconnect from '../components/Eniconnect';
import ABOUT from '../components/About';
import HomeFooter from '../components/HomeFooter';

const Home = () => {
    return (
        <div>
            <header>
                <HomeNavBar />
            </header>
            <main>
                <div className='div1'>
                    <section className='leftSection'>
                        <Eniconnect />
                        <p className='content'>Connectez-vous à l’ENIT.<br />
                            Répondez à vos questions.<br />
                            Partagez votre connaissance.</p>
                        <p className='text2'>
                            Forum de Question/Réponse, Espace de collaboration, et d’autres..
                        </p>
                    </section>

                    <section className='Gif'></section>
                </div>

                <button className='medium-primary-1' style={{ marginLeft: '30%', marginTop: '2%' }}>
                    <span className='button-2'>Inscrivez-vous</span>
                </button>

                <div className='features'>
                    <FEATURES />
                    <ABOUT />
                    <HomeFooter />
                </div>
            </main>
        </div>
    );
};

export default Home;