import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n/config'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { NotFound } from './pages/NotFound/NotFound'
import { Signup } from './pages/Signup/Signup'
import { Editor } from './pages/Editor/Editor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/editor' element={<Editor />} />

          {/* Add a NotFound route for unmatched paths */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
