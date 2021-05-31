import React, { useState, useEffect } from "react";
import personService from "./services/persons";
import "./index.css";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}> {text}</button>;
};
const Person = ({ person, handleDelete }) => {
  const { name, number } = person;
  return (
    <p>
      {name} {number}
      <Button text="delete" handleClick={() => handleDelete(person)} />
    </p>
  );
};

const SuccessMessage = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="success">
      <div>Success:</div>
      {message}
    </div>
  );
};

const ErrorMessage = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="error">
      <div>Error:</div>
      {message}
    </div>
  );
};

const Persons = ({ persons, handleDelete }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.name} person={person} handleDelete={handleDelete} />
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
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let previousStack = [...persons];
    if (!newName || !number) {
      alert("name and number cannot be empty!!");
      return;
    }

    const oldPerson = persons.findIndex((person) => person.name === newName);
    if (oldPerson !== -1) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        console.log(oldPerson);
        personService
          .update(persons[oldPerson].id, {
            name: newName,
            number: number,
          })
          .then((person) => {
            previousStack[oldPerson] = {
              ...previousStack[oldPerson],
              ...person,
            };
            setPersons(previousStack);
            setNewName("");
            setNumber("");
            setSuccess(`updated ${newName} number`);
            setTimeout(() => {
              setSuccess("");
            }, 3000);
          });
      }
      return;
    }

    personService.create({ name: newName, number: number }).then((person) => {
      previousStack.push(person);
      setPersons(previousStack);
      setNewName("");
      setNumber("");
      setSuccess(`${newName} Added Successfully`);
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    });
  };

  const handleDelete = ({ id, name }) => {
    if (window.confirm(`Are you sure, you want to delete ${name}?`)) {
      personService
        .delete(id)
        .then(() => {
          const updatedPerson = persons.filter((person) => person.id !== id);
          setPersons(updatedPerson);
        })
        .catch((error) => {
          setError(`something went wrong`);
          setTimeout(() => {
            setError("");
          }, 3000);
        });
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
      <SuccessMessage message={success} />
      <ErrorMessage message={error} />
      <Filter searchValue={searchValue} handleSearchValue={handleSearchValue} />

      <PersonForm
        newName={newName}
        number={number}
        handleAddName={handleAddName}
        handleAddNumber={handleAddNumber}
        handleSubmit={handleSubmit}
      />

      <Persons persons={filteredValue()} handleDelete={handleDelete} />
    </>
  );
};

export default App;
