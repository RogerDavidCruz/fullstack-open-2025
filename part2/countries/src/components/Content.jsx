import Country from './Country.jsx'

const Content = ({ countries, setCountries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country, i) => (
          <li key={i}>
            {country.name}
            <button onClick={() => setCountries([country])}>show</button>
          </li>
        ))}
      </ul>
    )
  } else if (countries.length === 1) {
    return <Country country={countries[0]} />
  } else {
    return null
  }
}

export default Content
