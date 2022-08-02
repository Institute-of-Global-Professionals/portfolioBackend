const router = require("express").Router();

const { linkCreateController,linkUpdateController,linkDeleteController} = require('../controllers/socialLinkController')
//routes.
router.post("/Links", linkCreateController);

router.put("/Update", linkUpdateController);
router.put("/Delete", linkDeleteController);
module.exports = router;

