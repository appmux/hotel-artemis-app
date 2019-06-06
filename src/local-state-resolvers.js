import {setCurrentResolver as setCurrentProfile} from './screens/Auth/gql/profiles';
import {updateResolver as updateCurrentReservation} from './screens/Reservations/gql/currentReservation';

export default {
  Mutation: {
    setCurrentProfile,
    updateCurrentReservation
  }
};
