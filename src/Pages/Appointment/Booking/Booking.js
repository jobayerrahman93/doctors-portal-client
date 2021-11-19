import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking,date,setAppointmentSuccess }) => {
    const { id, name, time, space,price } = booking;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (

       <>
        <Grid item xs={12} md={4}>
            <Paper sx={{py:5}} elevation={3}>
                <Typography sx={{ color: 'info.main',fontWeight:'bold' }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="h6" display="block" gutterBottom>
                   Fee: ${price}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                   {space} SPCAES AVAILABLE
                </Typography>

                <Button onClick={handleOpen} variant="contained" sx={{mt:2}}>Book Appointment</Button>
            </Paper>
        </Grid>

        <BookingModal open={open} handleClose={handleClose} setAppointmentSuccess={setAppointmentSuccess} date={date} booking={booking}></BookingModal>
       </>

    );
};

export default Booking;