const router = require('express').Router();
const controller = require('./controller');


router.get('/',controller.getDefault);
router.post('/',controller.postDefault);
router.put('/',controller.putDefault)
router.patch('/',controller.patchDefault)
router.delete('/',controller.deleteDefault);


module.exports=router;