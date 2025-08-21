const mongoose = require("mongoose")


const articleSchema = new mongoose.Schema({
    title: { type: String, require: true },
    content: { type: String, require: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }


})

module.exports = mongoose.model("Article", articleSchema)