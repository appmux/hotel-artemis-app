import {gql} from 'apollo-boost';

export const get = gql`
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

export const search = gql`
  query search($name: String!) {
    reservations(where: {name: $name}) {
      id,
      name,
      hotelName,
      arrivalDate,
      departureDate
    }
  }
`;

export const create = gql`
  mutation createReservation(
    $name: String!,
    $hotelName: String!,
    $arrivalDate: String!,
    $departureDate: String!
  ) {
    createReservation(data: {
      name: $name,
      hotelName: $hotelName,
      arrivalDate: $arrivalDate,
      departureDate: $departureDate
    }) {
      id,
      name,
      hotelName,
      arrivalDate,
      departureDate
    }
  }
`;

export default {
  create,
  get,
  search
};
