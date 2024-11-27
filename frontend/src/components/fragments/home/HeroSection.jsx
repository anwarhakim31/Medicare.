import heroImg1 from "../../../assets/images/hero-img01.png";
import heroImg2 from "../../../assets/images/hero-img02.png";
import heroImg3 from "../../../assets/images/hero-img03.png";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="hero-section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          <div>
            <div className="lg:w-[570px]">
              <m.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[36px] leading-[46px] text-headingColor font-extrabold md:text-[60px] md:leading-[70px]"
              >
                We help patients live a healty, longer life.
              </m.h1>
              <m.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-para"
              >
                Schedule your appointment at Medicare with ease. Choose from our
                range of specialties. Take control of your health now!
              </m.p>
              <m.button
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="btn"
              >
                <Link to={"/doctors"}>Request an Appointment</Link>
              </m.button>
            </div>
            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <m.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h2 className="text-[36px] leading-[56px] lg:leading-[44px] font-bold">
                  10+
                </h2>
                <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                <p className="text-para">Years of Experience</p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-[36px] leading-[56px] lg:leading-[44px] font-bold">
                  5+
                </h2>
                <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                <p className="text-para">Clinic Location</p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <h2 className="text-[36px] leading-[56px] lg:leading-[44px] font-bold">
                  100%
                </h2>
                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                <p className="text-para">Patient SatisFacation</p>
              </m.div>
            </div>
          </div>
          <div className="flex gap-[30px] justify-end">
            <m.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={heroImg1} alt="hero-image1" className="w-full" />
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-[30px]"
            >
              <img
                src={heroImg2}
                alt="hero-image2"
                className="w-full mb-[30px]"
              />
              <img src={heroImg3} alt="hero-image3" className="w-full" />
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
