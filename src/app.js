const express = require("express");

const app = express();

app.use("/note", (req, res) => {
    res.send("hello your server");
})

app.use("/about", (req, res) => {
    res.send("hello this is the about section")
})
app.listen(7777, () => {
    console.log("hello you are successfully using port 7777....");
})