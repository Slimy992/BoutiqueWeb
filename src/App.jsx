import { useState } from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import { Routes, Route } from 'react-router-dom'
import Reservation from './component/pages/Reservation'
import Horaire from './component/pages/Horaire'
import Contact from './component/pages/Contact'
import Menu from './component/pages/Menu'
import Acceuil from './component/pages/Acceuil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Acceuil/>}/>
        <Route path='/Commander' element={<Menu/>}/>
        <Route path='/Reservation' element={<Reservation/>}/>
        <Route path='/Horaire' element={<Horaire/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
