const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

// ✅ CORS Configuration Fix
app.use(
  cors({
    origin: [
      "https://fasco-shopping-nine.vercel.app", // your frontend
      "https://fasco-shopping-production.up.railway.app", // optional frontend or admin?
    ],
    credentials: true, // Allow sending cookies / headers
  })
);

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
