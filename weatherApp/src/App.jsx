import { useState } from 'react'

import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* Displaying Home component */}
     <Home />
    </>
  )
}

export default App
