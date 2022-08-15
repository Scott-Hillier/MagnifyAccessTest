import React from "react";
import { FaSearch } from "react-icons/fa";

const Display = ({ setDisplayState }) => {
  return (
    <section className="display">
      <h3
        className={"display-option"}
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
  );
};

export default Display;
