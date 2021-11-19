import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);


    return (
        <>
            <h1>Total Doctors : {doctors.length}</h1>

            <Container>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                    }
                </Grid>

            </Container>
        </>
    );
};

export default Doctors;