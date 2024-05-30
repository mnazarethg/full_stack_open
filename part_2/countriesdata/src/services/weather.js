import axios from 'axios'
const baseUrlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=';

const weatherServices = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const request = axios.get(`${baseUrlWeather}${capital}&appid=${apiKey}`);
  const nonExisting = {
    id: 10000,
    content: 'This person is not saved to server',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
}

export default weatherServices 