import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';

const Doctor = ({ doctor }) => {

    const { name, image } = doctor;

    return (
        <>
            <Grid    item xs={12} sm={6} md={4}>
               <Box  sx={{ boxShadow: 3,height:"300px"}} >
               <img style={{ width: "100px", height:"100px",border:"7px solid #2c3e50",borderRadius:"50%",marginTop:"40px" }} src={`data:image/png;base64,${image}`}>

               </img>
                <Typography style={{margin:"20px"}} variant="h5">
                    Doctor : <span style={{color:'blue'}}>{name}</span>
                </Typography>
               </Box>
            </Grid>
        </>
    );
};

export default Doctor;