const { hashing } = require("../helper");
const RootService = require("./RootService");

class HashService extends RootService {
    async getHashes() {
        const hashes = await RootService.database();
        return hashes;
    }
    async addHash(body) {
        const database = await RootService.database();
        const password = await hashing(body);

        body.hashedPassword = password;
        database.push(body);

        await RootService.save(database);
        return body;
    }
}

module.exports = HashService;
