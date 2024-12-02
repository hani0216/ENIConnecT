import React from 'react';
import '../styles/HomeNavBar.css';
import { Link } from 'react-router-dom';


function HomeNavBar() {
  return (
    <div className='main-container'>
      <div className='logo-enit' />
      <div className='frame'>
        <Link to="/login" className='medium-primary'>
          <span className='button'>Login</span>
        </Link>
        <Link to="/signup" className='medium-primary-1'>
          <span className='button-2'>Register</span>
        </Link>
      </div>
    </div>
  );
}

export default HomeNavBar