import React, { useState } from "react";
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

  const submitForm = (form) => {
    return axios.post(`/users/submit`, form);
  };

  const search = (data) => {
    console.log(data);
    return axios.get(`/users/search/${data.field}/${data.input}`);
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
            search(searchState);
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
    </div>
  );
}

export default App;
