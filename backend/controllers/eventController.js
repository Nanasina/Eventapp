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
    const {
        nom_event,
        artiste_groupe,
        description,
        categorie,
        date_event,
        heure_event,
        lieu,
        place_dispo,
        prix,
        statut
    } = req.body

    //recupérer le chemin du fichier générer par multer
    const imagePath = req.file ? req.file.path : null;
    const nbrPlace_dispo = parseInt(place_dispo, 10);
    const prix_event = parseInt(prix, 10);

    if(isNaN(nbrPlace_dispo)){
        return res.status(400).json({erreur: "Le nombre de place disponible doit être un nombre valide"});
    }

    if(isNaN(prix_event)){
        return res.status(400).json({erreur: "Le prix doit être un nombre valide"});
    }

    try {
        const result = await db.query(`INSERT INTO evenement 
            (
        nom_event,
        artiste_groupe,
        description,
        categorie,
        date_event,
        heure_event,
        lieu,
        place_dispo,
        prix,
        statut,
        image_url 
            )
        VALUEs ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *`, 

        [
        nom_event,
        artiste_groupe,
        description,
        categorie,
        date_event,
        heure_event,
        lieu,
        nbrPlace_dispo,
        prix_event,
        statut,
        imagePath 
        ]
    );

      res.status(201).json(result.rows[0]);
        
    } catch (error) {
        console.error(error.message)
        res.status(500).json({erreur: 'Erreur lors de la création du publication'});
        
    }
};