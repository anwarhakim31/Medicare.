import React from "react";
import { services } from "../../data/services";
import { Link } from "react-router-dom";
import { BsArrowBarRight, BsArrowRight } from "react-icons/bs";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesCard = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="grid grid-cols-4 mobile:grid-cols-12 xl:grid-cols-9 gap-5 mt-[30px] lg:mt-[55px]"
    >
      {services.map((item, index) => (
        <m.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          key={index + 1}
          className="col-span-full mobile:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-3"
        >
          <div className="py-[30px] px-3 lg:px-5">
            <h2 className="text-[26px] leading-9 text-headingColor font-bold">
              {item.name}
            </h2>
            <p className="text-[16px] leading-7 font-medium text-textColor mt-4">
              {item.desc}
            </p>
          </div>
          <div className="flex items-center justify-between mt-[30px]">
            <Link
              to={"/doctors"}
              className="w-11 h-11 rounded-full boder mx-auto flex items-center justify-center border border-solid border-slate-800 group hover:bg-primaryColor hover:border-none"
            >
              <BsArrowRight className="group-hover:text-white" />{" "}
            </Link>
            <span
              className="w-11 h-11 flex items-center justify-center text-[18px] leading-[30px] font-semibold"
              style={{
                background: `${item.bgColor}`,
                color: `${item.textColor}`,
                borderRadius: "8px 0 0 8px",
              }}
            >
              {index + 1}
            </span>
          </div>
        </m.div>
      ))}
    </div>
  );
};

export default ServicesCard;
