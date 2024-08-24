type SelectOption = {
  value: string;
  label: string;
  default: boolean;
};

type Filter =
  | {
      type: 'select';
      label: string;
      options: SelectOption[];
    }
  | {
      type: 'date';
      label: string;
    };

export interface FetchItemType {
  statusOptions: Array<{ value: string; label: string; default: boolean }>;
  sortOptions: Array<{ value: string; label: string; default: boolean }>;
  searchOptions: Array<{ value: string; label: string; default: boolean }>;
  useSearch: boolean;
  useFilter: boolean;
  enable: boolean;
  statusOptionsList?: Array<{
    value: string;
    label: string;
    options: {
      value: string | boolean | null;
      label: string;
      default: boolean;
    }[];
  }>;
  listBySelectOptions?: any;
  filters?: Filter[];
}
