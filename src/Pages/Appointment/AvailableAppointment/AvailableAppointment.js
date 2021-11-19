import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppointment = ({ date }) => {

    const bookings = [
        {
            id: 1,
            name: "Teeth Orthodontics",
            time: "8.00 AM - 9.00 AM",
            price:50,
            space: "10"
        },
        {
            id: 2,
            name: "Cosmetic Dentistry",
            time: "10.00 AM - 11.00 AM",
            price:80,
            space: "6"
            
        },
        {
            id: 3,
            name: "Teeth Cleaning",
            time: "8.00 AM - 9.00 AM",
            price:50,
            space: "8"
        },
        {
            id: 4,
            name: "Cavity Protection",
            time: "7.00 AM - 8.00 AM",
            price:90,
            space: "10"
        },
        {
            id: 5,
            name: "Teeth Surgery",
            time: "11.00 AM - 12.00 AM",
            price:30,
            space: "12"
        },
        {
            id: 6,
            name: "Teeth Braces",
            time: "8.00 AM - 9.00 AM",
            price:870,
            space: "10"
        }

    ]

    const [appointmentSuccess,setAppointmentSuccess]=useState(false);
    return (
        <Container sx={{my:8}}>
            <Typography sx={{ color: 'info.main',my:4 }} variant="h3">Available Appointment {date.toDateString()}</Typography>

            {appointmentSuccess && <Alert sx={{ width: "20%",textAlign:"center", margin: "0 auto", my: 3 }} severity="success">Appointment Successful</Alert>}

            <Grid container spacing={2}>
                {
                    bookings.map(booking=><Booking key={booking.id} setAppointmentSuccess={setAppointmentSuccess} date={date} booking={booking}></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;