import React, {useEffect, useState} from 'react'
import { Stack, Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion'


const Project = () => {
    const {name} = useParams();
    const [view, setView] = useState<number>(0);
    const [details, setDetails] = useState<{project: any, images: any []} | null>(null);

    const getDetails = async () => {
        try {
            const response = await axios.get("http://localhost:5500/projects/" + name);
            console.log(response.data.data)
            setDetails(response.data.data);
        } catch (err: any) {
            alert(err);
        }
    }
    
    useEffect(() => {
        getDetails();
    }, [])

    const variants = {
        rotate: { rotate: [0, -30, 0], transition: { duration: 0.5 } }
    };

    return (
        <Grid container columns = {2} marginTop = "80px" padding = "80px" spacing = {2}>
            <Grid item xs = {2} sm = {1}>
                {
                    details? 
                    details.images ?
                    <motion.img variants={variants} whileHover={{scale: 0.8, boxShadow: "5px 5px 10px grey"}} animate = {'rotate'} onClick={() => {
                        setView((prev) => {
                        return (prev + 1)%details.images.length
                    })}} src={`data:${details.images[view].contentType};base64,${btoa(String.fromCharCode(...new Uint8Array((details.images[view].data.data))))}`}  alt="" style={{ width: "100%", height: "300px" }}  />
                    : <h1>no images found</h1>
                    : 
                    null
                }
            </Grid>
            <Grid item xs = {2} sm = {1}>
                {
                    details ? 
                    <motion.section initial = {{x: 100}} animate = {{x: 0, transition: {
                        duration: 1
                    }}}>
                        <h1 style = {{padding: "10px", textAlign: "center"}}>{details?.project.projectName}</h1>
                        <p style = {{padding: "10px"}}>{details?.project.projectDesc}</p>
                    </motion.section> : null
                }
            </Grid>
        </Grid>
    )
}

export default Project