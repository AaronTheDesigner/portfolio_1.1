import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getProjectsQuery } from "../../../queries/queries";

//components
import ProjectDetails from "./ProjectDetails";

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displayProjects() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading Projects ... </div>;
    } else {
      return data.projects.map(project => {
        return (
          <li
            key={project.id}
            onClick={e => this.setState({ selected: project.id })}>
            {project.title}
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <ul>{this.displayProjects()}</ul>
        <ProjectDetails projectId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getProjectsQuery)(ProjectList);
