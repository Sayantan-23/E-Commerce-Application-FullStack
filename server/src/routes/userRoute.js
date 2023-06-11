import express from "express";
import { forgotPassword, loginUser, logout, registerUser, resetPassword } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/password/forgot", forgotPassword)

router.put("/password/reset/:token", resetPassword)

router.get("/logout", logout)

export default router;
