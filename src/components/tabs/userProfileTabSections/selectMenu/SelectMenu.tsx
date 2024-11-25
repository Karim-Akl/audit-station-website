'use client';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectMenu({ label, value, setValue, options }: any) {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <div className='flex flex-col'>
      <label
        htmlFor=''
        className='ps-2'
      >
        {label}
        <span className='text-red-500 ps-1'>*</span>
      </label>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {options.map((option: any) => {
            return (
              <>
                <MenuItem value={option}>{option}</MenuItem>
              </>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
