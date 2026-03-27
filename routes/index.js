const { dbMiddleware } = require("../middleware");
var express = require("express");
var router = express.Router();

router.get("/", dbMiddleware, function (req, res, next) {
    const { database } = res.locals;

    res.render("index", { title: "Hashing", database });
});

module.exports = router;
