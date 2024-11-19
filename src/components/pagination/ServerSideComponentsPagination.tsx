
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function ServerSideComponentsPagination({
  currentPage,
  totalPages,
}: PaginationProps) {


  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        color="primary"
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
