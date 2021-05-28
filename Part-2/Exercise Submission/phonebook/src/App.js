import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const Person = ({ name }) => {
    return <p>{name}</p>;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let previousName = [...persons];
    if (previousName.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
    } else {
      previousName.push({ name: newName });
      setPersons(previousName);
      setNewName("");
    }
  };

  const handleAddName = (event) => {
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleAddName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return <Person key={person.name} name={person.name} />;
      })}
    </div>
  );
};

export default App;
