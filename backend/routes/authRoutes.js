const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { route } = require('./eventRoutes');

router.get('/utilisateur/:id', authController.getUser);
router.post('/register', authController.register);
router.post('/login', authController.login);
router.put('/utilisateur/:id', authController.putUser);

module.exports = router;