import {gql} from 'apollo-boost';

export default gql`
  query getProfiles {
    profiles @client {
      name,
      avatar
    }
  }
`;
