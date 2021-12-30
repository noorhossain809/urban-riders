import { styled } from '@mui/material/styles';
import { Box, Button, TextField } from '@mui/material';
import { purple } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { Container } from 'react-bootstrap';


// const BootstrapButton = styled(Button)({
//     boxShadow: 'none',
//     textTransform: 'none',
//     fontSize: 16,
//     padding: '6px 12px',
//     border: '1px solid',
//     lineHeight: 1.5,
//     backgroundColor: '#0063cc',
//     borderColor: '#0063cc',
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//       backgroundColor: '#0069d9',
//       borderColor: '#0062cc',
//       boxShadow: 'none',
//     },
//     '&:active': {
//       boxShadow: 'none',
//       backgroundColor: '#0062cc',
//       borderColor: '#005cbf',
//     },
//     '&:focus': {
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//     },
//   });
  
  const ColorButton = styled(Button)(({ theme }) => ({
    
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  
const Login = () => {
    return (
        <div className='login m-5'>
          
            <h3 style={{marginLeft:'50px',marginTop:'10px'}}>Login</h3>
            <div className=" m-5 text-center align-items-center justify-content-center">
            <div className="login-component ">
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label="Username or Email" variant="standard" />
      <br />
      <TextField id="standard-basic" label="Password" variant="standard" />
      <br />
      <div className="d-flex">
          <div className="col-md-4 m-2 ">
          <p><FontAwesomeIcon icon={faSquare} /> Remember Me</p>
          </div>
          <div className="ms-auto mt-2">
          <Link>Forgot Password</Link>
          </div>
          
      </div>
      </Box>
    <ColorButton sx={{ m: 1, width: "50ch" }} variant="contained"><Link to='/login' className="link"><span>L</span><span className="link text-lowercase">ogin</span></Link></ColorButton>
      <p>Don't have an account? <Link to="/create">Create an account</Link></p>
            </div>
            </div>
            
        </div>
    );
};

export default Login;