

export const countryAdapter = country => {
    let {name,flags,capital,population,region,subregion,tld,languages,currencies} = country
    return {
        name:name.common,
        nativeName:  name.nativeName ? Object.values(name.nativeName).map(native => native.official).join(", ") : name.common,
        flags: {
            png:flags.png,
            alt:flags.alt
        },
        population: population,
        region: region,
        subregion: subregion,
        capital: capital,
        tld: tld.length > 1 ? tld.join(", ") : tld[0],
        languages: languages ? Object.values(languages).join(", ") : "N/A",
        currencies: currencies ? Object.values(currencies).map(c => c.name).join(",") : "N/A"
    }
}