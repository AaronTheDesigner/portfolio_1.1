import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getProjectQuery } from "../../../queries/queries";

class ProjectDetails extends Component {
  displayProjectDetails() {
    const { project } = this.props.data;
    if (project) {
      return (
        <div>
          <h2> {project.title} </h2>
          <h3> {project.subtitle} </h3>
          <p> {project.description} </p>
          <br />
          <a href={project.url}>Website</a>
          <a href={project.github}>GitHub</a>
        </div>
      );
    } else {
      return <div>No Project Selected...</div>;
    }
  }
  render() {
    return <div>{this.displayProjectDetails()}</div>;
  }
}

export default graphql(getProjectQuery, {
  options: props => {
    return {
      variables: {
        id: props.id
      }
    };
  }
})(ProjectDetails);
