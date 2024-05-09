import React from "react";
import "../styles/UserLogin.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Login = (props) => {
  const { inputObject, setFormData,formData} = props
  const [email, setEmail] = React.useState('')
  const [isEnabled, setIsEnabled] = React.useState(true);
  const filteredField = inputObject.slice(0, 1)

  const approvedEmail = "muralidhara444@gmail.com"

  const handleEmailChnage = (e) => {
    const isValidEmail = e.target.value
    setEmail(isValidEmail)
    if (approvedEmail && approvedEmail.includes('.com')) {
      setIsEnabled(false)
      console.log('call registration')
    }
    console.log(email)

  }

  const handleLoginClick = () => {

  }

  console.log({ email })
  return (
    <div className="login-container">
      <div className="login-container-top ">
        <h1 className="login-header">SIGN UP OR LOGIN TO ENTER GAME</h1>

        {filteredField.map((val, index) => (
          <TextField className="user-input-field"
            id="outlined-basic"
            type="email"
            label={val.label}
            variant={val.variant}
            name={val.name}
            value={formData.email}
            onChange={(e) => handleEmailChnage(e)} />
        ))}
      </div>

      <Button className="login-button" disable={isEnabled} variant="contained" onClick={handleLoginClick}>Next</Button>
    </div>
  );
};

export default Login;
