const router = require('express').Router();
const controller = require('./controller');


router.get('/',controller.getDefault);
router.post('/',controller.postDefault);


module.exports=router;