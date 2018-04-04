const router = require("express").Router();
const investorRoutes = require("./investors");

// Investor routes
router.use("/investors", investorRoutes);

module.exports = router;
