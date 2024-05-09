import React from "react";
import CustomButton from "../common/CustomButton";
import "../styles/UserLogin.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Login = () => {
  // const [fieldChanges, setfieldChanges] = React.useState()
  const handleChange = () => {
    console.log("i am change here");
  };
  return (
    <div className="login-container">
      <div>
        <h1 className="login-header">SIGN UP OR LOGIN TO ENTER GAME</h1>
        <TextField
          className="user-input-field"
          id="outlined-basic"
          type="email"
          label="Email address"
          variant="outlined"
          onChange={handleChange}
        />
      </div>

      <Button className="login-button" variant="contained">Next</Button>
    </div>
  );
};

export default Login;
