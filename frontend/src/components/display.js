import React from "react";
import { FaSearch } from "react-icons/fa";

const Display = ({ setDisplayState, setResultsState }) => {
  return (
    <section className="display">
      <h3
        className={"display-option"}
        onClick={() => {
          setResultsState([]);
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
  );
};

export default Display;
