module.exports = function (passport) {
const path = require("path");
const router = require("express").Router();
const propertiesController = require("../controllers/propertiesController.js");

// Matches with "/api/properties"
router.route("/")
  .get(propertiesController.findAll)
  // .post(propertiesController.create)

// Matches with "/api/properties/:id"
router
  .route("/:id")
  .post(propertiesController.create)
  .get(propertiesController.findById)
  .put(propertiesController.update)
  .delete(propertiesController.remove)

	return router;
};


