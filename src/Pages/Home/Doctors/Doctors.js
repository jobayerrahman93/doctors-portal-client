import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-springs-29140.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);


    return (
        <>
        
        

          <div style={{ marginTop:"100px" }}>
          <Container>
          <Typography
            sx={{ color: "info.main", pt: 5, mb: 3,textAlign:"left" }}
            variant="h4"
            component="div"
          >
            Doctors
          </Typography>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                    }
                </Grid>

            </Container>
              </div>
        </>
    );
};

export default Doctors;