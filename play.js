//imports
const net = require("net");
const connect = require("./client");
// const setupInput = require('./input.js').setupInput

// const handleUserInput = require('./input.js').handleUserInput

const { setupInput } = require("./input.js");

console.log("Connecting ...");

const conn = connect();

const stdin = setupInput(conn);

console.log("stdin :>> ", stdin);
