const db = require('../config/db');

exports.getReservation = async (req,res) => {
    try {
        const result = await db.query('SELECT * FROM reservation');
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({erreur: "Erreur serveur lors de la récupération"});
    }
};