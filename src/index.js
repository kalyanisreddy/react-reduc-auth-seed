import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import SignIn from "./features/auth/SignIn";
import SignUp from "./features/auth/SignUp";

function App() {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <SignUp appName="" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
