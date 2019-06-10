/**
 * Local state seed data.
 */

/* eslint-disable global-require */
export default {
  currentReservation: {
    __typename: 'CurrentReservation',
    id: null,
    name: null,
    hotelName: null,
    arrivalDate: null,
    departureDate: null
  },

  currentProfile: {
    __typename: 'CurrentProfile',
    name: null,
    avatar: null
  },

  profiles: [
    {
      __typename: 'UserProfile',
      name: 'Buke',
      avatar: require('./theme/avatars/buke.jpeg')
    },
    {
      __typename: 'UserProfile',
      name: 'Nice',
      avatar: require('./theme/avatars/nice.jpeg')
    },
    {
      __typename: 'UserProfile',
      name: 'Rocco',
      avatar: require('./theme/avatars/rocco.jpeg')
    }
  ]
};
