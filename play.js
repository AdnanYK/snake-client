const net = require('net');

//establish connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: ,// IP address here
    port: //port number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

// code that does something when the connection is first established
conn.on('connect', () => {
  conn.on('data', (data) => {
    console.log(data);
  };

});