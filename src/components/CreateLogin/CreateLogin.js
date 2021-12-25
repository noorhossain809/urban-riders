import { styled } from '@mui/material/styles';
import { Box, Button, TextField } from '@mui/material';
import { purple } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';



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
  
const CreateLogin = () => {
    return (
        <div className='login m-5 text-center align-items-center'>
            <h3>Create an account</h3>
            <div className="login-component ">
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="standard-basic" label="Name" variant="standard" />
      <br />
      <TextField id="standard-basic" label="Username or Email" variant="standard" />
      <br />
      <TextField id="standard-basic" label="Password" variant="standard" />
      <br />
      <TextField id="standard-basic" label="Confirm Password" variant="standard" />
      </Box>
    <ColorButton sx={{ m: 1, width: "50ch" }} variant="contained"><Link to='/login' className="link"><span>C</span><span className="link text-lowercase">reate an account</span></Link></ColorButton>
      <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default CreateLogin;