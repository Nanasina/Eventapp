const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const upload = require('../config/multerConfig');

//Route pour les événements
router.get('/', eventController.getEvents);
router.post('/', upload.single('image'), eventController.createEvents);

module.exports = router;