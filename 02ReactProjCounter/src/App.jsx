import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setcount] = useState(0)

  const addvalue = () => {
    if (count < 20) setcount(count+1)
  } 
  const reduceValue = () => {
    if (count > 0) setcount(count-1)
  }

  return (
    <>
      <h1>Fun with React</h1>
      <h2>Counter value : { count }</h2>
      <button onClick={addvalue}>Add Value</button> <br />
      <button onClick={reduceValue}>Reduce Value</button>
      <p>Footer : { count }</p>
    </>
  )
}

export default App