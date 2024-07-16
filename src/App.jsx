import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [capital, setCapital] = useState(null)

  useEffect(() => {
    const url = capital ? `https://restcountries.com/v3.1/capital/${capital}` : "https://restcountries.com/v3.1/all"

    const getCountries = () => {
      fetch(url)
        .then((data) => data.json())
        .then((json) => {
          console.log(json);
          setCountries(json);
        });
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
  ];

  const handleChange = (e) => {
    setCapital(e.target.value)
  }

  return (
    <div>
      <select onChange={handleChange}>
        {filterable_capitals.map((capital) => (
          <option value={capital}>{capital}</option>
        ))}
      </select>

      {countries.map((country) => (
        <CountryCard
          key={country.name.common}
          country={country.name.common}
          capital={country.capital}
        ></CountryCard>
      ))}
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
