import React, { useState } from 'react'

// Refactoring the components
// *****************************************************
const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

//Passing state to child components
// *****************************************************

// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }
const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}
// const Button = (props) => {
//   return (
//     <button onClick={props.handleClick}>
//       {props.text}
//     </button>
//   )
// }

//separate the event handlers into separate functions
// *****************************************************

// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)

//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={increaseByOne}>
//         set
//       </button>
//       <button onClick={setToZero}>
//         reset
//       </button>
//     </div>
//   )
// }


//Event handling
// *****************************************************

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const handleClick = () => {
//     console.log('clicked')
//   }

//   return (
//     <div> 
//       <div> {counter}</div>
//       <button onClick={() => setCounter(counter+1)}>
//         Plus
//       </button>
//       <button onClick={() => setCounter(0)}>
//         reset
//       </button>
//     </div>
//   )
// }




// Stateful component
// *****************************************************

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   setTimeout(
//     ()=>{
//       return setCounter (counter + 1),
//       1000
//     }
//   )
//   return (
//     <div> {counter}</div>
//   )
// }




//props directly passed to the component are 
//now directly destructured into the variable name and age 
// ***********************************************************

// const Hello = ({name, age}) => {
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div> 
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>
//         So you were probably born in <b> {bornYear()} </b>
//       </p>
//     </div>
//   )
// }

// destructuring 
// ***********************************************************

// const Hello = (props) => {
//   // const name = props.name
//   // const age =  props.age
//   const { name, age } = props;

// const bornYear = () => {
//   return new Date().getFullYear() - age
// }
//   return (
//     <div>
//       <p> Hello {name}, you are {age} years old.</p>
//       <p> So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }


// Component helper function 
// ***********************************************************

// const Hello = (props) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }
//   return (
//     <div>
//     <p>
//       Hello {props.name}, you are {props.age} years old
//     </p>
//     <p>So you were probably born in {bornYear()}</p>
//   </div>
//   )
// }

// const App = (props) => {
//   const name = 'Peter'
//   const age = 10
//   const {counter} = props
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Swati" age={26 - 4} />
//       <Hello name={name} age={age} />
//       <div>{counter}</div>
//     </div>
//   )
// }

export default App;
