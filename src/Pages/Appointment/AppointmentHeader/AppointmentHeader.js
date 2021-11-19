import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import chair from "../../../images/chair.png";
import Calendar from '../../Shared/Calendar/Calendar';
const AppointmentHeader = ({date,setDate}) => {
    return (
        <Container style={{height:"100vh"}} sx={{my:8}}>
            <Grid container style={{marginTop:"100px"}}  spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default AppointmentHeader;