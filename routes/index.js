const { HashController } = require("../controllers");
const { hashMiddleware } = require("../middleware");

var express = require("express");
var router = express.Router();

const hashController = new HashController();

router.get("/", hashController.getHashes);
router.post("/hash", hashMiddleware, hashController.addHash);


module.exports = router;
