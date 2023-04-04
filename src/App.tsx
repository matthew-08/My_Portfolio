import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ColorModeScript } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import theme from './theme';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
