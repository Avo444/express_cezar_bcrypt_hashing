const { sendResponse } = require("../helper");

class HashController {
    async getHashes(req, res) {
        const database = await req.app.locals.services.hash.getHashes();
        res.render("index", { title: "Hashing", database });
    }

    async addHash(req, res) {
        try {
            const { body } = res.locals;
            const newHash = await req.app.locals.services.hash.addHash(body);
            
            sendResponse(res, newHash);
        } catch (error) {
            sendResponse(res, error, 404);
        }
    }
}

module.exports = HashController;
