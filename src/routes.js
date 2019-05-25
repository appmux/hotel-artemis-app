import AuthScreen from './screens/Auth';
import ReservationsScreen from './screens/Reservations';
import AddReservationScreen from './screens/Reservations/ReservationForm';

const routes = {
  Auth: {
    screen: AuthScreen
  },
  Reservations: {
    screen: ReservationsScreen
  },
  AddReservation: {
    screen: AddReservationScreen
  }
};

export default routes;
