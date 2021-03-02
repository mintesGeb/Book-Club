const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("server has started in port 3000 ");
});

// alert("Books yay!");

// selector
// const addBooksBtn = document.querySelector(".button-add");
//
// addBooksBtn.addEventListener("click", function () {
//   let x = prompt("What book did you read?");
// tableCreate();
// });

// how to dynamically add/remove tables

const form = document.querySelector("")
