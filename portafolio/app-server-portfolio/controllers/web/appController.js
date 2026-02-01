const path = require("path");
const fs = require("fs");

const mainLandingPage = (req, res) => {
    return res.sendFile(path.join(__dirname, "../../statics/main-landing-page/index.html"))
}

const mainDinamicProject = (req,res) => {
    const {project} = req.params;
    const filePath = path.join(__dirname,`../../statics/main-projects/frontend-mentor/frontend-mentor-0${project}/index.html`);
    if (!fs.existsSync(filePath)) {
        return res.sendFile(path.join(__dirname,"../statics/error-page/index.html"))
    }
    return res.sendFile(filePath);
}




module.exports = {
    mainLandingPage,
    mainDinamicProject,
}