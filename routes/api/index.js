const router = require("express").Router();
const vendorRoutes = require("./vendors");
const eventRoutes = require("./events");
const userRoutes = require("./user");

//  routes
router.use("/vendor", vendorRoutes);
router.use("/events", eventRoutes);
router.use("/user", userRoutes);

module.exports = router;
