import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors"
dotenv.config();

// Connecting to DB
connectDB();

const app = express();
app.use(cors());
app.options('*', cors());
// For accessing json data from the req and res
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
