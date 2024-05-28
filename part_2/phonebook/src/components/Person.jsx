

const Person = ({ persons, showAll, toggleRemove }) => {
    const personsToShow = showAll
    ? persons.filter(person => person.name && person.name.toLowerCase().includes(showAll.toLowerCase()))
    : persons

    return (
    <>
        {personsToShow.map(person => (
        <div key={person.id}>
            {person.name} - {person.number }
            <button onClick={() => toggleRemove(person.id)}>delete</button>
        </div>
        ))}
    </>
    )
}

export default Person