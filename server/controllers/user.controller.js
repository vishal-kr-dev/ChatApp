import UserModel from "../models/User.js";


const users = async (req, res) => {
    try {
        const loginUser = req.user._id;
        const allUsers = await UserModel.find({_id: {$ne: loginUser}}).select("-password")
        res.status(200).json({msg: "success", users: allUsers})
    } catch(err) {
        console.log("Error ", err.message)
        res.status(500).json({msg: err})
    }
}

export default users;