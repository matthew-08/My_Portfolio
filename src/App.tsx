import './global.css';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeScript } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
