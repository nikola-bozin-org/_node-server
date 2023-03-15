const router = require('express').Router();
const controller = require('../controllers/controller');


router.get('/',controller.getDefault);
router.post('/',controller.postDefault);
router.put('/',controller.putDefault)
router.patch('/',controller.patchDefault)
router.delete('/',controller.deleteDefault);
router.post('/jwtSign',controller.jwtSign);
router.post('/jwtVerify',controller.jwtVerify);

module.exports=router;
