import { useState } from 'react';
const Person = ({ persons, showAll }) => {
    const personsToShow = showAll
    ? persons.filter(person => person.name.toLowerCase().includes(showAll.toLowerCase()))
    : persons

    console.log(personsToShow)
    return (
    <>
        {personsToShow.map(person => (
        <div key={person.id}>
            {person.name} - {person.number}
        </div>
        ))}
    </>
    )
}

export default Person