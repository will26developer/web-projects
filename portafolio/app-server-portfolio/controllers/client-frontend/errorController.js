const path = require("path");

const errorPage =  (req,res) => {
    return res.sendFile(path.join(__dirname,"../../statics/error-page/index.html"))
}

module.exports = {
    errorPage
}