import React, { ReactNode } from "react";
import { Box, CardProps, useTheme } from "@mui/material";

interface DefaultCardProps extends CardProps {
  children?: ReactNode;
}

const ICard: React.FC<DefaultCardProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Box
      style={{
        background: theme.palette.background.paper,
      }}
      className="p-3 md:p-4 relative overflow-visible rounded-lg shadow-sm flex-1"
    >
      {children}
    </Box>
  );
};

export default ICard;
