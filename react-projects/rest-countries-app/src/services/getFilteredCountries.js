


export const getFilteredCountries = (countries,name,region) => {
    let data = countries;
    
    if (name) {
        data = data.filter(country => country.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (region) {
        data = data.filter(country => country.region === region);
    }

    return data;
}