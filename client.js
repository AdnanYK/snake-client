const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here
    port: PORT //port number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: AYK');
  

    // for (let i = 1; i < 40; i++) {
    //   setTimeout(() => {
    //     conn.write('Move: left');
    //     setTimeout(() => {
    //       conn.write('Move: down');
    //     }, 200)
    //   }, i * 400)
    // }

    
  });
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {connect};