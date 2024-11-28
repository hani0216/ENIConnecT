import '../styles/Home.css'
import React from 'react';
import HomeNavBar from '../components/HomeNavBar';
import NameGif from '../components/NameGif';

const Home = () => {
    return (
        <div>
            <header>
            <HomeNavBar /> 
            <NameGif />

           
            </header>
        
        </div>
    );
};

export default Home;