import React, { useState } from "react";
import Note from "./components/Note";

//Forms

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit">Save</button>
        </form>
      </ul>
    </div>
  );
};

//destructring
// *******************

// const Note = ({note}) => {
//   return (
//     <li>{note.content}</li>
//   )
// }

// const App = ({notes}) => {
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map((note) =>
//         <Note key={note.id} note={note} />
//         )}
//       </ul>
//     </div>
//   )
// }

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

export default App;
