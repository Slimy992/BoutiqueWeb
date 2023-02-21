import { useState } from 'react'
import Body from './component/Body'
import Footer from './component/Footer'
import Header from './component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='scroll-smooth'>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
}

export default App
