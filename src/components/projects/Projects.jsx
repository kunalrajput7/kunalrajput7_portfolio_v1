import { useRef } from "react";
import "./projects.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Kiri - AI Voice Assistant",
        img: "https://digitalmarketinggroup.com/wp-content/uploads/optimize-for-voice-search.jpg",
        desc: "Developed a cutting-edge voice assistant app for Android/iOS using Dart and Flutter. Integrated advanced speech recognition and Restful API for intuitive user interaction via voice commands. Incorporated Open AI APIs for dynamic responses and image generation, enhancing user engagement. The app redefines user interaction and functionality, providing a seamless and intelligent experience across platforms.",
    },
    {
        id: 2,
        title: "Stock Market Price Prediction using LSTM",
        img: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvY2slMjBjaGFydHN8ZW58MHx8MHx8fDA%3D",
        desc: "Utilizing Python, our LSTM model, driven by machine learning, leverages the Yahoo API for real-time stock data. After thorough training and testing with a decade's historical closing values, our model forecasts next-day stock prices. This data-driven approach offers insights for informed decision-making by investors and analysts, highlighting market trends.",
    },
    {
        id: 3,
        title: "News App",
        img: "https://i.insider.com/5ec4dd7af0f4191933207143?width=1200&format=jpeg",
        desc: "Developed with Dart and Flutter, it's designed to look great and work smoothly on any device. Powered by NEWAPI, it brings you the latest news from all over, neatly organized for easy browsing. Dive into different topics, get personalized updates, and enjoy a seamless news experience like never before. It's news made simple, engaging, and right at your fingertips!",
    },
    {
        id: 4,
        title: "Responsive Portfolio Website",
        img: "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Crafted a captivating Portfolio Website which you are using right now, that seamlessly integrates user experience, interactivity, and innovative features. Developed with HTML5, CSS3, JavaScript, and ReactJS, the site presents professional skills and projects through unique design elements. The portfolio showcases a blend of creativity and functionality, offering visitors an engaging and immersive exploration of the creator's talents and achievements.",
    },
    {
        id: 5,
        title: "Netflix Clone",
        img: "https://media.licdn.com/dms/image/D5612AQGM5f1z5DkKjA/article-cover_image-shrink_720_1280/0/1684434803019?e=2147483647&v=beta&t=Hq1eVBa11XsfIlAtad0LhZj8yHCh-F6BqOhJ4meu5F8",
        desc: "Netflix Clone website is a dynamic and visually appealing platform developed using Angular, JavaScript, and Tailwind CSS. It faithfully replicates the user interface and functionality of the popular streaming service, Netflix. Users can explore a vast catalog of movies and TV shows, view detailed information about each title, and enjoy a seamless browsing experience. With its responsive design and intuitive navigation, the Netflix Clone offers users a familiar and immersive streaming experience, making it an engaging destination for entertainment enthusiasts.",
    },
]

const Single = ({ item }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


    return (

        <section>
            <div className="container" >
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Open GitHub</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Projects = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="projects" ref={ref}>

            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>

            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}

        </div>
    );
};

export default Projects;