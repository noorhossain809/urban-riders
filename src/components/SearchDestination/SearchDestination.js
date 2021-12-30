import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import {
  Button,
  Card,
  CardContent,
  Container,
  InputBase,
  Link,
} from "@mui/material";
import "./SearchDestination.css";
import map from "../../images/Map.png";
import { purple } from "@mui/material/colors";
import people from '../../images/peopleicon.png'
import fram2 from '../../images/Frame-2.png'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
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
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const SearchDestination = () => {

  const {name} = useParams()
  const [display, setDisplay] = useState({})


 
  
  const available = data.find(ride => ride.name === name)
  console.log(available)

  

  

  return (
    <div className="mt-5">
      <Container className="mt-5 main">
        <div className="d-flex mt-5">
          <div className="col-md-3 main-description">
            <div className="station-description">
              <p className="p-2 text-white ">Mirpur 1</p>
              <p className="m-2 text-white">Dhanmondi</p>
            </div>
            <Card className="mt-3">
              <CardContent>
                <div className="d-flex ">
                    <div className="col-md-3">
                        <img src={available?.image} alt="" className="w-75"/>
                    </div>
                    <div className="col-md-2">
                        <p className="my-3">{name}</p>
                    </div>
                    <div className="col-md-2">
                        <img src={people} alt="" className="w-50 my-3"/>4
                    </div>
                    <div className="col-md-5">
                        <p className="my-3 ms-3">BDT {available?.price}</p>
                    </div>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-3">
              <CardContent>
                <div className="d-flex ">
                    <div className="col-md-3">
                        <img src={available?.image} alt="" className="w-75"/>
                    </div>
                    <div className="col-md-2">
                        <p className="my-3">{name}</p>
                    </div>
                    <div className="col-md-2">
                        <img src={people} alt="" className="w-50 my-3"/>4
                    </div>
                    <div className="col-md-5">
                        <p className="my-3 ms-3">BDT {available?.price}</p>
                    </div>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-3">
              <CardContent>
                <div className="d-flex ">
                    <div className="col-md-3">
                        <img src={available?.image} alt="" className="w-75"/>
                    </div>
                    <div className="col-md-2">
                        <p className="my-3">{name}</p>
                    </div>
                    <div className="col-md-2">
                        <img src={people} alt="" className="w-50 my-3"/>4
                    </div>
                    <div className="col-md-5">
                    <p className="my-3 ms-3">BDT {available?.price}</p>
                    </div>
                </div>
              </CardContent>
            </Card>

            <br />
          </div>

          <div className="col-md-6">
            <img src={map} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchDestination;
