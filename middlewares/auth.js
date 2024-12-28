const { verify } = require("jsonwebtoken");
const { errorResponse } = require("../utils/responseHandler");

exports.auth = function(req, res, next){
  try {
    const token = req.headers["x-auth-token"] || req.headers["authorization"]?.slice(7) || null;
    if (!token) errorResponse(res, 403, "request not authenticated");

    verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) errorResponse(res, 403, "invalid token");
      req.user = decoded;
      return next();
    });
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
}