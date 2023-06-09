import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ColorModeScript } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import theme from './theme';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
