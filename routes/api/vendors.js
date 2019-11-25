const router = require("express").Router();
const vendorsController = require("../../controllers/vendorsController");

// Matches with "/api/vendors/getvendors"
router.route("/getvendors")
    .post(vendorsController.getVendors);
  
// Matches with "/api/vendors"
router.route("/")
  .post(vendorsController.create);

// Matches with "/api/vendors/delete"
router 
  .route("/delete")
  .post(vendorsController.delete);

module.exports = router;