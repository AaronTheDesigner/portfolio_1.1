import { gql } from "apollo-boost";

//Queries
const getProjectsQuery = gql`
  {
    projects {
      id
      title
      subtitle
      description
      url
      github
    }
  }
`;

const getProjectQuery = gql`
  query GetProject($id: ID) {
    project(id: $id) {
      id
      title
      subtitle
      description
      url
      github
    }
  }
`;

const addProjectMutation = gql`
  mutation AddProject(
    $title: String!
    $subtitle: String!
    $description: String!
    $url: String!
    $github: String!
  ) {
    addProject(
      title: $title
      subtitle: $subtitle
      description: $description
      url: $url
      github: $github
    ) {
      title
      id
    }
  }
`;

export { getProjectQuery, getProjectsQuery, addProjectMutation };
