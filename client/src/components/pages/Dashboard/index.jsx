import React, { Component } from "react";
import AddProject from "./AddProject";
import ProjectList from "./ProjectList";

class Dashboard extends Component {
  state = {
    currentUserName: "",
    currentUserEmail: ""
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <h1>Dashboard</h1>
        <h1>Welcome {currentUserName}</h1>
        <p>Email: {currentUserEmail}</p>
        <br />
        <AddProject />
        <ProjectList />
      </div>
    );
  }
}

export default Dashboard;
