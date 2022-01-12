import { styled } from "@mui/material/styles";
import { Box, Button, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { Container } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Login = () => {
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

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const provider = new GoogleAuthProvider(db);

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
        };
        setUsers(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(signedInUser);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error.message);
      });
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then((result) => {
        const signedInUser = {
          isSignIn: false,
          displayName: "",
          email: "",
        };
        setUsers(signedInUser);
      })
      .catch((error) => {
        console.log(error.message);
        // An error happened.
      });
  };

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
    const auth = getAuth();
    signInWithEmailAndPassword(auth, users.email, users.password)
      .then((res) => {
        console.log(res);
        const newUserInfo = { ...users };
        newUserInfo.error = "";
        newUserInfo.success = true;
        setUsers(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        console.log(newUserInfo);
      })
      .catch((error) => {
        const newUserInfo = { ...users };
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUsers(newUserInfo);
        console.log(error);
      });
    e.preventDefault();
  };
  return (
    <Container>
      <div className="login m-5">
        <h3 style={{ marginLeft: "50px", marginTop: "10px" }}>Login</h3>
        <form onSubmit={handleFormSubmit}>
          <div className=" m-5 text-center align-items-center justify-content-center">
            <div className="login-component ">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "45ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  onBlur={handleEmailChange}
                  id="standard-basic"
                  label="Username or Email"
                  variant="standard"
                />
                <br />
                <TextField
                  onBlur={handleEmailChange}
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                />
                <br />
                <div className="d-flex">
                  <div className="col-md-4 m-2 ">
                    <p>
                      <FontAwesomeIcon icon={faSquare} /> Remember Me
                    </p>
                  </div>
                  <div className="ms-auto mt-2">
                    <Link>Forgot Password</Link>
                  </div>
                </div>
              </Box>
              <ColorButton sx={{ m: 1, width: "50ch" }} variant="contained">
                <Link to="/login" className="link">
                  <span>L</span>
                  <span className="link text-lowercase">ogin</span>
                </Link>
              </ColorButton>
              <p>
                Don't have an account?{" "}
                <Link to="/create">Create an account</Link>
              </p>
              {users.isSignIn ? (
                <Button
                  onClick={handleSignOut}
                  sx={{ m: 1, width: "50ch" }}
                  variant="contained"
                >
                  google Sign out{" "}
                </Button>
              ) : (
                <Button
                  onClick={handleSignIn}
                  sx={{ m: 1, width: "50ch" }}
                  variant="contained"
                  color="secondary"
                  className=""
                >
                  google Sign in
                </Button>
              )}
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
