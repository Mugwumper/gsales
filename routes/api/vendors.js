const router = require("express").Router();
const familyController = require("../../controllers/familyController");


  // router 
  // .route("/getfamily")
  // .post(familyController.getFamily);
 
  router 
  .route("/getvendor")
  .post(familyController.getVendor);
  

module.exports = router;