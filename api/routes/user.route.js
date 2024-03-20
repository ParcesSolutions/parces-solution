import express from "express";
import {deleteUser, test, updateUser} from '../controllers/user.controller.js';
import { verifyToken } from "../utils/verifyUser.js";


const router = express.Router();

router.get('/test', test);

// Route to update user info from Dashboard Profile
router.put('/update/:userId', verifyToken, updateUser);

// Route for deleting user profile
router.delete('/delete/:userId', verifyToken, deleteUser);


export default router;