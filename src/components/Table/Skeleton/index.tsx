import { Skeleton, useTheme } from "@mui/material";

const SkeletonTable = () => {
  const theme = useTheme();

  return (
    <div className="flex flex-col gap-[4px] rounded-md overflow-hidden mt-4">
      <Skeleton
        sx={{
          bgcolor:
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[700],
        }}
        variant="rectangular"
        animation="pulse"
        style={{
          width: "100%",
          height: "40px",
        }}
      />

      {Array.from({ length: 10 }, (_, index) => (
        <Skeleton
          key={index}
          sx={{
            bgcolor:
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[800],
          }}
          variant="rectangular"
          animation="pulse"

          style={{
            width: "100%",
            height: "32px",
          }}
        />
      ))}
    </div>
  );
};

export default SkeletonTable;
