import User from "../models/User.js";
import sendResponse from "../utils/sendResponse.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";
import { ENV } from "../config/env.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return sendResponse(res, 400, "please fill all fields");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendResponse(res, 400, "Email already registered");
    }

    // Create user
    const user = await User.create({ name, email, password });

    // Create Tokens
    const accessToken = generateAccessToken(user._id, user.role);
    const refreshToken = generateRefreshToken(user._id);

    // Save Refresh Token in DB
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    // Save Refresh token to cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: ENV.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Response bhejo
    return sendResponse(res, 201, "Registered successfully", {
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    return sendResponse(res, 500, "Server error", error.message);
  }
};



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check Fields
    if (!email || !password) {
      return sendResponse(res, 400, "Email aur password dono chahiye");
    }

    // User dhundho
    const user = await User.findOne({ email });
    if (!user) {
      return sendResponse(res, 404, "Invalid Username & Password");
    }

    // Password check karo
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      return sendResponse(res, 401, "Invalid Username & Password");
    }

    // Tokens banao
    const accessToken = generateAccessToken(user._id, user.role);
    const refreshToken = generateRefreshToken(user._id);

    // Refresh Token DB mein save karo
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    // Refresh Token cookie mein rakho
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: ENV.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Response bhejo
    return sendResponse(res, 200, "Login successful", {
      accessToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.log(error);
    return sendResponse(res, 500, "Server error", error.message);
  }
};