const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.getUser = async (req,res) => {
    const {id} = req.params ;
  try {
    const result = await db.query(`SELECT * FROM utilisateur WHERE id_user = $1`, [id]);

    if(result.rowCount === 0){
            return res.status(404).json({erreur: "Utilisateur non retrouvé"});
        }

    res.json(result.rows[0]);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({erreur: "Erreur serveur lors de la récupération"});
  }  
};

exports.putUser = async (req,res) => {
    const {id} = req.params;
    const {
        nom,
        email,
    } = req.body;

    try {
        const result = await db.query(`UPDATE utilisateur SET nom = $1, email = $2 where id_user = $3 RETURNING *`, [nom, email, id]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({erreur: "Erreur lors de la modfication !"});
    }
};

exports.register = async (req,res) => {
    const {
        nom,
        email,
        password,
        role
    } = req.body;

    try {
        //Vérification si l'utilisateur existe déjà
        const verifUser = await db.query(`SELECT * FROM utilisateur WHERE email = $1`, [email]);
        if (verifUser.rowCount > 0) {
            return res.status(400).json({erreur: "Cet email est déjà utilisé "});
        }

        //Hachage du mot de passe
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const nouvelUser = await db.query(`INSERT INTO utilisateur (nom, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id_user, nom, email, role`,
            [nom, email, hashPassword, role]
        )

        res.status(200).json(nouvelUser.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({erreur: "Erreur lors de l'incription"});
    }
};

exports.login = async (req,res) => {
    const {
        email,
        password
    } = req.body;

    try {
        const result = await db.query(`SELECT * FROM utilisateur WHERE email = $1`, [email]);

        //Si l'utilisateur n'existe pas
        if(result.rowCount === 0){
            return res.status(401).json({erreur: "Identifiants incorrects"});
        } 

        const utilisateur = result.rows[0];

        //Comparaison du password saisi par par rapport au password haxhé en BD
        const pwCompare = await bcrypt.compare(password, utilisateur.password);

        if(!pwCompare){
            return res.status(401).json({erreur: "mot de passe incorrects"});
        }

        res.json({
            message: "Connexion réussie !",
            utilisateur: {
                id_user: utilisateur.id_user,
                nom: utilisateur.nom,
                email: utilisateur.email,
                role: utilisateur.role
            }
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({erreur: "Erreur lors de la connexion"});
    }
}