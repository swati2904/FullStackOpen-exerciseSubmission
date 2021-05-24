//props directly passed to the component are 
//now directly destructured into the variable name and age 
// ***********************************************************
const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div> 
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>
        So you were probably born in <b> {bornYear()} </b>
      </p>
    </div>
  )
}

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

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Swati" age={26 - 4} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App;
