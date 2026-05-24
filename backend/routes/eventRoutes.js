const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

//Route pour les événements
router.get('/', eventController.getEvents);

module.exports = router;