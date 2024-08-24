import { FetchItemType } from "./types";

const example: FetchItemType = {
  statusOptions: [],

  statusOptionsList: [
    {
      label: "Status",
      value: "status",
      options: [
        { value: "ALL", label: "ALL", default: true },
        { value: "draft", label: "draft", default: false },
        { value: "paid", label: "paid", default: false },
        { value: "pending", label: "pending", default: false },
      ],
    },
  ],
  sortOptions: [
    {
      value: "createdAt-DESC",
      label: "created (newest first)",
      default: true,
    },

    {
      value: "createdAt-ASC",
      label: "created (oldest first)",
      default: false,
    },
  ],

  searchOptions: [],

  listBySelectOptions: [
    {
      name: "companyId",
      label: "company",
      value: "",
      valueKeys: ["id"],
      optionsKeys: ["data"],
      optionLabelKeys: ["name"],
      // fetchFunction: fetchCompanies,
      fetchOptions: {
        page: 1,
        take: 10,
      },
      searchFiled: "name",
    },

    {
      name: "customerId",
      label: "customer",
      value: "",
      valueKeys: ["id"],
      optionsKeys: ["data"],
      optionLabelKeys: ["fullName"],
      fetchOptions: {
        page: 1,
        take: 10,
      },
      searchFiled: "fullName",
    },
  ],

  useSearch: false,
  useFilter: true,
  enable: true,
};

export default example;
