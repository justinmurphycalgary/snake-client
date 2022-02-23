const net = require("net");
const {HOST, PORT} = require('./const')
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: HOST,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Message recieved form snakeserver :>> ', data);
  })

  conn.on('connect', (data) => {
    console.log('Connection is good...', data);
  })

  conn.write('Name: JLM');


  return conn;
};

module.exports = connect;