const multer = require('multer');
const path = require('path');

//Configuration de où et comment enregistrer les fichiers
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'uploads/'); // uploads le dossion de destination des images
    },
    filename: (req,file,cb) =>{
        //Générer un nom unique
        const suffixUnique = Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '_' + suffixUnique);
    }
});

const upload = multer({storage: storage});
module.exports = upload;