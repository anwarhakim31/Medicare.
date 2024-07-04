import { ResponseError } from "../error/response-error.js";
import User from "../models/UserSchema.js";

const update = async (id, request) => {
  const user = await User.findById(id);

  if (!user) {
    throw new ResponseError(404, "User is not found");
  }

  return User.updateOne({ id }, { $set: request });
};

const remove = async (id) => {
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new ResponseError(404, "User is not found");
  }

  return user;
};

const getSingle = async (id) => {
  const user = await User.findById(id).select("-password");

  if (!user) {
    throw new ResponseError(404, "User is not found");
  }

  return user;
};

const getAll = async () => {
  const user = await User.find({}).select("-password");

  if (!user) {
    throw new ResponseError(404, "User is not found");
  }

  return user;
};

export default { update, remove, getSingle, getAll };
