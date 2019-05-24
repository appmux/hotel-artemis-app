import {gql} from 'apollo-boost';

export default gql`
  mutation selectProfile($name: String!, $avatar: Int!) {
    selectProfile(name: $name, avatar: $avatar) @client {
      name,
      avatar
    }
  }
`
