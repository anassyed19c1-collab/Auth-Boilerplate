import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";
import sendResponse from "../utils/sendResponse.js";

const verifyToken = (req, res, next) => {
  try {

    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
      return sendResponse(res, 401, "Token nahi hai, login karo");
    }

    const decoded = jwt.verify(token, ENV.ACCESS_TOKEN_SECRET);

    req.user = decoded;

    next();

  } catch (error) {
    return sendResponse(res, 401, "Token invalid or Expire Token");
  }
};

export default verifyToken;