import React from 'react'
import {Stack, Grid} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Stack direction = "column" style = {{backgroundColor: "#1f2619", paddingTop: "30px", paddingBottom: "10px"}} spacing = {5}>
        <Grid container direction = "row" columns = {12} rowSpacing = {2}>
            <Grid item xs = {12} sm = {4}>
                <Stack direction = "column" justifyContent = "center" alignItems = "center">
                    <img src = "/images/logo.jpg" style = {{width: "70px"}} />
                </Stack>
            </Grid>
            <Grid item xs = {6} sm = {4}>
                <Stack direction = "column" alignItems="center" style = {{color: "white"}} spacing = {1}>
                    <p>Who we are</p>
                    <p>Our Awards</p>
                    <p>Our Projects</p>
                </Stack>
            </Grid>
            <Grid item xs = {6} sm = {4}>
                <Stack direction = "column" alignItems="center" style = {{color: "white"}} spacing = {1}>
                    <p>email: xyz@gmail.com</p>
                    <p>phone: 12345767</p>
                    <p></p>
                </Stack>
            </Grid>
        </Grid>
        <Stack direction = "row" justifyContent = "center">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
        </Stack>
    </Stack>
  )
}

export default Footer