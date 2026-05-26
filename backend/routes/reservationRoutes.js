const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

//Route les réservations
router.get('/', reservationController.getReservation);

module.exports = router;