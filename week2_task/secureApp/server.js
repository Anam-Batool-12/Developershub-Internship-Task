require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(helmet());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api", require("./routes/dashboard")); // dashboard route

mongoose.connect("mongodb://localhost:27017/secureApp")
.then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });
})
.catch(err => console.error("MongoDB Connection Error:", err));
