import React from "react";
import faqImg from "../../../assets/images/faq-img.png";
import FaqAccordion from "../../elements/FaqAccordion";
import { useInView } from "react-intersection-observer";
import { motion as m } from "framer-motion";
const FaqSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section>
      <div ref={ref} className="container overflow-hidden">
        <div className="flex justify-between  gap-[50px] lg:gap-0">
          <m.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-1/2 hidden md:block"
          >
            <img src={faqImg} alt="faq-image" />
          </m.div>

          <FaqAccordion />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
