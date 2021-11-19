import { Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckOut from './CheckOut';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Jw2qzK85QhEvkm4M6uHzZNoJ02bJonWFghkmMN9EY4akbWWQXlPT9ZnAGkJYvhF54rFdj9Qrv59Mz0Q7BrFM66h00EiJKPnTi');

const Payment = () => {

    const { appointmentId } = useParams();

    const [appointment, setAppointment] = useState({});


    useEffect(() => {
        fetch(`https://sleepy-springs-29140.herokuapp.com/payment/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, []);



    return (
        <div>
            <Typography variant="h6">
                This is payment for : {appointment.patientName} for {appointment.serviceName}
            </Typography>

           {appointment?.price && <Elements stripe={stripePromise}>
                <CheckOut appointment={appointment} />
            </Elements>}

        </div>
    );
};

export default Payment;


// install stripe and stripe react
// set publishable key
// elements
// checkOut form
// create payment method
// server create payment intent api
// load client secret
// confirm card payment