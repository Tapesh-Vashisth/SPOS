import React, {useState} from 'react'
import {Grid, Stack} from "@mui/material";
import {motion} from "framer-motion";
import axios from 'axios';

const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5500/projects/contact", {email, name, desc});
      alert("request sent succesfully");
    } catch (err: any) {
      alert(err);
    }
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  }

  return (
    <Stack direction="column" justifyContent="center" marginTop="90px" padding="30px 10px" spacing={4}>
      <Grid container columns = {2}>
        <Grid item md = {1} xs = {2}>
          <motion.iframe initial = {{opacity: 0}} animate = {{opacity: 1, transition: {duration: 1}}} className="gmap_iframe" width="100%" height="400px" src="https://maps.google.com/maps?  width=800&amp;height=800&amp;hl=en&amp;q=delhi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
        </Grid>
        <Grid item md = {1} xs = {2} sx = {{backgroundColor: {xs:"#262233", md: "transparent"}, padding: "30px"}} alignItems = "center" justifyContent="center">
          <motion.h1 initial = {{opacity: 0}} animate = {{opacity: 1, transition: {duration: 1}}} style = {{textAlign: "center"}}>Contact Us</motion.h1>
          <motion.form onSubmit={handleSubmit} initial = {{opacity: 0}} animate = {{opacity: 1, transition: {duration: 1}}} style = {{display: "flex", rowGap: "20px", flexDirection: "column", marginTop: "25px"}}>
            <Grid container justifyContent="center" spacing = {2} columns = {2}>
              <Grid item xs = {1} alignItems = "center" justifyContent="center">
                <label style = {{display: "inline-block", width: "100%", textAlign: 'right', paddingRight: "10px"}} htmlFor = "name">name</label>
              </Grid>
              <Grid item xs = {1}>
                <input onChange={handleChangeName} name='name' id = "name" type = "text" style = {{padding: "5px"}}></input>
              </Grid>
            </Grid> 
            <Grid container justifyContent="center" spacing = {2} columns = {2}>
              <Grid item xs = {1} alignItems = "center" justifyContent="center">
                <label style = {{display: "inline-block", width: "100%", textAlign: 'right', paddingRight: "10px"}} htmlFor = "email">email</label>
              </Grid>
              <Grid item xs = {1}>
                <input onChange={handleChangeEmail} name='email' id = "email" type = "text" style = {{padding: "5px"}}></input>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" spacing = {2} columns = {2}>
              <Grid item xs = {1} alignItems = "center" justifyContent="center">
                <label style = {{display: "inline-block", width: "100%", textAlign: 'right', paddingRight: "10px"}} htmlFor = "description">Description</label>
              </Grid>
              <Grid item xs = {1}>
                <input onChange={handleChangeDesc} name='description' id = "description" type = "text" style = {{padding: "5px"}}></input>
              </Grid>
            </Grid>

            <Grid container justifyContent="center">
              <button style = {{padding: "5px", fontSize: "16px", width: "40%"}}>Submit</button>
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