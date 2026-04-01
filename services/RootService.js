const { readFile, createPath, updateFile } = require("../helper");

class RootService {
    static async database() {
        const database = await readFile(createPath("db", "hash.json"));
        return database;
    }

    static async save(data) {
        await updateFile(createPath("db", "hash.json"), data);
    }
}
module.exports = RootService;
