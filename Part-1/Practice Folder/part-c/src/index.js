import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// let counter = 1
ReactDOM.render(
  <App/>,
document.getElementById('root')
);

// after first time page rendered and counter value goes to the one 
// it will not updated for the second time (hen re-rendered the page).
// counter +=1

// const refresh = () => {
// ReactDOM.render(
//     <App counter={counter}/>,
//   document.getElementById('root')
// );
// }
// refresh()
// counter += 1
// refresh()
// counter += 1
// refresh()
