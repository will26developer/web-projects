const path = require("path");

const mainPage = async (req,res) => {
    return res.sendFile(path.join(__dirname,"../../public/landing-page-portfolio/index.html"))
}

module.exports = {
    mainPage
}