let countriesCache = null; 
let cacheTimeStamp = null;
let CACHE_TTL = Number(process.env.COUNTRIES_CACHE_TTL) || 10 * 60 * 1000;

const filterByName = (array,countryName) => array.filter(country => country.name.common.toLowerCase().includes(countryName.toLowerCase()));

const filterByRegion = (array,countryRegion) => array.filter(country => country.region === countryRegion);

const fetchAllCountries = async () => {
    try {

        if (countriesCache && Date.now() - cacheTimeStamp < CACHE_TTL) {
            return {
                source: "cache",
                data: countriesCache,
            }
        }
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,subregion,capital,tld,currencies,languages");
        const data = await res.json();
        countriesCache = data;
        cacheTimeStamp = Date.now();
        return {
            source:"api",
            data
        } 
    } catch (error) {
        console.error("Error:",error);
        throw error; 
    }
}

module.exports = {
    filterByName,
    filterByRegion,
    fetchAllCountries
}