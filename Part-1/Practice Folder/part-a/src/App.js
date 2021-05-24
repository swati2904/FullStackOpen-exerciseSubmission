//Props 

const Hello = (props) => {
  return (
    <div>
      <p> Hello {props.name} </p>
      <p> Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const name = "john"
  const age = 21
  return (
    <div>
      <h1> Greetings</h1>
      <Hello name='swati' age={20 + 2} />
      <Hello name={name} age={age} />
      <Footer />
    </div>


  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/swati2904">Swati Saxena</a>
    </div>
  )
}

//Multiple components
// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//     </div>
//   )
// }

//Basics

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

export default App