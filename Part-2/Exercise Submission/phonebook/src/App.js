import React, { useState, useEffect } from "react";
import axios from "axios";

const Person = ({ person }) => {
  const { name, number } = person;
  return (
    <p>
      {name} {number}
    </p>
  );
};

const Persons = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

const Filter = ({ searchValue, handleSearchValue }) => {
  return (
    <>
      <h2>Phonebook</h2>
      <div>
        Filter shown up with:
        <input value={searchValue} onChange={handleSearchValue} />
      </div>
    </>
  );
};

const PersonForm = ({
  newName,
  number,
  handleAddName,
  handleAddNumber,
  handleSubmit,
}) => {
  return (
    <>
      <h3>add a new</h3>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input value={newName} onChange={handleAddName} />
        </div>
        <div>
          number:
          <input value={number} onChange={handleAddNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    // { name: "Arto Hellas", number: "040-123456" },
    // { name: "Ada Lovelace", number: "39-44-5323523" },
    // { name: "Dan Abramov", number: "12-43-234345" },
    // { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

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
    <>
      <Filter searchValue={searchValue} handleSearchValue={handleSearchValue} />

      <PersonForm
        newName={newName}
        number={number}
        handleAddName={handleAddName}
        handleAddNumber={handleAddNumber}
        handleSubmit={handleSubmit}
      />

      <Persons persons={filteredValue()} />
    </>
  );
};

export default App;
