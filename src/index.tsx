import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <ChakraProvider>
          <GlobalStyle />
          <App />
        </ChakraProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
