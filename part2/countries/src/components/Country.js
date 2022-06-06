import axios from "axios"
import { useEffect, useState } from "react"

const Country = ({ country }) => {
    const [weather, setWeather] = useState([])
    const languages = Object.values(country.languages)
    const [weatherIcon, setWeatherIcon] = useState('')

    const KEY = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country.name.official}&appid=`+KEY).then(response => {
            setWeather(response.data)
            if (response.data.weather?.length > 0) setWeatherIcon(`http://openweathermap.org/img/wn/${response.data.weather[0]?.icon}@2x.png`) 
        })
    }, [country.name.official])

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <ul>
                {languages.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <img alt={country.name.official} src={country.flags.png} />
            <h2>Weather in {country.name.official}</h2>
            <p>temperature - {Math.round(weather?.main?.temp - 273.15)}&#8451;</p>
            {weatherIcon && <img alt={country.name.official} src={weatherIcon} />}
            <p>wind {weather?.wind?.speed.toString()} m/s</p>
        </div>
    )
}

export default Country