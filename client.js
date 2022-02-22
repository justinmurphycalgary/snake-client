const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '127.0.0.1',
    port: '50541',
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
  setTimeout(()=>conn.write('Move: up'),50)
  setTimeout(()=>conn.write('Move: up'),150)
  setTimeout(()=>conn.write('Move: up'),250)
  setTimeout(()=>conn.write('Move: up'),350)
  setTimeout(()=>conn.write('Move: up'),450)

  return conn;
};

module.exports = connect;