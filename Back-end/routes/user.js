import express from 'express';
import { login } from '../controller/user.js';
const router = express.Router();

router.route("/login").post(login);


export const userRouter = router;