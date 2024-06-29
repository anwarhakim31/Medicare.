import React from "react";
import { formatDate } from "../../../../util/util";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Dr. Muhammad Saleh
          </span>
        </h3>
        <p className="text-para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          officiis nihil tempore eos laboriosam sunt ab aut iure porro dolorum
          delectus, quasi, saepe facilis fugiat architecto asperiores
          necessitatibus sed at.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:pt-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("23, June 2016")} - {formatDate("22, June 2018")}
              </span>
              <p className="text-[14px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p>Mayapada Hospital, South Jakarta</p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("23, June 2012")} - {formatDate("21, June 2016")}
              </span>
              <p className="text-[14px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p>Mayapada Hospital, South Jakarta</p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("03-05-2017")} - {formatDate("08-05-2019")}
            </span>
            <p className="text-base leading-6 font-medium text-textColor">
              Dental
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Mayapada Hospital, South jakarta
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
