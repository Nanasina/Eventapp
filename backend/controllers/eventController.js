const db = require('../config/db');

//Récupérer les événements
exports.getEvents = async (req,res) => {
    try {
        const result = await db.query('SELECT * FROM evenement');
        res.json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({erreur: "Erreur serveur lors de la récupération"});
    }  
};

//Publier un événement
exports.createEvents = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}