import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './react_files/App.jsx'
import "./style_sheets/style.css"
import "./style_sheets/nav_bar_style.css"
import "./style_sheets/about_me.css"
import "./style_sheets/education.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
