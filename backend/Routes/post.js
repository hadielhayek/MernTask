const express=require('express')
const Postcontroller=require ('../controllers/post')
const router = express.Router();

router.get('/',Postcontroller.getallpost)
router.get('/:id',Postcontroller.get)
router.post('/',Postcontroller.post)
router.put('/:id',Postcontroller.put)
router.delete('/:id',Postcontroller.delete)

module.exports=router