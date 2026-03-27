const { sendResponse, hashing, updateFile, createPath } = require("../helper");
const { dbMiddleware, hashMiddleware } = require("../middleware");

const express = require("express");
const router = express.Router();

router.post("/hash", dbMiddleware, hashMiddleware, async (req, res, next) => {
    try {
        const { database, body } = res.locals;
        const password = await hashing(body);

        body.hashedPassword = password;
        database.push(body);

        await updateFile(createPath("db", "hash.json"), database);
        sendResponse(res, body);
    } catch (error) {
        sendResponse(res, error, 404);
    }
});

module.exports = router;
