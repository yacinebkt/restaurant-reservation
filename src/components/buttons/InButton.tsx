import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import { SxProps, Theme } from '@mui/material/styles';

interface InButtonProps extends LoadingButtonProps {
  textTransform?: string;
}

const InButton: React.FC<InButtonProps> = ({ textTransform = 'uppercase', sx, ...props }) => {
  const customSx = {
    ...(sx as SxProps<Theme>),
    textTransform,
  } as SxProps<Theme>;

  return (
    <LoadingButton {...props} sx={customSx}>
      {props.children}
    </LoadingButton>
  );
};

export default InButton;
