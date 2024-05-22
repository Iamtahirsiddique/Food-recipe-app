import express from 'express';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/user.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body
    const user = await UserModel.findOne({ username })

    if (user) {
        return res.json({ message: 'User already exist!' });
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedpassword });
    await newUser.save();

    res.json({ message: 'User registered successfully' });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body

    const user = await UserModel.findOne({ username })

    if (!user) {
       return res.json({ message: "User doesn.t exist" })
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        return res.json({ message: "Username or password is incorrect" });
    }

    const token = jwt.sign({ id: user._id }, "secret")
    res.json({ token, UserId: user._id })
})
export { router as userRouter }