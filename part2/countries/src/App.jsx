/*
Exercise 2.18 - 2.20: Data for countries - steps 1-3
https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-18-2-20
*/

import { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './components/Content.jsx'
import Filter from './components/Filter.jsx'

const App = () => {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(response => setAllCountries(response.data))
  }, [])

  const handleFilterChange = (event) => {
    const value = event.target.value
    setFilter(value)

    if (value) {
      const regex = new RegExp(value, 'i')
      const filtered = allCountries.filter(country => country.name.match(regex))
      setCountries(filtered)
    } else {
      setCountries([])
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <Content countries={countries} setCountries={setCountries} />
    </div>
  )
}

export default App
