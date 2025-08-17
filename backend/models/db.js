const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URI)
  .then(() => console.log("DB_project 4 Connected"))
  .catch(err => console.error(err));