import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RecipesProvider from './context/RecipesProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecipesProvider>
     <BrowserRouter>
        <App />
     </BrowserRouter>
    </RecipesProvider>
  </StrictMode>,
)
