import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface FilteringSelectMenuProps {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  options: { value: string; label: string }[];
  ariaLabel?: string;
}

const FilteringSelectMenu: React.FC<FilteringSelectMenuProps> = ({
  value,
  onChange,
  options,
  ariaLabel,
}) => (
  <FormControl
    sx={{
      maxWidth: 'fit-content',
      m: 0.1,
      '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        border: 'none',
        boxShadow: 'none',
        '& fieldset': {
          border: 'none',
        },
        '&:hover fieldset': {
          border: 'none',
        },
        '&.Mui-focused fieldset': {
          border: 'none',
        },
      },
    }}
  >
    <Select
      value={value}
      onChange={onChange}
      displayEmpty
      inputProps={{ 'aria-label': ariaLabel }}
      sx={{
        border: 'none',
        boxShadow: 'none',
        '&:focus': {
          outline: 'none',
        },
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default FilteringSelectMenu;
