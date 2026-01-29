const path = require("path");

const mainLandingPage = (req, res) => {
    return res.sendFile(path.join(__dirname, "../statics/main-landing-page/index.html"))
}

const mainProject01 = (req,res) => {
    return res.sendFile(path.join(__dirname,"../statics/main-projects/frontend-mentor/frontend-mentor-01/index.html"));
}

const mainProject02 = (req,res) => {
    return res.sendFile(path.join(__dirname,"../statics/main-projects/frontend-mentor/frontend-mentor-02/index.html"));
}

const mainProject03 = (req,res) => {
    return res.sendFile(path.join(__dirname,"../statics/main-projects/frontend-mentor/frontend-mentor-03/index.html"));
}

const mainProject04 = (req,res) => {
    return res.sendFile(path.join(__dirname,"../statics/main-projects/frontend-mentor/frontend-mentor-04/index.html"));
}

const mainProject05 = (req,res) => {
    return res.sendFile(path.join(__dirname,"../statics/main-projects/frontend-mentor/frontend-mentor-05/index.html"));
}

const mainProject06 = (req,res) => {
    return res.sendFile(path.join(__dirname,"../statics/main-projects/frontend-mentor/frontend-mentor-06/index.html"));
}

const mainProject07 = (req,res) => {
    return res.sendFile(path.join(__dirname,"../statics/main-projects/frontend-mentor/frontend-mentor-07/index.html"));
}

const mainProject08 = (req,res) => {
    return res.sendFile(path.join(__dirname,"../statics/main-projects/frontend-mentor/frontend-mentor-08/index.html"));
}

const mainProject09 = (req,res) => {
    return res.sendFile(path.join(__dirname,"../statics/main-projects/frontend-mentor/frontend-mentor-09/index.html"));
}



module.exports = {
    mainLandingPage,
    mainProject01,
    mainProject02,
    mainProject03,
    mainProject04,
    mainProject05,
    mainProject06,
    mainProject07,
    mainProject08,
    mainProject09,
}