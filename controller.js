const express = require("express");
const app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const conn = require('./db');
const connection = conn.connection;

//to insert data in user profile
exports.get_counter = (req, res) => {
    let findOld = `SELECT * FROM counter`;
    connection.query(findOld, (err, rows) => {
        if (err) {
            console.log(err, 'err');
            res.send({ msg: "Something went wrong", error: 1 });
        }
        else if (rows.length == 0) {
            res.send({ counterValue: 0 });
        }
        else if (rows.length > 0) {
            res.send({ counterValue: rows[0].counter_val })
        }
    })
}

exports.update_counter = (req, res) => {

    let updateCounter = `UPDATE counter SET counter_val = ${req.body.counter_val}`;
    connection.query(updateCounter, [], function (err, response) {
        if (response.affectedRows > 0) {
            res.send({ msg: "Your counter has been updated!!" });
        }
        else {
            res.send({ err: err })
        }
    })
}