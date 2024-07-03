import React, { useState } from "react";
import image from "../assets/images/doctor-img02.png";
import starIcon from "../assets/images/Star.png";
import DoctorAbout from "../components/fragments/doctor-details/DoctorAbout";
import DoctorFeedback from "../components/fragments/doctor-details/DoctorFeedback";
import SidePanel from "../components/fragments/doctor-details/SidePanel";

const DoctorDetailsPage = () => {
  const [tab, setTab] = useState("About");

  return (
    <section className="max-w-[1170px] px-5 mx-auto">
      <div className="grid md:grid-cols-3 gap-[50px]">
        <div className="md:col-span-2">
          <div className="flex items-center gap-5">
            <figure className="max-w-[200px] max-h-[200px]">
              <img src={image} alt="name" className="w-full" />
            </figure>

            <div>
              <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2.5 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                Dental
              </span>
              <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                Dr. Muhammad Saleh
              </h3>

              <div className="flex items-center gap-[6px]">
                <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-base lg:leading-7 font-semibold text-headingColor">
                  <img src={starIcon} alt="starIcon" /> 4.8
                </span>
                <span className="text-sm leading-5 lg:text-base lg:leading-7 font-semibold text-textColor ">
                  (272)
                </span>
              </div>
              <p className="text-para text-sm leading-5 md:text-[15px] lg:leading-7 lg:max-w-[390px]">
                Every tooth in a people's head is more valuable than a diamond.
              </p>
            </div>
          </div>
          <div className="mt-[50px] border-b border-solid border-slate-300">
            <button
              className={`${
                tab === "About" && "border-b border-solid border-primaryColor"
              } py-2 px-5 text-base leading-7 text-headingColor font-semibold`}
              aria-label="tab-about"
              onClick={() => setTab("About")}
            >
              About
            </button>
            <button
              className={`${
                tab === "Feedback" &&
                "border-b border-solid border-primaryColor"
              } py-2 px-5 text-base leading-7 text-headingColor font-semibold`}
              aria-label="tab-feedback"
              onClick={() => setTab("Feedback")}
            >
              Feedback
            </button>
          </div>

          <div className="mt-[50px]">
            {tab === "About" && <DoctorAbout />}
            {tab === "Feedback" && <DoctorFeedback />}
          </div>
        </div>
        <div>
          <SidePanel />
        </div>
      </div>
    </section>
  );
};

export default DoctorDetailsPage;
