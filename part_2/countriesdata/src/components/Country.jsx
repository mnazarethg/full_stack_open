import { useEffect } from "react";
import weatherServices from "../services/weather";

const Country = ({ countries, showData, selectedCountry, setSelectedCountry, weather, setWeather }) => {

	const countriesToShow = showData
	? countries.filter(country => country.name?.common && country.name.common.toLowerCase().includes(showData.toLowerCase()))
	: countries;

	const handleShowCountry = (country) => {
		setSelectedCountry(country);
	};

	useEffect(() => {
		console.log("apital" + countriesToShow.map(country => country.capital))
		weatherServices(countriesToShow.map(country => country.capital)).then(weatherData => {
			setWeather(weatherData);
		});
	}, [countriesToShow]);
	

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
						
						<p>temperature {weather.main.temp} Celcius</p>
						<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
						<p>wind {weather.wind.speed} m/s</p>
					</div>
				))}
			</>
		);
	}
}

export default Country;