import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getProjectsQuery } from "../../../queries/queries";
import bm from '../../../img/bm.jpg';
import fwcdc from '../../../img/fwcdc.png'

//components
import ProjectDetails from "../Dashboard/ProjectDetails";

class ProjectDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displayProjects() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading Projects...</div>;
    } else {
      return data.projects.map(project => {
        return (
          <button type="button" className="btn" id="pro-btn"
            key={project.id}
            onClick={e => this.setState({ selected: project.id })}>
            {" "}
            {project.title}{" "}
          </button>
        );
      });
    }
  }
  render() {
    return (
      <div id="portfolio">
        <div className="container-fluid padding">
          <h3 className="heading">Portfolio</h3>

          <div className="row no-padding">

            <div className="col-md-6">
              <h4>Books For The March</h4>
              <img src={bm} alt="" className="portfolio" />
            </div>
            <div className="col-md-6">
              <h4>First Ward Child Development Center</h4>
              <img src={fwcdc} alt="" className="portfolio" />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="mx-auto">
              {this.displayProjects()}
            </div>
          </div>
          <br />
          <div id="showcase">
            <div className="container-fluid">
              <ProjectDetails projectId={this.state.selected} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(getProjectsQuery)(ProjectDisplay);


