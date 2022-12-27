import React, { useEffect, useState } from 'react'
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { motion } from 'framer-motion';
import axios from 'axios';

const Projects = () => {

	const [onGoing, setOngoing] = useState<any []>([]);
  const [finished, setFinished] = useState<any []>([]);

  const getProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5500/projects');
      for (let i = 0; i < response.data.length; i++){
        if (response.data[i].status === "finished"){
          setFinished((prev) => {
            return [...prev, response.data[i]];
          })
        }else{
          setOngoing((prev) => {
            return [...prev, response.data[i]];
          })
        }
      }
    } catch (Err: any){
      alert(Err.message);
    }
  }

	useEffect(() => {
    getProjects();
	}, [])

	return (
		<Stack sx={{ marginTop: '90px' }}>
			<Grid container columns={12}>
				<Grid item xs={12}>
					<h2 style={{ textAlign: "center" }}>Ongoing Projects</h2>
				</Grid>
				<Grid item xs={12} padding={3}>
					<Grid container columns={12} spacing={4}>

            {onGoing.length > 0 ? onGoing.map((x, i) => {
              const bstr: any = btoa(
                         String.fromCharCode(...new Uint8Array((x.image.data))));

              return (
                <Grid item xs={12} sm={6} md={3}>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ scale: 0.8, opacity: 0.8 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
                    <Stack direction="column" style={{ background: "grey" }}>
                      <a href={`/projects/:${x.projectName}`}> <img src={`data:${x.image.contentType};base64,${bstr}`}  alt="" style={{ width: "100%", height: "300px" }}  /> </a>
                      <h3 style={{ textAlign: "center", padding: "10px" }}>{x.projectName}</h3>
                    </Stack>
                  </motion.div>
                </Grid>
              )
            }): null}

						
					</Grid>
				</Grid>
			</Grid>
			<Grid container columns={12}>
				<Grid item xs={12}>
					<h2 style={{ textAlign: "center" }}>Finished Projects</h2>
				</Grid>
				<Grid item xs={12} padding={3}>
					<Grid container columns={12} spacing={4}>
            
            {finished.length > 0 ? finished.map((x, i) => {
              const bstr: any = btoa(
                String.fromCharCode(...new Uint8Array((x.image.data))));
                
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ scale: 0.8, opacity: 0.8 }} animate={{ opacity: 1, transition: { duration: 1 } }}>
                    <Stack direction="column" style={{ background: "grey" }}>
                      <a href={`/projects/:${x.projectName}`}> <img src={`data:${x.image.contentType};base64,${bstr}`}  alt="" style={{ width: "100%", height: "300px" }}  /> </a>
                      <h3 style={{ textAlign: "center", padding: "10px" }}>{x.projectName}</h3>
                    </Stack>
                  </motion.div>
                </Grid>
              )
            }): null}


					</Grid>
				</Grid>
			</Grid>
		</Stack>
	)
}

export default Projects