require("dotenv").config();
const express = require("express");
const cors = require("cors");
const blogRoute = require("./routes/blogRouter");
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Serve uploaded images statically
app.use("/uploads", express.static("uploads"));

// API route
app.use("/api", blogRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
