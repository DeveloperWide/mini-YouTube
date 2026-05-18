import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookirParser from "cookie-parser";
import { connectDB } from "./config/db";

// Import Routes
import videoRoutes from "./routes/video.route";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookirParser());

// routes
app.use("/api/videos", videoRoutes);

const PORT = process.env.PORT || 5000;

connectDB()
  .then((res) => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
