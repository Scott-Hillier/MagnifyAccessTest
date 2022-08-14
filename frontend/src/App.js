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

  const submitForm = (form) => {
    console.log(form);
    return axios.post(`/users/submit`, form);
  };

  // const handleChange = (event) => {
  //   setFormState((prev) => {
  //     return { ...prev, name: event.target.value };
  //   });
  // };

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
    </div>
  );
}

export default App;
