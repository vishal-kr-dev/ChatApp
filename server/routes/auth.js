import express, { Router } from "express";
import Register, { upload } from "../controllers/Register.controller.js";

const router = express.Router()

router.post('/register',upload.single('image'), Register)

export default router;