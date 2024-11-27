import React from "react";
import ServicesCard from "../../elements/ServicesCard";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section>
      <div ref={ref} className="container overflow-hidden">
        <m.div
          initial={{ opacity: 0, y: -100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="xl:w-[470px] mx-auto "
        >
          <h2 className="heading text-center"> Our medical services</h2>
          <p className="text-para text-center">
            World-class care for every one. Our helth System offers unmatched,
            expert health care.
          </p>
        </m.div>
        <ServicesCard />
      </div>
    </section>
  );
};

export default ServiceSection;
