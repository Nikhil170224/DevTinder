const express = require("express");

const app = express();

app.use("/user", (req, res) => {
  res.send("haaahahahha");
});

app.get("/user", (req, res) => {
    res.send({name: "Nikhil", rollno: "150"});
})

app.post("/user", (req, res) => {
    console.log("Data has been stored to database");
    res.send("data has been stored to database");
});

app.delete("/user", (req,res) => {
    res.send("Data deleted succesfully");
});
app.use("/hello/about", (req, res) => {
    res.send("hello this is the about section")
})
app.use("/", (req, res) => {
  res.send("hello your server");
});
app.listen(7777, () => {
    console.log("hello you are successfully using port 7777....");
})