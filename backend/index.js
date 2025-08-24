const express = require("express");
const cors = require("cors");

const mongoose=require("mongoose")
const dotenv=require("dotenv")



const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config()
app.use(cors());
app.use(express.json());
const db=require("./models/db")
const userRouter=require("./routes/user")
const roleRouter=require("./routes/role")
const productRouter=require("./routes/product")
const articleRouter=require("./routes/article")
const reviewRouter=require("./routes/review")
const routineRouter=require("./routes/routine")
const paymentRouter=require("./routes/payment")

app.use("/users",userRouter)
app.use("/role",roleRouter)
app.use("/product",productRouter)
app.use("/article",articleRouter)
app.use("/review",reviewRouter)
app.use("/routine",routineRouter)

app.use("/pay",paymentRouter)


// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
