import { animate, motion } from "framer-motion"
import "./hero.scss"

const sliderVariants = {
    initial: {
        x:0,
    },
    animate :{
        x:"-220%",
        transition: {
            repeat: Infinity,
            duration:20,
            repeatType: "mirror",
        }
    },
}

const textVariants = {
    initial:{
        x:-500,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y: 10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.div variants={textVariants}><motion.h2 initial={{scale:1}} animate={{scale:1.1}} transition={{duration:3, repeat:Infinity, repeatType:"mirror"}}>KARANDEEP SINGH</motion.h2></motion.div>
                    <motion.h1 variants={textVariants}>Web Developer and Data Scientist</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <a href={"#Portfolio"}><motion.button variants={textVariants} whileHover={{background:"white", color:"black"}}>See the Latest Works</motion.button></a>
                        <a href={"#Contact"}><motion.button variants={textVariants} whileHover={{background:"white", color:"black"}}> Contact Me </motion.button></a>
                    </motion.div>
                    {/* this scroll div is just to make button clickable */}
                    <div className="scroll"><a href={"#Portfolio"}><motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" /></a></div>
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">Python Developer Gamer</motion.div>
        <div className="imageContainer">
            <img src="/karan.png" alt="" />
        </div>
        </div>
    )
}

export default Hero