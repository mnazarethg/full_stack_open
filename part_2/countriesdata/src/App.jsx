import { useState, useEffect } from 'react';
import Country from './components/Country';
import Search from './components/Search';
import countryServices from './services/countries';
import weatherServices from './services/weather';

// FALTA LA INTEGRACION DEL CLIMA

function App() {
  const [countries, setCountries] = useState([]);
  const [showData, setShowData] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weather, setWeather] = useState([])

	useEffect(() => {
    countryServices()
    .then(initialCountry => {
      setCountries(initialCountry)
    })
  }, []); 

  useEffect(() => {
    weatherServices()
    .then(initialWeather => {
      setWeather(initialWeather)
    })
  }, []); 

  return (
    <>
      <Search countries={countries} showData={showData} setShowData={setShowData}/>
      <Country countries={countries} setCountries={setCountries} showData={showData} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} weather={weather} setWeather={setWeather}/>
    </>
  )
}

export default App
