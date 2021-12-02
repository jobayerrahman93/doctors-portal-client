import { Alert, Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const CheckOut = ({ appointment }) => {

    const stripe = useStripe();
    const elements = useElements();
    const { price, patientName,_id } = appointment;
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useAuth();
    const [processing,setProcessing]=useState(false);

    
    useEffect(() => {

        fetch("https://sleepy-springs-29140.herokuapp.com/create-payment-intent", {

            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })

        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        setProcessing(true);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setProcessing(false)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        // confirm payment card

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess('');

        }
        else {
            setError('');
            console.log(paymentIntent);
            setSuccess("successfully payment");
            setProcessing(false);

            // save database 

            const payment={
                amount:paymentIntent.amount,
                created:paymentIntent.created,
                transaction:paymentIntent.client_secret.slice('_')[0]
                // last4:paymentIntent.card.last4
            }

            fetch(`https://sleepy-springs-29140.herokuapp.com/appointments/${_id}`,{
                method:"PUT",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
            
        }

    };



    return (
        <div>
            {
                error && <Alert sx={{ width: "20%", textAlign: "center", margin: "0 auto", my: 3 }} severity="error">{error}</Alert>

            }

            {
              success &&  <Alert sx={{ width: "20%", textAlign: "center", margin: "0 auto", my: 3 }} severity="success">{success}</Alert>
            }
            <Container>
            <form style={{marginTop:"100px"}} onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ?<CircularProgress></CircularProgress>: <button type="submit" sx={{p:4}} disabled={!stripe || success}>
                    Pay ${price}
                </button>}
            </form>
            </Container>
        </div>
    );
};

export default CheckOut;