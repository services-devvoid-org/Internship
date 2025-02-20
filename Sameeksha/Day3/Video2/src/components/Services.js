import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    description: "Exercitation mollit laboris nostrud aliquip laboris occaecat sint labore dolore cupidatat. Exercitation veniam labore ut culpa non culpa cupidatat magna consequat. Et esse ea elit dolore sit nisi cillum voluptate aliqua ut consectetur incididunt excepteur. ",
    link: "Learn more",
  },
  {
    name: "Developer",
    description: "Anim tempor mollit consectetur quis nulla duis cupidatat excepteur. Officia ipsum ad anim anim cupidatat excepteur et aliquip dolor occaecat ipsum ut. Tempor adipisicing nisi elit duis veniam veniam exercitation veniam commodo esse. ",
    link: "Learn more",
  },
  {
    name: "UI/UX Design",
    description: "Aliquip ipsum proident irure irure minim amet occaecat in aliquip. Dolor minim ut dolor ipsum esse reprehenderit ad nulla sunt. Irure esse Lorem labore ullamco do ipsum quis nisi labore proident.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:-mb-14"
          >
            <h2 className="h2 text-accent mb-2">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'am a Freelance front-end Developer with over 5 years of
              Experience
            </h3>
            <button className="btn btn-sm">See my Works</button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>

                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
