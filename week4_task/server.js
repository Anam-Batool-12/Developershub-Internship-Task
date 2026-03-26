const fs = require("fs");
const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(express.json());

/* Security Headers + CSP + HSTS */
app.use(helmet());

/* CORS */
app.use(cors({
 origin:"http://localhost:3000"
}));

/* Rate Limiting */
const limiter = rateLimit({
 windowMs: 60 * 1000,
 max: 5
});
app.use("/api", limiter);

/* API KEY Authentication */
const API_KEY = "intern123";

function auth(req,res,next){
 const key=req.headers["x-api-key"];
 if(key!==API_KEY) return res.status(401).send("Unauthorized");
 next();
}

/* Login Route (for Fail2Ban logging) */
app.set("trust proxy", true);
app.post("/login",(req,res)=>{

 const log = `Failed login from ${req.ip}\n`;

 fs.appendFileSync("/var/log/node-login.log", log);

 console.log(log);

 res.send("Login Attempt Logged");
});

/* Protected API example */
app.get("/api/data", auth, (req,res)=>{
 res.json({message:"Secure API Working"});
});

/* -------------------- SERVER LISTEN -------------------- */
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

