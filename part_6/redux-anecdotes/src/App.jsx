
import { useEffect } from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm  from './components/AnecdoteForm'
import Filter from './components/Filter'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [dispatch])
 
  return (
  <>
    <h2>Anecdotes</h2>
    <Filter />
    <AnecdoteList  />
    <AnecdoteForm  />
  </>
  )
}

export default App