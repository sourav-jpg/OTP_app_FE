import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../App.css";

function Recovery() {
  const [otp, setOtp] = useState("");
  const [validateOtp, setValidateOtp] = useState("");

  // const checkPass = () => {
  //   const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  //   if (password) {
  //     if (passRegex.test(password)) {
  //       setValidatePass("");
  //       return true;
  //     } else {
  //       setValidatePass("Invalid Password");
  //     }
  //   } else {
  //     setValidatePass("*Password Required");
  //   }
  // };

  return (
    <Grid
      container
      display="flex"
      direction="column"
      sx={{
        alignItems: "center",
        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Box
        sx={{
          height: "auto",
          background: "white",
          boxShadow: "1px 2px 3px",
          borderRadius: "10px",
          color: "grey",
          padding: "40px",
          width: "auto",
        }}
      >
        <Grid item xs={12} sx={{ p: 2, pl: 10 }}>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "Nunito Sans', sans-serif",
            }}
          >
            Recovery
          </Typography>
          <span>Enter OTP to recover password</span>
        </Grid>

        <Grid item xs={12} sx={{ p: 2, m: 2 }}>
          <span>Enter 6 digit OTP sent to your email address</span>
        </Grid>

        <Grid item xs={12} sx={{ mt: 1 }}>
          <TextField
            fullWidth
            type="text"
            placeholder="OTP"
            name="otp"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
          />
        </Grid>
        {validateOtp && <div style={{ color: "red" }}>{validateOtp}</div>}

        <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
          <Button
            sx={{ textDecoration: "none" }}
            variant="contained"
            // onClick={checkPass}
          >
            Recover
          </Button>
        </Grid>

        <Grid item xs={12}>
          <span>
            Can't get OTP ?
            <Button
              sx={{ textDecoration: "none", color: "red" }}
              variant="text"
            >
              Resend
            </Button>
          </span>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Recovery;
