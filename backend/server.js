require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

app.use('/evenement', eventRoutes);
app.use('/reservation', reservationRoutes);

app.listen(port, () => {
    console.log("Le server marche !");
});