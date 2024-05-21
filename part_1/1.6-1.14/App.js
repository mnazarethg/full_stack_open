import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setAll(allClicks.concat('G'))
    setLeft(left + 1)
    setTotal(left + right)
  }

  const handleNeutral = () => {
    setAll(allClicks.concat('N'))
    setRight(right + 1)
    setTotal(left + right)
  }

  const handleBad = () => {
    setAll(allClicks.concat('B'))
    setRight(right + 1)
    setTotal(left + right)
  }

  return (
    <div>
      {left}
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </div>
  )
}

export default App