import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [capital, setCapital] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = capital
      ? `https://restcountries.com/v3.1/capital/${capital}`
      : "https://restcountries.com/v3.1/all";

    const getCountries = () => {
      setIsLoading(true);

      try {
        fetch(url)
          .then((data) => data.json())
          .then((json) => {
            setCountries(json);
          });
      } catch (error) {
        console.log(error.mesage);
        setError(error.mesage);
      } finally {
        setIsLoading(false);
      }
    };

    getCountries();
  }, [capital]);

  const filterable_capitals = [
    "Tallinn",
    "Helsinki",
    "Stockholm",
    "Oslo",
    "Copenhagen",
    "Reykjavik",
    "Display All",
  ];

  const handleChange = (e) => {
    setCapital(e.target.value === "Display All" ? null : e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {filterable_capitals.map((capital) => (
          <option value={capital}>{capital}</option>
        ))}
      </select>

      {isLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : error ? (
        <div>
          <h1>There is an error, please try again later...</h1> <br />{" "}
          <p>{error}</p>
        </div>
      ) : (
        countries.map((country) => (
          <CountryCard
            key={country.name.common}
            country={country.name.common}
            capital={country.capital}
          ></CountryCard>
        ))
      )}
    </div>
  );
};

export default App;

export const CountryCard = ({ country, capital }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h2>Country: {country}</h2>
      <p>Capital: {capital}</p>
    </div>
  );
};
