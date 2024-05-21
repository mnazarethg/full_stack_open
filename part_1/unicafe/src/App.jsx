import { useState } from 'react'

const StatisticLine = ({ text, value }) => {

  return (
    <div>
      {text} {value} 
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = ((good - bad) / total).toFixed(1);
  const positive = (good / total * 100).toFixed(1);

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <table>
        <tr>
          <td>
            <StatisticLine text="good" />
            <StatisticLine text="neutral" />
            <StatisticLine text="bad" />
            <p>total</p>
            <p>average</p>
            <p>positive</p>
          </td>
          <td>
            <StatisticLine value= {good} />
            <StatisticLine value= {neutral} />
            <StatisticLine value= {bad} />
            <p>{total}</p>
            <p>{average}</p>
            <p>{positive}%</p>
          </td>
        </tr>
       </table>
    </div>
  );
}

const Button = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
    </div>
  ) 
}
const App = () => {
  const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button good={good} setGood={setGood} neutral={neutral} bad={bad} setNeutral={setNeutral} setBad={setBad} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App