import React, { useEffect, useState } from "react";
import "./App.scss";

import SubmissionForm from "./components/submissionForm";
import Navbar from "./components/navbar";
import SearchForm from "./components/searchForm";
import Results from "./components/results";
import Display from "./components/display";

function App() {
  const [resultsState, setResultsState] = useState([]);
  const [displayState, setDisplayState] = useState("submission");
  useEffect(() => {}, [resultsState]);
  return (
    <main className="App">
      <Navbar />
      <Display setDisplayState={setDisplayState} />
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
