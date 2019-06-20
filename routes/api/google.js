const router = require("express").Router();
const googleController = require("../../controllers/googlecontroller");

router
    .route("/")
    .post(googleController.findAll);

module.exports = router;