import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";
import sendResponse from "../utils/sendResponse.js";

const verifyToken = (req, res, next) => {
  try {
    // console.log("Headers:", req.headers.authorization)
    const token = req.headers.authorization?.split(" ")[1];
    // console.log("Token:", token)
    
    if (!token) {
      return sendResponse(res, 401, "Token not found, please login again");
    }

    const decoded = jwt.verify(token, ENV.ACCESS_TOKEN_SECRET);

    req.user = decoded;

    next();

  } catch (error) {
    return sendResponse(res, 401, "Invalid or expired token, please login again");
  }
};

export default verifyToken;