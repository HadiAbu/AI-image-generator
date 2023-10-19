import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import dalleRoutes from "./routes/dalleRoutes.js";
import postRoutes from "./routes/postRoutes.js";

connectDB;
dotenv.config();

const app = express();

//adding routes
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

// adding middleware
app.use(cors());
app.use(express.json({ limit: "30mb" }));

app.get("/", async (req, res) => {
  console.log("hello");
  res.send("hello ");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONOGO_URL);
    app.listen(process.env.PORT, () => {
      console.log(`listening on port: ${process.env.PORT}`);
    });
  } catch (e) {
    throw Error(e.message);
  }
};

startServer();
