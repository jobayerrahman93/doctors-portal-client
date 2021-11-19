import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import LoginImage from "../../../images/login.png";

const Register = () => {

    const [registerData, setRegisterData] = useState({});
    const {registerUser,isLoading,authError,user}=useAuth();


    const history = useHistory();



    const handleRegisterSubmit = (e) => {


       
        if (registerData.password !== registerData.password2) {
            alert("Password doesnot match")
        }

        else{
            
            registerUser(registerData.email,registerData.password, registerData.name,history);   
        }

        e.preventDefault();
    }
    // console.log("lo",registerData);

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...registerData };
        // console.log(registerData);
        // console.log("new",newLoginData);
        newLoginData[field] = value;
        setRegisterData(newLoginData)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 20 }} xs={12} md={6}>
                    <Typography sx={{ textAlign: "center" }} variant="h5">
                        Register
                    </Typography>

                 {isLoading&&<CircularProgress sx={{width: "65%",margin:"0 auto",my:3}}/>}

                 {user.email&& <Alert sx={{ width: "65%",margin:"0 auto",my:3 }} severity="success">Registration Successful</Alert>}
                 
                 {authError && <Alert sx={{ width: "65%",margin:"0 auto",my:3}}
                  severity="error">{authError}</Alert> }
                  
                    <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            name="name"
                            onBlur={handleChange}

                            label="Name"
                            type="text"
                            sx={{ width: "70%", marginTop: "80px" }}
                            id="standard-basic"
                            variant="standard" />
                        
                        <TextField
                            name="email"
                            onBlur={handleChange}


                            label="Email"
                            type="email"
                            sx={{ width: "70%", marginTop: "40px" }}
                            id="standard-basic"
                            variant="standard" />
                            
                        <TextField
                            name="password"
                            onBlur={handleChange}


                            sx={{ width: "70%", marginTop: "40px" }}
                            type="password"
                            id="standard-basic"
                            label="Enter password"
                            variant="standard" />

                        <TextField
                            name="password2"
                            onBlur={handleChange}


                            sx={{ width: "70%", marginTop: "30px" }}
                            type="password"
                            id="standard-basic"
                            label="Re-type password"
                            variant="standard" />

                        

                        <Button sx={{ width: "70%", bgcolor: "info.main",mt:5 }} type="submit" variant="contained">Register</Button>

                        <Link style={{textDecoration:"none"}} sx={{textAlign:"left" }} to="/login">
                            <Button sx={{ mt: 3}} variant="text">Already registered ? Please Login</Button>
                        </Link>

                    </form>
                </Grid>
                <Grid sx={{ overflow: "hidden" }} item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={LoginImage} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;