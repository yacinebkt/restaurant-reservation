import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import { useTranslation } from "react-i18next";

interface InButtonProps extends LoadingButtonProps {
  textTransform?: string;
}

const TransitionButton: React.FC<InButtonProps> = ({
  textTransform = "uppercase",
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <LoadingButton
      {...props}
      sx={{
        textTransform: textTransform,
      }}
    >
      {t(props.children as string)}
    </LoadingButton>
  );
};

export default TransitionButton;
