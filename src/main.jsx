import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx';
import {Navbar} from './Navbar.jsx'
import { Mainpage } from './Mainpage.jsx'
import { Project } from './Project.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Mainpage />
    <Project />
    

  </StrictMode>
)
