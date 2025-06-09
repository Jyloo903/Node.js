const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //console.log('➡️ Saving to:', path.join(__dirname, '../public/uploads'));
    cb(null, path.join(__dirname, '../public/uploads'));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    //console.log('🖼️ Assigned filename:', generatedName);
    cb(null, Date.now() + ext);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024 // max 2MB
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    //console.log('📥 Checking file:', file.originalname, '| mimetype:', file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    //console.warn('❌ Rejected file:', file.originalname);
    cb(new Error('Only .jpg, .jpeg, .png files are allowed'));
  }
});

module.exports = upload;