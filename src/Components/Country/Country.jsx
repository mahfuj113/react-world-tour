import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited ? "visited":"not-visited"}`}>
            <h3 style={{color: visited? "black":"blue"}}>Name {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <button onClick={() => handleVisitedFlags(flags.png)}>Add Flags</button>
            <button onClick={handleVisited}>{visited? "visited":"going"}</button>
            <p>{visited ? "I also visited" : "I am going"}</p>
        </div>
    );
};

export default Country;