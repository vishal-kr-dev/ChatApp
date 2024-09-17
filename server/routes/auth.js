import express, { Router } from "express";
import { upload, register, login } from "../controllers/register.controller.js";

const router = express.Router()

router.post('/register',upload.single('image'), register)

router.post('/login', login)

export default router;