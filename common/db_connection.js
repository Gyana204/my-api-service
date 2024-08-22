
var mongodb = require('mongodb');

async function getDB()
{
    const mongoClient = mongodb.MongoClient;
    const server = await mongoClient.connect('mongodb+srv://gyana204:FeZ6yhAFmGaJexNq@cluster0.vhzsd.mongodb.net/');
    const db = server.db('cafe');
    return db;
}

module.exports = getDB;