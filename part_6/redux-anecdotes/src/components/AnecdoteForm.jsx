import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationCreated, clearNotificationCreated } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    const newAnecdote = await anecdoteService.createNew(content)    
    dispatch(createAnecdote(newAnecdote))
    console.log(createAnecdote(newAnecdote))
    console.log(content)
    dispatch(setNotificationCreated(`You created "${content}"`));
    setTimeout(() => {
      dispatch(clearNotificationCreated());
    }, 5000 * 1000); 
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm