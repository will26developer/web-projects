const path = require("path");
const { frontendMentorRoutes } = require("../../configs/routesMap");

const frontendMentorController = async (req, res, next) => {
    let projectId = req.params.project;
    let pathFile = path.join(__dirname,`../../public/frontend-mentor/${frontendMentorRoutes[projectId]}/index.html`);
    return res.sendFile(pathFile,(err) => {
        if (err) next(err);
    })
}

module.exports = {
    frontendMentorController
}