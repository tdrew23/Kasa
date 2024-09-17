import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Logement from './pages/Logement/Logement.jsx'
import Error from './pages/Error/Error.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
   <Header/>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path="/logement/:id" element={<Logement />} />
     <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
   </Router>
  </StrictMode>,
)


