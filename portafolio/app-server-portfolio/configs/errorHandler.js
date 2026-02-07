
module.exports = (err,req,res,next) => {
    const status = err.statusCode || 500; 
    const message = err.message || "Unexpected error";

    if (req.originalUrl.startsWith("/api")) {
        return res.status(status).json({
            status:status,
            message:message
        })
    }

    return res.status(status).redirect(`/error?code=${status}&message=${encodeURIComponent(message)}`)
}