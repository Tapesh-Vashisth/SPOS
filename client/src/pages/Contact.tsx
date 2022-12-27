import React from 'react'
import {Grid, Stack} from "@mui/material";
import {motion} from "framer-motion";


const Contact = () => {
  return (
    <Stack direction="column" justifyContent="center" marginTop="90px" padding="30px 10px" spacing={4}>
      <Grid container columns = {2}>
        <Grid item md = {1} xs = {2}>
          <motion.iframe initial = {{opacity: 0}} animate = {{opacity: 1, transition: {duration: 1}}} className="gmap_iframe" width="100%" height="400px" src="https://maps.google.com/maps?  width=800&amp;height=800&amp;hl=en&amp;q=delhi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
        </Grid>
        <Grid item md = {1} xs = {2} sx = {{backgroundColor: {xs:"#262233", md: "transparent"}, padding: "30px"}} alignItems = "center" justifyContent="center">
          <motion.h1 initial = {{opacity: 0}} animate = {{opacity: 1, transition: {duration: 1}}} style = {{textAlign: "center"}}>Contact Us</motion.h1>
          <motion.form initial = {{opacity: 0}} animate = {{opacity: 1, transition: {duration: 1}}} style = {{display: "flex", rowGap: "20px", flexDirection: "column", marginTop: "25px"}}>
            <Grid container justifyContent="center" spacing = {2} columns = {2}>
              <Grid item xs = {1}>
                <label style = {{display: "inline-block", width: "100%", textAlign: 'right', paddingRight: "10px"}} htmlFor = "name">name</label>
              </Grid>
              <Grid item xs = {1}>
                <input name='name' id = "name" type = "text"></input>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing = {2} columns = {2}>
              <Grid item xs = {1}>
                <label style = {{display: "inline-block", width: "100%", textAlign: 'right', paddingRight: "10px"}} htmlFor = "name">name</label>
              </Grid>
              <Grid item xs = {1}>
                <input name='name' id = "name" type = "text"></input>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing = {2} columns = {2}>
              <Grid item xs = {1}>
                <label style = {{display: "inline-block", width: "100%", textAlign: 'right', paddingRight: "10px"}} htmlFor = "name">name</label>
              </Grid>
              <Grid item xs = {1}>
                <input name='name' id = "name" type = "text"></input>
              </Grid>
            </Grid>
          </motion.form>
        </Grid>
      </Grid>
      <motion.section initial = {{opacity: 0}} animate = {{opacity: 1, transition: {duration: 1}}} style = {{textAlign: "center"}}>
        <h1 style={{marginBottom: "10px"}}>Other ways to contact</h1>
        <Stack direction = "column" spacing = {2}>
          <Grid>
            <Stack direction = "row" justifyContent="center" spacing={2} style={{textAlign: "center"}}><span>Email</span><span>tapeshvashisth</span></Stack>
          </Grid>
          <Grid>
            <Stack direction = "row" justifyContent="center" spacing={2} style={{textAlign: "center"}}><span>Email</span><span>tapeshvashisth</span></Stack>
          </Grid>
          <Grid>
            <Stack direction = "row" justifyContent="center" spacing={2} style={{textAlign: "center"}}><span>Email</span><span>tapeshvashisth</span></Stack>
          </Grid>
        </Stack>
      </motion.section>
    </Stack>  
  )
}

export default Contact