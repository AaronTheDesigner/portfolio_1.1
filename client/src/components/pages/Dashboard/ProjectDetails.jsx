import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getProjectQuery } from "../../../queries/queries";

class ProjectDetails extends Component {
  displayProjectDetails() {
    const { project } = this.props.data;
    if (project) {
      return (
        <div className="project" >
          <h2 id="pro_title" > {project.title} </h2>
          <h3 id="pro_sub" > {project.subtitle} </h3>
          <p id="pro_description" > {project.description} </p>
          <br />
          <div id="link">
            <a href={project.url}>Website</a>
            <a href={project.github}>GitHub</a>
          </div>
        </div>
      );
    } else {
      return <div>No Project Selected...</div>;
    }
  }
  render() {
    return (

      <div id="project-details">

        {this.displayProjectDetails()}

      </div>
    )
  }
}

export default graphql(getProjectQuery, {
  options: props => {
    return {
      variables: {
        id: props.projectId
      }
    };
  }
})(ProjectDetails);
