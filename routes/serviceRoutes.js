const router = require("express").Router();

const { serviceCreateController,servicetUpdateController,serviceDeleteController} = require('../controllers/serviceController')
//routes.
router.post("/New", serviceCreateController);

router.put("/Update", servicetUpdateController);
router.put("/Delete", serviceDeleteController);
module.exports = router;
