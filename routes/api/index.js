const router = require("express").Router();
const familyRoutes = require("./family");
const vendorRoutes = require("./vendors");
const eventRoutes = require("./events");
const userRoutes = require("./user");

//  routes
router.use("/family", familyRoutes);
router.use("/vendor", vendorRoutes);
router.use("/events", eventRoutes);
router.use("/user", userRoutes);

module.exports = router;
