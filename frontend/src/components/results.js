import React, { useEffect, useState } from "react";
import axios from "axios";

const Results = ({ resultsState }) => {
  return (
    <section>
      <h3 className="sub-header">Results</h3>
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
              <td>{result.personal_id}</td>
              <td>{result.department}</td>
              <td>{result.employment_status}</td>
              <td>{result.email}</td>
            </tr>
          );
        })}
      </table>
    </section>
  );
};

export default Results;
