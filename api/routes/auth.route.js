import express from 'express';
import { signup, signin } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/uniform-signup', signup);
router.post('/uniform-signin', signin);

export default router;