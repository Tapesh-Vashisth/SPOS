import React from 'react'
import {Stack} from "@mui/material";
import ImageViewer from '../components/Home/ImageViewer';
import About from '../components/Home/About';
import Clients from '../components/Home/Clients';


const Home = () => {
  return (
    <Stack direction="column" spacing={10}>
        <ImageViewer />
        <About />
        <Clients />
    </Stack>
  )
}

export default Home