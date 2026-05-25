const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const upload = require('../config/multerConfig');

//Route pour les événements
router.get('/', eventController.getEvents);
router.post('/', upload.single('image'), eventController.createEvents); 
router.put('/:id', upload.single('image'), eventController.updateEvent);
router.delete('/:id', upload.single('image'), eventController.deleteEvent);

module.exports = router;