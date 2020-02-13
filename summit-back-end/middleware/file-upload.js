const multer = require('multer');
const uuid = require('uuid/v1');

const MIME_TYPE_MAP = {
    'image/png': 'png', //map each property to the extension
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg'
};

const fileUpload = multer({
    limits: 500000,
    storage: multer.diskStorage({
        destination: (req, file, cb) =>{ //request, file, callback
            cb(null, 'uploads/images')// null as no error

        },
        filename: (req, file, cb)=>{
            const ext = MIME_TYPE_MAP[file.mimetype]; // ext = extension
            cb(null, uuid() + '.' + ext); // creates a unique idea and adds '.' and the extension type
        }
    }),
    fileFilter: (req, file, cb) => {
        const isValid = !!MIME_TYPE_MAP[file.mimetype];//store true or false in isValid (Double bang)
        let error = isValid ? null : new Error('Invalid mime type!')
        cb(error, isValid);//should ensure adding in invalid file is not possible
    }

});



module.exports = fileUpload;