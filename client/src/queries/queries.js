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

const createProjectMutation = gql`
  mutation CreateProject(
    $title: String!
    $subtitle: String!
    $description: String!
    $url: String!
    $imageUrl: String
    $github: String!
  ) {
    createProject(
      title: $title
      subtitle: $subtitle
      description: $description
      url: $url
      imageUrl: $imageUrl
      github: $github
    ) {
      title
      id
    }
  }
`;

export { getProjectQuery, getProjectsQuery, createProjectMutation };
