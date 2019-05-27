import {gql} from 'apollo-boost';

export default (_, { name, avatar }, { cache }) => {
  const query = gql`
            query getCurrentProfile {
              currentProfile @client {
                __typename,
                name,
                avatar
              }
            }
          `;

  const prevState = cache.readQuery({ query });

  const data = {
    ...prevState,
    currentProfile: {
      ...prevState.currentProfile,
      name,
      avatar
    }
  };

  cache.writeData({ query, data });

  return null;
};
