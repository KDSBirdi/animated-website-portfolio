import { animate,inView, useInView, motion, useScroll, useTransform } from "framer-motion"

import "./about.css"
import { useRef } from "react"

const variants = {
    initial:{
        y:500,
        opacity: 0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.05,
        }
    },
}


const About = () => {

    // var tablinks = document.getElementsByClassName("tab-links");
    // var tabcontents = document.getElementsByClassName("tab-contents");

    // function opentab(tabname){
    //     for(tablink of tablinks){
    //         tablink.classList.remove("active-link")
    //     }
    //     for(tabcontent of tabcontents){
    //         tabcontent.classList.remove("active-link")
    //     }
    // }
    const ref = useRef()
    const isInView = useInView(ref,{margin:"100px"});

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <motion.div className="about-col-1" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"} whileHover={{scale:1.1}}>
                        <motion.img src="/karan2.jpg" alt="" />
                    </motion.div>
                    <motion.div className="about-col-2" variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
                        <motion.h1 class = "sub-title" variants={variants} ><motion.span whileHover={{color:"orange"}}>About</motion.span>  Me</motion.h1>
                        <motion.p variants={variants}>Not just another B.Tech student pursuing Engineering from some college.  </motion.p>
                        <br />
                        <motion.div className="tab-titles" variants={variants}>
                            <motion.p className="tab-links active-link" variants={variants} >Skills</motion.p>
                            {/* <p className="tab-links" onClick="opentab('experience')">Experience</p>
                            <p className="tab-links" onClick="opentab('education')">Education</p>     */}
                        </motion.div>
                        <motion.div className="tab-contents active-tab" id="skills" variants={variants}>
                            <motion.ul variants={variants}>
                                {/* <motion.li variants={variants}><span>UI/UX</span><br />Designing Web/App Interfaces</motion.li>
                                <motion.li variants={variants}><span>Web Dev</span><br />Designing Web/App Interfaces</motion.li>
                                <motion.li variants={variants}><span>Data Analyst</span><br />Designing Web/App Interfaces</motion.li>
                             */}
                            <motion.li variants={variants}><b>Languages</b><br /> <br/>
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" height="40" alt="cplusplus logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" title="Python" height="40" alt="python logo" whileHover={{scale:2}} /> 
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" title="HTML" height="40" alt="html5 logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" title="CSS" height="40" alt="css3 logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title="Javascript" height="40" alt="javascript logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" title="Typescript" height="40" alt="typescript logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" title="MySQL" height="40" alt="mysql logo" whileHover={{scale:2}} />
                                
                            </motion.li>
                                <motion.li variants={variants}><b>Frameworks</b><br /><br/>
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" title="MongoDB" height="40" alt="mongodb logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" title="Django" height="40" alt="django logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React" height="40" alt="react logo"  whileHover={{scale:2}}/>
                                </motion.li>
                                <motion.li variants={variants}><b>Tools</b><br /> <br/>
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="Git" height="40" alt="git logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" title="GitHub" height="40" alt="github logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" title="Anaconda" height="40" alt="anaconda logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" title="Jupyter" height="40" alt="jupyter logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" title="NumPy" height="40" alt="numpy logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" title="Matlab" height="40" alt="matlab logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" title="VsCode" height="40" alt="vscode logo" whileHover={{scale:2}} />
                                <motion.img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="Figma" height="40" alt="figma logo" whileHover={{scale:2}} />
                                </motion.li>
                            
                            </motion.ul>
                        </motion.div>
                        {/* <div className="tab-contents" id="experience">
                            <ul>
                                <li><span>IEEE NSUT PES VC</span><br />Led a team of 650+ members.</li>
                                <li><span>Business Development Intern </span><br />Designed Web applications for the company, handled the backend</li>
                                <li><span>Data Analyst Intern</span><br />Worked as a intern in role of Data Analyst</li>
                            
                            </ul>
                        </div>
                        <div className="tab-contents" id="education">
                            <ul>
                                <li><span>B.Tech</span><br />Netaji Subhas Uni of Tech</li>
                                <li><span>12th Class 2020-2021</span><br />Daffodil Public School</li>
                                <li><span>10th Class 2018-2019</span><br />SS MOTA SINGH MODEL SCHOOl</li>
                            
                            </ul>
                        </div> */}
                    </motion.div>

                    

                </div>
            </div>
        

        </div>
    )
}

export default About