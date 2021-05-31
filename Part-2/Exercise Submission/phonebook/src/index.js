import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
ReactDOM.render(<App />, document.getElementById("root"));

// axios.get("http://localhost:3001/persons").then((response) => {
//   const persons = response.data;
//   ReactDOM.render(<App />, document.getElementById("root"));
// });
