import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import LoginImage from "../../../images/login.png";

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { LoginUser, authError, isLoading, user ,signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleSubmit = (e) => {

        LoginUser(loginData.email, loginData.password, location, history);


        e.preventDefault();
    }
    // console.log("lo",loginData);

    const handleChange = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        // console.log(loginData);
        // console.log("new",newLoginData);
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    // handle google sign in

    const handleGoogleSignIn=()=>{
        signInWithGoogle(location,history)
    }



    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 20 }} xs={12} md={6}>
                    <Typography sx={{ textAlign: "center" }} variant="h5">
                        Login
                    </Typography>

                    {isLoading && <CircularProgress sx={{ width: "65%", margin: "0 auto", my: 3 }} />}

                    {user.email && <Alert sx={{ width: "65%", margin: "0 auto", my: 3 }} severity="success">Login Successful</Alert>}

                    {authError && <Alert sx={{ width: "65%", margin: "0 auto", my: 3 }}
                        severity="error">{authError}</Alert>}


                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="email"
                            onChange={handleChange}


                            label="Username"
                            sx={{ width: "70%", marginTop: "80px" }}
                            id="standard-basic"
                            variant="standard" />
                        <TextField
                            name="password"
                            onChange={handleChange}


                            sx={{ width: "70%", marginTop: "40px" }}
                            type="password"
                            id="standard-basic"
                            label="Enter password"
                            variant="standard" />

                        <Typography sx={{ color: 'error.main', width: "70%", margin: "0 auto", textAlign: "left", py: 2 }} variant="subtitle1">
                            Forgot your Password ?
                        </Typography>



                        <Button sx={{ width: "70%", bgcolor: "info.main" }} type="submit" variant="contained">Login</Button>

                        <Link style={{textDecoration:"none"}} to="/register">
                            <Button sx={{ mt: 3 }} variant="text">New user ? Please register</Button>
                        </Link>

                    </form>

                    <Button  onClick={handleGoogleSignIn} sx={{ bgcolor: "secondary.main",mt:3 }} variant="contained">Google Sign in</Button>

                </Grid>
                <Grid sx={{ overflow: "hidden" }} item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={LoginImage} alt="" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Login;