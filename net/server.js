const net = require('net');

const server = net.createServer();

server.listen(34000, () => {
  console.log('Server listening on port 34000!');
});

server.on('connection', (client) => {
  console.log('New client connected!', client);
  client.write('Hello Steve!');
  client.setEncoding('utf8'); // interpret data as text
  client.on('data', (data) => {
    console.log('Message from client: ', data)
  });
});

