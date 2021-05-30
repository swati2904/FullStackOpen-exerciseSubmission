import React, { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ searchCountry, handleSearchCountry }) => {
  return (
    <div>
      <form>
        Find Countries{" "}
        <input value={searchCountry} onChange={handleSearchCountry} />
      </form>
    </div>
  );
};

const SingleCountry = ({ country }) => {
  console.log(country);
  const { name, capital, population, languages, flag } = country;
  return (
    <div>
      <h3> {name}</h3>
      <div> capital {capital}</div>
      <div>population {population}</div>
      <h4>languages</h4>
      <ul>
        {languages.map((lang) => {
          return <li key={lang.name}> {lang.name}</li>;
        })}
      </ul>
      <div>
        <img src={flag} alt={`${name}'s flag`} width="100" height="100" />
      </div>
    </div>
  );
};

const Countries = ({ showCountries }) => {
  const content =
    showCountries.length >= 10 ? (
      "Too Many Matches, specify another filter"
    ) : showCountries.length > 1 ? (
      showCountries.map((country) => {
        return <p key={country.name}> {country.name} </p>;
      })
    ) : showCountries.length > 0 ? (
      <SingleCountry country={showCountries[0]} />
    ) : (
      "Enter a country name"
    );
  return <div> {content}</div>;
};
const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [showCountries, setShowCountries] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
    setShowCountries(
      countries.filter((countries) => {
        const regex = new RegExp(event.target.value, "gi");
        return regex.test(countries.name);
      })
    );
  };

  return (
    <>
      <Filter
        searchCountry={searchCountry}
        handleSearchCountry={handleSearchCountry}
      />
      <Countries showCountries={showCountries} />
    </>
  );
};

export default App;
