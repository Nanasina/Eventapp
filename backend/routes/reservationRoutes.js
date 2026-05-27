const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

//Route les réservations
router.get('/', reservationController.getReservation);
router.post('/', reservationController.createReservation);
router.put('/:id', reservationController.updateReservation);

module.exports = router;