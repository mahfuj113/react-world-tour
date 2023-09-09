import { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css"
const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const handleVisitedCountries = (country) => {
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
    }
    const handleVisitedFlags = (flags) => {
        const newVisitedFlags = [...visitedFlags, flags]
        setVisitedFlags(newVisitedFlags)
    }
    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.ccn3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flags-container">
                <ul>
                    {
                        visitedFlags.map((flags, index) => <img key={index} src={flags} alt="" />)
                    }
                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                        key={country.ccn3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;