import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import {
  getProjectQuery,
  getProjectsQuery,
  addProjectMutation
} from "../../../queries/queries";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subtitle: "",
      description: "",
      url: "",
      github: ""
    };
  }
  displayProjects() {
    var data = this.props.getProjectsQuery;
    if (data.loading) {
      return <option disabled>Loading Projects</option>;
    } else {
      return data.projects.map(project => {
        return <option key={project.id}>{project.title}</option>;
      });
    }
  }

  submitForm(event) {
    event.preventDefault();
    // use the addBookMutation
    this.props.addProjectMutation({
      variables: {
        title: this.state.title,
        subtitle: this.state.subtitle,
        description: this.state.description,
        url: this.state.url,
        github: this.state.github
      },
      refetchQueries: [{ query: getProjectsQuery }]
    });
  }

  render() {
    return (
      <form>
        <div>
          <label>Title:</label>
          <input type="text" />
        </div>
        {this.displayProjects()}
      </form>
    );
  }
}

export default compose(graphql(getProjectsQuery, { name: "getProjectsQuery" }))(
  AddProject
);
