import './App.css';
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LogIn.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Contenu de l'en-tête */}
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
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
    </Router>
  );
}

export default App;