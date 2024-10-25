import { createSlice } from '@reduxjs/toolkit'

export const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const newAnecdote = {
        content: action.payload,
        id: getId(),
        votes: 0,
      };
      state.push(newAnecdote)
    },
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdote = state.find(anecdote => anecdote.id === id)
      if (anecdote) {
        anecdote.votes += 1
      }
    },
    setAnecdotes(state, action) {      
      return action.payload    
    }
  }
})

export const { createAnecdote, voteAnecdote, setAnecdotes  } = anecdoteSlice.actions
export default anecdoteSlice.reducer