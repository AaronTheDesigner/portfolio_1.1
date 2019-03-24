import React from "react";

const BackEnd = () => {
  return (
    <div>
      <h5>Back-End</h5>
      <p>Tech stack will include Node.js, Express, MongoDB, and GraphQL.</p>
      <a
        href="https://github.com/AaronTheDesigner/portfolio_backend"
        className="btn btn-primary"
        role="button">
        Github
      </a>
      <br />
      <br />
      <ul className="list-group list-group-flush">
        <li className="list-group-item list-group-item-success">
          Express Server
        </li>
        <li className="list-group-item list-group-item-success">
          GraphQL Server
        </li>
        <li className="list-group-item list-group-item-success">
          GraphiQL Feature
        </li>
        <li className="list-group-item list-group-item-success">
          MLab Connection
        </li>
        <li className="list-group-item list-group-item-success">Models</li>
        <li className="list-group-item list-group-item-success">
          GraphQL Schema
        </li>
        <li className="list-group-item list-group-item-success">
          Create Mutations - Create -
        </li>
        <li className="list-group-item list-group-item-success">
          Queries - Read -
        </li>
        <li className="list-group-item list-group-item-warning">
          Update Mutations - Update -
        </li>
        <li className="list-group-item list-group-item-success">
          Delete Mutations - Delete -
        </li>
        <li className="list-group-item list-group-item-success">
          Cors Enabled
        </li>
        <li className="list-group-item list-group-item-success">Heroku Test</li>
      </ul>
    </div>
  );
};

export default BackEnd;
