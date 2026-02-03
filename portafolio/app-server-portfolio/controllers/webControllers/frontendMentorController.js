const path = require("path"); 

const frontendMentorController = async (req,res) => {
    let {project} = req.params; 
    return res.sendFile(path.join(__dirname,`../../public/frontend-mentor/frontend-mentor-0${project}/index.html`));
}

module.exports = {
    frontendMentorController
}