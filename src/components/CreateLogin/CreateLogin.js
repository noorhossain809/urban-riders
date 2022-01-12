import { styled } from "@mui/material/styles";
import { Box, Button, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import firebaseConfig from "../Login/firebase.config";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const CreateLogin = () => {
  const [newUser, setNewUser] = useState(false);

  const [users, setUsers] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
    error: "",
    success: false,
  });

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const handleEmailChange = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasValid = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasValid;
    }
    if (isFieldValid) {
      const newUserInfo = { ...users };
      newUserInfo[e.target.name] = e.target.value;
      setUsers(newUserInfo);
    }
  };

  const handleFormSubmit = (e) => {
    if (newUser && users.email && users.password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, users.email, users.password)
        .then((res) => {
          // Signed in
          const newUserInfo = { ...users };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUsers(newUserInfo);
          console.log(newUserInfo);
        })
        .catch((error) => {
          const newUserInfo = { ...users };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUsers(newUserInfo);
        });
    }

    if (!newUser && users.email && users.password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, users.email, users.password)
        .then((res) => {
          console.log(res);
          const newUserInfo = { ...users };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUsers(newUserInfo);

          console.log(newUserInfo);
        })
        .catch((error) => {
          const newUserInfo = { ...users };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUsers(newUserInfo);
          console.log(error);
        });
    }
    e.preventDefault();
  };
  return (
    <Container>
      <div className="login m-5 text-center align-items-center">
        <h3>Create an account</h3>
        <form onSubmit={handleFormSubmit}></form>
        <div className="login-component ">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Name" variant="standard" />
            <br />
            <TextField
              onClick={handleEmailChange}
              id="standard-basic"
              label="Username or Email"
              variant="standard"
            />
            <br />
            <TextField
              onClick={handleEmailChange}
              id="standard-basic"
              label="Password"
              variant="standard"
            />
            <br />
            <TextField
              onClick={handleEmailChange}
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
            />
          </Box>
          <ColorButton 
          sx={{ m: 1, width: "50ch" }} 
          variant="contained" 
          className="link"
          type="submit"
          value="submit"
          >
            
              <span>C</span>
              <span className="link text-lowercase">reate an account</span>
            
          </ColorButton>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CreateLogin;
