import React from 'react';
import '../styles/HomeNavBar.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='logo-enit' />
      <div className='frame'>
        <button className='medium-primary'>
          <span className='button'>Login</span>
        </button>
        <button className='medium-primary-1'>
          <span className='button-2'>Register</span>
        </button>
      </div>
    </div>
  );
}
