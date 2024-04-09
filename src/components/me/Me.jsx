import { useRef } from "react";
import "./me.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
    initial: {
        x: -200,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollAnimation: {
        opacity: 0,
        y: 9,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Me = () => {

    const ref = useRef();
    const { ref: Ref, inView: isInView } = useInView({ threshold: 0, rootMargin: "-100px" });

    return (
        <div className="me">

            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" ref={Ref} animate={isInView ? "animate" : ""}>
                    <motion.h2 variants={textVariants}>Hello  I'm  Kunal,  and  I'm a</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Developer and Mobile App Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <a href="https://drive.google.com/file/d/12WmDuP_sJKpSeuxMq8kugfM8nUbmy49f/view?usp=drive_link">
                        <motion.button whileHover={{scale:1.2, background:"lightgray", color: "black"}} variants={textVariants}>Resume</motion.button>
                        </a>
                        <a href="#Contact">
                        <motion.button whileHover={{scale:1.2, background:"lightgray", color: "black"}} variants={textVariants}>Contact</motion.button>
                        </a>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollAnimation" src="/scroll.png" alt="" />
                </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Creative Innovative Visionary Progressive
            </motion.div>

            <div className="imageContainer">
                <img src="/me1.png" alt="" />
            </div>
        </div>
    )
};

export default Me