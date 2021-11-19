import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {

    const [email,setEmail]=useState('');
    const [successAdmin,setSuccessAdmin]=useState(false);

    const {token}=useAuth();
    // console.log(token);
    

    const handleOnBlur=(e)=>{

        setEmail(e.target.value)

    }

    const handleSubmit=(e)=>{

        console.log('Submitted');
        
        const user={email};

        fetch("https://sleepy-springs-29140.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                'authorization':`Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data =>{
                if(data.modifiedCount>0){
                    setSuccessAdmin(true);
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h1>Make Admin</h1>

            {successAdmin && <Alert sx={{ width: "20%",textAlign:"center", margin: "0 auto", my: 3 }} severity="success">Admin create Successful</Alert>}

            <form onSubmit={handleSubmit}>
            <TextField 
            id="standard-basic" 
            label="Email" 
            type="email"
            onBlur={handleOnBlur}
            variant="standard" />
            <br/>
            <Button sx={{mt:4}} type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;