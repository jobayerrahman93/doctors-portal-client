import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";

const appointmentBanner={
    background:`url(${bg})`,
    width:"100%",
 
    marginTop:'180px',
    backgroundColor:"rgba(55, 53, 62,0.9)",
    backgroundBlendMode: "darken, luminosity"
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
          <img style={{
              height:"520px",
              marginTop:"-140px"
          }} src={doctor} alt="" />
          </Grid>
          <Grid sx={{ display: 'flex',justifyContent: 'flex-start',textAlign:"start" }} item xs={12} md={8}>
            
           <Box>
           <Typography variant="h6" sx={{color:"#35EBE8",marginTop:"15px"}}>
                Appointment
            </Typography>
            <Typography variant="h3" sx={{color:'white',my:3}}>
                Make an appointment<br/> Today
            </Typography>
            <Typography variant="subtitle1" sx={{color:'white'}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque quis explicabo <br/> hic laudantium labore molestias tempore dolorum ad
            </Typography>

            <Button variant="contained" sx={{backgroundColor:"#35EBE8",my:3}}>Learn More</Button>


           </Box>
          </Grid>
         
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;