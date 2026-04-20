import { getCountries } from "../services/getCountries.js"
import { getFilteredCountries } from "../services/getFilteredCountries.js"

export const apiController = async (req,res,next) => {
    try {
        const {name,region} = req.query;
        
        const countries = await getCountries();
        
        if (!countries) {
            const error = new Error("Countries not get it");
            error.status = 502;
            return next(error);
        }

        const filteredCountries = name || region ? getFilteredCountries(countries,name,region): countries;

        return res.status(200).json({
            filteredCountries
        })
    } catch (error) {
        next(error)
    }
}