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

const Countries = ({ showCountries, handleClick }) => {
  const content =
    showCountries.length >= 10 ? (
      "Too Many Matches, specify another filter"
    ) : showCountries.length > 1 ? (
      showCountries.map((country) => {
        return (
          <div>
            <p key={country.name}>
              {country.name}
              {/* {country.showFullData ? (
                <SingleCountry country={country} />
              ) : (
                <button onClick={handleClick}>show</button>
              )} */}
              <button id={country.name} onClick={handleClick}>
                show
              </button>
            </p>
          </div>
        );
      })
    ) : showCountries.length === 1 ? (
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

  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
    setShowCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      // const countries = res.data.map((item) => {
      //   return {
      //     ...item,
      //     showData: false,
      //   };
      // });
      // setCountries(countries);
      setCountries(res.data);
    });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    let selectedCountry = countries.filter(
      (country) => country.name === event.target.id
    );
    setShowCountries(
      <SingleCountry
        country={selectedCountry[0].name}
        capital={selectedCountry[0].capital}
        population={selectedCountry[0].population}
        language={selectedCountry[0].languages}
        flag={selectedCountry[0].flag}
      />
    );
    console.log(selectedCountry);
  };

  return (
    <>
      <Filter
        searchCountry={searchCountry}
        handleSearchCountry={handleSearchCountry}
      />
      <Countries showCountries={showCountries} handleClick={handleClick} />
    </>
  );
};

export default App;
