const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

//specifying port number for server 
const PORT = process.env.port || 3001;
//using instance as application 
const app = express();
//middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});