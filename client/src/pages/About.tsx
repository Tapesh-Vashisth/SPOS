import React from 'react'
import {Stack} from "@mui/material";
import {motion} from "framer-motion";

const About = () => {
  return (
    <Stack direction="column" spacing={3} marginTop="80px" padding="10px">
      <motion.section initial = {{x: "-100px", opacity: 0}} animate = {{x: 0, opacity: 1, transition: {
        duration: 1
      }}}>
        <h2>Company history</h2>
        <hr style={{width: "100px"}} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam unde libero repellendus praesentium necessitatibus maxime! Eius at, debitis praesentium quae quos alias voluptatem voluptates velit ipsum necessitatibus optio dolore maiores, architecto molestias doloremque illum eligendi quis hic mollitia beatae pariatur saepe tempore. Ea maxime a molestiae laborum repellendus itaque minima asperiores, illum fugit sed libero accusantium, excepturi est aspernatur nemo corrupti. Veritatis officiis eos modi ab magnam, eveniet recusandae.</p>
      </motion.section>
      <motion.section initial = {{x: "-100px", opacity: 0}} animate = {{x: 0, opacity: 1, transition: {
        duration: 1
      }}}>
        <h2>Company Vision</h2>
        <hr style={{width: "100px"}} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam unde libero repellendus praesentium necessitatibus maxime! Eius at, debitis praesentium quae quos alias voluptatem voluptates velit ipsum necessitatibus optio dolore maiores, architecto molestias doloremque illum eligendi quis hic mollitia beatae pariatur saepe tempore. Ea maxime a molestiae laborum repellendus itaque minima asperiores, illum fugit sed libero accusantium, excepturi est aspernatur nemo corrupti. Veritatis officiis eos modi ab magnam, eveniet recusandae.</p>
      </motion.section>
      <motion.section initial = {{x: "-100px", opacity: 0}} animate = {{x: 0, opacity: 1, transition: {
        duration: 1
      }}}>
        <h2>Our Mission</h2>
        <hr style={{width: "100px"}} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam unde libero repellendus praesentium necessitatibus maxime! Eius at, debitis praesentium quae quos alias voluptatem voluptates velit ipsum necessitatibus optio dolore maiores, architecto molestias doloremque illum eligendi quis hic mollitia beatae pariatur saepe tempore. Ea maxime a molestiae laborum repellendus itaque minima asperiores, illum fugit sed libero accusantium, excepturi est aspernatur nemo corrupti. Veritatis officiis eos modi ab magnam, eveniet recusandae.</p>
      </motion.section>
      <motion.section initial = {{x: "-100px", opacity: 0}} animate = {{x: 0, opacity: 1, transition: {
        duration: 1
      }}}>
        <h2>Policy</h2>
        <hr style={{width: "100px"}} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam unde libero repellendus praesentium necessitatibus maxime! Eius at, debitis praesentium quae quos alias voluptatem voluptates velit ipsum necessitatibus optio dolore maiores, architecto molestias doloremque illum eligendi quis hic mollitia beatae pariatur saepe tempore. Ea maxime a molestiae laborum repellendus itaque minima asperiores, illum fugit sed libero accusantium, excepturi est aspernatur nemo corrupti. Veritatis officiis eos modi ab magnam, eveniet recusandae.</p>
      </motion.section>
    </Stack>
  )
}

export default About