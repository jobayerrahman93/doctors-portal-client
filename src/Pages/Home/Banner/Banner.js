import { Button, Container, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import React from 'react';
import bannerBg from "../../../images/bg.png";
import chair from "../../../images/chair.png";

const Banner = () => {

    const bannerBack = {
        background: `url(${bannerBg})`,
        backgroundSize: 'cover'
    }

    return (
        <>
            <Box sx={{ overflow: 'hidden' }} style={bannerBack}>
                <Container style={{ fontFamily: "'Roboto',sans-serif" }} sx={{ flexGrow: 1 }}>
                    <Grid container sx={{ height: "110vh", mt:20 }} spacing={2}>
                        <Grid sx={{ display: "flex", justifyContent: 'flex-start', textAlign: 'left' }} item xs={12} md={5}>
                            <Box>
                                <Typography style={{ marginBottom: "20px" }} sx={{ fontWeight: "500" }} variant="h3">
                                    Your New Smile <br />
                                    Starts Here
                                </Typography>

                                <Typography variant="subtitle1">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt omnis iusto non eveniet laudantium autem, neque nostrum maxime error! Voluptate animi quas deserunt omnis!
                                </Typography>

                                <Button sx={{ my: 3 }} variant="contained">Get Appointment</Button>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={7}>
                            <img style={{ width: "500px" }} src={chair} alt="" />
                        </Grid>

                    </Grid>

                </Container>
            </Box>


            {/* info section */}






            <Box style={{marginTop:"-100px"}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ py: 5, bgcolor: 'info.main', color: "white",height:"87px" }} elevation={3}>

                            <Typography sx={{ fontWeight: 500,mb:2 }} variant="h5">
                                Opening Hours
                            </Typography>
                            <Typography sx={{ color: "white" }} variant="subtitle1">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, reprehenderit.
                            </Typography>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ py: 5, bgcolor: 'text.primary', color: "white",height:"87px" }} elevation={3}>

                            <Typography sx={{ fontWeight: 500,mb:2 }} variant="h5">
                                Visit Our Location
                            </Typography>

                            <Typography variant="subtitle1">
                                Brooklyn,United States
                            </Typography>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ py: 5, bgcolor: 'info.main', color: "white",height:"87px" }} elevation={3}>
                            <Typography sx={{ fontWeight: 500,mb:2 }} variant="h5">
                                Contact us now
                            </Typography>
                            <Typography variant="subtitle1">
                                (+77)8954794945
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </Box>



        </>
    );
};

export default Banner;