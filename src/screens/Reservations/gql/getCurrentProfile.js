import {gql} from 'apollo-boost';

export default gql`
  query getCurrentProfile {
    currentProfile @client {
      name,
      avatar
    }
  }
`;
