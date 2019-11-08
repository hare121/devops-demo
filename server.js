
const express = require('express');

// Constants
const PORT = 3000;
// const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', function(req, res) {
  res.send('Hellote! I am testing my CI/CD Pipeline');
});

var port = process.env.PORT||PORT;
app.listen(process.env.port || process.env.PORT || 3979, function () {
  //console.log(`\n${ server.name } listening to ${ server.url } made some changes in the code`);
  console.log('\nGet Bot Framework Emulator: https://aka.ms/botframework-emulator');
});
