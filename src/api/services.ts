import { mockReservations } from './data';
import { Filters, ReservationT, SortDirection, SortField } from './types';

export const filterAndSortReservations = (
  filters: Filters,
  search: string,
  sortField: SortField,
  sortDirection: SortDirection,
  pageIndex: number = 0,
  pageSize: number = 10
): Promise<{ reservations: ReservationT[]; totalCount: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = applyFilters(mockReservations, filters, search);
      const sorted = applySorting(filtered, sortField, sortDirection);
      const totalCount = sorted.length;
      const paginated = paginate(sorted, pageIndex, pageSize);
      resolve({ reservations: paginated, totalCount });
    }, 500);
  });
};

const applyFilters = (
  reservations: ReservationT[],
  filters: Filters,
  search: string
): ReservationT[] => {
  return reservations.filter((reservation) => {
    const matchesStatus = !filters.status || reservation.status === filters.status;
    const matchesDateRange =
      !filters.dateRange || isWithinDateRange(reservation.businessDate, filters.dateRange);
    const matchesShift = !filters.shift || reservation.shift === filters.shift;
    const matchesArea = !filters.area || reservation.area === filters.area;
    const matchesSearch = !search || matchesSearchTerm(reservation, search);

    return matchesStatus && matchesDateRange && matchesShift && matchesArea && matchesSearch;
  });
};

const isWithinDateRange = (date: string, range: [string, string]): boolean => {
  const [start, end] = range.map((d) => new Date(d));
  const businessDate = new Date(date);
  return businessDate >= start && businessDate <= end;
};

const matchesSearchTerm = (reservation: ReservationT, search: string): boolean => {
  const fullName =
    `${reservation.customer.firstName} ${reservation.customer.lastName}`.toLowerCase();
  return fullName.includes(search.trim().toLowerCase());
};

const applySorting = (
  reservations: ReservationT[],
  sortField: SortField,
  sortDirection: SortDirection
): ReservationT[] => {
  if (!sortField || !sortDirection) return reservations;

  return [...reservations].sort((a, b) => {
    const valueA = getFieldValue(a, sortField);
    const valueB = getFieldValue(b, sortField);
    const comparison = compareValues(valueA, valueB);
    return sortDirection === 'asc' ? comparison : -comparison;
  });
};

const getFieldValue = (obj: ReservationT, field: SortField) => {
  if (field === 'customer_firstName') return obj.customer.firstName.toLowerCase();
  if (field === 'customer_lastName') return obj.customer.lastName.toLowerCase();
  return field && obj[field];
};

const compareValues = (a: any, b: any): number => {
  if (typeof a === 'string' && typeof b === 'string') return a.localeCompare(b);
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  return 0;
};

const paginate = (
  reservations: ReservationT[],
  pageIndex: number,
  pageSize: number
): ReservationT[] => {
  const start = pageIndex * pageSize;
  return reservations.slice(start, start + pageSize);
};
