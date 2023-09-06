const express = require("express");
const mongoose = require("mongoose");
const personModel = require("./models/Person");
// const userModel = require('./models/user');
const app = express();
const port = 4000;
require("dotenv").config();

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to DB ✅");
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`Runing on ${port}`);
        });
    });


app.get("/find", async (req, res) => {
    try {
        var dbResponse = await personModel.find({ 'name': { '$regex': "ah", '$options': 'i' } })


        res.json(dbResponse);
    } catch (error) {
        console.log(`🔴=>${error}`);
        res.send(error);
    }
});
