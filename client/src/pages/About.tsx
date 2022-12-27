import React from 'react'
import {Stack} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {motion} from "framer-motion";

const data = [
  {title: "Company history", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam unde libero repellendus praesentium necessitatibus maxime! Eius at, debitis praesentium quae quos alias voluptatem voluptates velit ipsum necessitatibus optio dolore maiores, architecto molestias doloremque illum eligendi quis hic mollitia beatae pariatur saepe tempore. Ea maxime a molestiae laborum repellendus itaque minima asperiores, illum fugit sed libero accusantium, excepturi est aspernatur nemo corrupti. Veritatis officiis eos modi ab magnam, eveniet recusandae."},
  {title: "Company Vision", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam unde libero repellendus praesentium necessitatibus maxime! Eius at, debitis praesentium quae quos alias voluptatem voluptates velit ipsum necessitatibus optio dolore maiores, architecto molestias doloremque illum eligendi quis hic mollitia beatae pariatur saepe tempore. Ea maxime a molestiae laborum repellendus itaque minima asperiores, illum fugit sed libero accusantium, excepturi est aspernatur nemo corrupti. Veritatis officiis eos modi ab magnam, eveniet recusandae."},
  {title: "Our Mission", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam unde libero repellendus praesentium necessitatibus maxime! Eius at, debitis praesentium quae quos alias voluptatem voluptates velit ipsum necessitatibus optio dolore maiores, architecto molestias doloremque illum eligendi quis hic mollitia beatae pariatur saepe tempore. Ea maxime a molestiae laborum repellendus itaque minima asperiores, illum fugit sed libero accusantium, excepturi est aspernatur nemo corrupti. Veritatis officiis eos modi ab magnam, eveniet recusandae."},
  {title: "Policy", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam unde libero repellendus praesentium necessitatibus maxime! Eius at, debitis praesentium quae quos alias voluptatem voluptates velit ipsum necessitatibus optio dolore maiores, architecto molestias doloremque illum eligendi quis hic mollitia beatae pariatur saepe tempore. Ea maxime a molestiae laborum repellendus itaque minima asperiores, illum fugit sed libero accusantium, excepturi est aspernatur nemo corrupti. Veritatis officiis eos modi ab magnam, eveniet recusandae."},
]

const About = () => {
  return (
    <Stack direction="column" spacing={5} marginTop="80px" padding="30px">
      {
        data.map((x, i) => {
          return (
            <Grid2 container key = {i} columns = {2}>
              <Grid2 xs = {2} smOffset = {i%2 == 0 ? 0: 1} sm = {1}>
                <motion.div style = {{gridColumn: i % 2 == 0 ? "1 /span 1" : "2"}} initial = {{x: i % 2 == 0 ? "-100px": "100px", opacity: 0}} animate = {{x: 0, opacity: 1, transition: {
                  duration: 1
                }}}>
                  <div style = {{marginBottom: "10px"}}>
                    <h2>{x.title}</h2>
                    <hr style={{width: "100px"}} />
                  </div>
                  <p>{x.content}</p>
                </motion.div>
              </Grid2>
            </Grid2>
          )
        })
      }
    </Stack>
  )
}

export default About