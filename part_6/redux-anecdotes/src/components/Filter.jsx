import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
    const dispatch = useDispatch()

    const handleFilter = (event, state) => {
        event.preventDefault()
        console.log(state)
        const filter = event.target.value
        dispatch(filterChange(filter))
      }
    
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input name="filter" onChange={handleFilter}/>
      </div>
    )
  }
  
  export default Filter