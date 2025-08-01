async function registerController(req, res) {
    const {username, password} = req.body

    const existingUser = new userModel.findOne({ username})

    if(existingUser){
        return res.status(409).json({
            message:"Username are already exist"
        })
    }

    const user = await userModel.create({
        username, password
    })

    const token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(201).json({
        message: 'user created successfully'
    })
}

async function loginController(req, res) {
    const {username, password} = req.body
}

module.exports = {
    registerController,
    loginController
}