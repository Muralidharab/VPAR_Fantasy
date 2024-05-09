import { Button } from "@mui/material";
import React from "react";

function CustomButton(props) {
  const { type,name, handleButtonClick,style } = props;

  return (
    <div>
     
      <Button variant="contained">Contained</Button>
    </div>
  );
}

export default CustomButton;
