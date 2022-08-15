import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./App.scss";

import SubmissionForm from "./components/submissionForm";
import Navbar from "./components/navbar";
import SearchForm from "./components/searchForm";
import Results from "./components/results";

function App() {
  const [resultsState, setResultsState] = useState([]);
  const [displayState, setDisplayState] = useState("submission");
  useEffect(() => {}, [resultsState]);
  return (
    <main className="App">
      <Navbar />
      <section className="display">
        <h3
          className="display-option"
          onClick={() => {
            setDisplayState("submission");
          }}
        >
          New Submission
        </h3>
        <FaSearch
          className="display-option"
          onClick={() => {
            setDisplayState("search");
          }}
        />
      </section>
      {displayState === "submission" && (
        <SubmissionForm setDisplayState={setDisplayState} />
      )}
      {displayState === "search" && (
        <SearchForm
          resultsState={resultsState}
          setResultsState={setResultsState}
          setDisplayState={setDisplayState}
        />
      )}
      <br />
      {resultsState.length > 0 && <Results resultsState={resultsState} />}
    </main>
  );
}

export default App;
