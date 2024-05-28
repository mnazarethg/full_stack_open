import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Person from './components/Person';
import personService from './services/persons';
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [showAll, setShowAll] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [errorType, setErrorType] = useState('error');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  
  const toggleRemove = id => {
    const person = persons.find(p => p.id === id);
    console.log(person)
    if (window.confirm(`Delete ${person.name}`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => {
          console.error('Error removing person:', error);
        });
    };
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification errorMessage={errorMessage} setErrorMessage={setErrorMessage} type={errorType} />
      <Filter showAll={showAll} setShowAll={setShowAll} persons={persons} />
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage} setErrorType={setErrorType} />
      <h3>Numbers</h3>
      <Person persons={persons} showAll={showAll} setShowAll={setShowAll} toggleRemove={toggleRemove} />
    </div>
  )
  }

export default App