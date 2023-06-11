import express from "express";
import { forgotPassword, getUserDetail, loginUser, logout, registerUser, resetPassword, updatePassword } from "../controllers/userController.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/password/forgot", forgotPassword)

router.put("/password/reset/:token", resetPassword)

router.get("/logout", logout)

router.get("/me", isAuthenticatedUser, getUserDetail)

router.put("/password/update", isAuthenticatedUser, updatePassword)

export default router;
