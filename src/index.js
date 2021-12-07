const express = require("express");
const app = express();
const mysql = require("mysql");

app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "erp_project_database",
  multipleStatements: true,
});

db.connect((error) => {
  if (error) {
    console.log(error);
  }

  if (!error) {
    console.log("Connected to the database successfully");
  }
});

app.get("/", (req, res) => {
  res.status(201).json({ msg: "hi" });
});


