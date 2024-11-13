import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void; 
}

export default function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page); 
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages} 
        page={currentPage}
        onChange={handlePageChange}
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
