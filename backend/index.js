import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import dalleRoutes from "./routes/dalleRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();

// adding middleware
// app.use(cors());
const corsOptions = {
  origin: "*",
  methods: "GET, POST, PUT, DELETE, OPTIONS", // Vervang door de toegestane methoden
  allowedHeaders: "Content-Type", // Vervang door de toegestane headers
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "30mb" }));

//adding routes
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

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
