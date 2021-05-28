import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const Person = ({ person }) => {
    const { name, number } = person;
    return (
      <p>
        {name} {number}
      </p>
    );
  };

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
  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredValue = () => {
    return searchValue
      ? persons.filter((filter) =>
          filter.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : persons;
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown up with:
        <input value={searchValue} onChange={handleSearchValue} />
      </div>
      <h2>add a new</h2>
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
      {filteredValue().map((person) => {
        return <Person key={person.name} person={person} />;
      })}
    </div>
  );
};

export default App;
