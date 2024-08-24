export type Tokens = {
  data: {
    access_token: string;
    refresh_token: string;
  };
};
export interface AuthResponse {
  token: string;
}

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

export interface Filters {
  status: ReservationStatus | '';
  dateRange: [string, string] | null;
  shift: Shift | '';
  area: Area | '';
}

export type SortField = keyof ReservationT | 'customer_firstName' | 'customer_lastName' | null;
export type SortDirection = 'asc' | 'desc' | null;

export interface ApiResponse<T> {
  data: T;
  message: string;
}
