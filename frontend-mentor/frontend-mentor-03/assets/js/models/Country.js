import Flag from "./Flag.js"

class Country {
    constructor(name,nativeName,flags,capital,population,region,subregion,tld,languages,currencies) {
        this.name = name;
        this.nativeName = nativeName;
        this.flags = flags ? new Flag(flags.png,flags.alt) : "N/A";
        this.capital = capital;
        this.population = population;
        this.region = region;
        this.subregion = subregion;
        this.tld = tld;
        this.languages = languages;
        this.currencies = currencies;
    }
}

export default Country; 