const mongoose = require("mongoose");

const personSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        age: {
            type: Number,
        },
        favoriteFoods: {
            type: [String],
        },
    },
    { collection: "Persons" }
);

const personModel = mongoose.model("person", personSchema);
module.exports = personModel;
