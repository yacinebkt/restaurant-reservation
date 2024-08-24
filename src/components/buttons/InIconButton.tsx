import React from "react";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

const BootstrapButton = styled(Button)(({ theme }) => ({
  width: 30,
  height: 30,
  fontSize: 20,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  padding: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: 0,
}));

const InIconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <BootstrapButton {...props} ref={ref}>
        {props.children}
      </BootstrapButton>
    );
  }
);

export default InIconButton;
