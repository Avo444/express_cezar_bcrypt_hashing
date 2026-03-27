const { readFile, createPath } = require("../helper");
const sendResponse = require("../helper/sendResponse");

const dbMiddleware = async (req, res, next) => {
    try {
        const database = await readFile(createPath("db", "hash.json"));
        res.locals.database = database;
        next();
    } catch (error) {
        sendResponse(res, error, 404);
    }
};

module.exports = dbMiddleware;
