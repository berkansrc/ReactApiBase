import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.tsx'
import "./style/Style.css"
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>,
)
