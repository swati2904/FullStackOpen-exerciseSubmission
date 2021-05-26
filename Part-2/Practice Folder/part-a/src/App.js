import React from 'react'
import Note from './components/Note'

//destructring
// *******************

// const Note = ({note}) => {
//   return (
//     <li>{note.content}</li>
//   )
// }

const App = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => 
        <Note key={note.id} note={note} />
        )} 
      </ul>
    </div>
  )
}

// const App = (props) => {
//   const { notes } = props

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map((note) =>
//           <li key={note.id}>
//             {note.content}
//           </li>
//         )}
//       </ul>
//     </div>
//   )
// }

export default App