const fs = require("fs"); 
const path = require("path");

const landingPageController = async (req,res) => { 
    return res.sendFile(path.join(__dirname,"../../public/landing-page-portfolio/index.html"))
}

module.exports = {
    landingPageController
}