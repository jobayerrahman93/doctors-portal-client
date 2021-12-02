import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
const Blogs = () => {
  return (
    <>
      <Container sx={{ mb: 22, mt: 18 }}>
        <Typography
          sx={{ color: "info.main", my: 3 }}
          variant="h6"
          component="div"
        >
          OUR Blogs
        </Typography>
        <Typography
          sx={{ fontWeight: "bold", mb: 10, letterSpacing: 1 }}
          variant="h4"
          component="div"
        >
          From Our Blog News
        </Typography>

        <Box sx={{ my: 6 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={8} md={4}>
              <Paper
                style={{ color: "white", textAlign: "left", height: "250px" }}
                sx={{ bgcolor: "info.main", p: 2 }}
                variant="outlined"
              >
                <Typography variant="body1">Rashed Islam</Typography>
                <Typography variant="subtitle1">22 may 2022</Typography>
                <Typography sx={{ py: 4 }} variant="h6">
                  Check at least a doctor in a year for your teeth
                </Typography>
              </Paper>
            </Grid>

            {/* <Grid style={{height:"235px"}} item xs={4} sm={8} md={4}>
              <Paper variant="outlined">
                <Grid container>
                  <Grid sx={{ textAlign: "center",mt:3 }} item sm={8} md={4}>
                    <img
                      src="stuart.jpg"
                      style={{ width: "113px",height:"100px" }}
                    />
                  </Grid>
                  <Grid item style={{textAlign:"left",padding:"10px"}} sm={8} md={8}>
                    <Typography sx={{ mt: 2}} variant="h6">
                      Mark Rio
                    </Typography>
                    <Typography sx={{ mt: 1,color:"text.secondary"}} variant="subtitle1">
                      31 december 2021
                    </Typography>
                    <Typography sx={{ mt: 2}} variant="h6">
                      2 times brush in a day can you healthy
                    </Typography>
                    <Typography sx={{ mt: 2,color:"text.secondary"}} variant="subtitle1">
                      It is a long established fact that by the readable content of that layout
                    </Typography>
                    
                  </Grid>
                </Grid>
              </Paper>
            </Grid> */}

            <Grid  item xs={4} sm={8} md={4}>
              <Paper  variant="outlined">
                <Grid container>
                  <Grid
                    sx={{ textAlign: "center", mt: 3 }}
                    xs={4}
                    item
                    sm={8}
                    md={4}
                  >
                    <img
                      src="stuart.jpg"
                      style={{ width: "120px", height: "100px" }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{ textAlign: "left", padding: "10px" }}
                    xs={4}
                    sm={8}
                    md={8}
                  >
                    <Typography sx={{ mt: 2 }} variant="h6">
                     Stuart
                    </Typography>
                    <Typography
                      sx={{ mt: 1, color: "text.secondary" }}
                      variant="subtitle1"
                    >
                      1 november 2021
                    </Typography>
                    <Typography sx={{ mt: 2 }} variant="h6">
                      2 times brush in a day can you healthy
                    </Typography>
                    <Typography
                      sx={{ mt: 2, color: "text.secondary" }}
                      variant="subtitle1"
                    >
                      It is a long established fact that by the readable content
                      of that layout
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Grid  item xs={4} sm={8} md={4}>
              <Paper  variant="outlined">
                <Grid container>
                  <Grid
                    sx={{ textAlign: "center", mt: 3 }}
                    xs={12}
                    item
                    sm={12}
                    md={4}
                  >
                    <img
                      src="ema.jpg"
                      style={{ width: "120px", height: "100px" }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{ textAlign: "left", padding: "10px" }}
                    xs={12}
                    sm={12}
                    md={8}
                  >
                    <Typography sx={{ mt: 2 }} variant="h6">
                      Ema Watson
                    </Typography>
                    <Typography
                      sx={{ mt: 1, color: "text.secondary" }}
                      variant="subtitle1"
                    >
                      1 january 2021
                    </Typography>
                    <Typography sx={{ mt: 2 }} variant="h6">
                      2 times brush in a day can you healthy
                    </Typography>
                    <Typography
                      sx={{ mt: 2, color: "text.secondary" }}
                      variant="subtitle1"
                    >
                      It is a long established fact that by the readable content
                      of that layout
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Blogs;
