const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    "userName": { type: String, required: true },
    "email": { type: String, required: true },
    "birthday": { type: Date, required: true },
    "firstName": { type: String, required: true },
    "lastName": { type: String, required: true },
    "funkoCollection": [
        { type: mongoose.Schema.Types.ObjectId, ref: "Funko", required: true }
    ],
    "wishList": [
        { type: mongoose.Schema.Types.ObjectId, ref: "Funko", required: true }
    ]
});

module.exports = mongoose.model("User", userSchema);
