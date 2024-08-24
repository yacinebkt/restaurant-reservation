import React, { useEffect, useState } from 'react';
import FilterBar from './FilterSection';
import Table from '@/components/Table/Table';
import columnsData from './Columns';
import usePagination from '@/hooks/usePagination.hook';
import useTableData from '@/hooks/useTableData.hook';
import { useQuery } from '@tanstack/react-query';
import { SortField } from '@/api/types';
import { fetchReservations } from '../../services';
import { Area, ReservationStatus, Shift } from '../../types';
import { useDebounce } from '@/hooks/useDebounce';

const ListData: React.FC = () => {
  const tableData = useTableData();

  const { pageIndex, pageSize, pagination, setPagination } = usePagination({
    resetPagination: [''],
  });

  const [filters, setFilters] = useState<{
    status: ReservationStatus | '';
    dateRange: [string, string] | null;
    shift: Shift | '';
    area: Area;
  }>({
    status: '',
    dateRange: null,
    shift: '',
    area: '',
  });
  const [search, setSearch] = useState('');
  const searchDebounce = useDebounce(search)
  const { data, isLoading } = useQuery({
    queryFn: () =>
      fetchReservations({
        filters,
        pageIndex,
        pageSize,
        search: searchDebounce,
        sortDirection:
          tableData?.sorting[0]?.desc === true
            ? 'desc'
            : tableData?.sorting[0]?.desc === false
            ? 'asc'
            : null,
        sortField: tableData?.sorting[0]?.id as SortField,
      }),
    queryKey: [
      'users',
      {
        filters,
        pageIndex,
        pageSize,
        search: searchDebounce,
        sortDirection:
          tableData?.sorting[0]?.desc === true
            ? 'desc'
            : tableData?.sorting[0]?.desc === false
            ? 'asc'
            : null,
        sortField: tableData?.sorting[0]?.id,
      },
    ],
  });

  useEffect(() => {
    tableData.setRowData(data?.data || []);
  }, [data]);

  return (
    <>
      <FilterBar filters={filters} setFilters={setFilters} search={search} setSearch={setSearch} />
      <Table
        totalCount={data?.meta.itemCount}
        columns={columnsData()}
        pagination={pagination}
        setPagination={setPagination}
        loading={isLoading}
        tableData={tableData}
        getRowDataId={(originalRow) => `${originalRow.fullName}`}
      />
    </>
  );
};

export default ListData;
