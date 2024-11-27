import React from "react";
import DoctorCard from "../../elements/DoctorCard";
import { useInView } from "react-intersection-observer";
import { motion as m } from "framer-motion";

const OurdoctorSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section>
      <div ref={ref} className="container">
        <div className="max-w-[470px] mx-auto">
          <m.h1
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="heading text-center"
          >
            Our great doctors
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-para text-center"
          >
            World-class care for every-one. Our System offers unmatched, expert
            health care.
          </m.p>
        </div>
        <DoctorCard />
      </div>
    </section>
  );
};

export default OurdoctorSection;
