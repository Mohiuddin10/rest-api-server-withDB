require('dotenv').config();

const dev = {
    db: {
        url: process.env.DB_URL,
    }
};

module.exports = dev;