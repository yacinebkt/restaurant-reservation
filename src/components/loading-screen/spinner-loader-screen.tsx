import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function SpinnerLoaderScreen() {
  return (
    <Box className="flex justify-center items-center h-[60vh]"  >
      <CircularProgress size="3rem" />
    </Box>
  );
}
