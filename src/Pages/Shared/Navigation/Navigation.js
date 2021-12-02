import MenuIcon from "@mui/icons-material/Menu";
import { Container, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  const theme = useTheme();

  const useStyle = makeStyles({
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navItemConatiner: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    drawerNav:{
        textDecoration:"none !important",
        color:"gray"
    }

  });
  const { navIcon, navItemConatiner,drawerNav } = useStyle();
  // drawer

  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        
          <ListItem button >
           <ListItemText> <Link className={drawerNav} to="/">Home</Link> </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button >
           <ListItemText> <Link to="/dashboard" className={drawerNav}>Dashboard</Link> </ListItemText>
          </ListItem>
          <Divider />
          <ListItem button >
           <ListItemText> <Link className={drawerNav} to="/appointment">Appointment</Link> </ListItemText>
          </ListItem>
          <Divider />

          {user?.email ? (
                  <ListItem>
                    <ListItemText button>
                    <Link
                    onClick={logOut}
                    sx={{ color: "white" }}
                    color="inherit"
                    className={drawerNav}
                  >
                    LogOut
                  </Link>
                  </ListItemText>
                  </ListItem>
                ) : (
            <ListItem button >
           <ListItemText>
              <Link className={drawerNav} to="/login">Login</Link>
            </ListItemText>
          </ListItem>
                )}
          
      </List>
    
      
    </Box>
  );

  

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <IconButton
                className={navIcon}
                onClick={() => setState(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              ></Typography>
              <Box className={navItemConatiner}>
                <Link style={{ textDecoration: "none" }} to="/">
                  <Button sx={{ color: "white" }} color="inherit">
                    Home
                  </Button>
                </Link>

                <Link style={{ textDecoration: "none" }} to="/dashboard">
                  <Button sx={{ color: "white" }} color="inherit">
                    Dashboard
                  </Button>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/appointment">
                  <Button sx={{ color: "white" }} color="inherit">
                    Appointment
                  </Button>
                </Link>
                {user?.email ? (
                  <Button
                    onClick={logOut}
                    sx={{ color: "white" }}
                    color="inherit"
                  >
                    LogOut
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button sx={{ color: "white" }} color="inherit">
                      Login
                    </Button>
                  </Link>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;
