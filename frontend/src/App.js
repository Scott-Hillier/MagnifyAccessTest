import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formState, setFormState] = useState({
    name: "",
    id: 0,
    department: "",
    employment: "",
    email: "",
  });

  const [searchState, setSearchState] = useState({
    field: "name",
    input: "",
  });

  const [resultsState, setResultsState] = useState([]);

  const submitForm = (form) => {
    return axios.post(`/users/submit`, form);
  };

  const search = (data) => {
    return axios.get(`/users/search/${data.field}/${data.input}`);
  };

  useEffect(() => {}, [resultsState]);

  const displayResults = (results) => {
    console.log(results);
    results.map((result) => {
      return (
        <div className="result">
          <h3>Name: {result.name}</h3>
          <h3>ID: {result.ID}</h3>
          <h3>Department: {result.department}</h3>
          <h3>Employment Status: {result.employment_status}</h3>
          <h3>Email: {result.email}</h3>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <section className="submission">
        <form
          method="POST"
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            submitForm(formState);
          }}
        >
          <input
            className="input"
            placeholder="Name"
            onChange={(e) => {
              setFormState((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
            required
          ></input>
          <input
            className="input"
            placeholder="ID"
            onChange={(e) => {
              setFormState((prev) => {
                return { ...prev, id: e.target.value };
              });
            }}
            required
          ></input>
          <input
            className="input"
            placeholder="Department"
            onChange={(e) => {
              setFormState((prev) => {
                return { ...prev, department: e.target.value };
              });
            }}
            required
          ></input>
          <input
            className="input"
            placeholder="Emplyment Status"
            onChange={(e) => {
              setFormState((prev) => {
                return { ...prev, employment: e.target.value };
              });
            }}
            required
          ></input>
          <input
            className="input"
            placeholder="Email"
            onChange={(e) => {
              setFormState((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
            required
          ></input>
          <input
            type="file"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="lookup">
        <form
          method="GET"
          className="lookup-form"
          onSubmit={(event) => {
            event.preventDefault();
            search(searchState).then((res) => {
              setResultsState(res.data);
            });
          }}
        >
          <select
            onChange={(e) => {
              setSearchState((prev) => {
                return { ...prev, field: e.target.value };
              });
            }}
          >
            <option value="name">Name</option>
            <option value="id">ID</option>
            <option value="department">Department</option>
            <option value="employment_status">Employment Status</option>
            <option value="email">Email</option>
          </select>
          <input
            placeholder="Search"
            onChange={(e) => {
              setSearchState((prev) => {
                return { ...prev, input: e.target.value };
              });
            }}
          ></input>
          <button className="submit" type="submit">
            Search
          </button>
        </form>
      </section>
      <section className="results">
        {resultsState.length > 0 &&
          resultsState.map((result, i) => {
            return (
              <div className="result">
                <h3>Name: {result.name}</h3>
                <h3>ID: {result.id}</h3>
                <h3>Department: {result.department}</h3>
                <h3>Employment Status: {result.employment_status}</h3>
                <h3>Email: {result.email}</h3>
              </div>
            );
          })}
      </section>
    </div>
  );
}

export default App;
