import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchForm = ({ resultsState, setResultsState }) => {
  const [searchState, setSearchState] = useState({
    field: "name",
    input: "",
  });

  const search = (data) => {
    return axios.get(`/users/search/${data.field}/${data.input}`);
  };

  useEffect(() => {}, [resultsState]);

  return (
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
          className="select"
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
          className="input"
          id="search-input"
          placeholder={searchState.field}
          onChange={(e) => {
            setSearchState((prev) => {
              return { ...prev, input: e.target.value.toLocaleLowerCase() };
            });
          }}
          required
        ></input>
        <button className="submit" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
