module.exports = function (passport) {
	const path = require("path");
const router = require("express").Router();
const investorsController = require("../controllers/investorsController.js");

console.log("investors route");

// Matches with "/api/investors"
router.route("/")
  .get(investorsController.findAll)
  .post(investorsController.create)

// Matches with "/api/investors/:id"
router
  .route("/:id")
  .get(investorsController.findById)
  .put(investorsController.update)
  .delete(investorsController.remove)

// Matches with "/api/investors/all/:userId"
router
.route("/all/:userId")
.get(investorsController.findAllByUser)


	return router;
};







