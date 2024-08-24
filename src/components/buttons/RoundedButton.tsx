import { LoadingButtonProps } from "@mui/lab/LoadingButton";
import { ButtonBase, alpha, useTheme } from "@mui/material";

interface InButtonProps extends LoadingButtonProps {}

const RoundedButton: React.FC<InButtonProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <ButtonBase
      component="button"
      className="rounded-full w-8 h-8 flex justify-center items-center cursor-pointer font-bold text-sm"
      sx={{
        backgroundColor: alpha(theme.palette.text.primary, 0.05),
        transition: "background-color 0.2s ease",
        "&:hover": {
          backgroundColor: alpha(theme.palette.primary.main, 0.9),
          color: alpha(theme.palette.background.default, 1),
        },
      }}
    >
      {children}
    </ButtonBase>
  );
};

export default RoundedButton;
