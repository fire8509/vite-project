import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'

import Home from './pages/Home';
import Gamelist from './pages/Gamelist';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamelist" element={<Gamelist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;