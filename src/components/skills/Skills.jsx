import React, { useRef } from 'react';
import "./skills.scss";
import { animate, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const eduvariants = {
    initial: {
        x: -150,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const aimvariants = {
    initial: {
        x: 150,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const skillvariants = {
    initial: {
        y: 30,
        x: 0,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}



const Skills = () => {

    const aimref = useRef();
    const eduref = useRef();
    const skillref = useRef();

    const { ref: aimRef, inView: aimInView } = useInView({ threshold: 0, rootMargin: "-100px" });
    const { ref: eduRef, inView: eduInView } = useInView({ threshold: 0, rootMargin: "-150px" });
    const { ref: skillRef, inView: skillInView } = useInView({ threshold: 0, rootMargin: "-200px" });

    return (
        <motion.div className='skills'>
            <motion.div className='textContainer' variants={aimvariants} initial="initial" ref={aimRef} animate={aimInView ? "animate" : ""}>
                <p>I focus on helping your brand grow & move forward driven by a passion of innovation and progress.</p>
                <hr />
            </motion.div>

            <motion.div className='educationContainer' variants={eduvariants} initial="initial" ref={eduRef} animate={eduInView ? "animate" : ""}>
                <div className='iit'>
                    <motion.img src="/iit.jpg" whileHover={{scale:1.05, opacity:0.8}} alt="" />
                    <motion.h1 whileHover={{ scale: 1.03, transition: { duration: 0 }}}><b>Master's Degree in Computer Science</b></motion.h1>
                    <motion.h4 whileHover={{ scale: 1.03, transition: { duration: 0 }}}><i>Illinois Institute of Technology, Chicago</i></motion.h4>
                    <motion.h3 whileHover={{ scale: 1.03, transition: { duration: 0 }}}>2023-2025 / GPA - 3.33</motion.h3>
                    <div className='courses'>
                        <b><u>Key Courses:</u></b><br />
                        ➺&nbsp; Design & Analysis of Algorithms &nbsp;&nbsp;&nbsp; ➺ &nbsp;Advance Database Organization<br />
                        ➺ &nbsp;Machine Learning &nbsp;&nbsp;&nbsp; ➺ &nbsp;Natural Language Processing<br />
                        ➺&nbsp; Mobile Application Developement &nbsp;&nbsp;&nbsp; ➺ &nbsp;Cloud Computing
                    </div>
                </div>

                <div className='sppu'>
                    <motion.img src="/sppu.jpg" whileHover={{scale:1.05, opacity:0.8}} alt="" />
                    <motion.h1 whileHover={{ scale: 1.03, transition: { duration: 0 }}}><b>Bachelor of Engineering in Computer Engineering</b></motion.h1>
                    <motion.h4 whileHover={{ scale: 1.03, transition: { duration: 0 }}}><i>Savitribai Phule Pune University, Pune</i></motion.h4>
                    <motion.h3 whileHover={{ scale: 1.03, transition: { duration: 0 }}}>2018-2022 / GPA - 3.45</motion.h3>
                    <div className='courses'>
                        <b><u>Key Courses:</u></b><br />
                        ➺ &nbsp;Object Oriented Programming &nbsp;&nbsp;&nbsp; ➺ &nbsp;Data Structures & Algorithms<br />
                        ➺ &nbsp;Computer Organization and Architechture &nbsp;&nbsp;&nbsp;➺ &nbsp;Computer Networks<br />
                        ➺ &nbsp;Data Mining & Warehousing &nbsp;&nbsp;&nbsp; ➺ &nbsp;System Programming & OS
                    </div>
                </div>
            </motion.div>

            <motion.div className='skillsContainer' variants={skillvariants} initial="initial" ref={skillRef} animate={skillInView ? "animate" : ""}>
                <motion.div className='box' whileHover={{ background: "lightgray", color: "black", scale: 1.05 }}>
                    <div className='content'>
                        <h2>Programming</h2>
                        <h2>Languages</h2>
                        <br />
                        <h4>• Python</h4>
                        <h4>• Java</h4>
                        <h4>• C++</h4>
                        <h4>• JavaScript</h4>
                        <h4>• SQL</h4>
                        <h4>• Dart</h4>
                        <h4>• Bash Scripting</h4>
                    </div>
                </motion.div>

                <motion.div className='box' whileHover={{ background: "lightgray", color: "black", scale: 1.05 }}>
                    <div className='content'>
                        <h2>Web</h2>
                        <h2>Technologies</h2>
                        <br />
                        <h4>• React</h4>
                        <h4>• Node.js</h4>
                        <h4>• Django</h4>
                        <h4>• HTML5</h4>
                        <h4>• SCSS</h4>
                        <h4>• RESTful API</h4>
                        <h4>• Responsive Designs</h4>
                    </div>
                </motion.div>

                <motion.div className='box' whileHover={{ background: "lightgray", color: "black", scale: 1.05 }}>
                    <div className='content'>
                        <h2>Project</h2>
                        <h2>Management</h2>
                        <br />
                        <h4>• Agile</h4>
                        <h4>• Scrum</h4>
                        <h4>• GitHub</h4>
                        <h4>• Cloud</h4>
                    </div>
                </motion.div>

                <motion.div className='box' whileHover={{ background: "lightgray", color: "black", scale: 1.05 }}>
                    <div className='content'>
                        <h2>Additional</h2>
                        <h2>Skills</h2>
                        <br />
                        <h4>• Cloud Architecture</h4>
                        <h4>• DevOps(CI/CD)</h4>
                        <h4>• Power Bi</h4>
                        <h4>• DSA</h4>
                        <h4>• Linux</h4>
                        <h4>• Neural Networks</h4>
                    </div>
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default Skills