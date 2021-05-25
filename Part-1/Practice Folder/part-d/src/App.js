import { React, useState } from 'react'

// event handling
// *****************************************
// (event handler is a function defined with the arrow function syntax () =>
// When the component gets rendered, no function gets called and only the reference
//  to the arrow function is set to the event handler. Calling the function happens only
//  once the button is clicked.)

const App = () => {
  const [value, setValue] = useState(10)

  return (
    <div>
      {value}
      <button onClick={()=>setValue(0)}>button</button>
    </div>
  )
}

//Handling Arrays
//*****************************************
      //  condtitional rendering
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       {/* <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button> */}
//        <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       {/* <p>{allClicks.join(' ')}</p> */}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }



// For complex state
// ***************************************************

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0
//   })
//   // more simplifying
//   const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
//   const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })

//   // const handleLeftClick = () => {
//   //   const newClicks = {
//   //      left: clicks.left + 1,
//   //      right: clicks.right
//   //   }
//   //   setClicks(newClicks)
//   // }

//   // const handleRightClick = () => {
//   //   const newClicks = {
//   //      left: clicks.left,
//   //      right: clicks.right + 1
//   //   }
//   //   setClicks(newClicks)
//   // }
//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>Left</button>
//       <button onClick={handleRightClick}>Right</button>
//       {clicks.right}

//     </div>
//   )
// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>
//         left
//       </button>
//       <button onClick={() => setRight(right + 1)}>
//         right
//       </button>
//       {right}

//     </div>
//   )
// }
export default App;