import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  
  const increment = () => {
    if (count < 20) {
      setCount(count + 1)
    }
  }
  
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h3>Chai or React</h3>
      <h2>Counter: {count}</h2>
      {count === 20 && <h2>Count limit is 20 only</h2>}
      {count === 0 && <h2>We can not go into negative value</h2>}
      <button onClick={increment}>Increment</button><br />
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
