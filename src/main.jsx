import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './react_files/App.jsx'
import './style_sheets/section_header.css'
import './style_sheets/style.css'
import './style_sheets/education.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
