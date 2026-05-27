const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.register = async (req,res) => {
    const {
        nom,
        email,
        password
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

        const nouvelUser = await db.query(`INSERT INTO utilisateur (nom, email, password) VALUES ($1, $2, $3) RETURNING id_user, nom, email, role`,
            [nom, email, hashPassword]
        )

        res.status(200).json(nouvelUser.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({erreur: "Erreur lors de l'incription"});
    }
};

exports.login = async (req,res) => {
    const {
        nom,
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
            return res.status(401).json({erreur: "Identifiants incorrects"});
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