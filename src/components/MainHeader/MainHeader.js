import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import frame from "../../images/Frame.png";
import frame1 from "../../images/Frame-1.png";
import frame2 from "../../images/Frame-2.png";
import group from "../../images/Group.png";
import { Link, useHistory } from "react-router-dom";
import data from "../../data/data.json"
import { Container } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const MainHeader = (props) => {
  // console.log(props)
  const {name, image, id} = props.rider;
  const history = useHistory()

  const handleDestination = (name) => {
          history.push(`/destination/${name}`)
  }
  
  return (
    <div className="col-md-3 mt-5  text-center ">
      <Container>
      <Card className="m-3 mt-5">
        <CardContent className="mt-3 p-5">
          <img src={image} alt="" className="w-50" />
          <Link style={{textDecoration:'none'}} onClick={() => handleDestination(name)}> <h5 className="mt-2" variant="body2">
            {name}
          </h5></Link>
        </CardContent>
      </Card>
      
      
      {/* <Card className="w-25 m-3 mt-5">
        <CardContent className="mt-3 p-5">
          <img src={frame1} alt="" className="w-50" />
          <Link style={{textDecoration:'none'}} to="/destination"><h5 className="mt-4" variant="body2">
            {name}
          </h5></Link>
        </CardContent>
      </Card>
      
     
     <Card className="w-25 m-3 mt-5">
        <CardContent className="mt-3 p-5">
          <img src={image} alt="" className="w-50" />
          <Link style={{textDecoration:'none'}} to="/destination"><h5 className="mt-4" variant="body2">
            {name}
          </h5></Link>
        </CardContent>
      </Card>
     
      
      <Card className="w-25 m-3 mt-5">
        <CardContent className="mt-3 p-5">
          <img src={image} alt="" className="w-50" />
          <Link style={{textDecoration:'none'}} to="/destination"><h5 className="mt-4" variant="body2">
            {name}
          </h5></Link>
        </CardContent>
      </Card> */}
      </Container>
    </div>
  );
};

export default MainHeader;
