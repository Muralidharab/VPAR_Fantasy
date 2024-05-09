import React, { useState } from "react";
import  Login  from "./Login";
import Registration from "./Registration";

const AppLogginData = () => {
  const [state, setstate] = useState(true);
  return (
    <div>
      {state ? (
        <Login setstate={setstate} />
      ) : (
        <Registration setstate={setstate} />
      )}
    </div>
  );
};

export default AppLogginData;
