import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Database connection
dbConnection();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS setup
app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["POST"],
    credentials: true,
  })
);

// Routes
app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
