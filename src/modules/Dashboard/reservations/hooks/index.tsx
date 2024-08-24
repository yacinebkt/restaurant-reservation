import { useState } from 'react';
import { ReservationT } from '../types';

const useReservations = () => {
  const [reservationsLogic, setReservationsLogic] = useState<ReservationT[]>([]);

  return { reservationsLogic };
};

export default useReservations;
