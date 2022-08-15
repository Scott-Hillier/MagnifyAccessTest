import React from "react";

const Results = ({ resultsState }) => {
  return (
    <section>
      <h3 className="results-header">Results</h3>
      <table className="results">
        <thead>
          <tr className="header">
            <th>Name</th>
            <th>ID</th>
            <th>Department</th>
            <th>Employment Status</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {resultsState.map((result, i) => {
            return (
              <tr className="result" key={i}>
                <td>{result.name}</td>
                <td>{result.personal_id}</td>
                <td>{result.department}</td>
                <td>{result.employment_status}</td>
                <td>{result.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Results;
