const path = require("path");
const mapRoutes = require("../../configs/mapFrontendMentorRoutes.js")

const frontendMentorController = async (req,res,next) => {
    let projectId = req.params.project;
    let pathFile = path.join(__dirname,`../../public/frontend-mentor/${mapRoutes[projectId]}/index.html`);
    return res.sendFile(pathFile,err => err && next(err))
}

module.exports = {
    frontendMentorController
}