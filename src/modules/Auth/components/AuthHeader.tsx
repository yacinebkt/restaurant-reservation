import React from 'react';
import { Box } from '@mui/material';

const AuthHeader: React.FC = () => {
  return (
    <Box className="flex justify-center text-3xl font-bold italic gap-2">
      <span className="">Restaurant</span>
      <span className="text-primary underline underline-offset-4 font-[800] ">{`XYZ`}</span>
    </Box>
  );
};

export default AuthHeader;
