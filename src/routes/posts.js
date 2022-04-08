const express = require('express')
const router = express.Router()
const postController = require('../controllers/posts')
const postModels = require('../models/Posts')

router.get('/all', postController.getAll)

router.get('/:id', postController.getPost)

router.post('/create', postController.CreatePost)

 router.put('/update/:id', postController.UpdatePost)

 router.delete('/delete/:id', postController.DeletePost)

// router.post('/create', postModels.createPost)

// router.put('/update/:id', postModels.updatePost)

// router.delete('/delete/:id', postModels.deletePost)





module.exports = router