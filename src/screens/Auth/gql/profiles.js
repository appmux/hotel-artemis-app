import {gql} from 'apollo-boost';

export const get = gql`
  query getProfiles {
    profiles @client {
      __typename,
      name,
      avatar
    }
  }
`;

export const getCurrent = gql`
  query getCurrentProfile {
    currentProfile @client {
      __typename,
      name,
      avatar
    }
  }
`;

export const setCurrent = gql`
  mutation setCurrentProfile($name: String!, $avatar: Int!) {
    setCurrentProfile(name: $name, avatar: $avatar) @client {
      name,
      avatar
    }
  }
`;

export const setCurrentResolver = (_, { name, avatar }, { cache }) => {
  const prevState = cache.readQuery({ query: getCurrent });

  const data = {
    ...prevState,
    currentProfile: {
      ...prevState.currentProfile,
      name,
      avatar
    }
  };

  cache.writeData({ query: getCurrent, data });

  return null;
};

export default {
  get,
  getCurrent,
  setCurrent,
  setCurrentResolver
};
