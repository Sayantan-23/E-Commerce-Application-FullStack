import express from "express";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";
import {
  deleteOrder,
  getAllOrders,
  getSingleOrder,
  myOrders,
  newOrder,
  updateOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/order/new", isAuthenticatedUser, newOrder);
router.get("/order/:id", isAuthenticatedUser, getSingleOrder);
router.get("/orders/me", isAuthenticatedUser, myOrders);
router.get(
  "/admin/orders",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllOrders
);
router.put(
  "/admin/order/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateOrder
);
router.delete(
  "/admin/order/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteOrder
);

export default router;
