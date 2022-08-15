import React, { useEffect, useState } from "react";
import axios from "axios";

const SubmissionForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    id: 0,
    department: "",
    employment: "",
    email: "",
  });
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [displaySearchState, setDisplaySearchState] = useState(false);

  const submitForm = (form) => {
    return axios.post(`/users/submit`, form);
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

  return (
    <section className="submission">
      <form
        method="POST"
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          submitForm(formState);
          uploadFile(file);
          setFormState({
            name: "",
            id: 0,
            department: "",
            employment: "",
            email: "",
          });
        }}
      >
        <input
          className="input"
          placeholder="Name"
          onChange={(e) => {
            setFormState((prev) => {
              return { ...prev, name: e.target.value.toLocaleLowerCase() };
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
              return {
                ...prev,
                department: e.target.value.toLocaleLowerCase(),
              };
            });
          }}
          required
        ></input>
        <input
          className="input"
          placeholder="Emplyment Status"
          onChange={(e) => {
            setFormState((prev) => {
              return {
                ...prev,
                employment: e.target.value.toLocaleLowerCase(),
              };
            });
          }}
          required
        ></input>
        <input
          className="input"
          placeholder="Email"
          onChange={(e) => {
            setFormState((prev) => {
              return { ...prev, email: e.target.value.toLocaleLowerCase() };
            });
          }}
          required
        ></input>
        <input
          className="input"
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
  );
};

export default SubmissionForm;
