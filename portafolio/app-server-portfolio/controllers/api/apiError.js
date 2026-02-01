
const apiError = async (req,res) => {
    return res.status(404).json({
        message:"Api not found",
        apiRoutes:{
            countries:"/api/countries"
        }
    })
}

module.exports = {
    apiError
}