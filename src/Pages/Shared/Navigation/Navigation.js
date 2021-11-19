import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {

    const {user,logOut}=useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Container>
                <Toolbar>
                   
                   <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       
                    </Typography>
                    <Link style={{textDecoration:"none"}} to="/">
                    <Button sx={{color:"white"}} color="inherit">Home</Button>
                    </Link>

                    <Link style={{textDecoration:"none"}} to="/dashboard">
                    <Button  sx={{color:"white"}} color="inherit">Dashboard</Button>
                    </Link>
                    <Link style={{textDecoration:"none"}} to="/appointment">
                    <Button  sx={{color:"white"}} color="inherit">Appointment</Button>
                    </Link>
                   {user?.email?<Button onClick={logOut} sx={{color:"white"}} color="inherit">LogOut</Button>
                  :
                   <Link  to="/login">
                   <Button sx={{color:"white"}} color="inherit">Login</Button>
                   </Link>}
                  
                </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navigation;