const router = require("express").Router();
const vendorsController = require("../../controllers/vendorsController");


  // router 
  // .route("/getfamily")
  // .post(familyController.getFamily);
 
  router.route("/getvendors")
    .post(vendorsController.getVendor);
  
// Matches with "/api/family"
router.route("/")
  .get(vendorsController.findAll)
  .post(vendorsController.create);

// Matches with "/api/vendors/delete"
router 
  .route("/delete")
  .post(vendorsController.delete);

module.exports = router;