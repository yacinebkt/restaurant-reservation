import React from 'react';
import { TextField, MenuItem, Grid, Box, InputAdornment } from '@mui/material';
import { DatePicker } from 'antd';
import { Area, ReservationStatus, Shift } from '../../../types';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const { RangePicker } = DatePicker;

interface FilterBarProps {
  filters: {
    status: ReservationStatus | '';
    dateRange: [string, string] | null;
    shift: Shift | '';
    area: Area | '';
  };
  setFilters: React.Dispatch<React.SetStateAction<FilterBarProps['filters']>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters, search, setSearch }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleDateRangeChange = (_dates: any, dateStrings: [string, string]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      dateRange: dateStrings[0] ? dateStrings : null,
    }));
  };

  return (
    <Box sx={{ paddingY: 2 }}>
      <Grid container spacing={2}>
        <SearchField search={search} setSearch={setSearch} />
        <FilterSelect
          label="Shift"
          name="shift"
          value={filters.shift}
          onChange={handleFilterChange}
          options={[
            { value: '', label: 'All Shifts' },
            { value: 'BREAKFAST', label: 'Breakfast' },
            { value: 'LUNCH', label: 'Lunch' },
            { value: 'DINNER', label: 'Dinner' },
          ]}
        />
        <FilterSelect
          label="Area"
          name="area"
          value={filters.area}
          onChange={handleFilterChange}
          options={[
            { value: '', label: 'All Areas' },
            { value: 'BAR', label: 'Bar' },
            { value: 'MAIN ROOM', label: 'Main Room' },
          ]}
        />
        <DateRangePicker onChange={handleDateRangeChange} />
      </Grid>
    </Box>
  );
};

interface FilterSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: { value: string; label: string }[];
}

const FilterSelect: React.FC<FilterSelectProps> = ({ label, name, value, onChange, options }) => {
  const { t } = useTranslation();
  return (
    <Grid item xs={12} sm={6} md={2}>
      <TextField
        select
        fullWidth
        name={name}
        label={t(label)}
        value={value}
        onChange={onChange}
        variant="outlined"
        size="small"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
};

interface SearchFieldProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchField: React.FC<SearchFieldProps> = ({ search, setSearch }) => {
  const { t } = useTranslation();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <TextField
        fullWidth
        name="search"
        label={t('Search')}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: '#aaa' }} />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

interface DateRangePickerProps {
  onChange: (dates: any, dateStrings: [string, string]) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onChange }) => {
  const { t } = useTranslation();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <StyledRangePicker
        format="YYYY-MM-DD"
        onChange={onChange}
        placeholder={[t('Start Date'), t('End Date')]}
      />
    </Grid>
  );
};

const StyledRangePicker = styled(RangePicker)`
  &.ant-picker {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.23);
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-size: 14px;

    &:hover,
    &:focus {
      border-width: 2px;
      border-color: #6316db;
    }

    &.ant-picker-focused {
      box-shadow: none;
      border-width: 2px;
      border-color: #6316db;
    }

    .ant-picker-input > input {
      font-size: 14px;
    }

    .ant-picker-range-separator {
      padding: 0 4px;
    }
  }
`;

export default FilterBar;
