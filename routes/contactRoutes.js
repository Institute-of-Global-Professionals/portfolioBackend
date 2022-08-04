const router = require("express").Router();

const { contactCreateController,contactUpdateController,contactDeleteController} = require('../controllers/contactController')
//routes.
router.post("/new", contactCreateController);

router.put("/Update", contactUpdateController);
router.put("/Delete", contactDeleteController);
module.exports = router;
