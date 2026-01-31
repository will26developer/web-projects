const path = require("path");
const fs = require("fs");
const {filterByName,filterByRegion,fetchAllCountries} = require("../helpers/apiCountriesHelper");

const mainLandingPage = (req, res) => {
    return res.sendFile(path.join(__dirname, "../statics/main-landing-page/index.html"))
}

const mainDinamicProject = (req,res) => {
    const {project} = req.params;
    const filePath = path.join(__dirname,`../statics/main-projects/frontend-mentor/frontend-mentor-0${project}/index.html`);
    if (!fs.existsSync(filePath)) {
        return res.sendFile(path.join(__dirname,"../statics/error-page/index.html"))
    }
    return res.sendFile(filePath);
}

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
    mainLandingPage,
    mainDinamicProject,
    apiRestCountries,

}