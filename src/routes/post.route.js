const express = require('express')
const router = express.Router()
const multer = require('multer')
const authMiddleware = require('../middlewares/auth.middleware')
const createPostController = require('../controllers/post.controller')

const upload = multer({ storage: multer.memoryStorage() })

/* POST /api/post [protected] */
router.post('/',authMiddleware, upload.single("image"), createPostController )

module.exports = router;