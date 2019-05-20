import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";
import Nav from './Nav';
import Banner from "./Banner";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import ProjectDisplay from "./ProjectDisplay";

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login("/");
    };

    logout = async () => {
      this.props.auth.logout("/");
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div id="admin" >
          <p>
            You have entered the staff portal, <Link to="/dash">Admin</Link>
          </p>
          <button className="btn btn-light btn-sm text-center" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
          <div id="admin">

            <button className="btn btn-dark btn-sm text-center" onClick={this.login}>
              Admin
          </button>
            <br />
          </div>
        );

      return (
        <div>
          <Nav />
          <Banner />
          <About />
          <ProjectDisplay />
          <Testimonials />
          <Contact />
          {mainContent}
        </div>
      );
    }
  }
);
