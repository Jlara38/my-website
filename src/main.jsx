import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './react_files/App.jsx'

// All style sheet imports will belong here.
import './style_sheets/style.css'
import './style_sheets/sections.css'
import './style_sheets/aboutme.css'
import './style_sheets/education.css'
import './style_sheets/card.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
