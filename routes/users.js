var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var objectId = mongodb.ObjectId;
var getDB = require('../common/db_connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', async function(req, res, next) {
  try{
    const db = await getDB();
    const collection = db.collection('user');
    const result = await collection.find().toArray();
    res.send(result);
  }catch(ex){
    res.send(ex.message);
  }
});

module.exports = router;
