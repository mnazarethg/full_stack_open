const Filter = ({ showAll, setShowAll }) => {

	const handleShowChange = (event) => {
		console.log(event.target.value)
		setShowAll(event.target.value)
	}

	return (
		<>
			filter shown with <input value={showAll} onChange={handleShowChange}/>
		</>
	)
}

export default Filter