import React, {  useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistic = ({ text, value }) => {
  return (
    <table>
      <tbody>
      <tr>
      <td>{text}</td>
      {text === "Positive" ? <td>{value} %</td> : <td>{value}</td>}
    </tr>
      </tbody>
    </table>
  )
}
const Statitics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <>
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="All" value={all} />
      <Statistic text="Average" value={average} />
      <Statistic text="Positive" value={positive} />

    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const title1 = "Give Feedback"
  const title2 = "Statistics"
  const title3 = "No Feedback Given"

  const goodReview = () => setGood(good + 1);
  const neutralReview = () => setNeutral(neutral + 1);
  const badReview = () => setBad(bad + 1);

  const totalScore = () => good + neutral + bad;
  const averageScore = () => {
    return totalScore() ? (good + bad * -1) / totalScore() : 0;
  };
  const positivePercentage = () => {
    return totalScore() ? (good / totalScore()) * 100 : 0
  }

  return (
    <>
      <h1>{title1}</h1>
      <div>
        <Button text="good" handleClick={goodReview} />
        <Button text="neutral" handleClick={neutralReview} />
        <Button text="bad" handleClick={badReview} />
      </div>

      <div>
        <h2>{title2}</h2>

        {!totalScore() ? (
          <h4>{title3}</h4>
        ) : (
            <Statitics
              good={good}
              neutral={neutral}
              bad={bad}
              all={totalScore()}
              average={averageScore()}
              positive={positivePercentage()}
            />
          )}
      </div>
    </>
  )
}

export default App