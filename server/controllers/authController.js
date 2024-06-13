import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    const { email, name, password } = req.body
    console.log(req.body)
    try{
    const userExists = await User.findOne({ email })
    if (userExists) {
        return res.status(400).json({ message: 'user alreaedy exists' })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;
    const user = new User(req.body);

    await user.save();

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json(user)
    }
    catch(error){
        res.json({error: "Internal Server error"})
    }

}

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(400).json({ message: "user does not exist" })
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
        return res.status(401).json({ message: "password does not match" });
    }
    //generate JWT token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({user, message: " user logged in successfully", token})

}
