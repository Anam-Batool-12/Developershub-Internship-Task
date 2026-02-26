const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// Protected dashboard route
router.get("/dashboard", authMiddleware, (req, res) => {
    res.json({ message: `Welcome to your dashboard, user ${req.user.id}!` });
});

module.exports = router;
