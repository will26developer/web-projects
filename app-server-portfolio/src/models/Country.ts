import Flag from "./Flag";

type Country = {
  name: string,
  nativeName: string,
  flag: Flag,
  population: number,
  capital: string,
  region: string,
  subregion: string,
  tld:string,
  languages:string,
  currencies: string,
}

export default Country;
