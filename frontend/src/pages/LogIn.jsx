import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/LogIn.css'


function LogIn() {
  return (
    <div>

        <div className='Nav'>
        <div className='main-container'>
      <div className='logo-enit' />
      <div className='frame'>
        <section className='medium-primary'>
   
        </section>
        <Link to="/signup" className='medium-primary-1'>
          <span className='button-2'>Inscription</span>
        </Link>
      </div>
    </div>
        </div>

        
      <div className='container4'>
        <section className='title'>
            <text className='t1'>Bienvenu !</text>
            <text className='t2'> Ne manquez aucune mise à jour de l'ENIT</text>
        </section>
        <section className='form1'>
            <h2 className='title2'>Connexion</h2>
            <form id="login-form" action="url_de_votre_api" method="POST">
            <label for="email-phone" className='label'>Email:</label>
            <input className='input1' type="text" id="email" name="email" required></input><br/>
            <label for="password" className='label'>Mot de passe:</label>
            <input className='input1' type="password" id="password" name="password" required></input><br/>
            <button type="submit" className='medium-primary-1 btn2'>Se connecter</button>
            <div>
            <a href="#" className='pass'>Mot de passe oublié?</a>
            <span> | </span>
          
        </div>


            </form >
            </section>


      </div>

    </div>
  )
}

export default LogIn
