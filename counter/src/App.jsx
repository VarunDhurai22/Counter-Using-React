import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setcounter]=useState(22)
  //let counter=22
  let addValue = () => {
    //counter=counter+1
    setcounter(counter+1)
  }
  const [rcounter,rsetcounter]=useState(22)
  let removeValue = () => {
    setcounter(counter-1)
  }
  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value :{counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
