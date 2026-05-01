import { AppError } from '../errors/AppError';
import { Country } from '../models/Country';
import { httpClientPlugin } from './../plugins/httpClientPlugin'; 
import logger from '../logger/logger';

const TTL = Number(process.env.TTL) || 1000 * 60 * 10;
let countriesCache: Country[] | null = null;
let lastFetch = 0;

export const countries = {
    getCountriesService: async (): Promise<Country[]> => {
        const now = Date.now();

        if (countriesCache && (now - lastFetch < TTL)) {
            logger.info("Countries cache hit...")
            return countriesCache
        }
        try {
            logger.info("Countries fetch from API...")
            let countries = (await httpClientPlugin()) as any[];
            let countriesFiltered: Country[] = countries.map((country: any) => {
                let {name,flags,population,capital,region,subregion,tld,languages,currencies} = country
                return {
                  name: name?.common || "N/A",

                  nativeName: name?.nativeName
                    ? Object.values(name.nativeName)
                        .map((native: any) => native.official)
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
                        .map((c: any) => c.name)
                        .join(", ")
                    : "N/A",
                };
            })

            logger.info("Countries fetched and cached", {
              count: countriesFiltered.length,
            });

            countriesCache = countriesFiltered;
            lastFetch = now

            return countriesFiltered
        } catch (error) {
            logger.error("Error fetching or transforming countries", {
              error: error instanceof Error ? error.message : error,
              stack: error instanceof Error ? error.stack : undefined,
            });
            throw new AppError("Fail in transform countries data",500);
        }
    },
    getFilteredCountries: async (name: string, region: string): Promise<Country[]> => {
        let countriesFiltered = await countries.getCountriesService();

        logger.info("Filtering countries", {
          name,
          region,
        });
        
        if (name) {
            countriesFiltered = countriesFiltered.filter((c:Country) => c.name.toLowerCase().includes(name.toLowerCase()));
        }

        if (region) {
            countriesFiltered = countriesFiltered.filter((c:Country) => c.region === region);
        }

        logger.info("Filtered result", {
          count: countriesFiltered.length,
        });

        return countriesFiltered;
    } 
}