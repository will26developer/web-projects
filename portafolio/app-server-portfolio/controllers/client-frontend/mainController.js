const path = require("path");

const mainLandingPage = (req, res) => {
    return res.sendFile(path.join(__dirname, "../../statics/main-landing-page/index.html"))
}


module.exports = {
    mainLandingPage
}