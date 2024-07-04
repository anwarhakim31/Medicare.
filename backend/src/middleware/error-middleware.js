import { ResponseError } from "../error/response-error.js";

const errorMiddleware = (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        errors: err.message,
        success: false,
      })
      .end();
  } else {
    res
      .status(500)
      .json({
        errors: err.message,
        success: false,
        message: "Internal Server Error, Try Again",
      })
      .end();
  }
};

export { errorMiddleware };
