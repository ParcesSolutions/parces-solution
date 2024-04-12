import express from "express";
import { addUniform, deleteUniform } from "../controllers/uniform.controller.js";


const router = express.Router();

//Add new inventory
router.post('/adduniform', addUniform);
//Delete inventory
router.post('/deleteuniform', deleteUniform)

//router.get('/getUniformsInventory', getuniforminventory)

export default router;