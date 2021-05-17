const express = require('express');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql');
const app = express();
const mysql2 = require('mysql2');
const figlet = require('figlet');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2121Jodie",
    database: "emptrack"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MYSQL connected");
    introQuestions();

});
