import "./experience.scss";
import React, { useRef } from 'react';
import { animate, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const headingvariants = {
  initial: {
    y: 10,
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

const role1variants = {
  initial: {
    x: -50,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    }
  }
}

const role2variants = {
  initial: {
    y: -30,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    }
  }
}

const role3variants = {
  initial: {
    x: 50,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    }
  }
}

const boxvariants = {
  initial: {
    //y: -30,
    opacity: 0
  },
  animate: {
    //y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      delay: 1.3,
      staggerChildren: 0.1,
    },
  }
}



const Experience = () => {


  const ref = useRef();
  const ref2 = useRef();

  const { ref: Ref, inView: InView } = useInView({ threshold: 0, rootMargin: "-100px" });
  const { ref: Ref2, inView: InView2 } = useInView({ threshold: 0, rootMargin: "-110px" });


  return (
    <div className="experience">

      <motion.div className="mountains" initial={{ opacity: 0 }} transition={{ duration: 3 }} animate={InView ? {opacity:0.2} : ""}></motion.div>


      <motion.div className="heading" variants={headingvariants} initial="initial" ref={Ref} animate={InView ? "animate" : ""}><h1>Work Experience</h1><hr /></motion.div>

      <motion.div className="details">

        <motion.div className="role" variants={role1variants} initial="initial" ref={Ref} animate={InView ? "animate" : ""}>
          <h3>Data Analyst</h3>
          <p>Globalshala</p>
          <h6>June 2023 - July 2023</h6>
        </motion.div>

        <motion.div className="role" variants={role2variants} initial="initial" ref={Ref} animate={InView ? "animate" : ""}>
          <h3>Software Engineer</h3>
          <p>Persistent Systems</p>
          <h6>June 2022 - July 2023</h6>
        </motion.div>

        <motion.div className="role" variants={role3variants} initial="initial" ref={Ref} animate={InView ? "animate" : ""}>
          <h3>Software Intern</h3>
          <p >Persistent Systems</p>
          <h6>Jan 2022 - June 2022</h6>
        </motion.div>

      </motion.div>

      <motion.div className="description" variants={boxvariants} initial="initial" ref={Ref2} animate={InView ? "animate" : ""}>

        <motion.div className="box">
          <p><span>• Analyzed "Superhero U" Facebook data across 30 ad campaigns, prompting discontinuation of underperforming campaigns,
            demonstrating strategic decision-making and analytical skills. <br /><br />
            • Executed cross-functional collaboration in Python (NumPy, SciPy, Matplotlib, StatsModels) for statistical analysis. <br /><br />
            • Collaborated within a dynamic 7-member team to utilize Power BI for crafting impactful data visualizations and delivering
            compelling presentations.</span></p>
        </motion.div>

        <motion.div className="box">
          <p>• Innovated a Textile Process Management App for a client, crucially reducing operational costs by 60%, manpower and enhancing efficiency of current business model. <br /><br />
            • Dealt with extensive data and conducted precise numerical computations and orchestrated more than 10 operations such as inventory management, production scheduling, quality control, and cost analysis. <br /><br />
            • Utilized cutting-edge technologies: Python, SQL, Django, HTML, CSS, Excel, APIs, and JavaScript. <br /><br />
            • Engineered an internal software for optimizing key functions for 7000 employees. <br /><br />
            • Streamlined more than 15 functionalities such as authentication, onboarding, authorization, employee records, time entry, rate card maintenance, and executed comprehensive attendance tracking. <br /><br />
            • Leveraged technologies: Front-End Web Development, Excel, Python, SQL, Django.</p>
        </motion.div>

        <motion.div className="box">
          <p><span>
          • Completed rigorous training in Spring Boot, Maven, Python, Java, HTML, and CSS. <br /><br />
            • Developed and resolved nearly 40 real-world problem statements adhering to industry coding standards. <br /><br />
            • Achieved an average of 94.3% in all internal assessments for specified technologies. <br /><br />
            • Received a full-time job offer and a Rs 30,000 bonus for outstanding performance. <br /><br />
            </span></p>
        </motion.div>
      </motion.div>

    </div>

  )
}

export default Experience