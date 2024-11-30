import React from 'react';
import '../styles/Separation.css'

function Features({ title }) {
  return (
    <div className='Features1'>
      <div className='main-container1'>
        <div className='line' />
        <span className='features'>{title}</span>
        <div className='line' />
      </div>
    </div>
  );
}

export default Features;