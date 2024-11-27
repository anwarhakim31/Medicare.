import React, { useState } from "react";
import { faqs } from "../../data/faqs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { motion as m } from "framer-motion";

const FaqAccordion = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <m.div
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      ref={ref}
      className="w-full md:w-1/2"
    >
      <h2 className="heading">Most questions by our beloved patients</h2>
      <ul className="mt-[38px]">
        {faqs.map((item, index) => (
          <m.li
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            key={index}
            className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer"
            onClick={() => handleToggleAccordion(index)}
          >
            <div className="flex justify-between items-center gap-5">
              <h4 className="text-base leading-7 lg:text-[18px] lg:leading-8 text-headingColor">
                {item.question}
              </h4>
              <div
                className={`${
                  openIndex === index
                    ? "bg-primaryColor text-white border-none"
                    : ""
                } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-slate-900 rounded flex items-center justify-center`}
              >
                {openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
            </div>
            {openIndex === index && (
              <div className="mt-4">
                <p className="text-[14px] leading-6 lg:text-base lg:leading-7 font-normal text-textColor">
                  {item.content}
                </p>
              </div>
            )}
          </m.li>
        ))}
      </ul>
    </m.div>
  );
};

export default FaqAccordion;
