import React from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './Stores/Pages/LandingPage'
import FS from './Stores/Components/FS'
import FSPage from './Stores/Pages/FSPage'
import MediPage from './Stores/Pages/MediPage'
import MakSingle from './Singles/MakSingle'
import MediSingle from './Singles/MediSingle'
import UserCart from './Stores/Pages/UserCart'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element = { <LandingPage/>}/>
      <Route path='/medicines' element = {<MediPage/>}/>
      <Route path='/mask' element= {<FSPage/>}/>

      <Route path='/masks/:id' element ={<MakSingle/>}/>
      <Route path='/medicines/:id' element ={<MediSingle/>}/>
      <Route path='/cart' element={<UserCart/>}/>
      <Route path='/Login' element={<Login/>}/>
      
     
     </Routes>
    </div>
  )
}

export default App
