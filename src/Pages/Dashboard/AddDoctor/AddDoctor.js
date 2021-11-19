import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!image) {
            return;
        }

        console.log(image);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("image", image);

        fetch("http://localhost:5000/addDoctor", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    alert("Doctor added successfully")
                }
            })
    }

    return (
        <div>
            <h1>Add Doctor</h1>
            
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: "30%" }}
                    required
                    label="Name"
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    required
                    sx={{ width: "30%", mt: 3 }}
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    variant="standard" />
                <br />


                <Input onChange={e => setImage(e.target.files[0])} sx={{ width: "30%", mt: 3 }} accept="image/*" type="file" />
                <br />
                <Button sx={{ width: "30%", mt: 3 }} variant="contained" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AddDoctor;