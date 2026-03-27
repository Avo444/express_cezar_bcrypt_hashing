const { sendResponse } = require("../helper");
const { hashSchema } = require("../schemas");

const hashMiddleware = async (req, res, next) => {
    try {
        const body = await hashSchema.validateAsync(req.body);
        res.locals.body = body;
        next();
    } catch (err) {
        sendResponse(res, err, 404);
    }
};

module.exports = hashMiddleware;
