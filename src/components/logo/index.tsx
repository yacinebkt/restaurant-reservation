import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Icon from '/XYZ-fav.png';
import logo from '/XYZ-logo.png';
import { DEFAULT_PATH } from '@/config/global-config';

interface Props {
  open?: boolean;
  to?: string;
}

const Logo = ({ to, open }: Props) => (
  <Link to={!to ? DEFAULT_PATH : to}>
    <Box className="h-11 flex justify-center items-center mt-2 px-2">
      <img src={open ? logo : Icon} className="w-full h-full object-contain" />
    </Box>
  </Link>
);

export default Logo;
