const {filterByName,filterByRegion,fetchAllCountries} = require("../../services/apiCountriesServices");

const apiRestCountries = async (req,res) => {
    try {
        const {name,region} = req.query;
        let {source, data} = await fetchAllCountries();
        let result = data; 
        if (name) result = filterByName(result,name);
        if (region) result = filterByRegion(result,region);

        return res.status(200).json({
            source,
            count:result.length,
            data:result
        })
    } catch (error) {
        return res.status(500).json({
            error:"Failed to fetch countries",
            message:error.message
        })
    }
}

module.exports = {
    apiRestCountries
}