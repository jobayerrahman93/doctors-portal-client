import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import treatment from "../../../images/treatment.png";


const ExceptionalDental = () => {
    return (
        <Box>
            <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                   <img style={{height:"448px",marginTop:"50px"}} src={treatment} alt="" />
                </Grid>
                <Grid sx={{textAlign:"left",mt:5}} item xs={12} md={6}>
                   <Typography variant="h3">
                        Exceptional Dental<br /> Care, on Your Terms
                   </Typography>
                   <Typography variant="subtitle1">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione doloribus praesentium ut quidem quo consectetur, ab aut hic illum, sunt harum, eius magnam nihil odit iusto itaque voluptates pariatur esse laudantium cumque. Deleniti vero dolorum ipsam minima eius ullam sint veritatis optio tenetur modi facere repellendus repellat omnis iste rerum similique magnam, enim quas ad. Fuga ea iure officiis ad suscipit molestiae itaque nulla amet eum! Delectus atque aliquam quo aspernatur doloremque suscipit voluptatem cumque eligendi beatae deleniti! Molestiae, consequuntur. Commodi reprehenderit odio rem ratione, consectetur, eaque magnam ut nostrum excepturi officia, quam reiciendis! Voluptates nobis eum quos quae quod?
                   </Typography>

                    <Button sx={{my:3}} variant="contained">Learn More</Button>

                </Grid>
                
            </Grid>
            </Container>
        </Box>
    );
};

export default ExceptionalDental;