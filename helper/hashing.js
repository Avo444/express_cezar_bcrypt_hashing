const bcrypt = require("bcryptjs");

const hashing = async (body) => {
    const { hash, password } = body;
    switch (hash) {
        case "bcrypt": {
            return await bcrypt.hash(password, 10);
        }
        case "cezar": {
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let hash = "";

            for (let x = 0; x < password.length; x++) {
                const index = alphabet.indexOf(password[x].toUpperCase());
                if (index === -1) {
                    hash += password[x];
                    continue;
                }

                hash +=
                    password[x] === password[x].toUpperCase()
                        ? alphabet[(index + 3) % alphabet.length]
                        : alphabet[(index + 3) % alphabet.length].toLowerCase();
            }

            return hash;
        }
        default: {
            throw new Error("Invalid hash type!");
        }
    }
};

module.exports = hashing;
