import axios from 'axios'
const baseUrlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=';

const weatherServices = async (capital) => {
    const apiKey = import.meta.env.VITE_SOME_KEY;
    const request = axios.get(`${baseUrlWeather}${capital}&appid=${apiKey}`);
  return request.then(response => response.data)
}

export default weatherServices 