import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import newsRoutes from "./routes/newsRoutes.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/news", newsRoutes);
app.use((error, _req, res, _next) =>
  res.status(500).json({ message: error.message || "Server error" }),
);

const start = async () => {
  if (process.env.MONGODB_URI) await mongoose.connect(process.env.MONGODB_URI);
  app.listen(port, () =>
    console.log(`Sports Daily API running on http://localhost:${port}`),
  );
};
start().catch((error) => {
  console.error(error);
  process.exit(1);
});
