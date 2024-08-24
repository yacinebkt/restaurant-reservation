import CloseIcon from '@mui/icons-material/Close';
import { ButtonBase } from '@mui/material';

interface GoBackDetailsProps {
  onClick: () => void;
}

const CloseButton: React.FC<GoBackDetailsProps> = ({ onClick }) => {
  return (
    <ButtonBase
      className="p-1.5 rounded-xl hover:shadow-sm duration-300 hover:border hover:opacity-85"
      onClick={(_event) => {
        onClick();
      }}
    >
      <CloseIcon />
    </ButtonBase>
  );
};

export default CloseButton;
