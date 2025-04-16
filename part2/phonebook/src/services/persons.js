/*
Exercise 2.12 - 2.15: The Phonebook Steps 7 - 10
https://fullstackopen.com/en/part2/altering_data_in_server#exercises-2-12-2-15
*/

import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(res => res.data)

const create = newPerson => axios.post(baseUrl, newPerson).then(res => res.data)

const update = (id, updatedPerson) => axios.put(`${baseUrl}/${id}`, updatedPerson).then(res => res.data)

const remove = id => axios.delete(`${baseUrl}/${id}`)

export default { getAll, create, update, remove }
