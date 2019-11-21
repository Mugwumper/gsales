const router = require("express").Router();
const familyController = require("../../controllers/familyController");
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

module.exports = router;