import './App.css';
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import LOGIN from './pages/LogIn.jsx'
import SIGNUP from './pages/SignUp.jsx'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      
      <main>
        <Home />
      </main>
      
      {/* Section des fonctionnalités */}
      <section>
        {/* Contenu de la section des fonctionnalités */}
      </section>
      
      {/* Section à propos */}
      <section>
        {/* Contenu de la section à propos */}
      </section>
    </div>
  );
}


<Routes >
  <Route  path="/logIn" element={<LOGIN />} />
  <Route  path="/signUp" element={<SIGNUP />} />
</Routes>






export default App;


