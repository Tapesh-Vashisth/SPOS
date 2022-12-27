import React from 'react'
import {Stack} from "@mui/material";
import {Grid} from "@mui/material";
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <Stack sx = {{marginTop: '90px'}}>
      <Grid container columns = {12}>
        <Grid item xs = {12}>
          <h2 style = {{textAlign: "center"}}>Ongoing Projects</h2>
        </Grid>
        <Grid item xs = {12} padding = {3}>
          <Grid container columns={12} spacing = {4}>
            <Grid item xs = {12} sm = {6} md = {3}>
              <motion.div initial = {{opacity: 0}} whileHover = {{scale: 0.8, opacity: 0.8}} animate = {{opacity: 1, transition: {duration: 1}}}>
                <Stack direction = "column" style = {{background: "grey"}}>
                  <img src = "/images/client-logos/logo.png" style=  {{width: "100%", height: "300px"}} />
                  <h3 style = {{textAlign: "center", padding: "10px"}}>First Project</h3>                
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs = {12} sm = {6} md = {3}>
              <motion.div initial = {{opacity: 0}} whileHover = {{scale: 0.8, opacity: 0.8}} animate = {{opacity: 1, transition: {duration: 1}}}>
                <Stack direction = "column" style = {{background: "grey"}}>
                  <img src = "/images/client-logos/logo.png" style=  {{width: "100%", height: "300px"}} />
                  <h3 style = {{textAlign: "center", padding: "10px"}}>First Project</h3>                
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs = {12} sm = {6} md = {3}>
              <motion.div initial = {{opacity: 0}} whileHover = {{scale: 0.8, opacity: 0.8}} animate = {{opacity: 1, transition: {duration: 1}}}>
                <Stack direction = "column" style = {{background: "grey"}}>
                  <img src = "/images/client-logos/logo.png" style=  {{width: "100%", height: "300px"}} />
                  <h3 style = {{textAlign: "center", padding: "10px"}}>First Project</h3>                
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs = {12} sm = {6} md = {3}>
              <motion.div initial = {{opacity: 0}} whileHover = {{scale: 0.8, opacity: 0.8}} animate = {{opacity: 1, transition: {duration: 1}}}>
                <Stack direction = "column" style = {{background: "grey"}}>
                  <img src = "/images/client-logos/logo.png" style=  {{width: "100%", height: "300px"}} />
                  <h3 style = {{textAlign: "center", padding: "10px"}}>First Project</h3>                
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs = {12} sm = {6} md = {3}>
              <motion.div initial = {{opacity: 0}} whileHover = {{scale: 0.8, opacity: 0.8}} animate = {{opacity: 1, transition: {duration: 1}}}>
                <Stack direction = "column" style = {{background: "grey"}}>
                  <img src = "/images/client-logos/logo.png" style=  {{width: "100%", height: "300px"}} />
                  <h3 style = {{textAlign: "center", padding: "10px"}}>First Project</h3>                
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container columns = {12}>
        <Grid item xs = {12}>
          <h2 style = {{textAlign: "center"}}>Ongoing Projects</h2>
        </Grid>
        <Grid item xs = {12} padding = {3}>
          <Grid container columns={12} spacing = {4}>
            <Grid item xs = {12} sm = {6} md = {3}>
              <motion.div initial = {{opacity: 0}} whileHover = {{scale: 0.8, opacity: 0.8}} animate = {{opacity: 1, transition: {duration: 1}}}>
                <Stack direction = "column" style = {{background: "grey"}}>
                    <img src = "/images/client-logos/logo.png" style=  {{width: "100%", height: "300px"}} />
                    <h3 style = {{textAlign: "center", padding: "10px"}}>First Project</h3>                
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs = {12} sm = {6} md = {3}>
              <motion.div initial = {{opacity: 0}} whileHover = {{scale: 0.8, opacity: 0.8}} animate = {{opacity: 1, transition: {duration: 1}}}>
                <Stack direction = "column" style = {{background: "grey"}}>
                    <img src = "/images/client-logos/logo.png" style=  {{width: "100%", height: "300px"}} />
                    <h3 style = {{textAlign: "center", padding: "10px"}}>First Project</h3>                
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs = {12} sm = {6} md = {3}>
              <motion.div initial = {{opacity: 0}} whileHover = {{scale: 0.8, opacity: 0.8}} animate = {{opacity: 1, transition: {duration: 1}}}>
                <Stack direction = "column" style = {{background: "grey"}}>
                    <img src = "/images/client-logos/logo.png" style=  {{width: "100%", height: "300px"}} />
                    <h3 style = {{textAlign: "center", padding: "10px"}}>First Project</h3>                
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs = {12} sm = {6} md = {3}>
              <motion.div initial = {{opacity: 0}} whileHover = {{scale: 0.8, opacity: 0.8}} animate = {{opacity: 1, transition: {duration: 1}}}>
                <Stack direction = "column" style = {{background: "grey"}}>
                    <img src = "/images/client-logos/logo.png" style=  {{width: "100%", height: "300px"}} />
                    <h3 style = {{textAlign: "center", padding: "10px"}}>First Project</h3>                
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs = {12} sm = {6} md = {3}>
              <motion.div initial = {{opacity: 0}} whileHover = {{scale: 0.8, opacity: 0.8}} animate = {{opacity: 1, transition: {duration: 1}}}>
                <Stack direction = "column" style = {{background: "grey"}}>
                    <img src = "/images/client-logos/logo.png" style=  {{width: "100%", height: "300px"}} />
                    <h3 style = {{textAlign: "center", padding: "10px"}}>First Project</h3>                
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Projects