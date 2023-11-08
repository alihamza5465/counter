import React, { useState } from 'react';
import './App.css'

function App() {
  let [count, counter] = useState(0)
  
  const increase = () =>{
    return counter(count+1)
  }
  const decrease = () =>{
    if (count > 1 ){
      return counter(count - 1)
    }
    else
      return counter('0')
    
  }

  return (
    <div className='main-body'>
      <h1>{count}</h1>
      <div className='button'>
      <button onClick={increase}> INCREASE</button>
      <button onClick={decrease}>DECREASE</button>
    </div>
    </div>
  )
}

export default App
