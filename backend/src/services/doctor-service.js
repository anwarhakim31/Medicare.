import { ResponseError } from "../error/response-error.js";
import Doctor from "../models/DoctorSchema.js";

const update = async (id, request) => {
  const doctor = await Doctor.findByIdAndUpdate(id, request, { new: true });

  if (!doctor) {
    throw new ResponseError(404, "Doctor is not found");
  }

  return doctor;
};

const remove = async (id) => {
  const doctor = await Doctor.findByIdAndDelete(id);

  if (!doctor) {
    throw new ResponseError(404, "Doctor is not found");
  }

  return doctor;
};

const getSingle = async (id) => {
  const doctor = await Doctor.findById(id).select("-password");

  if (!doctor) {
    throw new ResponseError(404, "Doctor is not found");
  }

  return doctor;
};

const getAll = async () => {
  const doctor = await Doctor.find({}).select("-password");

  if (!doctor) {
    throw new ResponseError(404, "Doctor is not found");
  }

  return doctor;
};


export default {update,delete,getSingle,getAll}