import "./App.css";
import Header from "./Header";
import Products_list from "./Products_list";
import Btn from "./Btn";
// import { useState } from "react";

function App() {
  // let [name, setName] = useState();
  // let [age, setAge] = useState();
  let Countries = [
    { id: 1, name: "India", capital: "New Delhi" },
    { id: 2, name: "South Africa", capital: "Cape Town" },
    { id: 3, name: "New zealand", capital: "Wellingtone" },
    { id: 4, name: "USA", capital: "Washington DC" },
  ];
  return (
    <>
      <Header />
      <div className="top">
        {Countries.map((country) => {
          return (
            <div className="data" key={country.id}>
              <h3>{country.name}</h3>
              <p>{country.capital}</p>
            </div>
          );
        })}
      </div>

      {/* <h2>Name</h2>
      <h1>{age}</h1>
      <h2>{name}</h2>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Enter Age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />

      <button
        type="button"
        onClick={() => {
          setAge(age, name);
        }}
      >
        Submit
      </button> */}
      <Products_list />
      <Btn />
    </>
  );
}

export default App;
