import { Card, Container, Grid, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
import React from 'react';
import cus1 from "../../../images/people-1.png";
import cus2 from "../../../images/people-2.png";
import cus3 from "../../../images/people-3.png";


const Testimonial = () => {


    return (
        <Box style={{ minHeight: "110vh" }}>

            <Container>
                <Box>
                    <Grid container spacing={2}>
                        <Grid item md={6} sx={{ textAlign: "left", my: 8 }}>
                            <Typography sx={{ color: "info.main", my: 4 }} variant="h6">
                                Testimonials
                            </Typography>
                            <Typography sx={{ color: "text.primary" }} variant="h3">
                                What's Our Patient <br /> Says
                            </Typography>

                        </Grid>
                        <Grid item md={6}>

                        </Grid>

                    </Grid>
                </Box>

                {/* Patient Comment */}

                <Box>

                    <Grid container sx={{ textAlign: "justify" }} spacing={2}>

                        <Grid item xs={12} md={4}>
                        <Card variant="outlined" sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{color: 'text.secondary',fontWeight:500}} variant="subtitle1">
                                    Wonderful experience with Doctors Portal. They have  wonderful surgeon, and the staff was always helpful and kind. They ensured I had a smooth prep, surgery, and follow-up. I am so glad I chose Doctors Portal and would highly recommend to anyone.
                                    </Typography>
                                    <Box sx={{mt:10}}>
                                        <Grid container spacing={2}>
                                            <Grid sx={{textAlign:"center"}} item md={4}>
                                                <img src={cus1} />
                                            </Grid>
                                            <Grid item  md={8}>
                                                <Typography sx={{mt:2,color:"info.main"}} variant="h6">
                                                    Mark Rio
                                                </Typography>
                                                <Typography sx={{mt:1}} variant="subtitle1">
                                                   California
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>

                            </Card>

                        </Grid>

                        <Grid item xs={12} md={4}>
                        <Card variant="outlined" sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{color: 'text.secondary',fontWeight:500}} variant="subtitle1">
                                    I am happy and relived to observe that inspite I wasnt able to be there physically for the first 4 days, the NEURO TEAM at AMRI was very caring and took care of her. even thou I was very worried about the outcome of this Surgery on my 75 year old mom
                                    </Typography>
                                    <Box sx={{mt:10}}>
                                        <Grid container spacing={2}>
                                            <Grid item md={4}>
                                                <img src={cus2} />
                                            </Grid>
                                            <Grid item md={8}>
                                                <Typography sx={{mt:2,color:"info.main"}} variant="h6">
                                                    Gigi
                                                </Typography>
                                                <Typography sx={{mt:1}} variant="subtitle1">
                                                   California
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>

                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card variant="outlined" sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{color: 'text.secondary',fontWeight:500}} variant="subtitle1">
                                    Great medical office, wonderful and warm experience from start to finish. Appreciate Doctor taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. Highly recommended
                                    </Typography>
                                    <Box sx={{mt:10}}>
                                        <Grid container spacing={2}>
                                            <Grid item md={4}>
                                                <img src={cus3} />
                                            </Grid>
                                            <Grid item md={8}>
                                                <Typography sx={{mt:2,color:"info.main"}} variant="h6">
                                                   Ema
                                                </Typography>
                                                <Typography sx={{mt:1}} variant="subtitle1">
                                                   California
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>

                            </Card>

                        </Grid>

                    </Grid>

                </Box>
            </Container>

        </Box>
    );
};

export default Testimonial;