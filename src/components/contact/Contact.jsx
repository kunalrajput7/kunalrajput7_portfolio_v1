import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./contact.scss";
import { motion } from "framer-motion";

const containerVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
        }
    }
}

const itemVariants = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2,
        }
    }
}

const Contact = () => {

    const ref = useRef();
    const { ref: Ref, inView: isInView } = useInView({ threshold: 0, rootMargin: "-300px" });

    return (
        <motion.div className="contact" variants={containerVariants} initial="initial" ref={Ref} animate={isInView ? "animate" : ""}>
            <motion.div className="textContainer" variants={itemVariants}>
                <motion.h1 variants={itemVariants}>Let's work together.</motion.h1>
                <motion.div variants={itemVariants}>
                    <h2>E-mail:</h2>
                    <span>kunalrajput15112000@gmail.com</span>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <h2>Address:</h2>
                    <span>3445 S Rhodes Ave, Chicago, IL 60616</span>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <h2>Phone:</h2>
                    <span>+1 (312) 975-6224</span>
                </motion.div>
            </motion.div>

            <motion.div className="formContainer" variants={itemVariants}>
                <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="ef0384ab-703c-4b00-8626-f86a6bbd252f"/>
                        <input type="text" name="name" required placeholder="Name" />
                        <input type="email" name="email" required placeholder="Email" />
                        <textarea name="message" rows={8} placeholder="Message" />
                        <button type="submit">Submit</button>
                </form>
            </motion.div>
        </motion.div>
    )
}

export default Contact;
