const net = require("net");
let connection;
const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (data === "a") {
    connection.write("Move: left");
  }
  if (data === "w") {
    connection.write("Move: up");
  }
  if (data === "s") {
    connection.write("Move: down");
  }
  if (data === "d") {
    connection.write("Move: right");
  } else if (data === "c") {
    connection.write("Say: gotcha");
  }
};

module.exports.setupInput = setupInput;
