import React from "react";

const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text-para mt-0 font-semibold">Ticket Price</p>
        <span>Rp 500</span>
      </div>
      <div className="mt-[30px]">
        <p className="text-para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>

        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold capitalize">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold capitalize">
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold capitalize">
              Tuesday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold capitalize">
              4:00 PM - 9:30 PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold capitalize">
              Wenesday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold capitalize">
              4:00 PM - 9:30 PM
            </p>
          </li>
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
