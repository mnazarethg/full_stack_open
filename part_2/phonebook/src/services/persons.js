import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
    const request = axios.get(baseUrl)
    const nonExisting = {
      id: 10000,
      content: 'This person is not saved to server',
      important: true,
    }
    return request.then(response => response.data.concat(nonExisting))
  }

const create = async newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = async (id, newObject) => {
  console.log("id" + id)
  console.log("new object " + JSON.stringify.newObject)
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = async id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getAll, create, update, remove }