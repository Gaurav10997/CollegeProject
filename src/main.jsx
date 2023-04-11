import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';
import { AuthContextProvider } from './store/AuthContest';
ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider > 
      <React.StrictMode>  
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </React.StrictMode>,
    </AuthContextProvider> 
 
)