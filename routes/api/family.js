const router = require("express").Router();
const familyController = require("../../controllers/familyController");
const userController = require("../../controllers/userController");

// Matches with "/api/family"
router.route("/")
  .get(familyController.findAll)
  .post(familyController.create);

// Matches with "/api/family/:id"
router
  .route("/:id")
  .get(familyController.findById)
  .put(familyController.update)
  .delete(familyController.remove);

// Matches with "/api/family/login"
router // dead?
  .route("/login")
  .post(userController.findByEmail);

  router 
  .route("/getfamily")
  .post(familyController.getFamily);
 
router 
  .route("/getvendor")
  .post(familyController.getFamily);
 
// Matches with "/api/family/delete"
router 
.route("/delete")
.post(familyController.delete);

module.exports = router;