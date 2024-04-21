
import Web3ModalProvider from '../context/index'; // Ajustează calea conform structurii proiectului tău

function MyApp({ Component, pageProps }) {
    // Aici poți adăuga o logică suplimentară dacă este necesar, de exemplu, pentru a gestiona cookies pe partea de server
    
    return (
      <Web3ModalProvider>
        <Component {...pageProps} />
      </Web3ModalProvider>
    );
  }
  
  export default MyApp;