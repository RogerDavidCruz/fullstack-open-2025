import { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY.trim()
    const capital = country.capital.trim()

    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${api_key}`)
      .then(response => {
        console.log('Weather data:', response.data)
        setWeather(response.data)
      })
      .catch(error => {
        console.error('Weather fetch failed:', error)
      })
  }, [country.capital])
  

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>

      <h3>Languages</h3>
      <ul>
        {country.languages.map(lang => <li key={lang.iso639_1}>{lang.name}</li>)}
      </ul>

      <img src={country.flag} alt={`Flag of ${country.name}`} width="150" />

      {weather && (
        <>
          <h3>Weather in {country.capital}</h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
          <p>Wind: {weather.wind.speed} m/s</p>
        </>
      )}
    </div>
  )
}

export default Country
