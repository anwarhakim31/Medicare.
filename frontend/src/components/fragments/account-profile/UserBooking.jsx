import React from "react";
import useFetchData from "../../../hooks/useFetchData";
import { URL } from "../../../constant/config";

const UserBooking = () => {
  const {
    data: appointments,
    loading,
    errors,
  } = useFetchData(`${URL}/users/appointments/my-appointments`);

  return (
    <div className=" mt-5 w-full min-h-[calc(50vh-100px)] flex items-center justify-center">
      <h2 className=" text-center text-headingColor leading-7 text-[20px] font-semibold ">
        You did't book any doctor yet!
      </h2>
    </div>
  );
};

export default UserBooking;
