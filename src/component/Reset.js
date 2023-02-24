import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../App.css";


function Reset() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [validatePass, setValidatePass] = useState("");

  const verifyPassword = () => {
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    if (password && newPassword) {
      if (passRegex.test(password) && passRegex.test(newPassword)) {
        setValidatePass("");
        return true;
      } else {
        setValidatePass("Please give same password");
      }
    } else {
      setValidatePass("*Password Required");
    }
  };

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
        <Grid item xs={12} sx={{ p: 7 }}>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "Nunito Sans', sans-serif",
            }}
          >
            Reset
          </Typography>
          <span>Enter new password</span>
        </Grid>

        <Grid item xs={12} sx={{ mt: 6 }}>
          <TextField
            fullWidth
            type="text"
            placeholder="New Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            type="text"
            placeholder="Repeat Password"
            name="newpassword"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </Grid>
        {validatePass && <div style={{ color: "red" }}>{validatePass}</div>}

        <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
          <Button variant="contained" onClick={verifyPassword}>
            Sign In
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Reset;
