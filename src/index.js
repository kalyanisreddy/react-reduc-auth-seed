import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import SignIn from "./features/auth/SignIn";

function App() {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <SignIn appName="MadeByKalyani" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
