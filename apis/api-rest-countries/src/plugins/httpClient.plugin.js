import axios from "axios";

const URL = "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,subregion,tld,languages,currencies";

export const httpClient = async () => {
  const response = await axios.get(URL);
  return response.data;
}
