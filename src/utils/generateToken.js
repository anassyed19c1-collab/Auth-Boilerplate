import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";

const generateAccessToken = (userId, role) => {
  return jwt.sign(
    { userId, role },
    ENV.ACCESS_TOKEN_SECRET,
    { expiresIn: ENV.ACCESS_TOKEN_EXPIRY }
  );
};

const generateRefreshToken = (userId) => {
  return jwt.sign(
    { userId },
    ENV.REFRESH_TOKEN_SECRET,
    { expiresIn: ENV.REFRESH_TOKEN_EXPIRY }
  );
};

export { generateAccessToken, generateRefreshToken }; 