import { FetchItemType } from "./types";

const Support: FetchItemType = {
  statusOptions: [],

  statusOptionsList: [
    {
      label: "Subjects",
      value: "subjects",
      options: [
        { value: "ALL", label: "ALL", default: false },
        { value: "OTHER", label: "OTHER", default: true },
      ],
    },
    {
      label: "Category",
      value: "category",
      options: [
        { value: "ALL", label: "ALL", default: false },
        { value: "VISITOR", label: "VISITOR", default: false },
      ],
    },
  ], 

  sortOptions: [
    {
      value: "id-ASC",
      label: "Id A–Z",
      default: false,
    },
    {
      value: "id-DESC",
      label: "Id Z–A",
      default: false,
    },
    {
      value: "createdAt-ASC",
      label: "created (newest first)",
      default: true,
    },
    {
      value: "createdAt-DESC",
      label: "created (oldest first)",
      default: false,
    },
    {
      value: "rating-ASC",
      label: "rating (newest first)",
      default: true,
    },
    {
      value: "rating-DESC",
      label: "rating (oldest first)",
      default: false,
    },
  ],

  searchOptions: [
    { value: "fullName", label: "full name", default: true },
    { value: "email", label: "email", default: false },
    { value: "phoneNumber", label: "phoneNumber", default: false },
  ],
  useSearch: false,
  useFilter: true,
  enable: true,
};

export default Support;
