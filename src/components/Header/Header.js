import React, { useContext } from "react";
import { Container, Nav, Navbar, } from "react-bootstrap";
import './Header.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import MainHeader from "../MainHeader/MainHeader";
import { Link } from "react-router-dom";
import logo from '../../images/Urban Riders.png'
import { UserContext } from "../../App";

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  return (
    <Container >
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <img src={logo} alt="" style={{width:'150px'}}/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navbars">
            <Link className="links" to='/home'>Home</Link>
            <Link className="links" to='/destination'>Destination</Link>
            <Link className="links" to='/blog'>Blog</Link>
            <Link className="links" to='/contact'>Contact</Link>
            </Nav>
            <Stack spacing={2} direction="row">
      {loggedInUser.email?<ColorButton variant="contained"><Link to='' onClick={() => setLoggedInUser({})} className="link">Sign Out</Link></ColorButton>:
      <ColorButton variant="contained"><Link to='/login' className="link">Login</Link></ColorButton>}
    </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </Container>
  );
};

export default Header;
