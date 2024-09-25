import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Logement from './pages/Logement/Logement.jsx'
import Propos from './pages/Propos/Propos.jsx'
import Error from './pages/Error/Error.jsx'
import '../index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      {/* Ajoute la classe 'main-content' pour gérer l'espace restant */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </StrictMode>
)
