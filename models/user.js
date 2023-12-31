const mongoose = require("mongoose");



const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
    },
    { collection: "users" }

);


const userModel = mongoose.model("user", userSchema)
module.exports = userModel;
