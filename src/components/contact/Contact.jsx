import { useRef, useState } from "react"
import "./contact.scss"
import {motion, useInView} from "framer-motion"
import emailjs from '@emailjs/browser';


const variants={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        }
    }
}

const Contact = () => {

    const ref = useRef()
    const formRef = useRef()
    const [error,setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const isInView = useInView(ref, {margin:"-100px"})

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_8loqra8', 'template_7iovlc6', form.current, {
            publicKey: 'vGQPojjVh_b7IKLcM',
          })
          .then(
            () => {
              setSuccess(true)
            },
            (error) => {
              setError(true)
            },
          );
      };

    return (
        <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}><motion.b whileHover={{color:"orange"}}>Let's</motion.b> Connect</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <motion.a href="mailto:karandeep1413@gmail.com" whileHover={{color:"orange"}}><span>karandeep1413@gmail.com</span></motion.a>
                    
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <motion.a href="https://maps.app.goo.gl/DvnWrQkGxdpQdhXx5" whileHover={{color:"orange"}}><span>New Delhi, India</span></motion.a>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <motion.a href="tel:901-541-7112" whileHover={{color:"orange"}}><span>+91 9015417112</span></motion.a>
                    
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div className="contactSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3,duration:1}}>
                    {/* <svg fill="#000000" width="450px" height="450px" viewBox="0 0 64 64" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="_x32_5_attachment" />
                        <g id="_x32_4_office" />
                        <g id="_x32_3_pin" />
                        <g id="_x32_2_business_card" />
                        <g id="_x32_1_form" />
                        <g id="_x32_0_headset" />
                        <g id="_x31_9_video_call" />
                        <g id="_x31_8_letter_box" />
                        <g id="_x31_7_papperplane">
                            <g>
                                <g>
                                    <path d="M62.9891,2.5618c-0.0765-0.5779-0.6611-0.9805-1.2299-0.8401L7.4043,15.2065c-0.3535,0.0879-0.6318,0.3608-0.7256,0.7129     s0.0112,0.7275,0.2744,0.9795l13.9343,13.3583l-2.7649,17.1495c-0.1079,0.6712,0.4969,1.2576,1.1582,1.1445l18.0805-3.1324     l17.1832,9.6988c0.1523,0.0859,0.3218,0.1289,0.4917,0.1289c0.1523,0,0.3047-0.0347,0.4453-0.1045     c0.2969-0.1475,0.5015-0.4331,0.5459-0.7617l6.9639-51.5542C63.0031,2.7372,63.0007,2.6487,62.9891,2.5618z M9.647,16.7109     L56.8914,4.9902L22.2545,28.7978L9.647,16.7109z M36.9146,43.4663l-16.5942,2.875l2.4995-15.5054L58.8633,6.0615L36.9146,43.4663     z M54.2427,52.6504l-15.3231-8.6492l21.4231-36.509L54.2427,52.6504z" />
                                    <path d="M14.4438,51.6099l-4.6948,5.209c-0.3701,0.4102-0.3369,1.0425,0.0732,1.4121c0.1909,0.1724,0.4307,0.2573,0.6689,0.2573     c0.2734,0,0.5459-0.1113,0.7432-0.3306l4.6948-5.209c0.3701-0.4102,0.3369-1.0425-0.0732-1.4121     C15.4463,51.1675,14.8135,51.2002,14.4438,51.6099z" />
                                    <path d="M5.9478,29.0562l-4.6909,5.2085c-0.3696,0.4106-0.3364,1.043,0.0742,1.4126c0.1909,0.1719,0.4302,0.2568,0.6685,0.2568     c0.2739,0,0.5459-0.1113,0.7437-0.3311l4.6909-5.2085c0.3696-0.4106,0.3364-1.043-0.0742-1.4126     C6.9487,28.6128,6.3179,28.6455,5.9478,29.0562z" />
                                    <path d="M40.8164,55.4331l-4.6909,5.2051c-0.3701,0.4102-0.3369,1.0425,0.0732,1.4121c0.1909,0.1724,0.4307,0.2573,0.6689,0.2573     c0.2734,0,0.5459-0.1113,0.7432-0.3306l4.6909-5.2051c0.3701-0.4102,0.3369-1.0425-0.0732-1.4121     C41.8188,54.9907,41.186,55.0234,40.8164,55.4331z" />
                                </g>
                            </g>
                        </g>
                        <g id="_x31_6_laptop" />
                        <g id="_x31_5_connection" />
                        <g id="_x31_4_phonebook" />
                        <g id="_x31_3_classic_telephone" />
                        <g id="_x31_2_sending_mail" />
                        <g id="_x31_1_man_talking" />
                        <g id="_x31_0_date" />
                        <g id="_x30_9_review" />
                        <g id="_x30_8_email" />
                        <g id="_x30_7_information" />
                        <g id="_x30_6_phone_talking" />
                        <g id="_x30_5_women_talking" />
                        <g id="_x30_4_calling" />
                        <g id="_x30_3_women" />
                        <g id="_x30_2_writing" />
                        <g id="_x30_1_chatting" />
                    </svg> */}
                    <svg fill="#000000" width="400px" height="400px" viewBox="0 0 64 64" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="_x32_5_attachment" />
                        <g id="_x32_4_office" />
                        <g id="_x32_3_pin" />
                        <g id="_x32_2_business_card" />
                        <g id="_x32_1_form" />
                        <g id="_x32_0_headset" />
                        <g id="_x31_9_video_call" />
                        <g id="_x31_8_letter_box" />
                        <g id="_x31_7_papperplane" />
                        <g id="_x31_6_laptop" />
                        <g id="_x31_5_connection" />
                        <g id="_x31_4_phonebook" />
                        <g id="_x31_3_classic_telephone" />
                        <g id="_x31_2_sending_mail" />
                        <g id="_x31_1_man_talking" />
                        <g id="_x31_0_date" />
                        <g id="_x30_9_review" />
                        <g id="_x30_8_email">
                            <g>
                                <g>
                                    <motion.path 
                                    strokeWidth={0.2}
                                    fill="none"
                                    initial={{pathLength:0}}
                                    animate={isInView && {pathLength:1}}
                                    transition={{duration:3}}
                                     d="M35.0137,31.8325c0.5488-0.0596,0.9453-0.5532,0.8857-1.1021c-0.0596-0.5493-0.5518-0.9434-1.1025-0.8862     c-6.4932,0.7036-9.5806-1.688-11.0259-3.8203c-2.0195-2.98-2.0645-7.2817-0.1143-10.959     c1.9429-3.6626,5.356-5.7627,9.3657-5.7627c0.001,0,0.002,0,0.0029,0c3.0547,0,5.7949,1.2461,7.3301,3.3325     c1.6016,2.1763,1.8633,5.2012,0.7578,8.7485c-0.4336,1.3921-1.8486,3.2183-3.0938,3.5781     c-0.5078,0.1484-0.9092,0.0938-1.2236-0.1665c-0.3623-0.3013-0.4922-0.769-0.4814-0.9541     c0.002-0.0117,0.0029-0.0225,0.0039-0.0342l1.0957-10.9561c0.0586-0.5493-0.3389-1.042-0.8877-1.1001     c-0.5586-0.061-1.042,0.3389-1.1006,0.8882l-0.0969,0.9086c-0.0175-0.013-0.0319-0.0287-0.0496-0.0414     c-1.2813-0.9214-3.0767-1.0112-4.8047-0.2397c-2.9424,1.3115-5.0669,5.48-4.5469,8.9199c0.3901,2.5801,2.209,4.251,4.9917,4.5845     c1.2773,0.1519,2.8452-0.2251,4.0083-1.085c0.1689,0.2427,0.3682,0.4634,0.5908,0.6484     c0.8242,0.6836,1.9092,0.8794,3.0566,0.5488c2.0088-0.5811,3.8389-2.9502,4.4482-4.9048     c1.6445-5.2793,0.333-8.6396-1.0566-10.5283c-1.9111-2.5972-5.2539-4.1475-8.9414-4.1475c-0.001,0-0.002,0-0.0029,0     c-4.7739,0-8.8315,2.4878-11.1323,6.8252c-2.293,4.3232-2.2046,9.4331,0.2256,13.0186     c2.1333,3.1475,5.8232,4.8188,10.5332,4.8188C33.4111,31.9648,34.2002,31.9209,35.0137,31.8325z M34.9131,17.4961l-0.5693,5.9414     c-0.5811,0.9546-2.1055,1.4746-3.1875,1.3472c-1.9009-0.228-2.9946-1.2026-3.251-2.8975     c-0.3848-2.5454,1.2593-5.8477,3.3838-6.7949c0.5137-0.229,1.0332-0.3433,1.5107-0.3433c0.5029,0,0.96,0.1274,1.3115,0.3804     C34.7412,15.582,35.0176,16.4004,34.9131,17.4961z" />
                                    <motion.path
                                    strokeWidth={0.2}
                                    fill="none"
                                    initial={{pathLength:0}}
                                    animate={isInView && {pathLength:1}}
                                    transition={{duration:13}}
                                     d="M59.3057,21.6533l-7.2637-4.4982V2c0-0.5522-0.4473-1-1-1H12.4771c-0.5522,0-1,0.4478-1,1v15.0159     c-3.4714,2.1884-5.806,3.7847-6.9165,4.7346c-1.5254,1.3042-2.3652,3.1631-2.3652,5.2334v29.0249     C2.1953,59.8638,5.3315,63,9.186,63h45.6284c1.8837,0,3.5925-0.7524,4.8508-1.9683c0.0023-0.0023,0.0054-0.003,0.0076-0.0053     c0.0011-0.0012,0.0013-0.0027,0.0024-0.0039c1.3107-1.2715,2.1294-3.0475,2.1294-5.0137V26.9839     C61.8047,25.2393,61.1504,22.7964,59.3057,21.6533z M52.042,19.5073l5.0593,3.1331l-5.0593,4.4129V19.5073z M58.784,23.826     c0.6964,0.7996,1.0207,2.077,1.0207,3.1579v29.0249c0,1.0747-0.3491,2.0649-0.9291,2.8804L39.5911,40.5665L58.784,23.826z      M13.4771,3H50.042v25.7969L31.998,44.5361l-18.521-16.1475V3z M11.4771,19.3841v7.2624L6.7792,22.551     C7.835,21.7673,9.4214,20.6976,11.4771,19.3841z M4.1953,56.0088V26.9839c0-1.1927,0.3796-2.2405,1.0782-3.0918l19.8513,17.3058     L5.7814,59.6376C4.8109,58.7264,4.1953,57.4419,4.1953,56.0088z M9.186,61c-0.5724,0-1.1138-0.1168-1.6263-0.295l19.0789-18.1874     l4.7021,4.0992c0.1885,0.1641,0.4229,0.2461,0.6572,0.2461s0.4692-0.082,0.6572-0.2466l5.4222-4.7294l19.3299,18.3657     C56.6494,60.7177,55.7672,61,54.8145,61H9.186z" />
                                </g>
                            </g>
                        </g>
                        <g id="_x30_7_information" />
                        <g id="_x30_6_phone_talking" />
                        <g id="_x30_5_women_talking" />
                        <g id="_x30_4_calling" />
                        <g id="_x30_3_women" />
                        <g id="_x30_2_writing" />
                        <g id="_x30_1_chatting" />
                    </svg>
                </motion.div>
                <motion.form
                ref = {formRef}
                onSubmit={sendEmail}
                initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4,duration:1}}>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="email" placeholder="Email" name="user_email" />
                    <textarea rows={8} placeholder="Message" name="message" />
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success "}
                </motion.form>
            
            </div>
        </motion.div>
    )
}

export default Contact