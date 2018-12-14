const express = require('express');
const router = express.Router()
const postController = require('../../controllers/postController');

router.get('/found',postController.getAllFound)
router.get('/find',postController.getAllFind)
router.post('/',postController.postsDetail)

module.exports = router
