const mongoose = require("mongoose")

const routineSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    steps: [String]
})

module.exports = mongoose.model("Routine", routineSchema)