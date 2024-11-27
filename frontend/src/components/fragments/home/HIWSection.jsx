import React from "react";
import icon1 from "../../../assets/images/icon01.png";
import icon2 from "../../../assets/images/icon02.png";
import icon3 from "../../../assets/images/icon03.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
const HIWSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref}>
      <div className="container overflow-hidden">
        <div className="lg:w-[470px] mx-auto">
          <m.h2
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="heading text-center"
          >
            Providing the best medical services
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-para text-center"
          >
            World-class care for every-one. Our health System offers unmatched,
            expected health care.{" "}
          </m.p>
        </div>
        <div className="grid grid-cols-4 mobile:grid-cols-12 xl:grid-cols-9 mt-20 gap-4">
          <m.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-full  mobile:col-span-4  xl:col-span-3"
          >
            <figure className="w-full h-32">
              <img
                src={icon1}
                alt="icon1"
                className="w-full h-full object-contain object-center"
              />
            </figure>

            <div className="mt-8">
              <h3 className="text-center text-lg text-textColor font-bold">
                Find a Doctor
              </h3>
              <p className="text-base leading-7 text-textColor font-normal mt-4 text-center">
                Word-class care for everyone. Our health System offers
                unmatched. expert health care. From the lab to the clinic.
              </p>
            </div>
            <Link
              to={"/doctors"}
              className="w-11 h-11 mt-4 rounded-full border border-solid border-slate-800 mt-30px mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              <BsArrowRight className="group-hover:text-white" />
            </Link>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-full  mobile:col-span-4  xl:col-span-3"
          >
            <figure className="w-full h-32">
              <img
                src={icon2}
                alt="icon2"
                className="w-full h-full object-contain object-center"
              />
            </figure>
            <div className="mt-8">
              <h3 className="text-center text-lg text-textColor font-bold">
                Find a Location
              </h3>
              <p className="text-base leading-7 text-textColor font-normal mt-4 text-center">
                Word-class care for everyone. Our health System offers
                unmatched. expert health care. From the lab to the clinic.
              </p>
            </div>
            <Link
              to={"/doctors"}
              className="w-11 h-11 mt-4 rounded-full border border-solid border-slate-800 mt-30px mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              <BsArrowRight className="group-hover:text-white" />
            </Link>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-full  mobile:col-span-4  xl:col-span-3"
          >
            <figure className="w-full h-32">
              <img
                src={icon3}
                alt="icon3"
                className="w-full h-full object-contain object-center"
              />
            </figure>
            <div className="mt-8">
              <h3 className="text-center text-lg text-textColor font-bold">
                Book Appointment
              </h3>
              <p className="text-base leading-7 text-textColor font-normal mt-4 text-center">
                Word-class care for everyone. Our health System offers
                unmatched. expert health care. From the lab to the clinic.
              </p>
            </div>
            <Link
              to={"/doctors"}
              className="w-11 h-11 mt-4 rounded-full border border-solid border-slate-800 mt-30px mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              <BsArrowRight className="group-hover:text-white" />
            </Link>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default HIWSection;
