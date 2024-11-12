import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationComponent() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={8}
        color='primary'
        sx={{
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#22B9DD',
            color: '#fff',
          },
        }}
      />
    </Stack>
  );
}
