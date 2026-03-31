import Country from "../models/Country";

const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,subregion,tld,languages,currencies");
    const data = await response.json()
    return data.map((c:any): Country => ({
      name: c.name.common,
      nativeName: c.name.nativeName ? Object.values(c.name.nativeName)[0] : c.name.common,
      flag: {
        png: c.flags.png,
        alt: c.flags.alt,
      },
      population: c.population,
      capital: c.capital?.[0] || "N\A",
      region: c.region,
      subregion: c.subregion,
      tld: c.tld ? c.tld.join(", ") : c.tld[0],
      languages: c.languages
    ? Object.values(c.languages).join(", ")
    : "N/A",
  currencies: c.currencies
    ? Object.values(c.currencies)
        .map((cur: any) => cur.name)
        .join(", ")
    : "N/A"
    }));
  } catch (error) {
    return [];
  }
}

export default getCountries;
