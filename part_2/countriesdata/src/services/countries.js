import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAll = async () => {
  const request = axios.get(baseUrl+"/all")
  const nonExisting = {
    id: 10000,
    content: 'This person is not saved to server',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
}

const getCountry = async (name) => {
  const request = axios.get(`${baseUrl+"/name"}/${name}`)
  console.log("request " + JSON.stringify.request)
  const nonExisting = {
    id: 10000,
    content: 'This person is not saved to server',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
}

export default { getAll, getCountry }