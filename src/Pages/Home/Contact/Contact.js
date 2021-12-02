import { Container, Typography } from "@mui/material";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <Container className="con" sx={{ mb: 20 }}>
          <Typography
            sx={{ color: "info.main", pt: 12, mb: 3 }}
            variant="h6"
            component="div"
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              mb: 10,
              letterSpacing: 4,
              color: "white",
            }}
            variant="h4"
            component="div"
          >
            Always contact with us
          </Typography>

          <form>
            <input
              style={{ width: "40%", height: "30px", padding: "5px" }}
              type="email"
              placeholder="Email address"
            />
            <br />
            <input
              style={{
                width: "40%",
                height: "30px",
                padding: "5px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
              type="text"
              placeholder="Subject"
            />
            <br />
            <textarea
              placeholder="Your message"
              style={{ width: "40%", padding: "5px" }}
              name="message"
              rows="4"
              cols="50"
            ></textarea>
            <br />

            <button
              type="submit"
              
              style={{
                width: "150px",
                height: "40px",
                cursor: "pointer",
                marginTop: "15px",
                backgroundColor:"#0984e3",
                color:"white",
                fontSize:"18px",
                outline:"none",
                border:'none'
              }}
            >
              Submit
            </button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Contact;
