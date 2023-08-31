import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
   <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="services" element={<Services/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
   </>
  );
}

export default App;
