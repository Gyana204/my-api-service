var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var objectId = mongodb.ObjectId;
var getDB = require('../common/db-connection');

/* GET Api Testing. */
router.get('/', function(req, res, next) {
  res.send('Testing...');
});

/* GET All User */ 
router.get('/list', async function(req, res, next){
  try{
    const db = await getDB();
    const collection = db.collection('user');
    const result = await collection.find().toArray();
    res.send(result);
  }catch(ex){
    res.send(ex.message);
  }
})

/* Save User Details */
router.post('/save', async function(req, res, next) {
    try{
        const data = req.body.data;
        const db = await getDB();
        const collection = db.collection("user");
        const result = await collection.insertOne(data)
        res.send(result);
    }catch(error){
        res.send(error.message);
    }
})

/* Update User Details - All fields */

router.put('/update-all-data', async function(req, res, next) {
    try{
      const id = req.query.id;
      const data = req.body.data;

      const db = await getDB();
      const collection = db.collection("user");
      const result = await collection.updateOne({_id: objectId.createFromHexString(id)}, {$set:data});
      res.send(result);
  
    }catch(error){
      res.send(error.message);
    }
})

router.patch('/update', async function(req, res, next) {
  try{
    const id = req.query.id;
    const data = req.body.data;

    const db = await getDB();
    const collection = db.collection("user");
    const result = await collection.updateOne({_id: objectId.createFromHexString(id)}, {$set:data});
    res.send(result);

  }catch(error){
    res.send(error.message);
  }
})

/* Delete User Details */

router.delete('/delete/:id', async function(req, res, next) {
  try{
    const id = req.params.id;

    const db = await getDB();
    const collection = db.collection("user");
    const result = await collection.deleteOne({_id: objectId.createFromHexString(id)});
    res.send(result);
    
  }catch(error){
    res.send(error.message);
  } 
})

module.exports = router;