const net = require('net');


// establish connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here
    port: 50541 //port number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
const connected = connect();

// code that does something when the connection is first established
connected.on('connect', () => {
  connected.on('data', (data) => {
    console.log(data);
  });

});