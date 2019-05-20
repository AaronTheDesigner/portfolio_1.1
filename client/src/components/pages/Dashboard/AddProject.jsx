import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import {
  getProjectsQuery,
  createProjectMutation
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
    this.props.createProjectMutation({
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
      <form onSubmit={this.submitForm.bind(this)}>
        <div>
          <label>Title:</label>
          <br />
          <input
            type="text"
            onChange={event => this.setState({ title: event.target.value })}
          />
        </div>
        <div>
          <label>Subtitle:</label>
          <br />
          <input
            type="text"
            onChange={event => this.setState({ subtitle: event.target.value })}
          />
        </div>
        <div>
          <label>Description:</label>
          <br />
          <input
            type="text"
            onChange={event =>
              this.setState({ description: event.target.value })
            }
          />
        </div>
        <div>
          <label>URL:</label>
          <br />
          <input
            type="text"
            onChange={event => this.setState({ url: event.target.value })}
          />
        </div>
        <div>
          <label>GitHub:</label>
          <br />
          <input
            type="text"
            onChange={event => this.setState({ github: event.target.value })}
          />
        </div>
        <br />
        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getProjectsQuery, { name: "getProjectsQuery" }),
  graphql(createProjectMutation, { name: "createProjectMutation" })
)(AddProject);
