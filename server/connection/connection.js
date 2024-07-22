import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/scout-db";

mongoose.connect(MONGODB_URI, {});
const db = mongoose.connection;

export default db;
