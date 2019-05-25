import {gql} from 'apollo-boost';

export default gql`
  query getReservations {
    reservations {
      id,
      name,
      hotelName,
      arrivalDate,
      departureDate
    }
  }
`;
