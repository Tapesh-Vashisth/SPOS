import React from 'react';
import {Stack} from "@mui/material";

const Clients = () => {
  return (
    <section style = {{textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#262233", padding: "40px 0px"}}>
        <h1>Our Clients</h1>
        <Stack direction="row" spacing={3} rowGap={3} justifyContent = "center" marginTop = "30px" maxWidth="500px" flexWrap="wrap">
                <div>
                    <img style={{width: "100px", height: "100px"}} src="/images/client-logos/logo1.png" alt="Our client" />

                </div>
                <div>
                    <img style={{width: "100px", height: "100px"}} src="/images/client-logos/logo2.png" alt="Our client" />

                </div>
                <div>
                    <img style={{width: "100px", height: "100px"}} src="/images/client-logos/logo3.png" alt="Our client" />

                </div>
                <div>
                    <img style={{width: "100px", height: "100px"}} src="/images/client-logos/logo4.png" alt="Our client" />

                </div>
                <div>
                    <img style={{width: "100px", height: "100px"}} src="/images/client-logos/logo.png" alt="Our client" />

                </div>
        </Stack>
    </section>
  )
}

export default Clients