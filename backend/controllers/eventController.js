const db = require('../config/db');
const fs = require('fs'); //pour manipuler les fichier du disque
const path = require('path');

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


//Modification de la publication
exports.updateEvent = async (req,res) => {
    const {id} = req.params;
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
    }= req.body

    const placeNbr_dispo = parseInt(place_dispo, 10);
    const prix_place = parseInt(prix, 10);

    if(isNaN(placeNbr_dispo)){
        return res.status(400).json({erreur: "Le nombre de place disponible doit être un nombre valide"});
    }

    if(isNaN(prix_place)){
        return res.status(400).json({erreur: "Le prix doit être un nombre valide"});
    }

    try {
        //Chercher l'événement existant pour connaitre son ancien image 
        const ancienEvent = await db.query(`SELECT image_url FROM evenement WHERE id_events = $1`, [id]);

        if(ancienEvent.rowCount === 0){
            return res.status(404).json({erreur: "Evénement non retrouvé"});
        }

        let imagePath = ancienEvent.rows[0].image_url;//on extrait l'url

        const physicaPath = path.join(__dirname, '..', 'uploads', path.basename(imagePath));

        if(req.file){
            //On vérifi si le imagePath n'est pas vide et que elle existe dans le dossier uploads
            if(physicaPath && fs.existsSync(path.normalize(physicaPath))){
                fs.unlinkSync(path.normalize(physicaPath)) ;// Suppirme l'ancien image de l'ordinateur
                console.log("Ancienne image supprimée:", physicaPath);
            }
            imagePath = req.file.path; // met à jour l'imagePath avec le nouveau fichier

        }

        const result = await db.query(`UPDATE evenement SET 
        nom_event = $1,
        artiste_groupe = $2,
        description = $3,
        categorie = $4,
        date_event = $5,
        heure_event = $6,
        lieu = $7,
        place_dispo = $8,
        prix = $9,
        statut = $10,
        image_url = $11
        WHERE id_events = $12
        RETURNING *
            `, 
        [
            nom_event,
        artiste_groupe,
        description,
        categorie,
        date_event,
        heure_event,
        lieu,
        placeNbr_dispo,
        prix_place,
        statut,
        imagePath, 
        id
        ]);

        res.json(result.rows[0]);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({erreur: "Erreur lors de la modfication !"});
    }
};


//Suppression d'un événement
exports.deleteEvent = async (req,res) => {
    const {id} = req.params;

    try {
        const recupImage = await db.query(`SELECT image_url FROM evenement WHERE id_events = $1`, [id]);

        if(recupImage.rowCount === 0){
            return res.status(404).json({erreur: "Evenement non trouvé"});
        }

        let imagePath = recupImage.rows[0].image_url;

        const physicalPtah = path.join(__dirname, '..', 'uploads', path.basename(imagePath));

        await db.query(`DELETE FROM evenement WHERE id_events = $1`, [id]);

        if(imagePath && fs.existsSync(path.normalize(physicalPtah))){
            fs.unlinkSync(path.normalize(physicalPtah));
            console.log("Image : ", physicalPtah, ", est supprimée");
        }
        
        res.json({message: "Evénement supprimé avec succès !"});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({erreur: "Erreur lors de la suppression"});   
    }
};