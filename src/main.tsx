import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/Global.scss"
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from './components/Home/Home.tsx'
import Movie from './components/Movie/Movie.tsx'
import Search from './components/Search/Search.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route element={<App/>}>
<Route path="/" element={<Home />} />
<Route path="/movie/:id" element={<Movie />} />
<Route path="search" element={<Search />} />
  </Route>
  </Routes>
  
  </BrowserRouter>
  </React.StrictMode>
)
