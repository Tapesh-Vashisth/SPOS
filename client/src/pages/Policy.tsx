import React from 'react'
import {Stack} from "@mui/material";
import { motion } from 'framer-motion';

const Policy = () => {
  return (
    <Stack direction="column" spacing={2} marginTop="80px" padding="70px">
      <motion.p style = {{fontSize: "20px"}} initial = {{x: 100}} animate = {{x: 0, transition: {
        duration: 1
      }}}>
        Rama Construction Plc is fully committed to establish and implement ISO Based Quality and Environmental Management system and  conduct all activities  in conformity with established international standards and legal requirements so as to:   
      </motion.p>

      <motion.ul style = {{display: "flex", flexDirection: "column", rowGap: "20px"}} initial = {{x: -100}} animate = {{x: 0, transition: {
        duration: 1
      }}}>
        <li>
          Achieve maximum customer satisfaction
        </li>
        <li>
          Become the industry leader in delivering quality, timely and cost effective construction service
        </li>
        <li>
          Ensure continual improvement of the service, the process and the management system
        </li>
        <li>
          Create environment friendly working condition by reducing and gradually eliminating activities and wastes having adverse effect on the environment and thus contribute its share in the global effort towards combating environmental degradation    
        </li>
        <li>
          Ensure the safety and security of the Company employees and project neighborhoods by creating a working environment which is free from danger and professional hazards.    
        </li>
        <li>
          Ensure that the Quality & Environmental Objectives set by the Company are met.
        </li>
      </motion.ul>
    </Stack>
  )
}

export default Policy