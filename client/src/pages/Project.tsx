import React, {useEffect, useState} from 'react'
import { Stack, Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'framer-motion'


const Project = () => {
    const {name} = useParams();
    const [details, setDetails] = useState<{project: string, images: Object []} | null>(null);

    const getDetails = async () => {
        try {
            console.log(name)
            const response = await axios.get("http:localhost:5500/projects/" + name);
            setDetails(response.data);
        } catch (err: any) {
            alert(err);
        }
    }
    
    useEffect(() => {
        getDetails();
    }, [])

    return (
        <Grid marginTop = "80px" padding = "20px">
            hello
        </Grid>
    )
}

export default Project