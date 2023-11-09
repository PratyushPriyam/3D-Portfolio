import React from 'react'
import { technologies } from '../constants'
import StarsCanvas from './Stars'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HigherOrderComponent";
import { styles } from "../styles";


const TechCard = ({title}) => {
    return (
        <div className='m-16 justify-between shadow-md text-center align-middle rounded-lg font-bold bg-transparent w-[100px] '>
            <h3>{title}</h3>
        </div>
    )
}

const Tech = () => {
  return (<>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Tech Stack</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>
    <div className='m-4 flex  flex-wrap border-2 border-white rounded-2xl overflow-hidden'>
        {technologies.map((technology, index) => (
            <TechCard key={index} title={technology.name}/>
        ))}
        <StarsCanvas/>
    </div>
    </>
  );
}

export default Tech