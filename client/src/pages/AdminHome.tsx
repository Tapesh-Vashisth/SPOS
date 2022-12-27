import React from 'react'
import {Stack} from "@mui/material";
import ImageViewer from '../components/Home/ImageViewer';
import About from '../components/Home/About';
import Clients from '../components/Home/Clients';
import AddNewProject from '../components/AddNewProject';

const AdminHome = () => {
  return (
    <Stack direction="column" spacing={10}>
        <AddNewProject />
    </Stack>
  )
}

export default AdminHome;