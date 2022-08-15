import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

import SubmissionForm from "./components/submissionForm";
import Navbar from "./components/navbar";
import SearchForm from "./components/searchForm";
import Results from "./components/results";

function App() {
  const [resultsState, setResultsState] = useState([]);
  useEffect(() => {}, [resultsState]);
  return (
    <main className="App">
      <Navbar />
      <SubmissionForm />
      <SearchForm
        resultsState={resultsState}
        setResultsState={setResultsState}
      />
      <br />
      {resultsState.length > 0 && <Results resultsState={resultsState} />}
    </main>
  );
}

export default App;
