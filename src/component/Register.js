import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "../App.css";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import {useFormik} from 'formik';


function Register() {
  const [password, setPassword] = useState("");
  const [validatePass, setValidatePass] = useState("");

  const [username, setUsername] = useState("");
  const [validateName, setValidateName] = useState("");

  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState("");

  const[file, setFile] = useState();

  const formik = useFormik({
    initialValues :{
      email:'souravpadmaraj6@gmail.com',
      username:'sourav',
      password:"Sourav@123",
      file:"null"
    },
    onSubmit : async (values) =>{
      values: await Object.assign(values, {profile:file})
      console.log(values);
    }
  })


  const nameValidation = () => {
    const nameRegex = /^[A-Za-z]+$/;
    if (username) {
      if (nameRegex.test(username)) {
        setValidateName("");
        return true;
      } else {
        setValidateName("Invalid Name");
      }
    } else {
      setValidateName("* Firstname Required");
    }
  };

  const emailIdValidation = () => {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+(\.\w{2,3})$/;
    if (email) {
      if (emailRegex.test(email)) {
        setValidateEmail("");
        return true;
      } else {
        setValidateEmail("Invalid Email");
      }
    } else {
      setValidateEmail("* EmailID Required");
    }
  };

  const passwordValidation = () => {
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

  //converting image into base64 format
  
  const covertToBase64 = (file) =>{
        return new Promise((resolve,reject)=>{
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);

          fileReader.onload = () =>{
            resolve(fileReader.result)
          } 

          fileReader.onerror = (error) =>{
             reject(error)
          }
        })
  }

  const onUpload = async (e) =>{
    const base64 = await covertToBase64(e.target.files[0]);
    setFile(base64);
    console.log(file);
  }

  const sumbitData = () => {
    nameValidation();
    emailIdValidation();
    passwordValidation();
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
            Register
          </Typography>
          <span>Happy to join you!</span>
        </Grid>

        <Grid item xs={12} sx={{ p: 2, m: 2 }}>
          <label htmlFor="profile">
            <Stack direction="column" spacing={2}>
              <Avatar
                sx={{ width: 96, height: 86 }}
                alt="Avatar"
                src={file||avatar}
              />
            </Stack>
          </label>
          <TextField
            fullWidth
            type="file"
            id="profile"
            name="profile"
            sx={{ mt: 1 , display:'none'}}
            onSubmit ={onUpload}
          />
        </Grid>

        <Grid item xs={12} sx={{ mt: 1 }}>
          <TextField
            fullWidth
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>
        {validateEmail && <div style={{ color: "red" }}>{validateEmail}</div>}

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
        {validateName && <div style={{ color: "red" }}>{validateName}</div>}

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
          <Button variant="contained" onClick={sumbitData}>
            Register
          </Button>
        </Grid>

        <Grid item xs={12}>
          <span>
            Already have registered?
            <Link to="/" sx={{ color: "black", textDecoration: "none" }}>
              <span> Login Now </span>
            </Link>
          </span>
        </Grid>
      </Box>
    </Grid>
  );
}

export default Register;
