import React from 'react';
import { SectionWrapper } from '../HigherOrderComponent'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt';


import backendUdemy from '../assets/certificate/backendCertificate.jpg';
import cloudComputing from '../assets/certificate/cloudComputingCertificate.jpg';
import nlp from '../assets/certificate/NLPCertificate.jpg';
import infosysSql from '../assets/certificate/infosysSql.jpg';
import fifthForceAndroid from '../assets/certificate/fifthForceAndroid.jpg';
import sqlHackerRank from '../assets/certificate/SQLHackerRank.jpg';

const CertiTile = ({src, alt}) => {
  return(
    <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='p-5 rounded-2xl sm:w-[360px] w-full bg-tertiary'
      >
      <div className='p-4'>
        <img src={src} width={500} alt={alt}/>
      </div>
    </Tilt>
  );
}

// Import other certificate images as needed

const Certificates = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText} `}>Certificates</p>
        <h2 className={styles.sectionHeadText}>
        Certified Achievements
        </h2>
      </motion.div>
      
    <Slider  {...settings}>
      <CertiTile src={backendUdemy} alt={"Backend Udemy"}/>
      <CertiTile src={cloudComputing} alt={"Cloud Computing Udemy"}/>
      <CertiTile src={nlp} alt={"NLP Coursera"}/>
      <CertiTile src={infosysSql} alt={"SQL Infosys"}/>
      <CertiTile src={fifthForceAndroid} alt={"Android Kotlin Fifth Force"}/>
      <CertiTile src={sqlHackerRank} alt={"SQL Hacker Rank"}/>

    </Slider>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates")
