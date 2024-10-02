import multer from "multer"
import UserModel from "../models/User.js"
import path from "path"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(
            null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        )
    }
})

export const upload = multer({
    storage: storage
})

async function register(req, res){
    try {
        const {username, password} = req.body;
        const file = req.file.filename;

        const userExist = await UserModel.findOne({username})
        if(userExist) {
            return res.status(400).json({msg: "User already exists"})
        }

        const hashpassword = await bcrypt.hash(password, 10)
        const newUser = new UserModel({
            username,
            password: hashpassword,
            image: file
        })

        await newUser.save()

        return res.status(200).json({msg: "success"})
    } catch (error) {
        console.log(error)  
        return res.status(500).json({msg: "error" + error})      
    }
}

async function login(req, res) {
    try {
      const { username, password } = req.body;

      const userExist = await UserModel.findOne({ username });
      if (!userExist) {
        return res.status(400).json({ msg: "User doesn't exists" });
      }

      const matchpassword = await bcrypt.compare(password, userExist.password);
      if(!matchpassword){
        return res.status(400).json({msg: "Incorrect Password"})
      }

      const token = jwt.sign({id: userExist._id}, process.env.JWT_KEY, {expiresIn: '7d'})

      return res.status(200).json({ msg: "success", token, user: {_id: userExist._id, username: userExist.username} });

    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "error" + error });
    }
}

const verify = (req, res) => {
    return res.status(200).json({msg: "success"})
}

export {register, login, verify}