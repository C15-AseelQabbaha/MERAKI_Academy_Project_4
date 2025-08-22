const mongoose = require("mongoose")


const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }


})

module.exports = mongoose.model("Article", articleSchema)