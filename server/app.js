import express from "express";
import cookieParser from "cookie-parser";
// Route Imports
import productRoute from "./src/routes/productRoute.js";
import userRoute from "./src/routes/userRoute.js";
import orderRoute from "./src/routes/orderRoute.js";

import errorMiddleWare from "./src/middlewares/error.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);

app.use(errorMiddleWare);

export default app;
