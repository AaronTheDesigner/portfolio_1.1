import React, { Component } from "react";

import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";

class Progress extends Component {
  state = {
    frontEnd: [],
    backEnd: []
  };

  render() {
    return (
      <div className="container text-center">
        <h4>Progress</h4>
        <hr className="my-4" />
        <div className="row">
          <div className="col">
            {" "}
            <BackEnd />{" "}
          </div>
          <div className="col">
            {" "}
            <FrontEnd />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
