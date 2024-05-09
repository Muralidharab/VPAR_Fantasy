import React from "react";
import "../styles/UserLogin.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [isEnabled, setIsEnabled] = React.useState(true);

  const approvedEmail = "muralidhara444@gmail.com"

  const handleEmailChnage = (e) => {
    const isValidEmail = e.target.name
    setEmail(isValidEmail)
    console.log(email)

  }

  const handleLoginClick = () => {
    if (approvedEmail && approvedEmail.includes('@')) {

      setIsEnabled(false)
    } else {
      console.log('call registration')
    }
  }

  console.log({ email })
  return (
    <div className="login-container">
      <div className="login-container-top ">
        <span className="login-page-image">1</span>
        <h6 className="account"> Account</h6>
        <h1 className="login-header">SIGN UP OR LOGIN TO ENTER GAME</h1>
        <TextField
          className="user-input-field"
          id="outlined-basic"
          type="email"
          label="Email address"
          variant="outlined"
          name="email"
          onChange={(e) => handleEmailChnage(e)}
        />
      </div>

      <Button className="login-button" disable={isEnabled} variant="contained" onClick={handleLoginClick}>Next</Button>
    </div>
  );
};

export default Login;
