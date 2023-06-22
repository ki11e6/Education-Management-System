// imports
const https = require('https');
const app = require('./app/app');
//variables
const PORT = process.env.PORT || 5000;
const server = https.createServer(app);
// server
server.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);
