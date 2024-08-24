
export type ReservationStatus = 'CONFIRMED' | 'SEATED' | 'CHECKED OUT' | 'NOT CONFIRMED';
export type Shift = 'BREAKFAST' | 'LUNCH' | 'DINNER';
export type Area = string;

export interface Customer {
  firstName: string;
  lastName: string;
}

export interface ReservationT {
  id: number;
  businessDate: string;
  status: ReservationStatus;
  shift: Shift;
  start: string;
  end: string;
  quantity: number;
  customer: Customer;
  area: Area;
  guestNotes: string;
}