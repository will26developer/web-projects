

export const useFilterCountries = (data,filters) => {
    let countries = data.countries;
    let name = filters.name;
    let region = filters.region;
    if (name) {
        countries = countries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()))
    }

    if (filters.region) {
        countries = countries.filter(country => country.region === region);
    }

    return countries;
}