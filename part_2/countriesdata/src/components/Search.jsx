
const Search = ({ showData, setShowData }) => {

	const handleShowChange = (event) => {
		console.log(event.target.value)
		setShowData(event.target.value)
	}

	return (
		<>
			Find countries <input value={showData} onChange={handleShowChange}/>
		</>
	)
}

export default Search