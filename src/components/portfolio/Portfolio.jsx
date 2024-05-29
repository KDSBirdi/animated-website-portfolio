import { useRef, useState } from "react";
import "./portfolio.scss"
import{motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"My Portfolio",
        img:"./portfolio1.png",
        desc:"Made a Portfolio website for myself using React, Framer-Motion.",
        repo:"https://github.com/KDSBirdi/animated-website-portfolio",
    },
    // {
    //     id:2,
    //     title:"Spotify Clone",
    //     img:"https://images.pexels.com/photos/18338026/pexels-photo-18338026/free-photo-of-big-ben-in-london.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non, quibusdam quidem porro, perferendis delectus labore tempore repudiandae suscipit saepe impedit explicabo alias enim minus, officia optio inventore reprehenderit itaque",
    //     repo:"https://github.com/KDSBirdi/ping-pong-game",
        
    // },
    // {
    //     id:3,
    //     title:"react",
    //     img:"https://images.pexels.com/photos/24029820/pexels-photo-24029820/free-photo-of-a-person-sitting-on-the-steps-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    //     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non, quibusdam quidem porro, perferendis delectus labore tempore repudiandae suscipit saepe impedit explicabo alias enim minus, officia optio inventore reprehenderit itaque",
    //     repo:"https://github.com/KDSBirdi/ping-pong-game",
        
    // },
    {
        id:2,
        title:"Ping Pong Game",
        img:"python_game.png",
        desc:"In this project i used two python libraries 'Turtle' and 'PyGame'. This is just a basic project i built to make my understanding better and get used to python. ",
        repo:"https://github.com/KDSBirdi/ping-pong-game",
        
    },
];


const Single = ({ item }) => {

    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const {scrollYProgress} = useScroll({target:ref,
        //  offset:["start start", "end start"]
        })

    const y= useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    
                    <motion.div className="textContainer" style={{y}}>
                       <h2  >{item.title}</h2>
                       <p>{item.desc}</p>
                       <a href={item.repo}><motion.button whileHover={{background:"white", color:"black", scale:1.2}}>See Demo</motion.button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:50,
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item=> (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio