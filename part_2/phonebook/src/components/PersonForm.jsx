import { useState } from "react";
import personService from '../services/persons'
const PersonForm = ({ persons, setPersons, setErrorMessage, setErrorType }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')


    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
      }
    
      const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }
        const personExists = persons.find(p => p.name === newName);
        if (personExists && window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          const changedNumber = { ...personExists, number: newNumber };
          personService.update(personExists.id, changedNumber)
            .then((returnedPerson) => {
              setPersons(persons.map(person => person.id !== personExists.id ? person : returnedPerson));
              setErrorMessage(`Changed ${newName}`);
              setErrorType('error');
              setNewName('');
              setNewNumber('');
            })
            .catch(error => {
              setErrorMessage(`Information of ${newName} has already removed from server`);;
              setErrorType('error2'); 
            });
        } else {
          personService.create(nameObject)
            .then(returnedName => {
              setPersons(persons.concat(returnedName));
              setErrorMessage(`Added ${newName}`);
              setErrorType('error');
              setNewName('');
              setNewNumber('');
            })
            .catch(error => {
              setErrorMessage('Error creating person:', error);
            });
          }
        };
    
        return (
            <>
            <form onSubmit={addName}>
            <div>
            name: <input value={newName}
            onChange={handleNameChange}/>
            </div>
            <div>
            number: <input value={newNumber}
            onChange={handleNumberChange}/>
            </div>
            <div>
            <button type="submit">add</button>
            </div>
            </form>
            </>
            )
        }

export default PersonForm