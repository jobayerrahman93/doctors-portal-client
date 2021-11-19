import { CircularProgress } from "@mui/material";
import React from 'react';
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const AdminRoute=({ children, ...rest })=> {


    const {user,isLoading,admin} = useAuth();

    if(isLoading){
        return <CircularProgress sx={{width: "65%",margin:"0 auto",my:3}}/>
    }
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default AdminRoute;