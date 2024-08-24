import { filterAndSortReservations } from '@/api/services';
import { Filters, SortDirection, SortField } from '@/api/types';

export const fetchReservations = async (variables: {
  filters: Filters;
  search: string;
  sortField: SortField;
  sortDirection: SortDirection;
  pageIndex: number;
  pageSize: number;
}) => {
  try {
    const { filters, search, sortField, sortDirection, pageIndex, pageSize } = variables;

    let response = await filterAndSortReservations(
      filters,
      search,
      sortField,
      sortDirection,
      pageIndex,
      pageSize
    );

    return {
      data: response?.reservations,
      meta: {
        itemCount: response.totalCount,
      },
    };
  } catch (error) {
    throw error;
  }
};
