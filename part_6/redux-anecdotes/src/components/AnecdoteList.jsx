import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotificationVoted, clearNotificationVoted } from '../reducers/notificationReducer';
import Notification from './Notification'

const Anecdotes = () => {
	const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {    
		if ( filter === 'ALL' ) {    
			return anecdotes    
		}	else {  
			return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())) 
		}
	})

	const handleVote = (id) => {
    dispatch(voteAnecdote(id));
		const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id);
		console.log(votedAnecdote)
    dispatch(setNotificationVoted(`You voted for "${votedAnecdote.content}"`));
    setTimeout(() => {
      dispatch(clearNotificationVoted());
    }, 5000);
  };

  return(
    <>		
			<Notification/>
			{[...anecdotes]
			.sort((a, b) => b.votes - a.votes)
			.map(anecdote =>
			<div key={anecdote.id}>
				<div>
					{anecdote.content}
				</div>
				<div>
					has {anecdote.votes}
					<button onClick={() => handleVote(anecdote.id)}>vote</button>
				</div>
			</div>
			)}
		</>
  )
}

export default Anecdotes