import jwt from 'jsonwebtoken';
import { checkIfEmailExist, generateToken } from '../middlerware/user.js';
import User from '../models/user.js';



export const login = async (req,res) => {
    try {
        // Check if a user with the same email exists
        const checkUserExist = await checkIfEmailExist(req);
        if (checkUserExist) {
            return res.status(409).send('Email already exists');
        }
// const hashedPassword = await bcrypt.hash(req.body.password, 10);
const newUser = new User({
    ...req.body,
});

// Save the user to the database
await newUser.save();
const user = {
    fullName: newUser.fullName,
    email: newUser.email,
    phoneNumber: newUser.phoneNumber
};

        // Generate a token
        const token = generateToken(newUser._id);
        res.status(201).json({
            message: 'User registered successfully',
            token: token,
            user: user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error in code');
    }
}

