const express = require('express')
const router = express.Router()
const postController = require('../controllers/posts')
const postModels = require('../models/Posts')

router.get('/all', postController.getPosts)

router.get('/:id', postController.getPost)

router.post('/create', postController.getCreatePost)

// router.put('/update/:id', postController.getUpdatePost)

// router.delete('/delete/:id', postController.getDeletePost)

router.post('/create', postModels.createPost)

router.put('/update/:id', postModels.updatePost)

router.delete('/delete/:id', postModels.deletePost)





module.exports = router