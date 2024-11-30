import '../styles/Home.css'
import React from 'react';
import HomeNavBar from '../components/HomeNavBar';

import Eniconnect from '../components/Eniconnect';

const Home = () => {
    return (
        <div>
            <header>
                <HomeNavBar />
                <Eniconnect />


            </header>

        </div>
    );
};

export default Home;