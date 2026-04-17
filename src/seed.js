import mongoose from "mongoose";
import { ENV } from "./config/env.js";
import User from "./models/User.js";

const seedAdmin = async () => {
  try {
    // Connect to DB
    await mongoose.connect(ENV.MONGO_URI);
    console.log("MongoDB Connected");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log("Admin already exists!");
      console.log(`Email: ${existingAdmin.email}`);
      process.exit(0);
    }

    // Create admin user
    const admin = await User.create({
      name: ENV.ADMIN_NAME || "Admin",
      email: ENV.ADMIN_EMAIL || "admin@example.com",
      password: ENV.ADMIN_PASSWORD || "admin123",
      role: "admin",
    });

    console.log("Admin created successfully!");
    console.log(`Name: ${admin.name}`);
    console.log(`Email: ${admin.email}`);
    console.log(`Password: ${ENV.ADMIN_PASSWORD || "admin123"}`);
    process.exit(0);

  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
};

seedAdmin();