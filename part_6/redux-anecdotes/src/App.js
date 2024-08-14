
import { useEffect } from 'react'
import AnecdoteList from './components/AnecdoteList.js'
import AnecdoteForm  from './components/AnecdoteForm.js'
import Filter from './components/Filter.js'
import anecdoteService from './services/anecdotes.js'
import { setAnecdotes } from './reducers/anecdoteReducer.js'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [dispatch])

  return (
  <>
    <Filter />
    <AnecdoteList  />
    <AnecdoteForm  />
  </>
  )
}

export default App