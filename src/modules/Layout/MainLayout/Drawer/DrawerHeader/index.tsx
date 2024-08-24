import { useTheme } from '@mui/material/styles';
import DrawerHeaderStyled from './DrawerHeaderStyled';
import { Box } from '@mui/material';
import Logo from '@/components/logo';

interface Props {
  open: boolean;
}

const DrawerHeader = ({ open }: Props) => {
  const theme = useTheme();

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Box>
        <Logo open={open} />
      </Box>
    </DrawerHeaderStyled>
  );
};

export default DrawerHeader;
