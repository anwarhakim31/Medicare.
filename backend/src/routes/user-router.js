import express from "express";
import userController from "../controller/user-controller.js";

const userRouter = new express.Router();

userRouter.put("/:id", userController.update);
userRouter.delete("/:id", userController.remove);
userRouter.get("/:id", userController.getSingle);
userRouter.get("/", userController.getAll);

export { userRouter };
