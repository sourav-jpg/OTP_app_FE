import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "../App.css";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";

function Password() {
  const [password, setPassword] = useState("");
  const [validatePass, setValidatePass] = useState("");

  const checkPass = () => {
    const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    if (password) {
      if (passRegex.test(password)) {
        setValidatePass("");
        return true;
      } else {
        setValidatePass("Invalid Password");
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
        <Grid item xs={12} sx={{ p: 2 }}>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "Nunito Sans', sans-serif",
            }}
          >
            Hello Again!
          </Typography>
          <span>Enter your account's password </span>
        </Grid>

        <Grid item xs={12} sx={{ p: 2, m: 2 }}>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ width: 96, height: 86 }} alt="Avatar" src={avatar} />
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ mt: 1 }}>
          <TextField
            fullWidth
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        {validatePass && <div style={{ color: "red" }}>{validatePass}</div>}

        <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
          <Button variant="contained" onClick={checkPass}>
            Submit
          </Button>
        </Grid>

        <Grid item xs={12}>
          <span>
            Forgot Password
            <Link
              to="/recovery"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <span> Recover Now </span>
            </Link>
          </span>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Password;
