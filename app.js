require("dotenv").config()

const express = require("express")
const app = express()
const PORT = 3000;
const routes = require("./routes")

app.use("/", routes)

app.listen(PORT,()=>{
    console.log("Hallo Devialdi Maisa Putra");
    console.log(`Server berjalan pada port ${PORT}`);
    
})