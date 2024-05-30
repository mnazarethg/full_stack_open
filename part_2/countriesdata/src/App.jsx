import { useState, useEffect } from 'react';
import Country from './components/Country';
import Search from './components/Search';
import countryServices from './services/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [showData, setShowData] = useState('');

	useEffect(() => {
    countryServices
      .getAll()
      .then(initialCountry => {
        setCountries(initialCountry)
      })
    }, []); 

  return (
    <>
      <Search countries={countries} showData={showData} setShowData={setShowData}/>
      <Country countries={countries} setCountries={setCountries} showData={showData} />
    </>
  )
}

export default App
