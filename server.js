const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
const PORT = process.env.PORT || 3000

const indexRouter = require("./routes/index")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mybrary", { useNewUrlParser: true})
const db = mongoose.connection
db.on("error", error => console.error(error));
db.once("open", () => console.log("Conected to mongoose"));

app.use("/", indexRouter)


app.listen(PORT, ()=>{console.log("Server started on port "+PORT)})