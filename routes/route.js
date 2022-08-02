const router = require("express").Router();
const mongoose = require('mongoose')
const fs = require('fs')
const multer = require('multer')

const { postView, putView, deleteView } = require('../controllers/eduController')
const { postViewP, putViewP, deleteViewP } = require('../controllers/controllerProject')

//For Multer upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '_' + Date.now())
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})
//Route for Education 
router.post("/edu", postView);
router.put("/put", putView);
router.delete("/delete", deleteView);

//Route for project 
router.post('/', upload.array('productImages', 3), postViewP)
router.put('/', upload.array('productImages', 3), putViewP)
router.delete('/deleteproject', deleteViewP)
module.exports = router;