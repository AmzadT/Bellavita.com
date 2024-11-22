import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter for routing
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
)
