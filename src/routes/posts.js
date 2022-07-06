const express = require('express')
const router = express.Router()
const postController = require('../controllers/posts')
// const postModels = require('../models/Posts')

router.get('/', postController.getBlog)

router.get('/posts', postController.getAll)

router.get('/posts/:id', postController.getPost)

router.get('/create', postController.createPost)

router.post('/create', postController.SavePost)

router.get('/update/:id', postController.getIDUpdate)

router.put('/update/:id', postController.UpdatePost)

router.get('/delete/:id', postController.getDelete)

//router.delete('/delete/:idPost', postController.DeletePost)

// router.post('/create', postModels.createPost)

// router.put('/update/:id', postModels.updatePost)

// router.delete('/delete/:id', postController.DeletePost)


module.exports = router