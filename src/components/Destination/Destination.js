import React, { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Button, Container, InputBase, } from '@mui/material';
import './Destination.css'
import map from '../../images/Map.png'
import { purple } from '@mui/material/colors';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import data from '../../data/data.json'

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.8),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.8),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const ColorButton = styled(Button)(({ theme }) => ({
    
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

const Destination = () => {
  const {name} = useParams()
  const [pick, setPick] = useState({})
  const [input, setInput] = useState({
    name:''
  })
  const history = useHistory()

  const showRide = (name, image) => {
    const availableRide = data.find(ride => ride.name  === name)
    setPick(availableRide)
    history.push(`/destination/research/${name}`)
    
  }
  
  const handleBlur = (e) => {
    // console.log(e.target.value, e.target.name)
    let isFieldValid = true;
    if(e.target.name === 'name'){
      isFieldValid = e.target.value;
    }
    if(isFieldValid){
      const newInfo = {...input}
      newInfo[e.target.name] = e.target.value;
      setInput(newInfo)
    }
    
  }
    return (
        <div className='mt-5'>
          {/* <h2>{input.name}</h2> */}
            <Container className='mt-5 main'>
            <div className="d-flex mt-5">
                <div className="col-md-3 station-details" >
                <p className='pick'>Pick From</p>
                
                <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                onBlur={handleBlur}
                name='name'
                  placeholder="Enter pick-up location"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <p className='pick'>Pick To</p>
              
              <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                onBlur={handleBlur}
                name='name'
                  placeholder="Where to?"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <ColorButton onClick={() => showRide(name)}  sx={{ m: 2.5, width: "30ch" }} variant="contained"><Link to='/destination/research/' className="search"><span className='search'>S</span><span className="search text-lowercase">earch</span></Link></ColorButton>
              <br />
                </div>
                <div className="col-md-6">
                    <img src={map} alt=""/>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Destination;