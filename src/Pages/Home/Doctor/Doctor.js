import { Grid, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {

    const { name, image } = doctor;

    return (
        <>
            <Grid sx={{ boxShadow: 3}}   item xs={12} sm={6} md={4}>
                <img style={{ width: "300px", height:"200px" }} src={`data:image/png;base64,${image}`}></img>
                <Typography style={{mt:"500px"}} variant="h5">
                    Doctor Name: <span style={{color:'blue'}}>{name}</span>
                </Typography>
            </Grid>
        </>
    );
};

export default Doctor;