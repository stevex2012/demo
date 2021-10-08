import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Hello from './Hello'

function App() {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setCount('changed')
    }, 5000);
  }, [])
  return (
    <div className="App">

      <Hello text={count}/>
    </div>
  )
}

export default App
