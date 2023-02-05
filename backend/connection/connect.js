const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Successfully Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`DB-error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
