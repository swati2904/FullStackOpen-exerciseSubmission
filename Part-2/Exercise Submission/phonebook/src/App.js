import React, { useState } from "react";

const App = () => {
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");

  const Person = ({ person }) => {
    const { name, number } = person;
    return (
      <p>
        {name} {number}
      </p>
    );
  };

  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "91-8767431209" },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let previousStack = [...persons];
    if (!newName || !number) {
      alert("name and number cannot be empty!!");
    }
    if (previousStack.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    } else {
      previousStack.push({ name: newName, number: number });
      setPersons(previousStack);
      setNewName("");
      setNumber("");
    }
  };

  const handleAddName = (event) => {
    setNewName(event.target.value);
  };

  const handleAddNumber = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleAddName} />
        </div>
        <div>
          number: <input value={number} onChange={handleAddNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return <Person key={person.name} person={person} />;
      })}
    </div>
  );
};

export default App;
