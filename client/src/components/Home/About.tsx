import React from 'react'
import {motion} from "framer-motion";

const About = () => {
  return (
    <motion.section style = {{padding: "20px"}} initial = {{opacity: 0}} animate = {{opacity: 1, transition: {
        duration: 1
    }}}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat porro eligendi soluta earum dolorem excepturi doloremque, numquam adipisci facilis cumque laborum. Ratione repellendus, tenetur et voluptatibus dicta possimus ad nihil libero quas expedita eos, eaque eius velit. Laudantium, temporibus. Sunt libero laboriosam eaque harum explicabo repudiandae voluptatibus voluptatem error?</p>
    </motion.section>
  )
}

export default About