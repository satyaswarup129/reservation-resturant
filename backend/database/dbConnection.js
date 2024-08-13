import mongoose from "mongoose";
 // Load environment variables from .env file

 export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://satyaswarupjena33:Satya%40129@satya.max3o.mongodb.net/mydatabase?retryWrites=true&w=majority")
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to database: ${err}`);
    });
};

