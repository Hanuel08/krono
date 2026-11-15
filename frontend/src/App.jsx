import { BrowserRouter } from "react-router";
import { useState } from 'react'

import { Header } from './components/Header.jsx'

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  )
}

export default App
