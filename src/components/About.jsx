import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon })=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right","spring", 0.5 * index, 0.75)} 
        className="w-full bg-gradient-to-br from-green-300 to-pink-500 p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{
          max:45,
          scale:1,
          speed:450
        }} className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Meet Ali Mardan, a passionate university student studying software engineering. Despite his limited professional experience, Ali is a skilled web developer with a keen eye for detail and a strong commitment to his craft. He has honed his skills through academic coursework and personal projects, showcasing his ability to create innovative and user-friendly web applications. With a hunger for learning and staying current with industry trends, Ali is always seeking out new challenges to grow his skills. Whether you need a stunning website or a robust web application, Ali is ready to deliver exceptional results.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");