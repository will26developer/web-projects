import { AppError } from "../errors/AppError"

export const httpClientPlugin = async (): Promise<any> => {
    try {
        const response = await fetch("https://apicountries.com/countries");
        
        if (!response.ok) {
            throw new AppError("Fetch countries fail",400);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        throw new AppError("Fetch fail, plesase fix the problem",500);
    }
}