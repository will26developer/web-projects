import { Flags } from "./Flags";

export type Country = {
    name: string,
    nativeName:string,
    flags: Flags
    population: number,
    region: string,
    capital: string,
    subregion: string,
    tld: string,
    currencies: string,
    languages: string 
}