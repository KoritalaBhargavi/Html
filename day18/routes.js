const express = require('express');
const router = express.Router();
const userController = require('./controllers');

router.get('/', userController.getJoinData);

module.exports=router;