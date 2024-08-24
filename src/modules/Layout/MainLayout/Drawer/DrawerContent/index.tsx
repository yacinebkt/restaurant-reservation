import { Box } from '@mui/material';
import Navigation from './Navigation';

const DrawerContent = () => {
  return (
    <Box className="text-black900 flex-1 flex flex-col justify-between">
      <Navigation />
    </Box>
  );
};

export default DrawerContent;
