const express = require("express");
const router = express.Router();
const control = require("./controller");
// const prod = require("./controller");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

router.get('/get_counter', jsonParser, control.get_counter);
router.post('/update_counter', jsonParser, control.update_counter);
module.exports = router;