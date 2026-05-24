const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');

app.use('/evenement', eventRoutes);

app.listen(port, () => {
    console.log("Le server marche !");
});