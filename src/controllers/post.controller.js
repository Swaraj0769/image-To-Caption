const postModel = require('../models/post.model')
const generateCaption = require('../services/ai.service');
const uploadFile = require('../services/storage.service');
const { v4: uuidv4 } = require('uuid')

async function createPostController(req, res) {
    const file = req.file;
    console.log("File received:", file);
    
    const base64Image = new Buffer.from(file.buffer).toString('base64');

    // console.log("Base64 Image:", base64Image);
    const caption = await generateCaption(base64Image);
    const result = await uploadFile(file.buffer, `${ uuidv4()}`)

    // console.log("Generated caption:", caption);
    
    // res.status(201).json({
    //     message: "Caption generated successfully",
    //     caption,
    //     result
    // })

    const post = await postModel.create({
        caption: caption,
        image: result.url,
        user: req.user._id
    })

    res.status(201).json({
        message: "Post created successfully",
        post
    })
}

module.exports= {createPostController}