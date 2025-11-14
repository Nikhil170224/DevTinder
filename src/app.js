const express = require("express");

const app = express();

app.get("/user/:userId/:name", (req, res) => {
    console.log(req.params);
    res.send({name: "Nikhil", rollno: "150"});
})

app.listen(7777, () => {
    console.log("hello you are successfully using port 7777....");
})