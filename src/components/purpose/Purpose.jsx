import React, { useState, useEffect } from 'react';
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import "./purpose.scss";

const variants = {
    initial: {
        opacity: 0,
        y: -20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.0,
            ease: "easeInOut",
        },
    },
};

const imgVariants = {
    initial: {
        opacity: 0,
        x: 20,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            delay: 0.2,
            ease: "easeInOut",
        },
    },
}

const Purpose = () => {

    const ref = useRef();
    const { ref: Ref, inView: isInView } = useInView({ threshold: 0, rootMargin: "-100px" });

    const ref2 = useRef();
    const { ref: Ref2, inView: isInView2 } = useInView({ threshold: 0, rootMargin: "-110px" });

    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        '/timcook.jpg',
        '/nikhilkamath.jpeg',
        '/ratantata.jpg',
        '/sundarpichai.jpg',
        '/satyanadela.jpg',
        '/elonmusk.jpg'
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);

        return () => clearTimeout(timer);
    }, [currentImage, images.length]);

    return (
        <motion.div className='purpose'>
            <motion.div className='titleContainer' variants={imgVariants} initial="initial" ref={Ref} animate={isInView ? "animate" : ""}>
                <h1>Purpose</h1>
            </motion.div>

            <div className="wrapper">

                <motion.div className='textContainer' variants={variants} initial="initial" ref={Ref} animate={isInView ? "animate" : ""}>
                    <p>Starting my educational journey felt like venturing on a thrilling adventure into the unknown. From the bustling corridors of my SIEM College to the lively campuses of Illinois Institute of Technology, each moment added a new chapter to my growth story. With every class and project, I dove deeper into the world of Computer Science, uncovering the mysteries of algorithms and programming languages. Alongside, I built lasting friendships, tackled obstacles, and seized every chance to learn and evolve. These experiences have molded me into the tech enthusiast I am today, eager to explore and innovate in the ever-evolving realm of technology. <br />

                        As I step into the vast world of technology, I am inspired by the incredible qualities of visionary leaders who have left an indelible mark in their fields. Their stories light the way, showing how innovation, integrity and purpose combine to create amazing results. I am in awe of their courage to dream big, their resilience to challenges and their drive to bring about meaningful change.
                        
                        What strikes me most is their unwavering commitment to integrity, social responsibility, and making a difference. Sir Ratan Tata's values, Nikhil Kamath's inclusive mindset, and Tim Cook's quest for innovation remind me of the power of purpose and empathy in tech. <br />

                        As I journey through this ever-changing industry, I'm reminded that success isn't just about technical skills. It's about integrity, adaptability, and the ability to connect with others. These insights guide me through twists and turns, turning challenges into opportunities for growth.

                        With the wisdom and influence of visionary leaders as my mentors, I'm fueled by a sense of purpose and determination. My goal is to leave a mark on the tech industry, to innovate, uphold integrity, and drive positive change that resonates beyond the digital realm.</p>
                </motion.div>

                <motion.div className='imageContainer' variants={imgVariants} initial="initial" ref={Ref2} animate={isInView ? "animate" : ""}>
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            style={{
                                opacity: currentImage === index ? 1 : 0,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                transition: 'opacity 1s ease-in-out',
                            }}
                        />
                    ))}
                </motion.div>

            </div>

        </motion.div>
    )
}

export default Purpose;
