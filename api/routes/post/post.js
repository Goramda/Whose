const express = require('express');
const router = express.Router()
const postController = require('../../controllers/postController');

router.get('/1',postController.getAllFound)
router.get('/2',postController.getAllFind)
router.post('/',postController.postsDetail)
router.get('/',postController.getDetail)

module.exports = router
