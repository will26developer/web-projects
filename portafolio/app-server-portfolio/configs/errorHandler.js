
module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  const isApi = req.originalUrl.startsWith("/api");

  if (isApi) {
    return res.status(statusCode).json({
      status: "error",
      message
    });
  }

  return res.redirect(
    `/error?code=${statusCode}&message=${encodeURIComponent(message)}`
  );
};
