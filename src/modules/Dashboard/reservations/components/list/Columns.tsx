import { createColumnHelper } from '@tanstack/react-table';
import { ReservationT } from '../../types';

export type ColumnDataType = ReservationT;

const columnHelper = createColumnHelper<ColumnDataType>();

const columnsData = () => [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => <>{info.getValue()}</>,
    size: 8,
    enableSorting: true,
    enableResizing: false,
  }),

  columnHelper.accessor('customer.firstName', {
    header: 'Name and Surname',
    cell: ({ row }) => (
      <>{`${row?.original?.customer?.firstName} ${row?.original?.customer?.lastName}`}</>
    ),
    size: 110,

    enableSorting: true,
    enableResizing: false,
  }),

  columnHelper.accessor('businessDate', {
    header: 'Date',
    size: 50,

    cell: (info) => <>{info.getValue()}</>,
    enableResizing: false,
    enableSorting: false,
  }),

  columnHelper.accessor('status', {
    header: 'Status',
    size: 60,
    cell: (info) => <>{info.getValue()}</>,
    enableResizing: false,
    enableSorting: false,
  }),

  columnHelper.accessor('shift', {
    header: 'Shift',
    size: 45,
    cell: (info) => <>{info.getValue()}</>,
    enableResizing: false,
    enableSorting: false,
  }),

  columnHelper.accessor('start', {
    header: 'Start Time',
    cell: (info) => <>{new Date(info.getValue()).toLocaleTimeString()}</>,
    size: 45,
    enableResizing: false,
    enableSorting: false,
  }),

  columnHelper.accessor('end', {
    header: 'End Time',
    cell: (info) => <>{new Date(info.getValue()).toLocaleTimeString()}</>,
    size: 45,
    enableResizing: false,
    enableSorting: false,
  }),

  columnHelper.accessor('quantity', {
    header: 'Quantity',
    cell: (info) => <>{info.getValue()}</>,
    size: 35,
    enableResizing: false,
    enableSorting: false,
  }),

  columnHelper.accessor('area', {
    header: 'Area',
    cell: (info) => <>{info.getValue()}</>,
    size: 60,
    enableResizing: false,
    enableSorting: false,
  }),


  columnHelper.accessor('guestNotes', {
    header: 'Guest Notes',
    cell: (info) => (
      <div
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {info.getValue()}
      </div>
    ),
    size: 80,
    enableResizing: false,
    enableSorting: false,
  }),
];

export default columnsData;
