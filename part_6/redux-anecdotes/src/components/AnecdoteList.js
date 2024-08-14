import { useSelector, useDispatch } from 'react-redux'

const Anecdotes = () => {
	const dispatch = useDispatch()

  const anecdotes = useSelector(({ filter, anecdotes }) => {
		console.log(anecdotes)
		if (!filter) {
			return anecdotes
		}
		return anecdotes.filter(anecdote => 
			anecdote.content && anecdote.content.toLowerCase().includes(filter.toLowerCase())
		)
	})

	const vote = (id) => {
    console.log('vote', id)
    return {
      type: 'VOTE',
      data: { id }
    }
  }


  return(
    <>
			<h2>Anecdotes</h2>
			{anecdotes
			.sort((a, b) => b.votes - a.votes)
			.map(anecdote =>
			<div key={anecdote.id}>
				<div>
					{anecdote.content}
				</div>
				<div>
					has {anecdote.votes}
					<button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
				</div>
			</div>
			)}
		</>
  )
}

export default Anecdotes