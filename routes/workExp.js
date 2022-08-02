const router = require("express").Router();

const { WorkInfoCreate,WorkInfoUpdate,WorkInfoDelete} = require('../controllers/WorkInfocontroller')

router.post("/Links", WorkInfoCreate);

router.put("/Update", WorkInfoUpdate);
router.put("/Delete", WorkInfoDelete);
module.exports = router;
