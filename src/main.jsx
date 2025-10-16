import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n' // Inicializar i18n
import App from './App.jsx'
import { Pointer } from "@/components/ui/pointer"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* Pointer */}
    <Pointer />
  </StrictMode>,
)
