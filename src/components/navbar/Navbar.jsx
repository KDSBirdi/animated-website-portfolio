import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "./sidebar/Sidebar";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* {Sidebar} */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}
                >Karan</motion.span>
                <div className="social">
                    <motion.a href="https://github.com/KDSBirdi" 
                    whileHover={{ scale: 1.9, rotate: 360 }}
                    transition={{type:"spring", duration:0.5}}
                    whileTap={{scale: 0.8,rotate: -90,borderRadius: "100%"}}> <img src="/github_logo.png" alt="" /> </motion.a>
                    
                    <motion.a href="https://www.linkedin.com/in/karandeep-singh-birdi-b9b53922a/" 
                    whileHover={{ scale: 1.9, rotate: 360 }}
                    transition={{type:"spring", duration:0.5}}
                    whileTap={{scale: 0.8,rotate: -90,borderRadius: "100%"}}> <img src="/linkedin_logo.png" alt="" /> </motion.a>
                    
                    <motion.a href="https://www.instagram.com/karan_14.04/"
                    whileHover={{ scale: 1.9, rotate: 360 }}
                    transition={{type:"spring", duration:0.5}}
                    whileTap={{scale: 0.8,rotate: -90,borderRadius: "100%"}}> <img src="/instagram.png" alt="" /> </motion.a>
                    
                    <motion.a href="https://leetcode.com/u/kdsbirdi/"
                    whileHover={{ scale: 1.9, rotate: 360 }}
                    transition={{type:"spring", duration:0.5}}
                    whileTap={{scale: 0.8,rotate: -90,borderRadius: "100%"}}> <img src="/leetcode_logo.png" alt="" /> </motion.a>
                
                </div>
            </div>
        </div>

    );
}

export default Navbar