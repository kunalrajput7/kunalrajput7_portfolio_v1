import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const nameAnimation = {
    initial: { opacity: 0, scale: 0.5, y: -20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.8 },
};

const linkAnimation = {
    whileHover: { scale: 1.3, transition: { duration: 0 } },
    initial: { opacity: 0, scale: 0.5, y: -20, rotate: -700 },
    animate: { opacity: 1, scale: 1, y: 0, rotate: 0 },
};

const Navbar = () => {
    return (
        <div className="navbar">
            
            <Sidebar />

            <div className="wrapper">
                <motion.span {...nameAnimation}>Kunal Rajput</motion.span>
                <div className="social">
                    <motion.a href="https://www.instagram.com/kunaaaaall_/" {...linkAnimation} transition={{ duration: 0.5 }}>
                        <img src="/instagram.png" alt="" />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/kunalrajput007/" {...linkAnimation} transition={{ duration: 1 }}>
                        <img src="/linkedin.png" alt="" />
                    </motion.a>
                    <motion.a href="https://github.com/kunalrajput7" {...linkAnimation} transition={{ duration: 1.5 }}>
                        <img src="/github.png" alt="" />
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;