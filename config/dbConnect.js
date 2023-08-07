const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    // Attempt to connect to the MongoDB database
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/digitic");
    console.log("Database Connected Successfully");
  } catch (error) {
    // If an error occurs, log the error message
    console.log("Database Error:", error);
  }
};

module.exports = dbConnect;