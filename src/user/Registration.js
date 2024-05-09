import React from 'react'
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import '../styles/UserLogin.css'

const Registration = (props) => {
  const { formData } = props
  const handleChnage = () => {

  }
  const { inputObject } = props
  return (
    <div>
      <h1>The email address you entered is not connected to an account. Create an account now to play!</h1>

      {inputObject.map((val, index) => (
        <div key={index}>
          {console.log({ val })}
          <TextField className="user-input-field"
            id="outlined-basic"
            type={val.type}
            label={val.label}
            variant={val.variant}
            name={val.name}
            value={formData.email}
            onChange={(e) => handleChnage(e)} />
        </div>
      ))
      }



      <span>I have read and I accept Hunch’s Terms and Conditions and Privacy Policy</span>

      <Button className="login-button" /* disable={isEnabled} */ variant="contained" /* onClick={handleLoginClick} */>Next</Button>
    </div>
  )
}

export default Registration