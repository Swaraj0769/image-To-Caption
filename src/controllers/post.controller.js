const postModel = require('../models/post.model')
const generateCaption = require('../services/ai.service')

async function createPostController(req, res) {
    const file = req.file;
    console.log("File received:", file);
    
    const base64Image = new Buffer.from(file.buffer).toString('base64');

    // console.log("Base64 Image:", base64Image);
    const caption = await generateCaption(base64Image);

    console.log("Generated caption:", caption);
    
    res.status(201).json({
        message: "Caption generated successfully",
        caption
    })
}

module.exports= {createPostController}