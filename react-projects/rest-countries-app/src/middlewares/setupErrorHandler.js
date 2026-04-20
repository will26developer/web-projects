

export const setupErrorHandler = app => {
    app.use((err,req,res,next) => {
        const status = err.statusCode || err.status || 500;
        const message = err.message || "Internal Server Error";

        if (req.path.startsWith("/api")) {
            return res.status(status).json({
                code: status, 
                message
            })
        }
    })
}