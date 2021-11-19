import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';


const services = [
    {
        name: "Fluoride Treatment",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: cavity
    },
    {
        name: "Teath Whitening",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        img: whitening
    }
]



const Services = () => {
    return (
        <Container sx={{ my: 8 }}>
            <Typography sx={{ color: 'info.main',my:3 }} variant="h6" component="div">
                OUR SERVICES
            </Typography>
            <Typography sx={{ fontWeight: 'bold',mb:10,letterSpacing: 1 }} variant="h4" component="div">
                Services We Provide
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service key={service.name} service={service}></Service>)

                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;