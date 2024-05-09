import React, { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";
import '../styles/UserLogin.css'
import { type } from "@testing-library/user-event/dist/type";

const AppLogginData = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    name: '',
    password: '',
    ConfirmPassword: ''
  })

  const inputObject = [
    {
      label: "Email address",
      variant: "outlined",
      name: "email",
      type: 'email'
    },
    {
      label: "Name",
      variant: "outlined",
      name: "name",
      type: 'text'

    },
    {
      label: "password",
      variant: "outlined",
      name: "password",
      type: 'password'

    },
    {
      label: "Confirm Password",
      variant: "outlined",
      name: "Confirm Password",
      type: 'text',
    },
  ]
  const [state, setstate] = useState(false);
  return (
    <div>
      <div className="login-container-top">
        <span className="login-page-image">1</span>
        <h6 className="account"> Account</h6>
      </div>
      <div>
        {state ? (
          <Login setstate={setstate} inputObject={inputObject} setFormData={setFormData} formData={formData} />
        ) : (
          <Registration setstate={setstate} inputObject={inputObject} setFormData={setFormData} formData={formData} />
        )}
      </div>
    </div>
  );
};

export default AppLogginData;
