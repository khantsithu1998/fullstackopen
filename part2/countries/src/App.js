import { useEffect, useState } from "react"
import axios from "axios"
import Country from "./components/Country"
import Over from "./components/Over"
import CountryItem from "./components/CountryItem"

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [isFilter, setIsFilter] = useState(false)
  const [isOver, setIsOver] = useState(false)

  const countriesShow = isFilter ? filterCountries : countries

  const handleSearchCountryEntryChange = (event) => {
    if (event.target.value === '') {
      setIsFilter(false)
      setFilterCountries([])
    }
    setIsFilter(true)
    setSearchCountry(event.target.value)
    const countriesSearched = countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))

    if (countriesSearched.length < 11 || countriesSearched.length === countries.length) {
      setIsOver(false)
    } else {
      setIsOver(true)
    }
    setFilterCountries(countriesSearched)
  }

  const getCountryAllHook = () => {
    setIsOver(false)
    setIsFilter(false)
    setFilterCountries([])
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountries(response.data)
    })
    
  }

  useEffect(getCountryAllHook, [])


  return (
    <>
      <div>
        find countries <input value={searchCountry} onChange={handleSearchCountryEntryChange} />
      </div>
      {isOver ? <Over/> :
        countriesShow.length === 1 ? <Country country={countriesShow[0]}/> :
          <ul>
            {countriesShow.map(country => <CountryItem key={country.name.common} name={country.name.common}/> )}
          </ul>}
    </>
  )
}

export default App