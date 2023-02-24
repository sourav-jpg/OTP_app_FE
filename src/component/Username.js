import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "../App.css";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";

function Username() {
  const [username, setUsername] = useState("");
  const [validateName, setValidateName] = useState(false);

  const checkName = () => {
    console.log("user -", username);
    if (username === "") {
      setUsername(...username);
      setValidateName(true);
      console.log(validateName);
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
          <span>Explore More by connecting with us</span>
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
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Grid>
        {validateName && (
          <span style={{ color: "red" }}>Username cannot be empty</span>
        )}

        <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
          <Button variant="contained" onClick={checkName}>
            Let's Go
          </Button>
        </Grid>

        <Grid item xs={12}>
          <span>
            Not a Member
            <Link
              to="/register"
              sx={{ color: "black", textDecoration: "none" }}
            >
              <span> Register Now </span>
            </Link>
          </span>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Username;
