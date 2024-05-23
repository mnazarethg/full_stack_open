import { useState } from 'react';
const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
  
    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
        name: newName,
        number: newNumber
        }
    
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
        const nameExist = persons.some(person => person.name === newName)
        if (nameExist) {
        alert(`${newName} is already added to phonebook`)
        }
        console.log("name exist", nameExist)
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
      }
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