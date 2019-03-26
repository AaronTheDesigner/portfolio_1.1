import React from "react";

const FrontEnd = () => {
  return (
    <div className="text-center">
      <h5>Front-End</h5>
      <p>Tech stack will include React, Bootstrap, Apollo, and GraphQL.</p>
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-success">
            Complete
          </button>
        </div>
        <div className="col">
          <button type="button" className="btn btn-warning">
            Priority
          </button>
        </div>
        <div className="col">
          <button type="button" className="btn btn-dark">
            Secondary
          </button>
        </div>
        <div className="col">
          <button type="button" className="btn btn-info">
            Continuous
          </button>
        </div>
      </div>
      <br />
      <ul className="list-group list-group-flush">
        <li className="list-group-item list-group-item-success">
          Create-React-App Client
        </li>
        <li className="list-group-item list-group-item-success">
          React-Router
        </li>
        <li className="list-group-item list-group-item-success">
          Okta Authentication
        </li>
        <li className="list-group-item list-group-item-warning">
          Apollo Client
        </li>
        <li className="list-group-item list-group-item-warning">Queries</li>
        <li className="list-group-item list-group-item-warning">Mutations</li>
        <li className="list-group-item list-group-item-dark">Styling</li>
        <li className="list-group-item list-group-item-info">
          Heroku Deployment
        </li>
      </ul>
    </div>
  );
};

export default FrontEnd;
