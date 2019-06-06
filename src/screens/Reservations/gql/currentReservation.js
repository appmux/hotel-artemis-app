import {gql} from 'apollo-boost';

export const get = gql`
  query getCurrentReservation {
    currentReservation @client {
      __typename,
      id,
      name,
      hotelName,
      arrivalDate,
      departureDate
    }
  }
`;

export const update = gql`
  mutation updateCurrentReservation($arrivalDate: String, $departureDate: String) {
    updateCurrentReservation(arrivalDate: $arrivalDate, departureDate: $departureDate) @client {
      __typename,
      id,
      name,
      hotelName,
      arrivalDate,
      departureDate
    }
  }
`;

export const updateResolver = (_, variables, { cache }) => {
  console.log('updateResolver variables', variables)
  const prevState = cache.readQuery({ query: get });
  console.log('updateResolver prevState', prevState)

  const data = {
    ...prevState,
    currentReservation: {
      ...prevState.currentReservation,
      ...variables
    }
  };
  console.log('updateResolver data', data)

  cache.writeData({ query: get, data });

  return null;
};

export default {
  get,
  update,
  updateResolver
};
