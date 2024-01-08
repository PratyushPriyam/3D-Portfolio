import React from 'react'
import { technologies } from '../constants'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HigherOrderComponent";
import { styles } from "../styles";


const TechCard = ({name, icon}) => {
    return (
        <div className='m-8 justify-between shadow-md p-4 shadow-slate-600 text-center align-middle rounded-lg font-bold bg-transparent w-[70px] md:w-[100px]'>
            <img src={icon} alt={name}/>
            <h2 className='text-white mt-4 text-xs md:text-lg'>{name}</h2>
        </div>
    )
}

const Tech = () => {
  return (<>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Tech Stack</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>
    <div className='flex  flex-wrap border-2 border-white rounded-2xl'>
        {technologies.map((technology, index) => (
            <TechCard key={index} name={technology.name} icon={technology.icon}/>
        ))}
    </div>
    </>
  );
}

export default SectionWrapper(Tech, "");