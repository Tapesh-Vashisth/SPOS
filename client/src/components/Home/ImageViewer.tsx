import React from 'react'
import {motion} from "framer-motion";
import Quote from './Quote';
import { url } from 'inspector';

const ImageViewer = () => {

  return (
    <motion.div style={{
          width: "100%",
          height: "100vh",
          background: 'url("images/front1.jpg")',
          position: "relative", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }} 
        initial = {{opacity: 0}}
        animate = {{opacity: 0.8, transition: {
          duration: 1
        }}}
        >
          <Quote />
        </motion.div>
  )
}

export default ImageViewer