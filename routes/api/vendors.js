const router = require("express").Router();
const vendorController = require("../../controllers/vendorController");
//const userController = require("../../controllers/userController");

router.route("/getvendors")
  .post(vendorController.getVendors);  

///////////////////////////////////////////////////////////////
//////////// not sure the ones below are needed ///////////////
///////////////////////////////////////////////////////////////

// Matches with "/api/family"
router.route("/")
  .get(vendorController.findAll)
  .post(vendorController.create);

// Matches with "/api/family/:id"
router
  .route("/:id")
  .get(vendorController.findById)
  .put(vendorController.update)
  .delete(vendorController.remove);

  
// Matches with "/api/family/delete"
router 
.route("/delete")
.post(vendorController.delete);

module.exports = router;