import React, { useEffect } from 'react';
import { SectionWrapper } from '../HigherOrderComponent'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Tilt } from 'react-tilt';
import { useState } from 'react';
import { useAnimation } from 'framer-motion';



import backendUdemy from '../assets/certificate/backendCertificate.jpg';
import cloudComputing from '../assets/certificate/cloudComputingCertificate.jpg';
import nlp from '../assets/certificate/NLPCertificate.jpg';
import infosysSql from '../assets/certificate/infosysSql.jpg';
import fifthForceAndroid from '../assets/certificate/fifthForceAndroid.jpg';
import sqlHackerRank from '../assets/certificate/SQLHackerRank.jpg';


const scaleInVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const CertiTile = ({ src, alt, index }) => {
  const [isClicked, setIsClicked] = useState(false);
  const controls = useAnimation();

  const handleClick = () => {
    setIsClicked(true);

    // Enlarge the image
    controls.start({ scale: 1.5 });

    // After 3 seconds, reset to normal size
    setTimeout(() => {
      setIsClicked(false);
      controls.start({ scale: 1 });
    }, 3000);
  };

  useEffect(() => {
    // Reset the animation when isClicked changes
    controls.start({ scale: isClicked ? 1.5 : 1 });
  }, [isClicked, controls]);

  return (
    <motion.div
      variants={scaleInVariants}
      initial="hidden"
      // animate="visible"
      transition={{ duration: index*2 }}
      animate={controls}
      onClick={handleClick}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='p-5 rounded-2xl sm:w-[360px] w-full bg-tertiary'
      >
        <div className='p-4'>
          <img src={src} width={500} alt={alt} />
        </div>
      </Tilt>
    </motion.div>
  );
};
// Import other certificate images as needed

const Certificates = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      <CertiTile src={backendUdemy} alt={"Backend Udemy"} index={1}/>
      <CertiTile src={cloudComputing} alt={"Cloud Computing Udemy"} index={2}/>
      <CertiTile src={nlp} alt={"NLP Coursera"} index={3}/>
      <CertiTile src={infosysSql} alt={"SQL Infosys"} index={4}/>
      <CertiTile src={fifthForceAndroid} alt={"Android Kotlin Fifth Force"} index={5}/>
      <CertiTile src={sqlHackerRank} alt={"SQL Hacker Rank"} index={6}/>

    </Slider>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates")
