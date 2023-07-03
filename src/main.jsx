import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Heroe from './pages/Heroe.jsx'
import Search from './pages/Search.jsx'
import { GlobalStyle } from './components/Styled-components/layoutStyles/GlobalStyles.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <GlobalStyle/>
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='/heroe/:id' element={<Heroe />} />
            <Route path='/search' element={<Search />} />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
