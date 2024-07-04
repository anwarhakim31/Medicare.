import doctorService from "../services/doctor-service.js";

const update = async (req, res, next) => {
  try {
    const request = req.body;
    const id = req.params.id;

    const result = await doctorService.update(id, request);
    res.status(200).json({
      success: true,
      data: result,
      message: "updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const id = req.params.id;

    await doctorService.remove(id);
    res.status(200).json({
      success: true,
      message: "Remove successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getSingle = async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await doctorService.getSingle(id);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await doctorService.getAll();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default { update, remove, getSingle, getAll };