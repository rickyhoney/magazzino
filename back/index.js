var express = require("express");
var apiServer = express();
var cors = require("cors");
apiServer.use(cors());
var fs = require("fs");
const { stringify } = require("querystring");
require("dotenv").config();
const mysql = require("mysql2");

var host = "miele.riccardo.tave.osdb.it";
var user = "c185_uno";
var password = "Az-92604";

const connection = mysql.createConnection({
  host: host,
  user:user,
  password: password,
});

var host = "localhost";
var port = 3000;

apiServer.listen(port, host, () => {
  console.log("Server partito: http://%s:%d/", host, port);
});



apiServer.get("/api/aggiungi", (req, res) => {
    console.log("ricevuti:", req.query.nome, req.query.codice);
    connection.query(
      'INSERT INTO c153_5AITPS.Utenti (nome, codice) VALUES (?, ?);',
      [req.query.nome, req.query.codice],
      function (err, results) {
        console.log(err, results);
        if (results) {
          res.status(200).json({ message: "prodotto aggiunto" });
        } else {
          res.status(400).json({ message: "prodotto non aggiunto" });
        }
      }
    );

    });