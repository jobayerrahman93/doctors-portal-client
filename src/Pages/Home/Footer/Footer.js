import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import footerbg from "../../../images/footer-bg.png";


const Footer = () => {

    const footer={
        background:`url(${footerbg})`,
        backgroundSize:'cover',
        height:"60vh",
        width:"100%",
        backgroundRepeat:"no-repeat"
    }

    const linkStyle={
        textDecoration:"none",
        color:"gray",
       marginBottom:"10px"
        
    }
    
  return (
    <div style={footer}>
      <Container>
          
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          
            <Grid item xs={2} sm={4} md={3} >
            <Box  sx={{ display: 'flex',flexDirection: 'column',textAlign:'left',fontSize:"18px",pt: 21}}>
                <Link to="/" style={linkStyle}>Emergency Dental Care</Link>
                <Link to="/" style={linkStyle}>Check Up</Link>
                <Link to="/" style={linkStyle}>Treatment for personal disease</Link>
                <Link to="/" style={linkStyle}>Tooth Extraction</Link>
                <Link to="/" style={linkStyle}>Check Up</Link>
            </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3} >
            <Typography
            sx={{ color: "info.main", pt: 14, mb: 3,textAlign:"left" }}
            variant="h6"
            component="div"
          >
            Services
          </Typography>

          <Box  sx={{ display: 'flex',flexDirection: 'column',textAlign:'left',fontSize:"18px"}}>
                <Link to="/" style={linkStyle}>Emergency Dental Care</Link>
                <Link to="/" style={linkStyle}>Check Up</Link>
                <Link to="/" style={linkStyle}>Treatment for personal disease</Link>
                <Link to="/" style={linkStyle}>Tooth Extraction</Link>
                <Link to="/" style={linkStyle}>Check Up</Link>
            </Box>

            </Grid>
            <Grid item xs={2} sm={4} md={3} >
            <Typography
            sx={{ color: "info.main", pt: 14, mb: 3,textAlign:"left" }}
            variant="h6"
            component="div"
          >
            Oral Health
          </Typography>

          <Box  sx={{ display: 'flex',flexDirection: 'column',textAlign:'left',fontSize:"18px"}}>
                <Link to="/" style={linkStyle}>Emergency Dental Care</Link>
                <Link to="/" style={linkStyle}>Check Up</Link>
                <Link to="/" style={linkStyle}>Treatment for personal disease</Link>
                <Link to="/" style={linkStyle}>Tooth Extraction</Link>
                <Link to="/" style={linkStyle}>Check Up</Link>
            </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3} >
            <Typography
            sx={{ color: "info.main", pt: 14, mb: 3,textAlign:"left" }}
            variant="h6"
            component="div"
          >
            Our Address
          </Typography>

          <Box  sx={{ display: 'flex',flexDirection: 'column',textAlign:'left',fontSize:"18px"}}>
            
                <Link to="/" style={linkStyle}>New York, Road 9/10</Link>

                <Typography sx={{color:"text.secondary"}} variant="subtitle1">
                    Call Now: +878968
                </Typography>
                
            </Box>
            </Grid>
        
        </Grid>

        <Typography sx={{py:3,color:"text.secondary"}} variant="subtitle1">
            All rights reserved &copy; Jobayer Rahman
        </Typography>
      </Container>
     
    </div>
  );
};

export default Footer;
