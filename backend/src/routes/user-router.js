import express from "express";
import userController from "../controller/user-controller.js";
import { authenticate, restrict } from "../middleware/auth-middleware.js";

const userRouter = new express.Router();

userRouter.use(authenticate);
userRouter.put("/:id", restrict([`patient`]), userController.update);
userRouter.delete("/:id", restrict(`patient`), userController.remove);
userRouter.get("/:id", restrict(`patient`), userController.getSingle);
userRouter.get("/", restrict(`admin`), userController.getAll);

export { userRouter };
