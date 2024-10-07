import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import Login from './Login'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    
    <Router>
    <Routes>
    <Route path="/" element={<Login/>} />
     <Route path="/home" element={<Home/>} />
           </Routes>
    </Router>

    </>
  )
}

export default App
