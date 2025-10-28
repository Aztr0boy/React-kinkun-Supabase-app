import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Addkinkun from './Pages/Addkinkun'
import Editkinkun from './Pages/Editkinkun'
import Showkinkun from './Pages/Showkinkun'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Addkinkun' element = {<Addkinkun />} />
        <Route path = '/Editkinkun' element = {<Editkinkun />} />
        <Route path = '/Showkinkun' element = {<Showkinkun />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

