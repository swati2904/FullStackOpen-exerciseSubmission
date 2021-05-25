import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Anecdote = ({ title, text, votes }) => {
  return (
    <>
      <h1> {title} </h1>
      <div> {text} </div>
      <h4> has {votes} votes </h4>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]


  const title1 = "Anecdote Of The Day"
  const title2 = "Anecdote with most votes"


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length + 1).join('0').split('').map(parseFloat))
  const maximumNumberOfVotes = Math.max(...votes);

  const handleAnecdotes = () => {
    let randomAnecdotes = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomAnecdotes)
  }

  const handleVotes = () => {
    const vote = [...votes];
    vote[selected]++
    setVotes(vote)
  }

  return (
    <div>
      <Anecdote
        title={title1}
        text={anecdotes[selected]}
        votes={votes[selected]}
      />
      <Button text="Vote" handleClick={handleVotes} />
      <Button text="Next Anecdotes" handleClick={handleAnecdotes} />

      {maximumNumberOfVotes > 0 && (
        <Anecdote
          title={title2}
          text={anecdotes[votes.indexOf(maximumNumberOfVotes)]}
          votes={maximumNumberOfVotes}
        />

      )}
    </div>
  )
}

export default App