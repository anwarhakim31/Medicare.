import express from "express";
import doctorService from "../services/doctor-service.js";

const doctorRouter = new express.Router();

doctorRouter.put("/:id", doctorService.update);
doctorRouter.delete("/:id", doctorService.remove);
doctorRouter.get("/:id", doctorService.getSingle);
doctorRouter.get("/", doctorService.getAll);

export { doctorRouter };
