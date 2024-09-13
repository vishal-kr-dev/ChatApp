import multer from "multer"
import UserModel from "../models/User.js"
import path from "path"

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "public/images")
    },
    filename: (req, res, cb) => {
        cb(
            null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        )
    }
})

export const upload = multer({
    storage: storage
})

async function Register(req, res){
    try {
        const {username, password} = req.body;
        const file = req.file.filename;

        const userExist = await UserModel.findOne({username})
        if(userExist) {
            return res.status(400).json({msg: "User already exists"})
        }
    } catch (error) {
        console.log(error)        
    }
}

export default Register