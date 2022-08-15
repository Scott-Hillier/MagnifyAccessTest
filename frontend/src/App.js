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
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");

  const submitForm = (form) => {
    return axios.post(`/users/submit`, form);
  };

  const search = (data) => {
    return axios.get(`/users/search/${data.field}/${data.input}`);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  useEffect(() => {}, [resultsState]);

  return (
    <main className="App">
      <section className="submission">
        <form
          method="POST"
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            submitForm(formState);
            uploadFile(file);
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
              setFile(e.target.files[0]);
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
            required
          ></input>
          <button className="submit" type="submit">
            Search
          </button>
        </form>
      </section>
      <br />
      {resultsState.length > 0 && (
        <table className="results">
          <tr className="header">
            <th>Name</th>
            <th>ID</th>
            <th>Department</th>
            <th>Employment Status</th>
            <th>Email</th>
          </tr>
          {resultsState.map((result) => {
            return (
              <tr className="result">
                <td>{result.name}</td>
                <td>{result.id}</td>
                <td>{result.department}</td>
                <td>{result.employment_status}</td>
                <td>{result.email}</td>
              </tr>
            );
          })}
        </table>
      )}
    </main>
  );
}

export default App;
