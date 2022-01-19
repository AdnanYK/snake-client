const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here
    port: 50541 //port number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};