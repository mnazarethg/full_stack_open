const Country = ({ countries, showData }) => {
	const countriesToShow = showData
	? countries.filter(country => country.name?.common && country.name.common.toLowerCase().includes(showData.toLowerCase()))
	: countries;

	if (countriesToShow.length > 10) {
		return <div>Too many matches, specify another filter</div>;
	} else if (countriesToShow.length >1 && countriesToShow.length <= 10) {
		return (
			<>
				{countriesToShow.map(country => (
					<div key={country.name?.common}>
						<p>{country.name?.common}</p>
					</div>
				))}
			</>
		);
	} else {
		return (
			<>
				{countriesToShow.map(country => (
					<div key={country.name?.common}>
						<h1>{country.name?.common}</h1>
						<p>capital {country.capital}</p>
						<p>area {country.area}</p>
						<strong>languages:</strong>
						<ul>
								{Object.entries(country.languages).map(([key, value]) => (
										<li key={key}>{value}</li>
								))}
						</ul>
						<img src={country.flags.png} />
					</div>
				))}
			</>
		);
	}
}

export default Country;