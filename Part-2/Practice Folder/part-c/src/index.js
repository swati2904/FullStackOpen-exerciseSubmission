import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import axios from 'axios'

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.render(<App />, document.getElementById('root'))
})


// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import axios from "axios";

// // const promise = axios.get('http://localhost:3001/notes')
// // console.log(promise)

// // const promise2 = axios.get('http://localhost:3001/foobar')
// // console.log(promise2)

// // Storing the promise object in a variable is generally unnecessary
// // const promise = axios.get('http://localhost:3001/notes')
// // promise.then(response => {
// //   console.log(response)
// // })

// // the way of formatting to write the call like this is more readable way to format chained method call
// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     console.log(notes)
//   })

// ReactDOM.render(
//   <React.StrictMode>
//     <App />..
//   </React.StrictMode>,
//   document.getElementById("root")
// );
