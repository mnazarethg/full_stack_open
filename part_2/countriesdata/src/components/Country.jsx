
const Country = ({ countries, showData, selectedCountry, setSelectedCountry, weather, setWeather }) => {

	const countriesToShow = showData
	? countries.filter(country => country.name?.common && country.name.common.toLowerCase().includes(showData.toLowerCase()))
	: countries;

	const weatherToShow = weather.filter(w => w.main);
	console.log(weather)
	console.log(weatherToShow)
	
	const handleShowCountry = (country) => {
		setSelectedCountry(country);
	};

	if (countriesToShow.length > 10) {
		return <div>Too many matches, specify another filter</div>;
	} else if (countriesToShow.length > 1 && countriesToShow.length <= 10) {
		return (
			<>
				{countriesToShow.map(country => (
					<div key={country.name?.common}>
						<p>{country.name?.common}</p>
						<button onClick={() => handleShowCountry(country)}>show</button>
					</div>
				))}
			</>
		);
	} else if (selectedCountry) {
		return (
			<div>
				<h1>{selectedCountry.name.common}</h1>
				<p>capital {selectedCountry.capital}</p>
				<p>area {selectedCountry.area}</p>
				<strong>languages:</strong>
				<ul>
						{Object.entries(selectedCountry.languages).map(([key, value]) => (
								<li key={key}>{value}</li>
						))}
				</ul>
				<img src={selectedCountry.flags.png} />
			</div>
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
						<h2>Weather in {country.capital}</h2>
						
						<p>Temperature: {weather} K</p>
					</div>
				))}
			</>
		);
	}
}

export default Country;