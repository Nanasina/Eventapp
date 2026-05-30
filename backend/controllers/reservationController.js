const db = require('../config/db');
const eventConstroller = require('../controllers/eventController');

exports.getReservation = async (req,res) => {
    try {
        const result = await db.query
        ('SELECT r.id_reservation, u.nom, e.artiste_groupe, r.nbr_place, r.statut_reservation, r.date_reservation  FROM reservation r JOIN utilisateur u ON r.id_user = u.id_user JOIN evenement e ON r.id_events = e.id_events');
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({erreur: "Erreur serveur lors de la récupération"});
    }
};

exports.createReservation = async (req,res) => {
    const {
        id_user,
        id_events,
        nbr_place,
    } = req.body

    const nbrPlace = parseInt(nbr_place,10);

    if(isNaN(nbrPlace)){
        return res.status(400).json({Erreur: "Le nombre de place disponible doit être un nombre valide"});
    }

    try {
        const result = await db.query(`INSERT INTO reservation (id_user, id_events, nbr_place) 
            VALUES ($1, $2, $3) RETURNING *`, [id_user, id_events, nbrPlace]);
        res.status(200).json(result.rows[0]);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({Erreur: "Erreur lors de la réservation"});   
    }
};

exports.updateReservation = async (req,res) => {
    const {statut_reservation} = req.body;
    const {id} = req.params;

    try {
        const result = await db.query(`UPDATE reservation SET statut_reservation = $1 WHERE id_reservation = $2 RETURNING *`, [statut_reservation, id]);

        if (result.rowCount === 0) {
            return res.status(404).json({Erreur: "Reservation introuvable"});
        }

        const recupReservation = await db.query(`SELECT * FROM reservation WHERE id_reservation = $1`, [id]);
        const reservationRecup = recupReservation.rows[0];

        if (reservationRecup.statut_reservation === "Confirmée") {
             await db.query(`UPDATE evenement SET 
                place_dispo = place_dispo - $1 WHERE id_events = $2 RETURNING *`, [reservationRecup.nbr_place, reservationRecup.id_events]);

                return res.json({message : "Confirmée et place mises à jour"})
        } 

        if (reservationRecup.statut_reservation === "Annulée") {
            await db.query('UPDATE evenement SET place_dispo = place_dispo + $1 WHERE id_events = $2 RETURNING *', [reservationRecup.nbr_place, reservationRecup.id_events]);
            return res.json({message : "Annulée et place mises à jour"})
        }

        res.json({message: "Réservation confirmé"})
     
    } catch (error) {
        console.error(error.message);
        res.status(500).json({Erreur: "Erreur lors de la validation "});
    }
}