const path = require("path");

const errorPage = async (req,res,next) => {
    let pathFile = path.join(__dirname,"../../public/error-page/index.html");   
    return res.sendFile(pathFile,(err) => {
        if (err) next(err);
    })
}

module.exports = {
    errorPage
}