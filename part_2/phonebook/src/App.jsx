import { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Person from './components/Person';
// SEGUIR ESTUDIANDO DESDE 2C!!!!!
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [showAll, setShowAll] = useState('');

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter showAll={showAll} setShowAll={setShowAll} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h3>Numbers</h3>
      <Person persons={persons} showAll={showAll} />
    </div>
  )
}

export default App