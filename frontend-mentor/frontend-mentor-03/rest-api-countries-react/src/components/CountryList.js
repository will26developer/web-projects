import React, { useEffect, useState } from 'react'
import { CountryItem } from './CountryItem';

export const CountryList = ({country,region}) => {
    const generalUrl = "https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,tld,languages,currencies";
    const [ countries, setCountries ] = useState([]);
    
    useEffect(() => {
        const getAllCountries = async url => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.log("Error: ",error)
            }
        }
        getAllCountries(generalUrl);
    },[])
    const filteredCountries = countries.filter(item => {
        let nameMatch = item.name.common.toLowerCase().includes(country.toLowerCase().trim())
        let regionMatch = region === "hidden" || item.region === region;
        return nameMatch && regionMatch;
    })

  return (
    <section className='main__country-all'>
        {filteredCountries.length > 0 ? (
            filteredCountries.map(item => {
                return <CountryItem key={item.name.common} item={item}/>
            })
        ):(<p>There aren't countries to show</p>)}
    </section>
  )
}

