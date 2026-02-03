const path  = require("path"); 

const errorPage = async (req,res) => {
    return res.sendFile(path.join(__dirname,"../../public/error-page/index.html")); 
}

module.exports = {
    errorPage
}