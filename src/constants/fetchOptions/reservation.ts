import { FetchItemType } from './types';

const reservation: FetchItemType = {
  statusOptions: [
    { value: 'ALL', label: 'All', default: true },
    { value: 'CONFIRMED', label: 'CONFIRMED', default: false },
    { value: 'SEATED', label: 'Seated', default: false },
    { value: 'CHECKED OUT', label: 'Checked out', default: false },
    { value: 'NOT CONFIRMED', label: 'Not confirmed', default: false },
  ],

  filters: [
    {
      type: 'select',
      label: 'Status',
      options: [
        { value: 'ALL', label: 'All', default: true },
        { value: 'CONFIRMED', label: 'CONFIRMED', default: false },
        { value: 'SEATED', label: 'Seated', default: false },
        { value: 'CHECKED OUT', label: 'Checked out', default: false },
        { value: 'NOT CONFIRMED', label: 'Not confirmed', default: false },
      ],
    },
    {
      type: 'date',
      label: 'Date',
    },
    {
      type: 'select',
      label: 'Shifts',
      options: [
        { value: 'BREAKFAST', label: 'BREAKFAST', default: false },
        { value: 'LUNCH', label: 'LUNCH', default: false },
        { value: 'DINNER', label: 'DINNER', default: false },
      ],
    },

    {
      type: 'select',
      label: 'Area',
      options: [
        { value: 'BAR', label: 'BAR', default: false },
        { value: 'MAIN ROOM', label: 'MAIN ROOM', default: false },
        { value: 'DINNER', label: 'DINNER', default: false },
      ],
    },
  ],

  sortOptions: [
    {
      value: 'id-ASC',
      label: 'id-A–Z',
      default: false,
    },
    {
      value: 'id-DESC',
      label: 'ID Z–A',
      default: true,
    },
    {
      value: 'guest_name-ASC',
      label: 'guest name A–Z',
      default: false
    },
    {
      value: 'guest_name-DESC',
      label: 'guest name Z–A',
      default: false
    },
  ],

  searchOptions: [
    // { value: "ID", label: "All", default: true },
  ],

  // search
  useSearch: true,
  enable: true,
  useFilter: true,
};

export default reservation;
