import { Button, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5
};


const BookingModal = ({ handleOpen, handleClose, open, booking, date, setAppointmentSuccess }) => {

    const { name, time,price } = booking;
    const { user } = useAuth();

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }

    const [bookingInfo, setBookingInfo] = useState(initialInfo);


    // const handleOnBlur

    const handleBlur = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const newInfo = { ...bookingInfo };

        newInfo[field] = value;
        console.log(newInfo);

        setBookingInfo(newInfo);

    }


    const handleBookingSubmit = (e) => {

        const appointmentData = {
            ...bookingInfo,
            serviceName: name,
            price,
            date: date.toLocaleDateString()
        }

        console.log(appointmentData);
        // Collect Data

        // Send to the server

        fetch("http://localhost:5000/appointments", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointmentData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAppointmentSuccess(true);
                    handleClose();

                }
            })

        e.preventDefault();

    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>

                        <form onSubmit={handleBookingSubmit} style={{ width: "100%" }}>
                            <TextField sx={{ width: "100%", my: 2 }}
                                disabled
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <TextField sx={{ width: "100%", my: 2 }}
                                disabled
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"

                            />
                            <TextField sx={{ width: "100%", my: 2 }}

                                id="outlined-size-small"
                                defaultValue={user.displayName}
                                size="small"
                                name="patientName"
                                onBlur={handleBlur}
                            />
                            <TextField sx={{ width: "100%", my: 2 }}

                                id="outlined-size-small"
                                placeholder="Email"
                                size="small"
                                name="email"
                                defaultValue={user.email}
                                onBlur={handleBlur}
                            />
                            <TextField sx={{ width: "100%", my: 2 }}

                                id="outlined-size-small"
                                placeholder="Phone Number"
                                size="small"
                                name="phone"
                                onBlur={handleBlur}
                            />

                            <Button type="submit" variant="contained">Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default BookingModal;