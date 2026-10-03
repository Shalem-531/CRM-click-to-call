import mongoose from "mongoose";
import dotenv from "dotenv";
import Lead from "./models/Lead.js";

dotenv.config();

const leads = [
  { name:"John Doe", phone:"+919876543210", email:"john@example.com", company:"ABC Technologies" },
  { name:"Rahul Kumar", phone:"+919876543211", email:"rahul@example.com", company:"Tech Solutions" },
  { name:"Priya Sharma", phone:"+919876543212", email:"priya@example.com", company:"Smart Services" },
  { name:"Arjun Reddy", phone:"+919876543213", email:"arjun@example.com", company:"Reddy Enterprises" }
];

try {
  await mongoose.connect(process.env.MONGO_URI);
  await Lead.deleteMany({});
  await Lead.insertMany(leads);
  console.log("Demo leads inserted successfully.");
} catch (error) {
  console.error("Seed failed:", error.message);
} finally {
  await mongoose.disconnect();
}
