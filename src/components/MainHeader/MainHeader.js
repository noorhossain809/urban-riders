import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import frame from '../../images/Frame.png'
import frame1 from '../../images/Frame-1.png'
import frame2 from '../../images/Frame-2.png'
import group from '../../images/Group.png'

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const MainHeader = () => {
  return (
      <div className="d-flex  mt-5 m-5 p-5 text-center ">
          
    <Card className="w-25 m-3 mt-5">
      <CardContent className="mt-3 p-5">
        
        <img src={frame} alt="" className="w-50"/>
        <h5 className="mt-2" variant="body2">
          BIKE
        </h5>
      </CardContent>
      
    </Card>
    <Card className="w-25 m-3 mt-5">
      <CardContent className="mt-3 p-5">
        
        <img src={frame1} alt="" className="w-50"/>
        <h5 className="mt-4" variant="body2">
          BUS
        </h5>
      </CardContent>
      
    </Card>
    <Card className="w-25 m-3 mt-5">
      <CardContent className="mt-3 p-5">
        
        <img src={frame2} alt="" className="w-50"/>
        <h5 className="mt-4" variant="body2">
          CAR
        </h5>
      </CardContent>
      
    </Card>
    <Card className="w-25 m-3 mt-5">
      <CardContent className="mt-3 p-5">
        
        <img src={group} alt="" className="w-50"/>
        <h5 className="mt-4" variant="body2">
          TRAIN
        </h5>
      </CardContent>
      
    </Card>
    
    </div>
  );
};

export default MainHeader;
