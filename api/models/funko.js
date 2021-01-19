const mongoose = require("mongoose");

const { Schema } = mongoose;

const funkoSchema = new Schema({
    "name": { type: String, required: true },
    "description": { type: String, required: false, default: "" },
    "category": { type: String, required: true },
    "franchise": { type: String, required: true },
    "retailPrice": { type: Number, required: true },
    "actualValue": { type: Number, required: true }, 
    "exclusive": { type: Boolean, required: true, default: false }, 
    "exclusivity": { type: String, required: false, default: "" },
    "discontinued":{type: Boolean, required: false, default: false},
    "image": { type: String, required: false, default: "" }
});

module.exports = mongoose.model("Funko", funkoSchema);
