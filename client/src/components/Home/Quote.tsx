import React from 'react'
import {motion} from "framer-motion";

const Quote = () => {
  return (
    <motion.div style = {{position: "absolute", textAlign: "center", zIndex: 1, fontSize: "40px", color: "black", fontWeight: "bold"}} initial = {{x: -200}} animate = {{x: 0, transition: {
      duration: 2
    }}}>
      <h1>SPOS</h1>
      <p>
        Innovation Ends Here
      </p>
    </motion.div>
  )
}

export default Quote