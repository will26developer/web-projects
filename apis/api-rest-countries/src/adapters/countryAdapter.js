

export const countryAdapter = (country) => {
  let {
    name,
    flags,
    capital,
    population,
    region,
    subregion,
    tld,
    languages,
    currencies,
  } = country;

  return {
    name: name?.common || "N/A",

    nativeName: name?.nativeName
      ? Object.values(name.nativeName)
          .map((native) => native.official)
          .join(", ")
      : name?.common || "N/A",

    flags: {
      png: flags?.png || "",
      alt: flags?.alt || "",
    },

    population: population || 0,
    region: region || "N/A",
    subregion: subregion || "N/A",

    capital: capital?.[0] || "N/A",

    tld: tld?.length > 1 ? tld.join(", ") : tld?.[0] || "N/A",

    languages: languages
      ? Object.values(languages).join(", ")
      : "N/A",

    currencies: currencies
      ? Object.values(currencies)
          .map((c) => c.name)
          .join(", ")
      : "N/A",
  };
};