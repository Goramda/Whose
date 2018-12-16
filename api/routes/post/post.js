const express = require('express');
const router = express.Router()
const postController = require('../../controllers/postController');

router.get('/1',postController.getAllFound)
router.get('/2',postController.getAllFind)
router.post('/',postController.postsDetail)
router.get('/detail/:postID',postController.getDetail)

router.get('/foundkey',postController.getFoundKey)
router.get('/foundcard',postController.getFoundCard)
router.get('/foundwallet',postController.getFoundWallet)
router.get('/foundphone',postController.getFoundPhone)
router.get('/foundother',postController.getFoundOther)

router.get('/findkey',postController.getFindKey)
router.get('/findcard',postController.getFindCard)
router.get('/findwallet',postController.getFindWallet)
router.get('/findphone',postController.getFindPhone)
router.get('/findother',postController.getFindOther)


module.exports = router
